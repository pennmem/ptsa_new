from contextlib import closing
import logging
import os.path as osp
import warnings

import numpy as np

from ptsa.data.readers import BaseRawReader
from ptsa.extensions.edf import EDFFile

logger = logging.getLogger(__name__)
logger.addHandler(logging.NullHandler())


class EDFRawReader(BaseRawReader):
    """Reads EEG data stored in the European Data Format (EDF/BDF, EDF+/BDF+
    formats).

    Keyword arguments
    -----------------
    dataroot : str
        Full path to EDF/BDF/EDF+/BDF+ file (including extension).
    channels : List[Union[str, int]]
        List of channels to read.


    """
    def __init__(self, **kwargs):
        if EDFFile is None:
            raise RuntimeError(
                "The compiled self._edffile extension module was not found.\n"
                "This probably means you don't have pybind11 installed.\n"
                "Please pip install pybind11 then reinstall ptsa"
            )

        _, data_ext = osp.splitext(kwargs['dataroot'])
        if not len(data_ext):
            raise RuntimeError('Dataroot missing extension (must be supplied for EDF reader)')
        super(EDFRawReader, self).__init__(**kwargs)

    def init_params(self):
        return {'gain':1,
                'samplerate':self.samplerate()
                }


    def samplerate(self):
        with closing(EDFFile(self.dataroot)) as self._edf:
            channels = self.channels
            if not len(channels):
                channels = [n for n in range(self._edf.num_channels)]
            else:
                try:
                    channels = [int(n) for n in channels]
                except ValueError:
                    channels = self._edf.get_channel_numbers(channels)

            samplerates = [self._edf.get_samplerate(c) for c in channels]
            if not (len(np.unique(samplerates))==1):
                raise RuntimeError('Inconsistent samplerates across channels; cannot read channels simultaneously')
            return samplerates[0]

    def read_file(self, filename, channels, start_offsets=np.array([0]),
                  read_size=-1):
        """Read an EDF/BDF/EDF+/BDF+ file.

        Parameters
        ----------
        filename : str
            Path to file to read.
        channels : Union(List[int],List[str])
            Channel names or numbers to read from. If names, leading If False-like, use all channels.
        start_offsets : np.ndarray
            Indices to start reading at (*not* the actual offset times).
        read_size : int
            Number of samples to read at each offset.

        Returns
        -------
        Tuple[np.ndarray, np.ndarray]
            A tuple containing the array of EEG data and a boolean index mask
            indicating whether each offset was read successfully.

        """
        with closing(EDFFile(self.dataroot)) as self._edf:

            if not len(channels):
                indexes = channels = [n for n in range(self._edf.num_channels)]
                labels = [self._edf.get_channel_info(c).label for c in channels]
            else:
                try:
                    channels = [int(c) for c in channels]
                    indexes = channels
                    labels = [self._edf.get_channel_info(c).label for c in channels]
                except ValueError:
                    channels = [c for c in channels]
                    indexes = self._edf.get_channel_numbers(channels)
                    labels = channels


            # Read all data
            if read_size < 0:
                if len(start_offsets) > 1:
                    msg = "start_offsets given when read_size implies reading all data"
                    warnings.warn(msg, UserWarning)
                data = self._edf.read_samples(channels, self._edf.num_samples)
                self.read_size = int(self._edf.num_samples)
                data = data[:,None,:]
                read_ok_mask = np.ones((len(channels), 1), dtype=bool)

            # Read epochs
            else:
                data = np.empty((len(channels), len(start_offsets), read_size),
                                dtype=np.float)
                data.fill(np.nan)
                read_ok_mask = np.ones((len(channels), len(start_offsets)),
                                       dtype=bool)

                for i, offset in enumerate(start_offsets):
                    if offset < 0:
                        logger.warning("Cannot read negative offset %d", offset)
                        read_ok_mask[:, i] = False
                        continue

                    samples = self._edf.read_samples(channels, read_size, offset=offset)
                    if samples.shape[1] == read_size:
                        data[:, i, :] = samples
                    else:
                        logger.warning("Cannot read full chunk of data for offset %d... probably end of file", offset)
                        read_ok_mask[:, i] = False

            self.channels = np.rec.array(list(zip(indexes,labels)),dtype=[('index',int),('label','S17')])
            return data, read_ok_mask


if __name__ == "__main__": # pragma: no cover
    logger.addHandler(logging.StreamHandler())
    fname = osp.expanduser("/Volumes/rhino_root/data/eeg/eeg/scalp/ltp/ltpFR2/LTP375/session_0/eeg/LTP375_session_0.bdf")

    reader = EDFRawReader(dataroot=fname)
    data, mask = reader.read_file(fname, [], read_size=1024, start_offsets=np.array([0, 1024, 2048]))
    print(data)
