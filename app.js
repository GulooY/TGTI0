const letters = ["A", "B", "C", "D", "E", "F"];

const personas = [
  {
    id: "GO",
    name: "速开流",
    title: "速开流 GO",
    tags: ["GO", "PARTY"],
    weights: { GO: 4, PARTY: 2, ANY: 1 },
    subtitle: "规则先放一边，开了再说。错了算教学局，赢了算天赋觉醒。",
    symptoms: ["听规则时眼神在线，脑子已经开局", "第一局常有三次“原来还能这样”", "对新游戏的恐惧主要来自别人讲太久"],
    guide: "给他一个能立刻行动的位置，复杂规则拆成回合提醒，他会用犯错速度帮全桌进入状态。",
    danger: "最怕开局前 30 分钟还在讲例外规则。",
  },
  {
    id: "RULE",
    name: "规则神",
    title: "规则神 RULE",
    tags: ["RULE", "HOST"],
    weights: { RULE: 5, HOST: 2, BGG: 1 },
    subtitle: "FAQ、勘误、原文解释权都在你手里。你不是玩家，是桌面秩序本身。",
    symptoms: ["规则书会被你翻出使用痕迹", "别人说差不多时你会短暂失去笑容", "你能记住上次谁漏结算了负面效果"],
    guide: "让他讲关键流程和争议边界，他会把混乱压成可玩的局。",
    danger: "最怕“我们按感觉来吧”。",
  },
  {
    id: "LAW",
    name: "口胡师",
    title: "口胡师 LAW",
    tags: ["LAW", "TALK"],
    weights: { LAW: 5, RULE: 2, TALK: 2 },
    subtitle: "擅长在规则缝隙里找到人生出路。你不是偷鸡，只是文本理解比较自由。",
    symptoms: ["回合结束后还能补一句“其实我刚刚可以”", "谈判条款比游戏机制还复杂", "全桌会突然开始要求你逐字朗读卡牌"],
    guide: "和他玩要把承诺写清楚，最好让规则书坐在桌中央。",
    danger: "最怕被一句“官方 FAQ 说不行”当场封印。",
  },
  {
    id: "EURO",
    name: "德战神",
    title: "德战神 EURO",
    tags: ["EURO", "VP", "AP"],
    weights: { EURO: 5, VP: 2, AP: 1, BGG: 1 },
    subtitle: "木头麦子工人分数轨，全是精神氧气。别人玩游戏，你在做农业金融审计。",
    symptoms: ["资源转换越多越安心", "听到低随机会自动坐直", "对“像上班”的评价感到困惑，因为上班没有这么爽"],
    guide: "给他一局节奏清晰、策略可复盘的游戏，他会玩到眼睛发亮。",
    danger: "最怕关键胜负被一个骰子直接带走。",
  },
  {
    id: "VP",
    name: "分奴仙",
    title: "分奴仙 VP",
    tags: ["VP", "EURO"],
    weights: { VP: 5, EURO: 2, AP: 1 },
    subtitle: "结算前安静如鸡，结算后全桌沉默。你没有情绪，只有分差。",
    symptoms: ["嘴上说随便玩，手上全是效率路线", "能记住自己第二轮少拿的 1 分", "结算时经常出现“你什么时候这么高”的惊呼"],
    guide: "别只看他有没有打人，他可能已经在分数轨上绕后了。",
    danger: "最怕打了三小时发现自己少算一个乘区。",
  },
  {
    id: "AP",
    name: "长考王",
    title: "长考王 AP",
    tags: ["AP", "EURO"],
    weights: { AP: 5, EURO: 2, VP: 1 },
    subtitle: "你的回合像一部独立电影。不是慢，是未来分支太多。",
    symptoms: ["摸下巴是发动技能", "别人催你时你刚算到第三种路线", "你觉得五分钟很快，因为脑内已经过了五轮"],
    guide: "给他明确的思考时间和公开信息，他会产出非常精密的操作。",
    danger: "最怕全桌用沉默和眼神计时。",
  },
  {
    id: "AT",
    name: "美战神",
    title: "美战神 AT",
    tags: ["AT", "DICE", "BASH"],
    weights: { AT: 5, DICE: 2, BASH: 2 },
    subtitle: "主题、骰子、剧情、互车，缺一不可。今晚可以输，但不能没有史诗感。",
    symptoms: ["模型一铺开就自动入戏", "最后一回合相信奇迹", "互车时会说这是剧情需要"],
    guide: "给他冲突、代入和翻盘空间，他会把一局游戏玩成电影预告片。",
    danger: "最怕全程只有安静换资源。",
  },
  {
    id: "BASH",
    name: "互车王",
    title: "互车王 BASH",
    tags: ["BASH", "TALK", "AT"],
    weights: { BASH: 5, TALK: 2, AT: 1 },
    subtitle: "我可以不赢，但你不能舒服。友谊压力测试的拟人化版本。",
    symptoms: ["看到第一名就像看到公共目标", "落后时战斗力反而上升", "擅长把私人恩怨包装成桌面正义"],
    guide: "让他知道互车有收益，他会把局势搅得非常好看。",
    danger: "最怕全桌各玩各的没人响应围剿。",
  },
  {
    id: "DICE",
    name: "黑骰命",
    title: "黑骰命 DICE",
    tags: ["DICE", "AT"],
    weights: { DICE: 5, AT: 1, AP: 1 },
    subtitle: "每次投骰都像和宇宙打官司。概率懂不懂你不知道，骰子肯定不懂。",
    symptoms: ["投骰前很虔诚，投完后很哲学", "常说概率不是这么算的", "会记住每一次离谱失败"],
    guide: "给他一点补偿机制或重投机会，能有效保护桌面心率。",
    danger: "最怕关键判定连续失败。",
  },
  {
    id: "TOPD",
    name: "神抽狗",
    title: "神抽狗 TOPD",
    tags: ["TOPD", "TCG"],
    weights: { TOPD: 5, TCG: 2, AT: 1 },
    subtitle: "最离谱的时刻摸到最离谱的牌。你说这是牌库理解，大家说这是命。",
    symptoms: ["手牌烂时很安静，神抽时很大声", "逆转局面后会装作早有预料", "常被怀疑和牌堆有私人关系"],
    guide: "别让他活到最后一抽，故事通常从那里开始失控。",
    danger: "最怕洗牌后再也听不见牌库的声音。",
  },
  {
    id: "PARTY",
    name: "毛战神",
    title: "毛战神 PARTY",
    tags: ["PARTY", "MEME"],
    weights: { PARTY: 5, MEME: 2, GO: 1 },
    subtitle: "规则三分钟，笑声三小时。复杂可以没有，节目效果必须管饱。",
    symptoms: ["开局三分钟全桌已经乱了", "输赢会忘，笑点会进群名", "看见重度规则会想念隔壁桌的尖叫"],
    guide: "给他短平快、互动强、能出事故的游戏，他会负责把场子点亮。",
    danger: "最怕一局游戏沉默地算到结尾。",
  },
  {
    id: "MEME",
    name: "烂梗王",
    title: "烂梗王 MEME",
    tags: ["MEME", "PARTY", "TALK"],
    weights: { MEME: 5, PARTY: 2, TALK: 1 },
    subtitle: "一句废话能被群里复读半年。你输掉游戏，但赢得弹幕。",
    symptoms: ["长考空档就是你的舞台", "会把意外事故升级成群内传统", "同一句烂梗越重复越自信"],
    guide: "让他坐在需要气氛的位置，沉默桌会被他救回来。",
    danger: "最怕大家认真到没人接梗。",
  },
  {
    id: "TALK",
    name: "嘴炮王",
    title: "嘴炮王 TALK",
    tags: ["TALK", "BASH"],
    weights: { TALK: 5, BASH: 2, LAW: 1 },
    subtitle: "身份局见到你，空气都会变浑。你坐下以后，游戏人数自动加一。",
    symptoms: ["发言阶段像开发布会", "能把普通交易讲成战略合作", "沉默玩家会被你点名唤醒"],
    guide: "给他谈判、身份、结盟空间，他会把桌面变成小型联合国。",
    danger: "最怕机制自闭局没人理他。",
  },
  {
    id: "HOST",
    name: "桌控官",
    title: "桌控官 HOST",
    tags: ["HOST", "RULE", "PM"],
    weights: { HOST: 5, RULE: 2, PM: 2, N00B: 1 },
    subtitle: "讲规则、递 token、照顾新人，一人多用。你是桌面操作系统。",
    symptoms: ["别人还没落座，你已经排好组件", "能同时处理规则问题和情绪问题", "经常玩着玩着变成半个裁判"],
    guide: "让他掌握流程，他会让一桌人少坐牢很多。",
    danger: "最怕所有人都默认他负责一切。",
  },
  {
    id: "N00B",
    name: "护新会",
    title: "护新会 N00B",
    tags: ["N00B", "HOST", "PARTY"],
    weights: { N00B: 5, HOST: 2, PARTY: 1 },
    subtitle: "宁愿自己输，也不让新人第一局坐牢。你的胜负心会被新手保护机制暂时封印。",
    symptoms: ["会主动给新人找台阶", "教学时把重度游戏说得像郊游", "看到新人被针对会立刻启动保护"],
    guide: "让他带新桌或教学局，他会把门槛拆成台阶。",
    danger: "最怕老玩家用新手当提款机。",
  },
  {
    id: "ANY",
    name: "万金油",
    title: "万金油 ANY",
    tags: ["ANY", "FREE"],
    weights: { ANY: 5, FREE: 1 },
    subtitle: "德美毛跑战卡，今晚开啥你都来。你的人格代码是“有局吗”。",
    symptoms: ["没有明显雷区，只有时间冲突", "能从重策切到毛线不需要缓冲", "每个圈子都觉得你是自己人"],
    guide: "缺人时先喊他，成功率通常比预期高。",
    danger: "最怕今晚没人开局。",
  },
  {
    id: "FREE",
    name: "蹭局侠",
    title: "蹭局侠 FREE",
    tags: ["FREE", "ANY"],
    weights: { FREE: 5, ANY: 2, GO: 1 },
    subtitle: "没有桌游，但每张桌子都有你的传说。你不占柜子，只占座位。",
    symptoms: ["到场问今天玩啥", "很少买盒，但局龄不低", "朋友的收藏就是你的共享图书馆"],
    guide: "提前告诉他时间地点就行，规则和盒子他都可以现场适配。",
    danger: "最怕所有人都等别人带游戏。",
  },
  {
    id: "KS",
    name: "众筹僧",
    title: "众筹僧 KS",
    tags: ["KS", "DUST", "MPL"],
    weights: { KS: 5, DUST: 2, MPL: 1 },
    subtitle: "豪华版、金属币、全扩，一键超度钱包。你买的不是桌游，是未来的神龛。",
    symptoms: ["看到独享内容会心跳加速", "常说这次真的最后一次 all-in", "物流信息比游戏规则更熟"],
    guide: "他会带来最新、最大、最闪的盒子，请负责帮他开。",
    danger: "最怕到货后发现没人有空。",
  },
  {
    id: "DUST",
    name: "灰柜王",
    title: "灰柜王 DUST",
    tags: ["DUST", "KS"],
    weights: { DUST: 5, KS: 2, BGG: 1 },
    subtitle: "柜子像博物馆，展品叫“总有一天”。你买的是希望，吃灰的是现实。",
    symptoms: ["推荐时总提到自己还没开的盒", "柜子容量永远差一点", "对塑封有复杂感情"],
    guide: "帮他定一个开盒日期，比劝他少买更有效。",
    danger: "最怕朋友问这盒开过几次。",
  },
  {
    id: "PM",
    name: "组局佬",
    title: "组局佬 PM",
    tags: ["PM", "HOST"],
    weights: { PM: 5, HOST: 2, RULE: 1 },
    subtitle: "约人排期选游戏，开局前已完成项目交付。你不是在组局，是在做资源调度。",
    symptoms: ["群里最常出现你的投票和接龙", "有人鸽局时立刻切备用方案", "局没开始已经累了一轮"],
    guide: "及时回复、准时到场，就是对他最大的尊重。",
    danger: "最怕临时鸽和已读不回。",
  },
  {
    id: "AFK",
    name: "鸽王",
    title: "鸽王 AFK",
    tags: ["AFK"],
    weights: { AFK: 6, FREE: 1 },
    subtitle: "报名最积极，开局前突然人间蒸发。你的常驻技能是“兄弟们我突然”。",
    symptoms: ["报名时热血，开局前失联", "理由往往很真，频率也很真", "群里对你的座位有备用预案"],
    guide: "给他安排可替补位置，别让整桌命运绑在他身上。",
    danger: "最怕被组局佬公开点名。",
  },
  {
    id: "BGG",
    name: "查分员",
    title: "查分员 BGG",
    tags: ["BGG", "EURO"],
    weights: { BGG: 5, EURO: 2, RULE: 1 },
    subtitle: "好不好玩先看均分、权重和评论区战争。你回答问题的方式是“综合来看”。",
    symptoms: ["选游戏前先查评分", "知道很多没玩过但研究过的游戏", "能从评论区判断一盒是否适合本桌"],
    guide: "让他做选品顾问，但最终还是要有人真的开盒。",
    danger: "最怕全桌只想凭感觉乱选。",
  },
  {
    id: "MPL",
    name: "摆盘师",
    title: "摆盘师 MPL",
    tags: ["MPL", "KS"],
    weights: { MPL: 5, KS: 1, DUST: 1 },
    subtitle: "开局前先让这一桌看起来贵三倍。你不是摆组件，是布展。",
    symptoms: ["token 必须顺手，卡牌必须对齐", "金属币和收纳能提升你的灵魂浓度", "拍照角度比起始玩家还重要"],
    guide: "给他一点整理时间，他会让桌面体验直接升级。",
    danger: "最怕有人把组件随手一堆。",
  },
  {
    id: "GM",
    name: "跑团吟游",
    title: "跑团吟游 GM",
    tags: ["GM", "SAN"],
    weights: { GM: 5, SAN: 2 },
    subtitle: "“很短的导入”通常意味着 40 分钟世界观。你不是开团，是开史诗序章。",
    symptoms: ["NPC 有家族史，村口有政治经济结构", "玩家还没进门，你已经准备三条支线", "说短导入时全桌会互相看一眼"],
    guide: "给他认真听众和愿意入戏的玩家，他会把晚上变成长篇回忆。",
    danger: "最怕玩家只想立刻踹门。",
  },
  {
    id: "SAN",
    name: "掉 SAN 人",
    title: "掉 SAN 人 SAN",
    tags: ["SAN", "GM", "MEME"],
    weights: { SAN: 5, GM: 2, MEME: 1 },
    subtitle: "调查没开始，理智已经开始退款。你不是来破案的，是来变成案子的。",
    symptoms: ["看到门就想开，看到 NPC 就怀疑", "理智值像限时资源", "越危险越有节目效果"],
    guide: "给他一点线索和一点恐怖，他会自己走向更恐怖的地方。",
    danger: "最怕谨慎到没有任何事故。",
  },
  {
    id: "LOS",
    name: "尺子侠",
    title: "尺子侠 LOS",
    tags: ["LOS", "RULE"],
    weights: { LOS: 5, RULE: 2, MPL: 1 },
    subtitle: "1 毫米距离也有灵魂和争议。别人看到小人，你看到射线、掩体和角度。",
    symptoms: ["量距离时全桌屏住呼吸", "对视线判定有宗教级认真", "拍照留证不是玩笑，是流程"],
    guide: "给他清晰边界和工具，他会在严谨里获得快乐。",
    danger: "最怕有人说差不多就行。",
  },
  {
    id: "TCG",
    name: "牌佬魂",
    title: "牌佬魂 TCG",
    tags: ["TCG", "TOPD"],
    weights: { TCG: 5, TOPD: 2, BGG: 1 },
    subtitle: "把所有游戏都理解成构筑、节奏和斩杀线。你不是摸牌，是听牌库说话。",
    symptoms: ["会把资源交换说成 tempo", "看到卡牌池就开始构筑", "抽牌前已经想好三种斩杀线"],
    guide: "给他牌、引擎和可优化空间，他会自己搭出快乐。",
    danger: "最怕牌序毫无掌控感且不能调整。",
  },
];

