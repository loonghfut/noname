const translates = {
	sixiang: "四象封印",
	std_sunhao: "标孙皓",
	std_sunhao_prefix: "标",
	std_mateng: "标马腾",
	std_mateng_prefix: "标",
	std_mayunlu: "标马云騄",
	std_mayunlu_prefix: "标",
	std_jianggan: "标蒋干",
	std_jianggan_prefix: "标",
	std_zhouchu: "标周处",
	std_zhouchu_prefix: "标",
	std_lvlingqi: "标吕玲绮",
	std_lvlingqi_prefix: "标",
	std_dc_yanghu: "标羊祜",
	std_dc_yanghu_prefix: "标",
	std_dc_luotong: "标骆统",
	std_dc_luotong_prefix: "标",
	std_lijue: "标李傕",
	std_lijue_prefix: "标",
	std_chengpu: "标程普",
	std_chengpu_prefix: "标",
	std_db_wenyang: "标文鸯",
	std_db_wenyang_prefix: "标",
	std_re_dengzhi: "标邓芝",
	std_re_dengzhi_prefix: "标",
	std_zhangyì: "标张翼",
	std_zhangyì_prefix: "标",
	std_chengyu: "标程昱",
	std_chengyu_prefix: "标",
	std_fanyufeng: "标樊玉凤",
	std_fanyufeng_prefix: "标",
	std_feiyi: "标费祎",
	std_feiyi_prefix: "标",
	stdcanshi: "残蚀",
	stdcanshi_info: "锁定技，摸牌阶段，你改为摸X张牌（X为场上的已受伤角色且X至少为1）。然后本回合你使用【杀】或普通锦囊牌指定目标后，若其已受伤，你弃置一张牌。",
	stdxiongyi: "雄异",
	stdxiongyi_info: "限定技，出牌阶段，你可以选择任意名角色，这些角色依次选择是否使用一张不可被响应的【杀】，然后这些角色重复此流程直至有角色不使用【杀】。",
	stdyouji: "游骑",
	stdyouji_info: "主公技，准备阶段，你可以移动一名群势力角色的一张坐骑牌。",
	stdfengpo: "凤魄",
	stdfengpo_info: "当你使用【杀】造成伤害时，你可以弃置你或其的一张牌，若以此法弃置了方片牌，则此伤害+1。",
	stddaoshu: "盗书",
	stddaoshu_info: "每轮限一次，一名角色的准备阶段，你可以展示除其外一名角色的一张牌，然后令其获得此牌，且你与其本回合不能使用与此牌花色相同的牌。",
	stddaizui: "戴罪",
	stddaizui_info: "锁定技，当你受到伤害后，你视为本轮未发动过〖盗书〗。",
	stdxiongxia: "凶侠",
	stdxiongxia_info: "你可以将两张牌当作【决斗】对两名其他角色使用。你以此法使用的【决斗】结算完毕后，若所有目标角色都受到了此牌造成的伤害，则〖凶侠〗于本回合失效。",
	stdhuizhan: "挥戟",
	stdhuizhan_info: "你使用【杀】可以额外指定至多两个目标。若如此做，目标角色响应此【杀】时，其他目标角色可以代替其使用【闪】。",
	stdmingfa: "明伐",
	stdmingfa_info: "出牌阶段，你可以对一名体力值大于1的角色造成1点伤害，然后此技能失效直至其死亡或回复体力。",
	stdjinjian: "进谏",
	stdjinjian_info: "每回合每项各限一次，当你造成/受到伤害时，你可令此伤害+1/-1，然后你本回合内下一次造成的伤害-1/+1且不能触发〖进谏〗。",
	stdrenzheng: "仁政",
	stdrenzheng_info: "锁定技，当有伤害被防止时，你令当前回合角色摸一张牌。",
	stdxiongsuan: "凶算",
	stdxiongsuan_info: "锁定技，准备阶段，若你的体力值为全场最多，则你须对至少一名体力值等于你的角色各造成1点伤害。",
	stdchunlao: "醇醪",
	stdchunlao_info: "弃牌阶段结束时，若你本阶段弃置了不少于两张牌，则你可以用这些牌交换一名其他角色的手牌，然后其可以令你回复1点体力。",
	stdquedi: "却敌",
	stdquedi_info: "你可以将【杀】当作【决斗】使用。",
	stdzhiyinmeng: "急盟",
	stdzhiyinmeng_info: "准备阶段，你可以交给一名其他角色任意张牌，然后其可以交给你任意张牌。",
	stdhehe: "和合",
	stdhehe_info: "摸牌阶段结束时，你可以令至多两名手牌数与你相同的其他角色各摸一张牌。",
	stdzhiyi: "执义",
	stdzhiyi_info: "锁定技，一名角色的回合结束时，若你本回合使用过【杀】，则你视为使用【杀】或摸一张牌。",
	stdshefu: "设伏",
	stdshefu_info: "①结束阶段，你可以将一张手牌称为“伏兵”扣置于武将牌上。②一名角色使用牌时，你可以移去武将牌上的一张与此牌同名的“伏兵”并令此牌无效。",
	stdyibing: "益兵",
	stdyibing_info: "一名角色进入濒死状态时，你可以获得其一张牌。",
	stdbazhan: "把盏",
	stdbazhan_info: "出牌阶段限一次，你可以交给一名男性角色一张手牌，然后其可以交给你一张与此牌类别不同的牌。",
	stdzhanying: "醮影",
	stdzhanying_info: "锁定技，你的回合内，手牌数比回合开始时多的角色不能使用红色牌且受到的伤害+1。",
	stdtiaohe: "调和",
	stdtiaohe_info: "出牌阶段限一次，你可以弃置场上的一张装备牌和一张防具牌（不能为同一名角色的牌）。",
	stdqiansu: "谦素",
	stdqiansu_info: "当你成为锦囊牌的目标后，若你的装备区没有牌，则你可以摸一张牌。",


	old_shen_zhaoyun: "牢神赵云",
	old_shen_zhaoyun_prefix: "牢神",
	std_pengyang: "牢彭羕",
	std_pengyang_prefix: "牢",
	std_xushu: "标徐庶",
	std_xushu_prefix: "标",
	std_xuezong: "标薛综",
	std_xuezong_prefix: "标",
	std_liuzhang: "标刘璋",
	std_liuzhang_prefix: "标",
	std_wangyuanji: "标王元姬",
	std_wangyuanji_prefix: "标",
	std_wanglang: "标王朗",
	std_wanglang_prefix: "标",
	std_zhonghui: "标钟会",
	std_zhonghui_prefix: "标",
	std_fuhuanghou: "标伏皇后",
	std_fuhuanghou_prefix: "标",
	std_liubiao: "标刘表",
	std_liubiao_prefix: "标",
	std_gongsunyuan: "标公孙渊",
	std_gongsunyuan_prefix: "标",
	std_cenhun: "标岑昏",
	std_cenhun_prefix: "标",
	std_sunshao_prefix: "标",
	std_jiangwan: "标蒋琬",
	std_jiangwan_prefix: "标",
	std_maliang: "标马良",
	std_maliang_prefix: "标",
	std_simashi: "标司马师",
	std_simashi_prefix: "标",
	std_guanxing: "标关兴",
	std_guanxing_prefix: "标",
	stdwuyou: "武佑",
	stdwuyou_info: "出牌阶段限一次，你可以与一名角色进行拼点，若你没赢，你本回合视为拥有〖武圣〗。然后拼点没赢的角色视为没赢的角色使用一张【决斗】。",
	stdqiuyuan: "求援",
	stdqiuyuan_info: "当你成为一名角色使用【杀】的目标时，你可以令另一名其他角色选择一项：1.交给你一张牌；2.成为此【杀】的额外目标。",
	stdzhuikong: "惴恐",
	stdzhuikong_info: "其他角色的准备阶段，你可以用【杀】与其拼点，赢的角色可以使用对方的拼点牌。",
	stdzishou: "自守",
	stdzishou_info: "出牌阶段开始前，你可以摸场上势力数张牌，然后跳过此阶段。",
	stdjujin: "据荆",
	stdjujin_info: "主公技，当你受到其他群势力角色造成的伤害后，你可以弃置两张牌，然后回复1点体力。",
	stdhuaiyi: "怀异",
	stdhuaiyi_info: "锁定技，准备阶段，你展示所有手牌，若颜色不同，你弃置其中一种颜色的所有牌，然后获得至多等量名其他角色各一张牌，若选择角色数大于1，你失去1点体力。",
	stdfengbai: "封拜",
	stdfengbai_info: "主公技，当你获得一名群势力角色装备区内的牌后，你可以令其摸一张牌。",
	stdjishe: "极奢",
	stdjishe_info: "出牌阶段，若你的手牌上限大于0，你可以令本回合手牌上限-1，然后摸一张牌。",
	stdwudu: "无度",
	stdwudu_info: "一名没有手牌的角色受到伤害时，你可以减少1点体力上限，防止此伤害。",
	stdjinglve: "景略",
	stdjinglve_info: "其他角色的弃牌阶段开始时，你可以展示并交给其两张牌，令其本阶段不能弃置这些牌，然后你可以于本阶段结束时获得本阶段弃置的一张牌。",
	std_sunshao: "标孙邵",
	stddingyi: "定仪",
	stddingyi_info: "一名角色的结束阶段，若其装备区内没有牌，其可以摸一张牌。",
	stdzuici: "罪辞",
	stdzuici_info: "当你受到伤害后，你可以将场上的一张牌移至伤害来源区域内。",
	stdruwu: "儒武",
	stdruwu_info: "你可以将装备区内一张不为本回合置入的装备牌当【无中生有】或【决斗】使用。",
	stdchengshi: "承事",
	stdchengshi_info: "限定技，当一名其他角色死亡时，你可以与其交换座次和装备区内的牌。",
	stdxiemu: "协穆",
	stdxiemu_info: "其他角色的出牌阶段限一次，其可以展示并交给你一张基本牌，然后其本回合攻击范围+1。",
	stdnaman: "纳蛮",
	stdnaman_info: "出牌阶段限一次，你可以将任意张基本牌当指定等量名目标的【南蛮入侵】使用。",
	oldjuejing: "绝境",
	oldjuejing_info: "锁定技。①摸牌阶段，你令额定摸牌数+X（X为你已损失的体力值）。②你的手牌上限+2。",
	oldlonghun: "龙魂",
	oldlonghun_info: "你可以将花色相同的Y张牌按下列规则使用或打出：♥当【桃】，♦当火【杀】，♣当【闪】，♠当【无懈可击】（Y为你的体力值且至少为1）。",
	stdxiaofan: "嚣翻",
	stdxiaofan_info: "锁定技，当你使用牌结算结束后，你弃置你前X个区域内的牌：1.判定区 2.装备区 3.手牌区（X为你本回合使用牌的类型数）。",
	stdtuishi: "侻失",
	stdtuishi_info: "锁定技，你不能使用【无懈可击】，你使用的字母牌无效。",
	stdfunan: "复难",
	stdfunan_info: "每回合限一次，其他角色使用的牌被你抵消时，你可以获得之。",
	stdxunjie: "训诫",
	stdxunjie_info: "结束阶段，你可以令一名角色弃置一张手牌，若此牌花色为♦️，其摸两张牌。",
	stdwuyan: "无言",
	stdwuyan_info: "锁定技，你的锦囊牌均视为【无懈可击】。",
	stdjujian: "举荐",
	stdjujian_info: "每回合限一次，你的【无懈可击】结算结束后可以交给一名其他角色。",
	stdyinge: "引戈",
	stdyinge_info: "出牌阶段限一次，你可以令一名其他角色摸两张牌，然后其视为对你攻击范围内的另一名角色使用一张【杀】。",
	stdshiren: "施仁",
	stdshiren_info: "每回合限一次，当你成为其他角色使用【杀】的目标后，你可以摸两张牌，然后交给该角色一张牌。",
	stdjuyi: "据益",
	stdjuyi_info: "主公技，其他群势力角色每回合首次对你造成伤害时，其可以防止此伤害，改为获得你的一张牌。",
	stdqianchong: "谦冲",
	stdqianchong_info: "锁定技，若你的装备区内牌的数量为奇数/偶数，你使用牌无次数/距离限制。",
	stdshangjian: "尚俭",
	stdshangjian_info: "结束阶段，若你本回合失去的牌数不大于你的体力值，你可以从弃牌堆中获得一张你本回合失去的牌。",
	stdgushe: "鼓舌",
	stdgushe_info: "出牌阶段限一次，你可以与一名角色拼点，拼点赢的角色摸一张牌，然后拼点输的角色可以与对方重复此流程。",
	stdjici: "激词",
	stdjici_info: "当你亮出拼点牌时，你可以失去1点体力，令此牌点数视为k。",
	stdxingfa: "兴伐",
	stdxingfa_info: "准备阶段，若你的手牌数不小于体力值，你可以对一名其他角色造成1点伤害。",
};

export default translates;
