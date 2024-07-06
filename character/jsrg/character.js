const characters = {
	//起
	jsrg_liuhong: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["jsrgchaozheng", "jsrgshenchong", "jsrgjulian"],
		isZhugong: true,
		dieAudios: ["liuhong"],
	},
	jsrg_hejin: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["jsrgzhaobing", "jsrgzhuhuan", "jsrgyanhuo"],
		dieAudios: ["hejin"],
	},
	jsrg_sunjian: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["jsrgpingtao", "jsrgjuelie"],
		dieAudios: ["sunjian"],
	},
	jsrg_huangfusong: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["jsrgguanhuo", "jsrgjuxia"],
		dieAudios: ["huangfusong"],
	},
	jsrg_xushao: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["sbyingmen", "sbpingjian"],
		dieAudios: ["xushao"],
	},
	jsrg_dongbai: {
		sex: "female",
		group: "qun",
		hp: 3,
		skills: ["jsrgshichong", "jsrglianzhu"],
		dieAudios: ["dongbai"],
	},
	jsrg_qiaoxuan: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["jsrgjuezhi", "jsrgjizhao"],
	},
	jsrg_yangbiao: {
		sex: "male",
		group: "qun",
		hp: 3,
		maxHp: 4,
		skills: ["jsrgzhaohan", "jsrgrangjie", "jsrgyizheng"],
		dieAudios: ["yangbiao"],
	},
	jsrg_kongrong: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["jsrglirang", "jsrgzhengyi"],
		dieAudios: ["kongrong"],
	},
	jsrg_zhujun: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["jsrgfendi", "jsrgjuxiang"],
		dieAudios: ["zhujun"],
	},
	jsrg_liubei: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["jsrgjishan", "jsrgzhenqiao"],
		dieAudios: ["liubei"],
	},
	jsrg_wangyun: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["jsrgshelun", "jsrgfayi"],
		clans: ["太原王氏"],
		dieAudios: ["wangyun"],
	},
	jsrg_liuyan: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["xinfu_limu", "jsrgtushe", "jsrgtongjue"],
		isZhugong: true,
		dieAudios: ["liuyan"],
	},
	jsrg_caocao: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["jsrgzhenglve", "jsrghuilie"],
		dieAudios: ["caocao"],
	},
	jsrg_nanhualaoxian: {
		sex: "male",
		group: "qun",
		hp: 3,
		names: "庄|周",
		skills: ["jsrgshoushu", "jsrgxundao", "jsrglinghua"],
		dieAudios: ["nanhualaoxian"],
	},
	//承
	jsrg_sunce: {
		sex: "male",
		group: "wu",
		hp: 4,
		skills: ["jsrgduxing", "jsrgzhiheng", "jsrgzhasi", "jsrgbashi"],
		isZhugong: true,
		dieAudios: ["sunce"],
	},
	jsrg_xuyou: {
		sex: "male",
		group: "wei",
		hp: 3,
		skills: ["jsrglipan", "jsrgqingxi", "jsrgjinmie"],
		doubleGroup: ["wei", "qun"],
		dieAudios: ["xuyou"],
	},
	jsrg_lvbu: {
		sex: "male",
		group: "qun",
		hp: 5,
		skills: ["jsrgwuchang", "jsrgqingjiao", "jsrgchengxu"],
		doubleGroup: ["shu", "qun"],
		dieAudios: ["lvbu"],
	},
	jsrg_zhanghe: {
		sex: "male",
		group: "wei",
		hp: 4,
		skills: ["jsrgqiongtu", "jsrgxianzhu"],
		doubleGroup: ["wei", "qun"],
		dieAudios: ["zhanghe"],
	},
	jsrg_zoushi: {
		sex: "female",
		group: "qun",
		hp: 3,
		names: "邹|null",
		skills: ["jsrgguyin", "jsrgzhangdeng"],
		dieAudios: ["re_zoushi"]
	},
	jsrg_guanyu: {
		sex: "male",
		group: "shu",
		hp: 5,
		skills: ["jsrgguanjue", "jsrgnianen"],
		groupBorder: "wei",
		dieAudios: ["guanyu"],
	},
	jsrg_chendeng: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["jsrglunshi", "jsrgguitu"],
		dieAudios: ["chendeng"],
	},
	jsrg_zhenji: {
		sex: "female",
		group: "qun",
		hp: 3,
		skills: ["jsrgjixiang", "jsrgchengxian"],
		dieAudios: ["zhenji"],
	},
	jsrg_zhangliao: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["jsrgzhengbing", "jsrgtuwei"],
		doubleGroup: ["wei", "qun"],
		dieAudios: ["zhangliao"],
	},
	jsrg_xugong: {
		sex: "male",
		group: "wu",
		hp: 3,
		skills: ["jsrgbiaozhao", "jsrgyechou"],
		dieAudios: ["xugong"],
	},
	jsrg_chunyuqiong: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["jsrgcangchu", "jsrgshishou"],
		dieAudios: ["chunyuqiong"],
	},
	//转
	jsrg_guojia: {
		sex: "male",
		group: "wei",
		hp: 3,
		skills: ["jsrgqingzi", "jsrgdingce", "jsrgzhenfeng"],
		dieAudios: ["guojia"],
	},
	jsrg_zhangfei: {
		sex: "male",
		group: "shu",
		hp: 5,
		skills: ["jsrgbaohe", "jsrgxushi"],
		dieAudios: ["zhangfei"],
	},
	jsrg_machao: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["jsrgzhuiming", "mashu"],
		dieAudios: ["machao"],
	},
	jsrg_lougui: {
		sex: "male",
		group: "wei",
		hp: 3,
		skills: ["jsrgshacheng", "jsrgninghan"],
	},
	jsrg_zhangren: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["jsrgfuni", "jsrgchuanxin"],
		dieAudios: ["zhangren"],
	},
	jsrg_huangzhong: {
		sex: "male",
		group: "shu",
		hp: 4,
		skills: ["jsrgcuifeng", "jsrgdengnan"],
		dieAudios: ["huangzhong"],
	},
	jsrg_xiahourong: {
		sex: "male",
		group: "wei",
		hp: 4,
		names: "夏侯|荣",
		skills: ["jsrgfenjian"],
	},
	jsrg_sunshangxiang: {
		sex: "female",
		group: "wu",
		hp: 3,
		skills: ["jsrgguiji", "jsrgjiaohao"],
		dieAudios: ["sunshangxiang"],
	},
	jsrg_pangtong: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["jsrgmanjuan", "jsrgyangming"],
		dieAudios: ["pangtong"],
	},
	jsrg_hansui: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["jsrgniluan", "jsrghuchou", "jsrgjiemeng"],
		isZhugong: true,
		dieAudios: ["hansui"],
	},
	jsrg_zhangchu: {
		sex: "female",
		group: "qun",
		hp: 3,
		skills: ["jsrghuozhong", "jsrgrihui"],
		dieAudios: ["zhangchu"],
	},
	jsrg_xiahouen: {
		sex: "male",
		group: "wei",
		hp: 4,
		names: "夏侯|恩",
		skills: ["jsrghujian", "jsrgshili"],
		dieAudios: ["tw_xiahouen"],
	},
	jsrg_fanjiangzhangda: {
		sex: "male",
		group: "wu",
		hp: 5,
		names: "范|强-张|达",
		skills: ["jsrgfushan"],
		dieAudios: ["fanjiangzhangda"],
	},
	//合
	jsrg_zhugeliang: {
		sex: "male",
		group: "shu",
		hp: 3,
		names: "诸葛|亮",
		skills: ["jsrgwentian", "jsrgchushi", "jsrgyinlve"],
		dieAudios: ["zhugeliang"],
	},
	jsrg_jiangwei: {
		sex: "male",
		group: "shu",
		hp: 4,
		skills: ["jsrgjinfa", "jsrgfumou", "jsrgxuanfeng"],
		groupBorder: "wei",
		dieAudios: ["jiangwei"],
	},
	jsrg_luxun: {
		sex: "male",
		group: "wu",
		hp: 3,
		skills: ["jsrgyoujin", "jsrgdailao", "jsrgzhubei"],
		dieAudios: ["luxun"],
	},
	jsrg_zhaoyun: {
		sex: "male",
		group: "shu",
		hp: 4,
		skills: ["jsrglonglin", "jsrgzhendan"],
		dieAudios: ["zhaoyun"],
	},
	jsrg_simayi: {
		sex: "male",
		group: "wei",
		hp: 4,
		names: "司马|懿",
		skills: ["jsrgyingshi", "jsrgtuigu"],
		dieAudios: ["simayi"],
	},
	jsrg_guoxun: {
		sex: "male",
		group: "wei",
		hp: 4,
		skills: ["jsrgeqian", "jsrgfusha"],
	},
	jsrg_sunlubansunluyu: {
		sex: "female",
		group: "wu",
		hp: 3,
		maxHp: 4,
		skills: ["jsrgdaimou", "jsrgfangjie"],
	},
	jsrg_caofang: {
		sex: "male",
		group: "wei",
		hp: 3,
		maxHp: 4,
		skills: ["jsrgzhaotu", "jsrgjingju", "jsrgweizhui"],
		isZhugong: true,
		dieAudios: ["caofang"],
	},
	jsrg_sunjun: {
		sex: "male",
		group: "wu",
		hp: 4,
		skills: ["jsrgyaoyan", "jsrgbazheng"],
	},
	jsrg_liuyong: {
		sex: "male",
		group: "shu",
		hp: 3,
		skills: ["jsrgdanxin", "jsrgfengxiang"],
		dieAudios: ["liuyong"],
	},
	jsrg_weiwenzhugezhi: {
		sex: "male",
		group: "wu",
		hp: 4,
		names: "卫|温-诸葛|直",
		skills: ["jsrgfuhai"],
		dieAudios: ["weiwenzhugezhi"],
	},
	jsrg_zhangxuan: {
		sex: "female",
		group: "wu",
		hp: 4,
		skills: ["jsrgtongli", "jsrgshezang"],
		dieAudios: ["zhangxuan"],
	},
	jsrg_gaoxiang: {
		sex: "male",
		group: "shu",
		hp: 4,
		skills: ["jsrgchiying"],
		dieAudios: ["gaoxiang"],
	},
	jsrg_guozhao: {
		sex: "female",
		group: "wei",
		hp: 3,
		skills: ["jsrgpianchong", "jsrgzunwei"],
		dieAudios: ["guozhao"],
	},
	//衰
	jsrg_yuanshao: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["jsrgzhimeng", "jsrgtianyu", "jsrgzhuni", "jsrghezhi"],
		isZhugong: true,
	},
	jsrg_caojiewangfu: {
		sex: "male",
		group: "qun",
		hp: 3,
		names: "曹|节-王|甫",
		skills: ["jsrgzonghai", "jsrgjueyin"],
	},
	jsrg_songhuanghou: {
		sex: "female",
		group: "qun",
		hp: 3,
		names: "宋|null",
		skills: ["jsrgzhongzen", "jsrgxuchong"],
	},
	jsrg_zhangjiao: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["jsrgxiangru", "jsrgwudao"],
	},
	jsrg_yangqiu: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["jsrgsaojian"],
	},
	jsrg_dongzhuo: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["jsrgguanshi", "jsrgcangxiong", "jsrgjiebing"],
	},
	jsrg_zhanghuan: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["jsrgzhushou", "jsrgyangge"],
	},
	jsrg_liubiao: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["jsrgyansha", "jsrgqingping"],
	},
	jsrg_yl_luzhi: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["jsrgruzong", "jsrgdaoren"],
	},
	jsrg_chenfan: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["jsrggangfen", "jsrgdangren"],
	},
	jsrg_zhangju: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["jsrgqiluan", "jsrgxiangjia"],
	},
};

export default characters;