const personaGroupMeta = {
  euro: { color: "#785a98", bg: "#eee7f4" },
  party: { color: "#4f8f4d", bg: "#eaf5e8" },
  epic: { color: "#4f9eb1", bg: "#e4f4f7" },
  life: { color: "#d5aa26", bg: "#fbf2cf" },
  special: { color: "#d86054", bg: "#fae9e5" },
};

const personaStories = {
  GO: "你属于桌游桌上的启动键，别人还在研究行动阶段，你已经把第一颗米宝推出去了。你不怕错规则，怕的是一桌人把热情讲凉。你的局通常会经历“先玩”“玩错”“重开但更快乐”三个阶段，神奇的是大家往往真的会因为你更快进入状态。你不是不尊重规则，你只是相信规则最终会在事故现场自己长出来。",
  RULE: "你是桌面秩序的最后一道防线。只要你坐在桌边，漏结算、错行动、乱解释都会突然变得心虚。你的快乐来自一局游戏被准确地运转起来，像齿轮咬合，像宇宙恢复出厂设置。别人可能觉得你较真，但当全桌陷入“这到底能不能这么打”时，第一个被呼唤的还是你。",
  LAW: "你不是单纯会玩规则，你是会和规则聊天。卡牌写了什么、没写什么、标点符号暗示了什么，你都能展开一场桌面法庭。你经常让对手产生一种复杂感受：明明觉得哪里不对，但又一时说不出哪里不对。和你同桌，规则书最好别离场，因为它随时可能被传唤作证。",
  EURO: "你对资源转换有一种近乎天然的亲切感。木头变房子，房子变分数，分数变精神稳定，这条链路在你脑内非常顺滑。你不需要太多剧情，只要系统够优雅、路线够多、结算够扎实，你就能获得深层快乐。别人说像上班，你心想上班要是这么公平就好了。",
  VP: "你是那种结算前不显山不露水，结算后让全桌沉默两秒的人。你嘴上说随便玩，身体却诚实地朝最高效率路线移动。你不一定最爱打人，也不一定最爱发言，但你会在没人注意的角落把分数一点点码起来。你的恐怖之处在于：你看起来没在赢，但分数轨知道真相。",
  AP: "你的一回合里住着很多个平行宇宙。每个选择都通往不同未来，每个资源都牵动五轮后的命运。别人看到你在沉默，你其实正在脑内运行一台桌游模拟器。你不是故意拖时间，你只是对“随便走一步”这件事有生理性不适。催你的人不懂，你刚刚差点算出人生最优解。",
  AT: "你玩桌游不是为了安静地优化，而是为了见证命运掀桌。模型、剧情、骰子、背叛、最后一回合奇迹，这些东西合在一起才叫一局有血有肉的游戏。你可以接受输，但不能接受没有记忆点地输。和你同桌，大家常常会忘记最终分数，但记得某个离谱瞬间是谁喊得最大声。",
  BASH: "你对胜利的态度很灵活，对让别人舒服这件事则比较严格。只要有人领先，你就能迅速从普通玩家进化成公共危机发言人。你擅长把个人恩怨包装成桌面正义，把围剿讲成战略平衡。你不是恶意，你只是觉得一局游戏如果没人被针对，就像火锅没开火。",
  DICE: "你和骰子之间有一段长期、复杂、无法公开和解的关系。每次投骰前你都愿意相信科学，每次投完你又开始怀疑科学是不是没来上班。你的失败经常非常戏剧化，成功也带着一种劫后余生的荒诞感。你不是讨厌随机，你只是希望随机不要总是精准地踩你脸上。",
  TOPD: "你的牌库像认识你。别人苦苦规划十轮，你在最需要的时候伸手一摸，故事就换了导演。你常常把神抽解释成牌库理解、节奏把握、心理博弈，但全桌都知道这里面有一点玄学。你的存在提醒大家：桌游是策略游戏，也是命运突然给某个人递麦克风的地方。",
  PARTY: "你是毛线桌的天然燃料。规则可以薄，笑声必须厚；机制可以简单，事故一定要密集。你擅长把一个本来普通的小游戏玩成群聊长期素材，也擅长让拘谨的新玩家突然放下包袱。你不一定记得最后谁赢了，但你一定记得谁在第三轮笑到无法继续读题。",
  MEME: "你是桌游局里的梗循环系统。一句废话只要被你抓住，就可能变成今晚的精神图腾。你很懂桌面空气，知道什么时候该插一句，什么时候该把尴尬变成笑点。你输掉一局并不严重，因为你常常赢得更持久的东西：一个会在群里复读半年的烂梗。",
  TALK: "你一开口，桌面就从游戏区升级成会议现场。谈判、身份、结盟、背刺、控票，这些都是你的舒适区。你能让安静的人说话，让摇摆的人站队，让普通交易听起来像历史转折。你不是话多，你是在为这局游戏提供必要的空气扰动。",
  HOST: "你是桌游局能顺利发生的原因之一。你会讲规则、摆组件、照顾新人、提醒流程，还能在争议出现时把大家从情绪里捞回来。你的强大不一定体现在分数上，而体现在一桌人玩完之后觉得“这局很顺”。你像桌面操作系统，平时不抢戏，出问题时大家才发现你一直在运行。",
  N00B: "你对新手有一种近乎本能的保护欲。别人看到新手可能想到提款机，你看到的是一颗需要慢慢带进坑的种子。你会主动解释、提醒、放水、找台阶，甚至牺牲自己的胜率换别人第一次体验不坐牢。你的桌游观很温柔：赢一局很爽，但多一个愿意再来的人更重要。",
  ANY: "你是桌游生态里的万能接口。德式能坐，美式能冲，毛线能笑，跑团能演，战棋也能凑过去看看。你不一定每类都最精，但你有一种稀缺能力：不扫兴。朋友喊你时不用写复杂说明，只要说有局，你的人格系统就会自动适配。",
  FREE: "你是桌游圈的轻装传说。你没有占用太多柜子空间，却出现在很多人的局后合照里。你对盒子的拥有欲不强，对参与感的捕捉能力很强。你像一个游走型玩家，哪里有空位，哪里就可能出现你的身影。别人买游戏，你贡献稳定出勤，这也是生态平衡的一部分。",
  KS: "你的钱包和众筹页面之间存在一种神秘通道。豪华版、全扩、金属币、独享内容，这些词对你来说不是营销，是召唤仪式。你买的不只是游戏，还有未来某一天开盒时全桌惊叹的可能性。虽然那一天可能迟到很久，但你坚信每一个大盒都在等待属于它的命运之夜。",
  DUST: "你的柜子很有故事，只是很多故事还停留在塑封阶段。你并非真的不玩，你只是拥有太多“总有一天”的计划。每一盒游戏买下时都曾燃烧过理想，后来它们安静地变成家中地形。你对吃灰有自知之明，但这并不妨碍你继续相信下一盒会不一样。",
  PM: "你是开局前最累的人。别人以为桌游是从落座开始，你知道真正的游戏从约人、排期、改人数、选备选、催回复那一刻就开始了。你的能力让一群想玩但懒得组织的人真的坐到一起。你不是单纯组局，你是在和时间、地点、人数、鸽子进行多方谈判。",
  AFK: "你报名时真心想来，消失时也真有理由，这正是问题复杂的地方。你像桌游群里的不确定事件卡，平时存在感不低，开局前风险上升。大家可能嘴上吐槽你，但也逐渐为你建立了备用方案。你的人生不是不热爱桌游，只是经常在开局前触发支线任务。",
  BGG: "你选游戏像做研究。均分、权重、排名、评论区争议、最佳人数、推荐时长，都是你判断一盒游戏的证据链。你不一定每盒都玩过，但你能讲出很多盒为什么适合或不适合本桌。别人问好不好玩，你很难只回答好或不好，因为你脑内已经打开了综合评估报告。",
  MPL: "你相信桌面美学会影响游戏灵魂。卡牌要齐，token 要顺，金属币要有手感，收纳要让下一次开局少受罪。你不是单纯爱摆，你是在给一局游戏建立仪式感。别人急着开，你先把桌面整理成值得拍照的样子，然后这局突然就显得高级了。",
  GM: "你脑子里永远有一张比桌面更大的地图。一个村口 NPC 可以有三代家谱，一段短导入可以自然生长成史诗序章。你不是拖，你是在给世界装地基。玩家可能嘴上催快点，但很久以后，他们记住的往往正是你那些看似过量的细节。",
  SAN: "你在调查局里像一根点燃的导火索。谨慎当然很好，但门就在那儿，不开一下怎么知道后面是不是剧情？你不怕理智下降，怕的是一晚上无事发生。你常常让队友头疼，也让故事变得有声音。你不是来破案的，你是来让案子承认你来过。",
  LOS: "你对距离和视线有一种精确的信仰。别人觉得差不多，你知道差一毫米可能就是生与死、命中与落空、规则与混沌。你不是抬杠，你是在维护战场的几何尊严。和你玩战棋，尺子不是工具，是圣物；拍照留证不是夸张，是历史档案。",
  TCG: "你的桌游大脑自带卡牌语言包。资源交换是 tempo，关键回合是斩杀线，随机摸牌也能被你分析出牌库意志。哪怕不是卡牌游戏，你也会下意识寻找构筑、循环、爆发和节奏窗口。你不是把桌游玩成牌游，你只是看见了万物皆有牌序的一面。",
};

