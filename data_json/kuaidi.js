const a1 = [ //品牌列表
  {id:'0',key:'ht', name:'百世快递', en_name:'ht',tel:'95320',href:'https://img.kuaidihelp.com/brand_logo/icon_ht.png'},
{id:'1',key:'jd', name:'京东快递', en_name:'jd',tel:'400-606-5500',href:'https://img.kuaidihelp.com/brand_logo/icon_jd.png?time=1572938220'},
{id:'2',key:'jj', name:'佳吉快运', en_name:'jj',tel:'400-820-5566',href:'https://img.kuaidihelp.com/brand_logo/icon_jj.png'},
{id:'3',key:'jy', name:'佳怡物流', en_name:'jy',tel:'400-631-9999',href:'https://img.kuaidihelp.com/brand_logo/icon_jy.png'},
{id:'4',key:'kk', name:'京广速递', en_name:'kk',tel:'0769-88629888',href:'https://img.kuaidihelp.com/brand_logo/icon_kk.png'},
{id:'5',key:'lb', name:'龙邦快运', en_name:'lb',tel:'021-59218889',href:'https://img.kuaidihelp.com/brand_logo/icon_lb.png'},
{id:'6',key:'lht', name:'联昊通速递 ', en_name:'lht',tel:'0769-88620000',href:'https://img.kuaidihelp.com/brand_logo/icon_lht.png'},
{id:'7',key:'se', name:'速尔快递', en_name:'se',tel:'400-158-9888',href:'https://img.kuaidihelp.com/brand_logo/icon_se.png'},
{id:'8',key:'sto', name:'申通快递', en_name:'sto',tel:'95543',href:'https://img.kuaidihelp.com/brand_logo/icon_sto.png'},
{id:'9',key:'wx', name:'万象物流', en_name:'wx',tel:'400-820-8088',href:'https://img.kuaidihelp.com/brand_logo/icon_wx.png'},
{id:'10',key:'xb', name:'新邦物流', en_name:'xb',tel:'4008-000-222',href:'https://img.kuaidihelp.com/brand_logo/icon_xb.png'},
{id:'11',key:'yc', name:'远成物流', en_name:'yc',tel:'400-820-1646',href:'https://img.kuaidihelp.com/brand_logo/icon_yc.png'},
{id:'12',key:'yd', name:'韵达快递', en_name:'yd',tel:'95546',href:'https://img.kuaidihelp.com/brand_logo/icon_yd.png'},
{id:'13',key:'ys', name:'优速快递', en_name:'ys',tel:'400-1111-119',href:'https://img.kuaidihelp.com/brand_logo/icon_ys.png'},
{id:'14',key:'yt', name:'圆通速递', en_name:'yt',tel:'95554',href:'https://img.kuaidihelp.com/brand_logo/icon_yt.png'},
{id:'15',key:'zt', name:'中通快递', en_name:'zt',tel:'95311',href:'https://img.kuaidihelp.com/brand_logo/icon_zt.png'},
{id:'16',key:'af', name:'亚风快运', en_name:'af',tel:'4001-000-002',href:'https://img.kuaidihelp.com/brand_logo/icon_af.png'},
{id:'17',key:'qy', name:'全一快递', en_name:'qy',tel:'400-663-1111',href:'https://img.kuaidihelp.com/brand_logo/icon_qy.png'},
{id:'18',key:'tt', name:'天天快递', en_name:'tt',tel:'400-188-8888',href:'https://img.kuaidihelp.com/brand_logo/icon_tt.png'},
{id:'19',key:'ems', name:'EMS', en_name:'ems',tel:'11183',href:'https://img.kuaidihelp.com/brand_logo/icon_ems.png'},
{id:'20',key:'zjs', name:'宅急送', en_name:'zjs',tel:'400-6789-000',href:'https://img.kuaidihelp.com/brand_logo/icon_zjs.png'},
{id:'21',key:'fedex', name:'中国联邦快递', en_name:'fedex',tel:'400-889-1888',href:'https://img.kuaidihelp.com/brand_logo/icon_fedex.png'},
{id:'22',key:'dhl', name:'dhl中国', en_name:'dhl',tel:'800-810-8000',href:'https://img.kuaidihelp.com/brand_logo/icon_dhl.png'},
{id:'23',key:'zy', name:'增益速递', en_name:'zy',tel:'4008-456-789',href:'https://img.kuaidihelp.com/brand_logo/icon_zy.png'},
{id:'24',key:'dp', name:'德邦快递', en_name:'dp',tel:'95353',href:'https://img.kuaidihelp.com/brand_logo/icon_dp.png'},
{id:'25',key:'rrs', name:'日日顺物流', en_name:'rrs',tel:'400-999-9999',href:'https://img.kuaidihelp.com/brand_logo/icon_rrs.png'},
{id:'26',key:'hmj', name:'黄马甲物流', en_name:'hmj',tel:'029-96128',href:'https://img.kuaidihelp.com/brand_logo/icon_hmj.png'},
{id:'27',key:'fedexInter', name:'联邦国际', en_name:'fedexInter',tel:'400-886-1888',href:'https://img.kuaidihelp.com/brand_logo/icon_fedex.png'},
{id:'28',key:'tdhy', name:'天地华宇', en_name:'tdhy',tel:'400-808-6666',href:'https://img.kuaidihelp.com/brand_logo/icon_tdhy.png'},
{id:'29',key:'aae', name:'aae全球速递', en_name:'aae',tel:'400-610-0400',href:'https://img.kuaidihelp.com/brand_logo/icon_aae.png'},
{id:'30',key:'aol', name:'aol澳通速递', en_name:'aol',tel:'0424047888',href:'https://img.kuaidihelp.com/brand_logo/icon_aol.png'},
{id:'31',key:'pj', name:'品骏（唯品会）', en_name:'pj',tel:'400-9789-888',href:'https://img.kuaidihelp.com/brand_logo/icon_pj.png'},
{id:'32',key:'ups', name:'中国UPS', en_name:'ups',tel:'400-820-8388',href:'https://img.kuaidihelp.com/brand_logo/icon_ups.png'},
{id:'33',key:'cb', name:'晟邦物流', en_name:'cb',tel:'400-666-6066',href:'https://img.kuaidihelp.com/brand_logo/icon_cb.png'},
{id:'34',key:'bt', name:'奔腾物流', en_name:'bt',tel:'0531-89005678',href:'https://img.kuaidihelp.com/brand_logo/icon_bt.png'},
{id:'35',key:'dt', name:'大田物流', en_name:'dt',tel:'400-626-1166',href:'https://img.kuaidihelp.com/brand_logo/icon_dt.png'},
{id:'36',key:'xf', name:'信丰物流', en_name:'xf',tel:'0769-81510412',href:'https://img.kuaidihelp.com/brand_logo/icon_xf.png'},
{id:'37',key:'bdt', name:'八达通', en_name:'bdt',tel:'626-872-0293',href:'https://img.kuaidihelp.com/brand_logo/icon_bdt.png'},
{id:'38',key:'ge', name:'环球速运', en_name:'ge',tel:'',href:'https://img.kuaidihelp.com/brand_logo/icon_ge.png'},
{id:'39',key:'jde', name:'骏达快递', en_name:'jde',tel:'1-323-266-4888',href:'https://img.kuaidihelp.com/brand_logo/icon_jde.png'},
{id:'40',key:'ky', name:'跨越速运', en_name:'ky',tel:'4008-098-098',href:'https://img.kuaidihelp.com/brand_logo/icon_ky.png'},
{id:'41',key:'sh', name:'盛辉物流', en_name:'sh',tel:'4008-222222',href:'https://img.kuaidihelp.com/brand_logo/icon_sh.png'},
{id:'42',key:'wt', name:'运通速运', en_name:'wt',tel:'0769-81156999',href:'https://img.kuaidihelp.com/brand_logo/icon_wt.png'},
{id:'43',key:'xd', name:'迅达速递', en_name:'xd',tel:'（03）9544 7322/(',href:'https://img.kuaidihelp.com/brand_logo/icon_xd.png'},
{id:'44',key:'yhc', name:'1号仓', en_name:'yhc',tel:'0755-89391959',href:'https://img.kuaidihelp.com/brand_logo/icon_yhc.png'},
{id:'45',key:'cnp', name:'中邮快递', en_name:'cnp',tel:'130 007 9988 ',href:'https://img.kuaidihelp.com/brand_logo/icon_cnp.png'},
{id:'46',key:'ax', name:'安迅物流', en_name:'ax',tel:'4008179880',href:'https://img.kuaidihelp.com/brand_logo/icon_ax.png'},
{id:'47',key:'ccd', name:'次晨达物流', en_name:'ccd',tel:'0371-55002990',href:'https://img.kuaidihelp.com/brand_logo/icon_ccd.png'},
{id:'48',key:'cg', name:'程光快递', en_name:'cg',tel:'0064 9 948 2780',href:'https://img.kuaidihelp.com/brand_logo/icon_cg.png'},
{id:'49',key:'cky', name:'出口易跨境物流', en_name:'cky',tel:'4006 908 223',href:'https://img.kuaidihelp.com/brand_logo/icon_cky.png'},
{id:'50',key:'coe', name:'东方快递', en_name:'coe',tel:'+86-755-8357500',href:'https://img.kuaidihelp.com/brand_logo/icon_coe.png'},
{id:'51',key:'ct', name:'诚通物流', en_name:'ct',tel:'0371-55331001',href:'https://img.kuaidihelp.com/brand_logo/icon_ct.png'},
{id:'52',key:'yx', name:'宇鑫物流', en_name:'yx',tel:'400-106-5566',href:'https://img.kuaidihelp.com/brand_logo/icon_yx.png'},
{id:'53',key:'dby', name:'迪比翼快递', en_name:'dby',tel:'0755-8829 7707 ',href:'https://img.kuaidihelp.com/brand_logo/icon_dby.png'},
{id:'54',key:'ddw', name:'大道物流', en_name:'ddw',tel:'027-83550339',href:'https://img.kuaidihelp.com/brand_logo/icon_ddw.png'},
{id:'55',key:'df', name:'德方物流', en_name:'df',tel:'0551-65883415',href:'https://img.kuaidihelp.com/brand_logo/icon_df.png'},
{id:'56',key:'fb', name:'飞豹快运', en_name:'fb',tel:'400-000-5566',href:'https://img.kuaidihelp.com/brand_logo/icon_fb.png'},
{id:'57',key:'fd', name:'Fardar', en_name:'fd',tel:'021-39281555',href:'https://img.kuaidihelp.com/brand_logo/icon_fd.png'},
{id:'58',key:'fy', name:'飞鹰物流', en_name:'fy',tel:'0371-960065',href:'https://img.kuaidihelp.com/brand_logo/icon_fy.png'},
{id:'59',key:'gd', name:'冠达快递', en_name:'gd',tel:'400-990-0088',href:'https://img.kuaidihelp.com/brand_logo/icon_gd.png'},
{id:'60',key:'gk', name:'港快速递', en_name:'gk',tel:'400-11-33333',href:'https://img.kuaidihelp.com/brand_logo/icon_gk.png'},
{id:'61',key:'hl', name:'恒路物流', en_name:'hl',tel:'400-182-6666',href:'https://img.kuaidihelp.com/brand_logo/icon_hl.png'},
{id:'62',key:'hq', name:'华企快运', en_name:'hq',tel:'400-806-8111',href:'https://img.kuaidihelp.com/brand_logo/icon_hq.png'},
{id:'63',key:'yw', name:'燕文物流', en_name:'yw',tel:'400-108-5656',href:'https://img.kuaidihelp.com/brand_logo/icon_yw.png'},
{id:'64',key:'ydt', name:'易达通快递', en_name:'ydt',tel:'09-8388681',href:'https://img.kuaidihelp.com/brand_logo/icon_ydt.png'},
{id:'65',key:'ykm', name:'易客满', en_name:'ykm',tel:'400-086-1756',href:'https://img.kuaidihelp.com/brand_logo/icon_ykm.png'},
{id:'66',key:'yhx', name:'一号线国际速递', en_name:'yhx',tel:'1300 546 310',href:'https://img.kuaidihelp.com/brand_logo/icon_yhx.png'},
{id:'67',key:'tnt', name:'TNT', en_name:'tnt',tel:'800 820 9868',href:'https://img.kuaidihelp.com/brand_logo/icon_tnt.png'},
{id:'68',key:'jg', name:'景光物流', en_name:'jg',tel:'400-700-1682',href:'https://img.kuaidihelp.com/brand_logo/icon_jg.png'},
{id:'69',key:'jhe', name:'佳惠尔快递物流', en_name:'jhe',tel:'400-013-9908',href:'https://img.kuaidihelp.com/brand_logo/icon_jhe.png'},
{id:'70',key:'ld', name:'林道国际', en_name:'ld',tel:' 4008200112 ',href:'https://img.kuaidihelp.com/brand_logo/icon_ld.png'},
{id:'71',key:'max', name:'澳洲迈速', en_name:'max',tel:'400-080-1209',href:'https://img.kuaidihelp.com/brand_logo/icon_max.png'},
{id:'72',key:'oto', name:'中欧快运', en_name:'oto',tel:'088-188-8989',href:'https://img.kuaidihelp.com/brand_logo/icon_oto.png'},
{id:'73',key:'pad', name:'平安达腾飞快递', en_name:'pad',tel:'0769-85712366',href:'https://img.kuaidihelp.com/brand_logo/icon_pad.png'},
{id:'74',key:'ry', name:'日昱物流', en_name:'ry',tel:'4009-888-588',href:'https://img.kuaidihelp.com/brand_logo/icon_ry.png'},
{id:'75',key:'sj', name:'速捷快递', en_name:'sj',tel:'0371-66612770',href:'https://img.kuaidihelp.com/brand_logo/icon_sj.png'},
{id:'76',key:'suf', name:'速方国际物流', en_name:'suf',tel:'400-820-1220',href:'https://img.kuaidihelp.com/brand_logo/icon_suf.png'},
{id:'77',key:'cre', name:'中铁快运', en_name:'cre',tel:'95572',href:'https://img.kuaidihelp.com/brand_logo/icon_cre.png'},
{id:'78',key:'sut', name:'速通物流', en_name:'sut',tel:'400-656-1185',href:'https://img.kuaidihelp.com/brand_logo/icon_sut.png'},
{id:'79',key:'zjb', name:'宅急便', en_name:'zjb',tel:'4008-56-56-56',href:'https://img.kuaidihelp.com/brand_logo/icon_zjb.png'},
{id:'80',key:'ane', name:'安能快运', en_name:'ane',tel:'400-104-0088',href:'https://img.kuaidihelp.com/brand_logo/icon_ane.png'},
{id:'81',key:'anekd', name:'安能快递', en_name:'anekd',tel:'400-104-0088',href:'https://img.kuaidihelp.com/brand_logo/icon_ane2.png'},
{id:'82',key:'sn', name:'苏宁快递', en_name:'sn',tel:'95315',href:'https://img.kuaidihelp.com/brand_logo/icon_sn.png'},
{id:'83',key:'postx', name:'邮政小包', en_name:'postx',tel:'11185',href:'https://img.kuaidihelp.com/brand_logo/icon_post.png'},
{id:'84',key:'emsb', name:'EMS包裹', en_name:'emsb',tel:'11183',href:'https://img.kuaidihelp.com/brand_logo/icon_ems.png'},
{id:'85',key:'best', name:'百世快运', en_name:'best',tel:'400-956-5656',href:'https://img.kuaidihelp.com/brand_logo/icon_ht.png'},
{id:'86',key:'dpky', name:'德邦快运', en_name:'dpky',tel:'95353',href:'https://img.kuaidihelp.com/brand_logo/icon_dp.png'},
{id:'87',key:'post', name:'邮政包裹', en_name:'post',tel:'11185',href:'https://img.kuaidihelp.com/brand_logo/icon_post.png'},
{id:'88',key:'foc', name:'丰程物流', en_name:'foc',tel:'400-1676-555',href:'https://img.kuaidihelp.com/brand_logo/icon_foc.png'},
{id:'89',key:'yad', name:'源安达快递', en_name:'yad',tel:'0769-85157789',href:'https://img.kuaidihelp.com/brand_logo/icon_yad.png'},
{id:'90',key:'kbtc', name:'快宝同城', en_name:'kbtc',tel:'021-62153711',href:'https://img.kuaidihelp.com/brand_logo/icon_kbtc.png'},
{id:'91',key:'ljs', name:'立即送', en_name:'ljs',tel:'028-86740011',href:'https://img.kuaidihelp.com/brand_logo/icon_ljs.png'},
{id:'92',key:'otp', name:'承诺达特快', en_name:'otp',tel:'4001895554',href:'https://img.kuaidihelp.com/brand_logo/icon_otp.png'},
{id:'93',key:'yjt', name:'一键通快递', en_name:'yjt',tel:'',href:'https://img.kuaidihelp.com/brand_logo/icon_yjt.png'},
{id:'94',key:'ucs', name:'UCS合众速递', en_name:'ucs',tel:'86-24-31515566',href:'https://img.kuaidihelp.com/brand_logo/icon_ucs.png'},
{id:'95',key:'ytcnd', name:'圆通承诺达', en_name:'ytcnd',tel:'',href:'http://'},
{id:'96',key:'ydky', name:'韵达快运', en_name:'ydky',tel:'',href:'http://'},
{id:'97',key:'ztky', name:'中通快运', en_name:'ztky',tel:'95311',href:'https://img.kuaidihelp.com/brand_logo/icon_zt.png'},
{id:'98',key:'mzgj', name:'明彰国际快递', en_name:'mzgj',tel:'021-34120053',href:'https://img.kuaidihelp.com/brand_logo/icon_mzgj.png'},
{id:'99',key:'yjkd', name:'智能匹配优质快递品牌', en_name:'yjkd',tel:'',href:'https://img.kuaidihelp.com/brand_logo/icon_yjkd.png'},
{id:'100',key:'sf', name:'顺丰速运', en_name:'sf',tel:'95338',href:'https://img.kuaidihelp.com/brand_logo/icon_sf.png'},
{id:'101',key:'sfky', name:'顺丰快运', en_name:'sfky',tel:'95338',href:'https://img.kuaidihelp.com/brand_logo/icon_sfky.png'},
]