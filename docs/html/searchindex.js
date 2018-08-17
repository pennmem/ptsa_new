Search.setIndex({docnames:["api/data","api/data/filters","api/data/readers","api/data/timeseriesx","api/extensions","api/index","development","examples/eeg","examples/getting_started","examples/index","filters","index","ramdata"],envversion:53,filenames:["api/data.rst","api/data/filters.rst","api/data/readers.rst","api/data/timeseriesx.rst","api/extensions.rst","api/index.rst","development.rst","examples/eeg.ipynb","examples/getting_started.ipynb","examples/index.rst","filters.rst","index.rst","ramdata.rst"],objects:{"ptsa.data.filters":{ButterworthFilter:[1,0,1,""],MorletWaveletFilter:[1,0,1,""],MorletWaveletFilterCpp:[1,0,1,""],ResampleFilter:[1,0,1,""]},"ptsa.data.filters.ButterworthFilter":{filter:[1,1,1,""]},"ptsa.data.filters.MorletWaveletFilter":{filter:[1,1,1,""]},"ptsa.data.filters.ResampleFilter":{filter:[1,1,1,""]},"ptsa.data.readers":{BaseEventReader:[2,0,1,""],CMLEventReader:[2,0,1,""],EEGReader:[2,0,1,""],LocReader:[2,0,1,""],TalReader:[2,0,1,""]},"ptsa.data.readers.BaseEventReader":{as_dataframe:[2,1,1,""],find_data_dir_prefix:[2,1,1,""],modify_eeg_path:[2,1,1,""],normalize_paths:[2,1,1,""],read_matlab:[2,1,1,""]},"ptsa.data.readers.CMLEventReader":{modify_eeg_path:[2,1,1,""]},"ptsa.data.readers.EEGReader":{compute_read_offsets:[2,1,1,""],read_events_data:[2,1,1,""],read_session_data:[2,1,1,""]},"ptsa.data.readers.TalReader":{from_dict:[2,1,1,""],from_records:[2,2,1,""],get_bipolar_pairs:[2,1,1,""],get_monopolar_channels:[2,1,1,""],mkdtype:[2,2,1,""]},"ptsa.data.readers.edf":{edf:[2,3,0,"-"]},"ptsa.data.readers.edf.edf":{EDFRawReader:[2,0,1,""]},"ptsa.data.readers.edf.edf.EDFRawReader":{read_file:[2,1,1,""]},"ptsa.data.timeseries":{TimeSeries:[3,0,1,""]},"ptsa.data.timeseries.TimeSeries":{add_mirror_buffer:[3,1,1,""],append:[3,1,1,""],baseline_corrected:[3,1,1,""],create:[3,2,1,""],filter_with:[3,1,1,""],filtered:[3,1,1,""],from_hdf:[3,2,1,""],remove_buffer:[3,1,1,""],resampled:[3,1,1,""],to_hdf:[3,1,1,""]},"ptsa.extensions":{circular_stat:[4,3,0,"-"],morlet:[4,3,0,"-"]},"ptsa.extensions.circular_stat":{circ_diff:[4,4,1,""],circ_diff_par:[4,4,1,""],circ_diff_time_bins:[4,4,1,""],circ_mean:[4,4,1,""],compute_f_stat:[4,4,1,""],compute_z_scores:[4,4,1,""],single_trial_ppc_all_features:[4,4,1,""]},"ptsa.extensions.morlet":{ChannelInfo:[4,0,1,""],EDFFile:[4,0,1,""]},"ptsa.extensions.morlet.EDFFile":{__init__:[4,1,1,""],get_channel_info:[4,1,1,""],get_channel_numbers:[4,1,1,""],get_samplerate:[4,1,1,""],read_samples:[4,1,1,""]},"ptsa.filt":{buttfilt:[5,4,1,""]},"ptsa.helper":{cart2pol:[5,4,1,""],centered:[5,4,1,""],deg2rad:[5,4,1,""],getargspec:[5,4,1,""],next_pow2:[5,4,1,""],pad_to_next_pow2:[5,4,1,""],pol2cart:[5,4,1,""],rad2deg:[5,4,1,""],reshape_from_2d:[5,4,1,""],reshape_to_2d:[5,4,1,""]},ptsa:{filt:[5,3,0,"-"],helper:[5,3,0,"-"]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","classmethod","Python class method"],"3":["py","module","Python module"],"4":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:method","2":"py:classmethod","3":"py:module","4":"py:function"},terms:{"0hz":8,"0x11596a7d0":7,"0x1162587d0":7,"0x1162bfad0":7,"0x1167ecd10":7,"0x116b1cbd0":7,"0x2b7884cc0518":8,"0x2b78be4cc908":8,"0x2b78be58e320":8,"0x2b78be5e9a20":8,"0x2b78befd2d68":8,"0x2b78bfcc0b00":8,"0x2b78bfeb2ba8":8,"0x2b78c8143400":8,"0x2b78c92c8940":8,"0x2b78c94bc9e8":8,"100s":8,"10hz":8,"200s":8,"2hz":8,"2nd":5,"447679e":8,"500s":8,"6hz":8,"821934e":8,"830037e":8,"874488e":8,"boolean":[2,4],"byte":[2,3],"case":[2,12],"class":[1,2,3,4,5,7,8,12],"default":[1,2,3,5,12],"float":[1,2,3,4,8],"function":[3,5,6,8,10,11,12],"import":[7,8,10,12],"int":[1,2,3,4,5],"long":8,"new":[1,2,3,5,6,8,11],"null":3,"return":[1,2,3,4,5,7,8,12],"true":[1,2,5,7,8,12],"try":[2,8],"while":12,For:[8,10,12],NOT:12,Not:3,One:2,The:[1,2,3,4,7,8,9,11,12],There:7,These:[4,7],Use:6,Will:7,With:[7,12],_____:12,__init__:[3,4],_center:5,_filenam:2,about:[7,8,12],abov:12,acceler:4,access:12,account:2,across:7,actual:[2,8,12],adapt:5,add:[3,7],add_mirror_buff:3,added:[2,3,8,12],adding:[6,8],addit:[1,7,11],adjac:7,advantag:4,after:[1,10,12],afterward:7,agagcl:4,aggregate_valu:[7,12],align:7,all:[2,3,6,7,8,10,11,12],all_ev:12,allow:12,along:[3,5],alreadi:6,also:[6,7,8,9,10,12],altern:[10,11],although:8,alwai:12,amount:6,anaconda3:8,analysi:[8,12],angl:[4,5],angular:4,ani:[4,8,12],anoth:[2,3,8,10],anova:4,api:11,append:3,appli:1,applic:8,appropri:10,arbitrari:3,area:12,arg:[2,5],argument:[1,2,3,5,12],around:[3,4,7],arr:5,arrai:[1,2,3,4,5,7,8,10,11,12],artifact:7,as_datafram:2,assertionerror:3,associ:[7,12],assum:[1,5,7],attach:2,attempt:3,attr:[3,7],attribut:[4,7,12],automat:2,avail:[9,12],averag:[3,4,7],avgsurf:12,awkward:3,axes:7,axi:[1,5],b_filter:10,back:5,bad:2,band:10,bandstop:8,base64:3,base:[2,3],base_e_read:12,base_eeg:[10,12],base_ev:12,base_rang:3,baseeventread:[2,7],baselin:3,baseline_correct:3,baserawread:7,basic:[8,12],bdf:[2,4],bear:12,becaus:[3,8,11],becom:8,been:2,befor:[6,10],begin:[3,7],behavior:7,belong:4,below:[9,10],besid:11,best:12,between:[7,8],beyond:4,bin:4,binari:[2,3,7],bipolar:[7,10,12],bipolar_eeg:7,bipolar_pair:[7,10,12],blogspot:5,bool:[1,2,3],both:[1,3,8],bp_eeg:10,bp_eegs_filt:10,bp_eegs_filtered_1:10,bpdistanc:12,bptalstruct:[2,7],branch:6,broadcast:8,brodmann:12,buffer:[2,3,7,12],buffer_offset:2,buffer_tim:[2,7,12],build:[11,12],built:12,builtin:5,butterworth:[1,3,5,10],butterworthfilt:1,butterwoth:1,buttfilt:5,bw001:7,bw001_24jul02_0001:7,bw001_event:7,bw001_tallocs_database_bipol:7,c_diff:4,calcul:4,call:[10,11,12],callabl:5,can:[2,3,4,5,7,8,12],cannot:8,care:8,cart2pol:5,cartesian:5,categori:11,catfr:2,caus:[2,3],cdiff_mean:4,center:5,cerebrum:12,certain:7,ch0:[2,7],ch1:[2,7],chang:[1,2,3],channel:[2,4,7,12],channel_nam:4,channelinfo:4,charact:7,cheatsheet:6,check:[8,12],choic:10,chunk:2,circ_diff:4,circ_diff_par:4,circ_diff_time_bin:4,circ_mean:4,circular:4,circular_stat:5,classmethod:[2,3],clear:8,clearli:8,click:8,clone:11,close:8,cml:[7,12],cmleventread:[2,7],cmlreader:12,code:[2,6,12],collaps:12,color:8,column:[2,12],com:[5,11],command:6,commit:6,common:2,common_root:[2,7],compar:4,comparison:8,compat:6,complex:[1,4],complic:3,compon:[7,10],compos:8,comput:[1,4,10,11,12],compute_f_stat:4,compute_read_offset:2,compute_z_scor:4,concaten:[3,7,12],configur:12,conform:1,consid:8,consider:7,consist:2,construct:[1,2,7,8,12],constructor:[3,12],contact:[2,12],contact_dict:2,contain:[1,2,3,5,7,8,10,12],contamin:7,context:8,conveni:[7,8,10,11,12],convert:[2,5,12],convolut:4,coord:[3,7,8],coordin:[3,5,7],copi:2,cord:12,core:2,correct:3,correspond:[5,7,8],correspong:2,could:[7,8,12],cpu:1,creat:[3,7,10,12],crteat:10,current:2,current_process:7,cycl:8,cylindr:5,darpa:12,dat:5,data1:[2,8,12],data2:[2,8,12],data3:8,data:[1,2,3,4,5,6,9,10,11],dataarrai:[3,7,10,11],databas:2,datafil:2,datafram:2,dataroot:2,deal:3,decompos:10,decomposit:[1,4],defin:[10,11],definit:7,deg2rad:5,degre:5,depend:3,deprec:12,describ:[1,12],desir:3,detail:3,determin:[2,12],develop:11,dict:[2,3],dictionari:[2,3],did:7,differ:[2,4,7,10],dig_max:4,dig_min:4,digit:4,dim:[3,8],dimens:[1,2,3,4,5,7,8],dimension:7,dir:2,dir_prefix:2,directli:6,directori:[2,7,12],discuss:12,disk:3,divid:4,document:3,doe:[5,11],doing:4,don:6,door:12,doubl:8,downsampl:[1,8],drop:[2,8],dshape:5,dtype:[2,3,4,7,12],due:7,durat:3,e_path:12,each:[2,3,4,7,12],earli:8,early_t:8,easier:5,easili:8,ecog:7,edf:[2,5],edffil:4,edflib:4,edfrawread:[2,4],edg:8,eeg:[2,4,9,10],eeg_fname_replace_pattern:[2,12],eeg_fname_search_patt:2,eeg_fname_search_pattern:[2,12],eeg_read:12,eegeffset:2,eegfil:[2,7,12],eegoffset:[7,12],eegread:[2,7],effect:8,effici:12,either:[2,4],electrod:[4,7,10],element:[2,5],elimin:[3,7,12],eliminate_events_with_no_eeg:[2,12],eliminate_nan:2,empti:[2,4],enam:12,encod:3,end:[2,3,7,8],end_offset:2,end_tim:[2,7,12],ensur:12,entir:2,entri:[2,3,12],env:[7,8],envelop:4,ephi:7,error:8,etc:[2,4,11,12],etyp:12,european:2,even:[8,12],event:[2,9,10,11],event_path:12,events_all_ltp093:7,everi:[2,8],exact:8,exactli:12,exampl:[2,4,7,8,10,11,12],except:[1,8],exist:6,exp_vers:7,expect:12,experi:[7,12],experiment:12,explicitli:2,express:2,expvers:12,exract:2,extend:8,extens:[2,5],extra:[2,12],extract:12,f_stat:4,facilit:[11,12],fact:[10,12],factori:3,fals:[1,2,3,5,7,12],famili:4,fastpath:3,featur:8,few:7,fftw:4,field:[2,7,12],fig:8,figsiz:8,figur:8,file:[2,3,4,7,11,12],filenam:[2,3,4,7,12],fill:4,filt:5,filt_typ:[1,3,5,8,10],filter:[0,3,4,7,11],filter_class:3,filter_with:3,filtered_data:8,find:7,find_data_dir_prefix:2,find_dir_prefix:2,first:[4,7,8,10,12],fix:7,flag:[1,2],flat:2,flat_df:2,flexibl:8,float64:[7,8],fname:8,focu:8,folder:2,follow:[2,4,7,8,11,12],form:10,format:[2,3,4,7,8,11,12],found:7,four:5,fr1:[7,12],framework:12,freq1:8,freq2:8,freq3:8,freq:1,freq_rang:[1,3,5,10],frequenc:[1,3,4,8,10],frequency1:8,frequency2:8,from:[1,2,3,4,5,8,9,10,12],from_dict:2,from_hdf:[3,8],from_record:2,fstat:4,full:[2,3],further:11,futur:[6,12],gain:7,gaussian:4,gener:[5,12],get:[2,5,7,9,10,12],get_bipolar_pair:[2,7,12],get_channel_info:4,get_channel_numb:4,get_monopolar_channel:[2,7,12],get_sampler:4,get_valu:7,getargspec:5,git:11,github:11,give:[7,8],given:[2,4,5,8],got:8,grai:12,greatest_environ:8,grpname:12,guidelin:11,gyru:12,h5netcdf:11,h5py:[3,8],half:2,hand:12,handl:[2,3],has:[2,5,7,8,11,12],have:[2,4,7,10,12],hdf5:[3,8],heavili:7,height:5,help:7,helper:2,here:[8,9,10,12],high:8,high_freq:4,higher:[4,8],highest:8,highpass:8,home1:8,how:[2,8,12],howev:[7,8,12],hte:2,html:5,http:[5,11],ident:4,ignor:3,illustr:8,implement:2,includ:[2,4,6],inclus:3,index:[2,10,12],indexread:7,indic:[1,2,4,12],individu:[2,12],indivsurf:12,inform:[2,4,7],infrom:12,inherit:8,initi:[10,12],inlin:7,input:[1,2,5,10,11],insid:10,inspect:5,instal:8,instanc:[3,8,10,12],instead:[6,8,12],instruct:12,int16:7,integ:2,interact:11,interest:7,interfac:[4,7],intern:[3,12],interv:12,introduct:11,intrus:[7,12],invari:2,involv:[3,6],is_stim:7,isstim:12,issu:2,item:[7,12],item_nam:7,item_num:7,itemno:[7,12],its:[8,10],itself:8,job:10,join:2,json:[2,7,12],json_dict:2,jsonindexread:7,juic:7,jupyt:9,just:3,kbyanc:5,keep:8,kei:2,kept:12,keyword:[1,2,3,12],khz:3,know:[2,12],kwarg:[2,3],lab:[7,12],label:[2,3,4,7,8],larg:6,last:[5,8],late:8,late_t:8,later:8,latest:11,launch:1,lead:[2,3],learn:[8,11],least:3,left:12,legaci:[3,6],legend:8,len:4,length:[2,3,4],leond:7,let:[7,10,12],level:4,lib:[7,8],librari:[4,11],like:[1,2,3,4,7,8,11,12],line2d:[7,8],line:[6,7,8],linspac:8,list:[1,2,4,5,7,12],liter:7,liyuxuan:8,load:[3,7,12],lobe:12,loc1:12,loc2:12,loc3:12,loc4:12,loc5:12,loc6:12,local:2,locat:[7,12],locread:2,loctag:12,look:[7,11,12],loop_axi:3,lose:8,losspass:8,low:[4,8],low_freq:4,lower:8,lowest:8,lowpass:8,lpog10:12,lpog11:12,lpog12:12,lpog13:12,lpog14:12,lpog1:12,lpog2:12,lpog3:12,lpog4:12,lpog5:12,lpog6:12,lpog7:12,lpog9:12,lpog:12,lsag:12,ltp:7,m2b:10,magnitud:4,mai:[3,5,10,12],main:[7,11],make:[6,10,11],mani:[8,12],manipul:[8,12],mark:[6,7],mask:2,master:6,mat:[2,7,12],match:12,matlab:[2,12],matplotlib:[7,8],matrix:4,matter:[10,12],max_freq:1,maximum:4,mean:[2,3,7,8],memori:[7,12],merg:6,metadata:3,meth:2,method:[2,5,7,8,12],mid:8,middl:[8,12],might:[2,7],millisecond:3,min_freq:1,miniconda2:7,minimum:4,mirror:3,miss:2,mkdtype:2,mode:3,modern:6,modifi:[6,11],modify_eeg_path:2,modul:[5,12],mono:12,monopolar:[2,10,12],monopolar_channel:12,monopolartobipolarmapp:7,montag:[7,12],more:[5,7,8],morlet:[1,5],morletwaveletfilt:1,morletwaveletfiltercpp:[1,4],morletwavelettransform:4,most:[8,12],mount:[2,12],movement:7,msoffset:[7,12],mstime:[7,12],much:[5,12],multi:[3,7],multidimension:8,multiphasevec:4,muscl:7,must:[2,3,4,6],my_ts_data:8,n_bp:4,n_freq:4,n_perm:4,n_thread:4,name:[1,2,3,4,5,8,12],nan:[2,12],ncol:8,ndarrai:[1,2],need:[3,8,11,12],nest:[2,5],netcdf4:11,newsiz:5,next:[5,7,12],next_pow2:5,no_reref:12,nois:[7,8],noisi:8,non:[2,8],none:[2,3,4,5],nonreref:2,noreref:[2,7,12],normal:12,normalize_eeg_path:[2,12],normalize_path:2,note:[2,3,5,7,8],notebook:[7,8,9],notic:10,now:[1,3,12],num_mp_proc:3,num_point:8,number:[1,2,4,7,12],numpi:[2,3,5,7,8,11,12],oar:12,obj:5,object:[1,2,3,4,5,7,10,11,12],observ:[4,8],obtain:12,occur:3,occurr:2,offer:8,offset:[2,4,12],older:3,ommit:12,onc:[7,10],one:[2,3,4,7,8,10,12],ones:[2,6],onli:[4,7,8,12],onset:12,open:[2,11],oper:[8,10,11],operand:8,option:[5,6],order:[1,2,3,4,5,8,10,12],ordereddict:7,organ:12,origianl:8,origin:[1,2,3,8],other:[1,3,7,8,12],our:[7,8,12],ourselv:7,out:[1,7,10,12],output:[1,10,11,12],output_dim:1,outsample_featur:4,outsid:8,outsourc:12,over:[1,4,7,8],overlap:8,overrid:3,own:[3,8],packag:[7,8,10,11],pad:5,pad_to_next_pow2:5,pad_to_pow2:3,page:9,pair:[2,7,10,12],pairs_path:7,pairwis:10,panda:2,parallel:[1,4],param:[2,7],paramet:[1,2,3,4,5,7,10,12],paramsread:7,part:4,partial:2,particular:12,partit:4,pass:[3,7,10,12],path:[2,3,7],pattern:2,peak:4,pennmem:11,per:3,perform:[4,7,8,11],period:[2,7],perserv:8,persist:7,phase:[1,4],phase_diff:4,phys_max:4,phys_min:4,physdimens:4,physic:4,pickl:3,place:[2,8],plot:[7,8],plt:[7,8],point:[2,3,4,7,8,12],pol2cart:5,polar:5,pool:1,popul:12,portion:5,possibl:11,pow_mat:4,power:[1,5],ppc_output:4,precis:8,prefer:10,prefilt:4,prefix:2,present:[2,3,6],prevent:3,previou:12,print:[1,7,8,12],procedur:12,process:[3,6,12],produc:8,project:12,proper:1,properti:12,protocol:[7,12],provid:[4,7,11,12],ptsa:[1,2,3,5,6,7,9,10,12],ptsa_new:11,pull:6,purpos:[7,8],pyplot:[7,8],pytest:6,python2:7,python3:8,python:[3,5,6,12],queri:12,quickli:4,r1060m_event:2,r1111m:[7,12],r1111m_event:12,r1111m_fr1_0_22jan16_1638:12,r1111m_fr1_2_26jan16_1408:7,r1111m_fr1_3_02feb16_1528:12,r1111m_tallocs_database_bipol:12,rad2deg:5,radian:5,radii:5,radiu:5,rais:3,ram:11,ram_fr1:[2,12],random:8,rang:[1,3,7,8,10],rate:[1,2,3,8],rather:[7,11],rawbinwrapp:2,read:[2,4,8,9,11],read_events_data:2,read_fil:2,read_matlab:2,read_sampl:4,read_session_data:2,read_siz:2,readabl:3,reader:[0,4,5,7,11,12],readi:12,real:8,realli:7,reason:3,rec:12,recal:[4,7,8,12],recarrai:[2,3,7,12],recommend:11,record:[2,4,7,12],rectim:[7,12],recurs:2,refer:[11,12],referenc:7,rel:[7,12],relationship:8,relev:8,remov:[1,2,3,7,10,12],remove_bad_ev:2,remove_buff:[3,7],renam:1,repalc:2,replac:[2,7,12],repositori:11,repres:[2,11],represent:4,request:[3,6],requir:[3,6],reref:[2,12],rereferenc:7,resampl:[1,3],resampled_r:[3,8],resamplefilt:1,resampler:1,reset:3,reshap:[4,5],reshape_from_2d:5,reshape_to_2d:5,result:[3,4,8,10],retriev:7,reus:1,rhino:[2,7],rhino_root:[7,12],root:2,round:[1,4],round_to_original_timepoint:1,run:[6,10],runner:6,runtimewarn:7,s256:[7,12],same:[1,2,4,8,12],sampl:[1,2,3,4,8],sample_freq:4,sample_r:[5,8],sampler:[3,7,8],save:3,scalar:2,scalp:7,scalp_ev:2,scheme:2,scipi:[5,11],screen:12,search:2,second:[2,3,4,7,8,12],section:[8,12],see:[3,5,8,12],seem:7,segment:12,sel:[7,8],select:[8,12],self:2,semi:2,sentinel:12,separ:6,seri:[1,2,3,8],serial:3,serialpo:[7,12],sess_start:7,session:[2,7,12],session_dataroot:2,set:[1,2,7,10,12],set_xlabel:8,set_ylabel:8,setup:11,sever:11,shape:[4,8],sharei:8,sharex:8,should:[1,2,3,4,7,8],show:[8,10],shz:8,side:4,signal:[2,4,5,7,8,10,11,12],signal_len:4,signaltool:5,significantli:11,simpl:10,simpli:8,simplifi:11,sin:8,sinc:[8,12],singl:12,single_trial_ppc_all_featur:4,sinunoid:8,sinusoid:8,site:[7,8],size:5,slice:5,slightli:4,slow:6,smooth:11,smp_in_datarecord:4,smp_in_fil:4,some:[3,6,7,12],someth:10,sometim:8,sort:12,specif:[5,7,8,11,12],specifi:[2,3,4,5,8,10,12],spectra:1,speed:[4,7],stack:8,stand:12,star:7,start:[2,3,9,10,12],start_offset:2,start_tim:[2,7,12],statist:11,step:[3,11],stim_list:7,stim_param:[2,7],stimamp:12,stimanod:12,stimanodetag:12,stimcathod:12,stimcathodetag:12,stimlist:12,stimloc:12,stop:[1,3,8,10,12],store:[2,4,7,12],str:[1,2,3,4,8],string:[1,7],struct:2,struct_nam:2,struct_typ:[2,12],structur:[2,12],subclass:[3,7,11],subfield:2,subject:[7,12],submit:6,subplot:8,subsequ:12,subset:8,subtract:[2,3,8],successfulli:2,suffer:8,suffix:7,sum:8,support:5,suppos:8,swig:11,syntax:[10,12],system:7,tagnam:12,take:[2,4,7,10,11],tal:[2,7,12],tal_path:12,tal_read:[7,12],tal_struct:12,talread:[2,7],task_ev:7,technic:8,tell:7,tempor:12,test:4,text:8,than:[3,7,8,11],thei:[5,6,9,12],them:[2,7,8],therefor:[7,8],theta:5,theta_avg_non_recal:4,theta_avg_recal:4,theta_sum_non_recal:4,theta_sum_recal:4,thi:[2,3,4,5,6,7,8,10,12],thin:3,thing:[3,4,5,7,8],those:12,though:[8,12],thread:[1,4],three:7,through:8,thu:[4,8],time:[1,2,3,7,8],time_axi:1,time_axis_index:1,time_axis_nam:1,time_seri:[1,7,10],timepoint:[1,8],timeseir:8,timeseri:[0,1,2,5,7,9,11],timeserid:8,timeseriesx:[1,7,10,12],timestamp:8,tip:6,to_hdf:[3,8],togeth:8,tool:[11,12],top:11,total:3,track:[8,12],transduc:4,transform:[1,4,7],transformed_sign:4,transpos:8,truck:12,ts_transpos:8,tupl:[2,3,5],tutori:11,two:[2,4,5,7,8,10,12],txt:7,tyep:2,type:[1,2,3,4,5,7,10,12],typeerror:3,typic:12,under:[2,7],underli:8,undesir:8,unfilt:8,unicod:3,uniform:8,union:2,unit:[3,4,7],unlik:5,unmatch:8,unpack:2,unwant:10,updat:8,upsampl:1,use:[1,2,3,6,7,10,11,12],use_reref_eeg:[2,7],used:[2,3,8,11,12],useful:[8,12],user:[2,7,12],userwarn:8,uses:[3,4,6,12],using:[2,3,4,7,8,9,11],usual:7,util:[1,4,12],v_1:12,valid:[3,12],valu:[3,4,5,8,12],vararg:5,vari:8,variabl:4,varianc:4,variou:[11,12],varkw:5,vector:4,verbos:1,veri:8,version:[1,3,5,8,11,12],versionchang:1,via:11,view:[7,12],visual:8,voltag:7,volum:[7,12],vstack:8,wai:[10,11,12],walk:8,want:[7,8,10,11,12],warn:[7,8],wavelet:[1,4,10],weight:4,well:8,were:12,what:[8,12],when:[1,2,3,4,5,7,12],where:[2,4],whether:[2,12],which:[2,3,4,5,7,12],whose:2,width:[1,4],window:3,wing:12,without:[2,8,12],word:[7,12],work:[3,9,12],worth:2,would:12,wouldn:8,wrapper:[3,4,5,8],write:[3,6,11],xarrai:[3,7,8,11],xrai:[10,12],ylim:8,you:[2,3,7,10,11,12],your:[2,10],zero:[5,8],zoom:8},titles:["ptsa.data","Filters","Readers","TimeSeries","Extension Modules","API Reference","Development guidelines","Reading EEG Data from events","Getting started with timeseries","Examples","Filtering Time Series","PTSA - EEG Time Series Analysis in Python","Interacting with RAM Data"],titleterms:{"new":7,For:11,There:8,analysi:11,api:5,baseeventread:12,binari:11,built:11,butterworthfilt:10,circular_stat:4,cmleventread:12,compon:8,conda:11,content:11,coordin:8,creat:8,data:[0,7,8,12],depend:11,develop:6,differ:8,each:8,edf:4,eeg:[7,11,12],eegread:12,electrod:12,event:[7,12],exampl:9,extens:4,filter:[1,5,8,10],find:12,from:[7,11],get:8,guidelin:6,have:8,helper:5,index:8,inform:12,instal:11,interact:12,jsonindexread:12,let:8,load:8,ltpfr2:7,ltpfr:7,match:8,modul:4,monopolartobipolarmapp:10,morlet:4,netcdf:11,now:8,object:8,old:7,option:11,out:8,path:12,pre:11,ptsa:[0,4,8,11],pyfr:7,python:11,ram:[7,12],read:[7,12],reader:2,readi:8,refer:5,resampl:8,roll:8,save:8,seri:[10,11,12],some:8,sourc:11,start:8,talread:12,test:6,three:8,time:[10,11,12],timeseri:[3,8],use:8,using:12,you:8,your:8}})