const dimensionConfig = [
  { id: "rule", name: "规则严谨", tags: ["RULE", "LAW", "HOST", "BGG", "LOS"] },
  { id: "win", name: "胜负跑分", tags: ["VP", "EURO", "AP", "BASH", "TCG", "TOPD"] },
  { id: "social", name: "社交整活", tags: ["PARTY", "MEME", "TALK", "AT", "GM", "SAN", "N00B", "GO"] },
  { id: "life", name: "桌游生态", tags: ["KS", "DUST", "PM", "FREE", "ANY", "MPL", "AFK"] },
];

const questions = [
  {
    phase: "分流题",
    text: "今晚只能选一种快乐：",
    options: [
      o("德式跑分", { EURO: 3, VP: 1 }),
      o("美式互车", { AT: 3, BASH: 1 }),
      o("毛线爆笑", { PARTY: 3, MEME: 1 }),
      o("跑团入戏", { GM: 3, SAN: 1 }),
      o("战棋量尺", { LOS: 3, RULE: 1 }),
      o("卡牌构筑", { TCG: 3, TOPD: 1 }),
    ],
  },
  {
    phase: "分流题",
    text: "你在桌游群里的生态位：",
    options: [
      o("讲规 / 主持", { HOST: 3, RULE: 1 }),
      o("组局 / 排期", { PM: 3, HOST: 1 }),
      o("买盒 / 众筹", { KS: 3, DUST: 1 }),
      o("蹭局 / 随叫随到", { FREE: 3, ANY: 1 }),
      o("气氛 / 烂梗", { MEME: 3, PARTY: 1 }),
      o("查分 / 研究", { BGG: 3, EURO: 1 }),
    ],
  },
  {
    phase: "分流题",
    text: "你最容易破防：",
    options: [
      o("规则被玩错", { RULE: 3 }),
      o("队友长考", { PARTY: 2, HOST: 1 }),
      o("骰子背刺", { DICE: 3 }),
      o("朋友鸽局", { PM: 2, AFK: 1 }),
      o("太没互动", { TALK: 3 }),
      o("结算才发现自己输了", { VP: 3 }),
    ],
  },
  {
    phase: "分流题",
    text: "你最愿意为桌游牺牲：",
    options: [
      o("钱包", { KS: 3 }),
      o("睡眠", { GM: 2, AT: 1 }),
      o("友情", { BASH: 3 }),
      o("脑细胞", { EURO: 2, AP: 1 }),
      o("形象", { MEME: 3 }),
      o("柜子空间", { DUST: 3 }),
    ],
  },
  {
    phase: "分流题",
    text: "朋友最可能说你：",
    options: [
      o("他会教。", { HOST: 3 }),
      o("他会赢。", { VP: 3 }),
      o("他会买。", { KS: 3 }),
      o("他会嘴。", { TALK: 3 }),
      o("他会鸽。", { AFK: 4 }),
      o("他什么都玩。", { ANY: 3 }),
    ],
  },
  {
    phase: "分流题",
    text: "如果你变成一张桌游配件：",
    options: [
      o("米宝", { EURO: 2, MPL: 1 }),
      o("骰子", { DICE: 2, AT: 1 }),
      o("规则书", { RULE: 3 }),
      o("金属币", { KS: 2, MPL: 1 }),
      o("调查员卡", { SAN: 3 }),
      o("尺子", { LOS: 3 }),
    ],
  },
  {
    phase: "主测试",
    text: "新游戏刚拆封，规则书 28 页，你的第一反应是：",
    options: [
      o("“我先读，大家别碰组件。”", { RULE: 2, HOST: 1 }),
      o("“摆上吧，玩错算教学局。”", { GO: 2, PARTY: 1 }),
      o("“BGG 权重多少？有没有教学视频？”", { BGG: 2 }),
      o("“这收纳不行，我先分 token。”", { MPL: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "朋友说“这游戏很简单”，你发现桌上有 300 个 token：",
    options: [
      o("“很好，有深度。”", { EURO: 2 }),
      o("“简单指的是他讲得简单，不是我活得简单。”", { AP: 2 }),
      o("“token 多说明拍照好看。”", { MPL: 2 }),
      o("“我现在退出还来得及吗？”", { FREE: 2, PARTY: 1 }),
    ],
  },
  {
    phase: "主测试",
    text: "教学局第一轮，你最可能：",
    options: [
      o("严格按流程示范。", { RULE: 2, HOST: 2 }),
      o("直接打出一个离谱操作让大家记住规则。", { GO: 2, MEME: 1 }),
      o("暗中寻找最高分路线。", { VP: 2, EURO: 1 }),
      o("先和旁边的人结盟。", { TALK: 1, BASH: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "规则争议出现，全桌看向你：",
    options: [
      o("查规则书、FAQ、勘误，三堂会审。", { RULE: 3, BGG: 1 }),
      o("“按字面意思，我觉得我可以。”", { LAW: 3 }),
      o("“别查了，节目效果优先。”", { PARTY: 2, MEME: 1 }),
      o("“投票吧，少数服从多数。”", { HOST: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "你落后第一名 40 分：",
    options: [
      o("继续优化路线，尊严可以输，效率不能输。", { VP: 2, EURO: 1 }),
      o("开始组织全桌围剿第一名。", { BASH: 2, TALK: 1 }),
      o("进入“反正输了那我负责搞笑”模式。", { MEME: 2, PARTY: 1 }),
      o("说“这局只是熟悉规则”，但声音有点抖。", { GO: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "快结算了，你在做什么：",
    options: [
      o("已经心算出自己 87 分。", { VP: 3 }),
      o("问“谁第一？我现在还能打谁？”", { BASH: 3 }),
      o("拍照发群：“今晚又是一场恶战。”", { MPL: 1, PARTY: 1 }),
      o("不知道自己几分，但知道刚刚很好笑。", { PARTY: 3 }),
    ],
  },
  {
    phase: "主测试",
    text: "骰子决定关键胜负，你会：",
    options: [
      o("相信命运，直接投。", { AT: 1, DICE: 2 }),
      o("先算概率，再被概率背叛。", { DICE: 2, AP: 1 }),
      o("把骰子换个角度，进行玄学预热。", { DICE: 2, MEME: 1 }),
      o("“为什么我要玩这种不可控的东西？”", { EURO: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "抽牌阶段，你摸到神牌：",
    options: [
      o("“我就说牌库理解很重要。”", { TOPD: 2, TCG: 2 }),
      o("立刻开始表演命运之子。", { MEME: 2, AT: 1 }),
      o("冷静打出，然后假装这是计划的一部分。", { VP: 2 }),
      o("不敢相信，先检查是不是摸错牌。", { RULE: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "有人长考 5 分钟：",
    options: [
      o("理解，他在构筑未来。", { AP: 2, EURO: 1 }),
      o("灵魂已经离开桌面。", { PARTY: 2 }),
      o("开始讲烂梗填补空气。", { MEME: 3 }),
      o("友情提醒：“你再不动我帮你动。”", { HOST: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "身份局发言轮到你：",
    options: [
      o("开始控场、盘逻辑、带票。", { TALK: 3 }),
      o("装弱装晕，实际记了全场信息。", { LAW: 1, VP: 2 }),
      o("发言内容不重要，气势必须很足。", { MEME: 1, TALK: 2 }),
      o("“我新手，我不知道。”但眼神很清醒。", { GO: 2, LAW: 1 }),
    ],
  },
  {
    phase: "主测试",
    text: "谈判游戏里，你的核心策略是：",
    options: [
      o("画饼、结盟、背刺，一条龙服务。", { TALK: 2, BASH: 2 }),
      o("条款写清楚，别给我口头承诺。", { LAW: 3 }),
      o("不谈感情，只谈资源汇率。", { EURO: 2, VP: 1 }),
      o("被别人拉去结盟，然后莫名其妙赢了。", { FREE: 1, TOPD: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "新人加入重度桌：",
    options: [
      o("我来教，保证不坐牢。", { HOST: 2, N00B: 2 }),
      o("先让他玩个轻的，别直接上刑。", { N00B: 2, PARTY: 1 }),
      o("规则很简单，只有行动阶段复杂一点。", { RULE: 2 }),
      o("输一局就会了。", { GO: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "朋友问“今天玩什么都行吗？”",
    options: [
      o("德式、美式、毛线、跑团，来者不拒。", { ANY: 4 }),
      o("最好别太随机，我想动脑。", { EURO: 2 }),
      o("最好能互车，我今天情绪很好。", { AT: 1, BASH: 2 }),
      o("最好别超过 20 分钟，我是来笑的。", { PARTY: 3 }),
    ],
  },
  {
    phase: "主测试",
    text: "看到 BGG 权重 4.2：",
    options: [
      o("兴奋，说明有东西。", { EURO: 2, BGG: 2 }),
      o("先收藏，等一个成熟的讲规者。", { FREE: 1, BGG: 2 }),
      o("劝退，我今晚不是来考研的。", { PARTY: 2 }),
      o("看评论区有没有规则争议。", { RULE: 1, BGG: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "看到 KS 豪华版全扩：",
    options: [
      o("all-in，少一个扩展都不完整。", { KS: 4 }),
      o("等朋友买，我负责出席。", { FREE: 3 }),
      o("先看主游戏开不开得动。", { DUST: 2, BGG: 1 }),
      o("金属币可以不要吗？不，可以要。", { MPL: 2, KS: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "你的桌游柜状态：",
    options: [
      o("已经从柜子变成地形。", { DUST: 2, KS: 1 }),
      o("没几盒，但我局很多。", { FREE: 3 }),
      o("分门别类，收纳舒适。", { MPL: 3 }),
      o("我没有柜子，我有愿望清单。", { BGG: 2, KS: 1 }),
    ],
  },
  {
    phase: "主测试",
    text: "朋友临时鸽局：",
    options: [
      o("立刻重排人数和游戏。", { PM: 2, HOST: 2 }),
      o("嘴上没事，心里记档。", { RULE: 2 }),
      o("“那我们改毛线吧。”", { PARTY: 2 }),
      o("我就是那个临时有事的人。", { AFK: 5 }),
    ],
  },
  {
    phase: "主测试",
    text: "你报名一场局之后：",
    options: [
      o("提前看规则，准时到场。", { RULE: 2 }),
      o("提前问有没有新手位。", { N00B: 2 }),
      o("到场问“今天玩啥？”", { FREE: 2, GO: 1 }),
      o("开局前 20 分钟说“兄弟们我突然”。", { AFK: 5 }),
    ],
  },
  {
    phase: "主测试",
    text: "跑团 GM 说“很短的导入”：",
    options: [
      o("坐好听世界观。", { GM: 3 }),
      o("问我什么时候能行动。", { GO: 2 }),
      o("已经开始写人物小传。", { GM: 2, SAN: 1 }),
      o("担心今晚又进不了主线。", { AP: 1, GM: 1 }),
    ],
  },
  {
    phase: "主测试",
    text: "COC 调查现场，你会：",
    options: [
      o("谨慎推理，保护理智。", { SAN: 2, LAW: 1 }),
      o("先开门，有事再说。", { GO: 1, SAN: 2 }),
      o("调查员可以死，节目效果不能死。", { MEME: 2, SAN: 2 }),
      o("我怀疑每个 NPC。", { LAW: 1, SAN: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "战棋量距离差 1 毫米：",
    options: [
      o("1 毫米也是距离。", { LOS: 3 }),
      o("大家开心就好，差不多吧。", { PARTY: 2 }),
      o("查视线、掩体、角度。", { RULE: 1, LOS: 3 }),
      o("我先拍照留证。", { MPL: 1, LOS: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "卡牌构筑时，你最在意：",
    options: [
      o("斩杀线、节奏、资源交换。", { TCG: 4 }),
      o("神抽翻盘的戏剧性。", { TOPD: 3 }),
      o("卡图好不好看。", { MPL: 2 }),
      o("别问，抄牌表。", { BGG: 1, TCG: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "毛线游戏开场 3 分钟，全桌已经乱了：",
    options: [
      o("太好了，进入状态。", { PARTY: 3 }),
      o("我开始复读刚才那个烂梗。", { MEME: 3 }),
      o("我试图维护秩序但失败。", { HOST: 2 }),
      o("我想念我的资源转换。", { EURO: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "德式游戏里你有 6 种资源：",
    options: [
      o("爽，开始规划 5 回合。", { EURO: 2, AP: 2 }),
      o("先问哪个最值钱。", { VP: 3 }),
      o("看起来像上班，但我可以试试。", { ANY: 2 }),
      o("我已经想去隔壁毛线桌。", { PARTY: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "美式大盒开桌，模型铺满：",
    options: [
      o("代入感拉满，今晚就是史诗。", { AT: 3 }),
      o("先问规则时长和随机性。", { BGG: 2 }),
      o("我负责拍照。", { MPL: 2 }),
      o("我负责被打。", { DICE: 1, MEME: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "你最像哪种桌面生物：",
    options: [
      o("讲规的人。", { HOST: 2, RULE: 2 }),
      o("组局的人。", { PM: 3 }),
      o("买盒的人。", { KS: 2, DUST: 2 }),
      o("被喊就到的人。", { FREE: 2, ANY: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "游戏结束后，你最常说：",
    options: [
      o("“我第二轮不该那样打。”", { VP: 2, AP: 1 }),
      o("“刚才那段真的太好笑了。”", { PARTY: 2, MEME: 1 }),
      o("“这游戏机制挺妙。”", { EURO: 2 }),
      o("“下次再开，我把扩展带上。”", { KS: 1, PM: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "朋友问你推荐桌游：",
    options: [
      o("按人数、时长、重度列清单。", { HOST: 1, BGG: 2 }),
      o("直接推荐自己刚买但没开的。", { DUST: 3 }),
      o("看你们想吵架还是想大笑。", { TALK: 1, PARTY: 2 }),
      o("我不推荐，我只蹭。", { FREE: 3 }),
    ],
  },
  {
    phase: "主测试",
    text: "你最不能忍的是：",
    options: [
      o("规则错。", { RULE: 3 }),
      o("太无聊。", { PARTY: 3 }),
      o("太随机。", { EURO: 3 }),
      o("临时鸽。", { PM: 3 }),
    ],
  },
  {
    phase: "主测试",
    text: "如果桌游是一种修行，你修的是：",
    options: [
      o("分数大道。", { VP: 3 }),
      o("规则正法。", { RULE: 3 }),
      o("众筹功德。", { KS: 3 }),
      o("烂梗轮回。", { MEME: 3 }),
    ],
  },
];

const state = {
  index: 0,
  scores: {},
  answers: [],
};

const refs = {
  questionCard: document.querySelector("#questionCard"),
  resultPanel: document.querySelector("#resultPanel"),
  questionKicker: document.querySelector("#questionKicker"),
  questionText: document.querySelector("#questionText"),
  options: document.querySelector("#options"),
  phaseLabel: document.querySelector("#phaseLabel"),
  progressLabel: document.querySelector("#progressLabel"),
  progressBar: document.querySelector("#progressBar"),
  resultTitle: document.querySelector("#resultTitle"),
  resultSubtitle: document.querySelector("#resultSubtitle"),
  resultBadge: document.querySelector("#resultBadge"),
  resultStory: document.querySelector("#resultStory"),
  dimensionStats: document.querySelector("#dimensionStats"),
  symptomList: document.querySelector("#symptomList"),
  teamGuide: document.querySelector("#teamGuide"),
  dangerZone: document.querySelector("#dangerZone"),
  tagCloud: document.querySelector("#tagCloud"),
  shareText: document.querySelector("#shareText"),
  restartButton: document.querySelector("#restartButton"),
  copyButton: document.querySelector("#copyButton"),
  overviewButton: document.querySelector("#overviewButton"),
  overviewOverlay: document.querySelector("#overviewOverlay"),
  closeOverviewButton: document.querySelector("#closeOverviewButton"),
  overviewGrid: document.querySelector("#overviewGrid"),
};

function o(text, scores) {
  return { text, scores };
}

function renderQuestion() {
  const question = questions[state.index];
  refs.phaseLabel.textContent = question.phase;
  refs.progressLabel.textContent = `${state.index + 1} / ${questions.length}`;
  refs.progressBar.style.width = `${(state.index / questions.length) * 100}%`;
  refs.questionKicker.textContent = question.phase === "分流题" ? "强分流题" : "桌游事故现场";
  refs.questionText.textContent = question.text;
  refs.options.innerHTML = "";

  question.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.className = "option-button";
    button.type = "button";
    button.innerHTML = `
      <span class="option-letter">${letters[optionIndex]}</span>
      <span class="option-text">${option.text}</span>
    `;
    button.addEventListener("click", () => chooseOption(option, button));
    refs.options.append(button);
  });
}

function chooseOption(option, button) {
  button.blur();
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
  state.answers.push({ question: questions[state.index].text, option: option.text });
  addScores(option.scores);
  state.index += 1;

  if (state.index >= questions.length) {
    showResult();
    return;
  }

  renderQuestion();
}

function addScores(scores) {
  Object.entries(scores).forEach(([tag, value]) => {
    state.scores[tag] = (state.scores[tag] || 0) + value;
  });
}

function scorePersona(persona) {
  const weighted = Object.entries(persona.weights).reduce((sum, [tag, weight]) => {
    return sum + (state.scores[tag] || 0) * weight;
  }, 0);
  const direct = (state.scores[persona.id] || 0) * 5;
  const varietyBonus = persona.tags.filter((tag) => (state.scores[tag] || 0) > 0).length * 2;
  return weighted + direct + varietyBonus;
}

function getRankedPersonas() {
  return personas
    .map((persona) => ({ ...persona, score: scorePersona(persona) }))
    .sort((a, b) => b.score - a.score);
}

function getTopTags() {
  return Object.entries(state.scores)
    .filter(([, value]) => value > 0)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([tag]) => tag);
}

function showResult() {
  refs.progressBar.style.width = "100%";
  refs.questionCard.hidden = true;
  refs.resultPanel.hidden = false;

  const ranked = getRankedPersonas();
  const winner = ranked[0];
  const runner = ranked[1];
  const isClose = runner && winner.score > 0 && (winner.score - runner.score) / winner.score <= 0.05;
  const topTags = getTopTags();

  document.body.dataset.personaGroup = getPersonaGroup(winner);
  refs.resultTitle.textContent = winner.title;
  refs.resultSubtitle.textContent = isClose
    ? `${winner.subtitle} 但你体内还住着一个 ${runner.title}，两种桌面人格正在反复横跳。`
    : winner.subtitle;
  refs.resultBadge.textContent = winner.id;
  refs.resultStory.textContent = personaStories[winner.id] || winner.subtitle;
  refs.dimensionStats.innerHTML = renderDimensionStats();
  refs.symptomList.innerHTML = winner.symptoms.map((item) => `<li>${item}</li>`).join("");
  refs.teamGuide.textContent = winner.guide;
  refs.dangerZone.textContent = winner.danger;
  refs.tagCloud.innerHTML = topTags.map((tag) => `<span class="tag-chip">${tag}</span>`).join("");

  const secondary = isClose ? `，副人格 ${runner.title}` : "";
  refs.shareText.textContent = `我是 TGTI ${winner.title}${secondary}。${winner.subtitle}`;
}

function getDimensionStats() {
  const rawStats = dimensionConfig.map((dimension) => {
    const score = dimension.tags.reduce((sum, tag) => sum + (state.scores[tag] || 0), 0);
    return { ...dimension, score: Math.max(0, score) };
  });
  const total = rawStats.reduce((sum, item) => sum + item.score, 0) || 1;
  return rawStats.map((item) => ({
    ...item,
    percent: Math.max(5, Math.round((item.score / total) * 100)),
  }));
}

function renderDimensionStats() {
  return getDimensionStats()
    .map(
      (item) => `
        <div class="dimension-row">
          <span class="dimension-name">${item.name}</span>
          <span class="dimension-track"><span class="dimension-fill" style="width: ${item.percent}%"></span></span>
          <span class="dimension-value">${item.percent}%</span>
        </div>
      `,
    )
    .join("");
}

function getPersonaGroup(persona) {
  if (["EURO", "VP", "AP", "RULE", "LAW", "BGG"].includes(persona.id)) {
    return "euro";
  }
  if (["PARTY", "MEME", "TALK", "GO", "HOST", "N00B", "ANY", "FREE"].includes(persona.id)) {
    return "party";
  }
  if (["AT", "BASH", "DICE", "TOPD", "LOS", "TCG"].includes(persona.id)) {
    return "epic";
  }
  if (["KS", "DUST", "PM", "AFK", "MPL"].includes(persona.id)) {
    return "life";
  }
  return "special";
}

function renderOverview() {
  refs.overviewGrid.innerHTML = personas
    .map((persona) => {
      const group = getPersonaGroup(persona);
      const meta = personaGroupMeta[group];
      return `
        <article class="persona-card" style="--card-color: ${meta.color}; --card-bg: ${meta.bg}">
          <div class="persona-avatar">${persona.id}</div>
          <div>
            <h3>${persona.name} ${persona.id}</h3>
            <p>${persona.subtitle}</p>
          </div>
        </article>
      `;
    })
    .join("");
}

function openOverview() {
  refs.overviewOverlay.hidden = false;
  document.body.classList.add("modal-open");
}

function closeOverview() {
  refs.overviewOverlay.hidden = true;
  document.body.classList.remove("modal-open");
}

function resetQuiz() {
  state.index = 0;
  state.scores = {};
  state.answers = [];
  document.body.removeAttribute("data-persona-group");
  refs.questionCard.hidden = false;
  refs.resultPanel.hidden = true;
  renderQuestion();
}

async function copyResult() {
  const text = refs.shareText.textContent;
  try {
    await navigator.clipboard.writeText(text);
    refs.copyButton.textContent = "已复制";
    setTimeout(() => {
      refs.copyButton.textContent = "复制结果";
    }, 1400);
  } catch {
    refs.copyButton.textContent = "复制失败";
    setTimeout(() => {
      refs.copyButton.textContent = "复制结果";
    }, 1400);
  }
}

refs.restartButton.addEventListener("click", resetQuiz);
refs.copyButton.addEventListener("click", copyResult);
refs.overviewButton.addEventListener("click", openOverview);
refs.closeOverviewButton.addEventListener("click", closeOverview);
refs.overviewOverlay.addEventListener("click", (event) => {
  if (event.target === refs.overviewOverlay) {
    closeOverview();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !refs.overviewOverlay.hidden) {
    closeOverview();
  }
});

renderOverview();
renderQuestion();
