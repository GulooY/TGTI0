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
    weights: { RULE: 5, HOST: 2, GEEK: 1 },
    subtitle: "FAQ、勘误、原文解释权都在你手里。你不是玩家，是桌面秩序本身。",
    symptoms: ["规则书会被你翻出使用痕迹", "别人说差不多时你会短暂失去笑容", "你能记住上次谁漏结算了负面效果"],
    guide: "让他讲关键流程和争议边界，他会把混乱压成可玩的局。",
    danger: "最怕“我们按感觉来吧”。",
  },
  {
    id: "LOOP",
    name: "口胡师",
    title: "口胡师 LOOP",
    tags: ["LOOP", "TALK"],
    weights: { LOOP: 5, RULE: 2, TALK: 2 },
    subtitle: "擅长在规则缝隙里找到人生出路。你不是偷鸡，只是文本理解比较自由。",
    symptoms: ["回合结束后还能补一句“其实我刚刚可以”", "谈判条款比游戏机制还复杂", "全桌会突然开始要求你逐字朗读卡牌"],
    guide: "和他玩要把承诺写清楚，最好让规则书坐在桌中央。",
    danger: "最怕被一句“官方 FAQ 说不行”当场封印。",
  },
  {
    id: "EURO",
    name: "德战神",
    title: "德战神 EURO",
    tags: ["EURO", "SCORE", "THINK"],
    weights: { EURO: 5, SCORE: 2, THINK: 1, GEEK: 1 },
    subtitle: "木头麦子工人分数轨，全是精神氧气。别人玩游戏，你在做农业金融审计。",
    symptoms: ["资源转换越多越安心", "听到低随机会自动坐直", "对“像上班”的评价感到困惑，因为上班没有这么爽"],
    guide: "给他一局节奏清晰、策略可复盘的游戏，他会玩到眼睛发亮。",
    danger: "最怕关键胜负被一个骰子直接带走。",
  },
  {
    id: "SCORE",
    name: "分奴仙",
    title: "分奴仙 SCORE",
    tags: ["SCORE", "EURO"],
    weights: { SCORE: 5, EURO: 2, THINK: 1 },
    subtitle: "结算前安静如鸡，结算后全桌沉默。你没有情绪，只有分差。",
    symptoms: ["嘴上说随便玩，手上全是效率路线", "能记住自己第二轮少拿的 1 分", "结算时经常出现“你什么时候这么高”的惊呼"],
    guide: "别只看他有没有打人，他可能已经在分数轨上绕后了。",
    danger: "最怕打了三小时发现自己少算一个乘区。",
  },
  {
    id: "THINK",
    name: "长考王",
    title: "长考王 THINK",
    tags: ["THINK", "EURO"],
    weights: { THINK: 5, EURO: 2, SCORE: 1 },
    subtitle: "你的回合像一部独立电影。不是慢，是未来分支太多。",
    symptoms: ["摸下巴是发动技能", "别人催你时你刚算到第三种路线", "你觉得五分钟很快，因为脑内已经过了五轮"],
    guide: "给他明确的思考时间和公开信息，他会产出非常精密的操作。",
    danger: "最怕全桌用沉默和眼神计时。",
  },
  {
    id: "EPIC",
    name: "美战神",
    title: "美战神 EPIC",
    tags: ["EPIC", "DICE", "BASH"],
    weights: { EPIC: 5, DICE: 2, BASH: 2 },
    subtitle: "主题、骰子、剧情、互车，缺一不可。今晚可以输，但不能没有史诗感。",
    symptoms: ["模型一铺开就自动入戏", "最后一回合相信奇迹", "互车时会说这是剧情需要"],
    guide: "给他冲突、代入和翻盘空间，他会把一局游戏玩成电影预告片。",
    danger: "最怕全程只有安静换资源。",
  },
  {
    id: "BASH",
    name: "互车王",
    title: "互车王 BASH",
    tags: ["BASH", "TALK", "EPIC"],
    weights: { BASH: 5, TALK: 2, EPIC: 1 },
    subtitle: "我可以不赢，但你不能舒服。友谊压力测试的拟人化版本。",
    symptoms: ["看到第一名就像看到公共目标", "落后时战斗力反而上升", "擅长把私人恩怨包装成桌面正义"],
    guide: "让他知道互车有收益，他会把局势搅得非常好看。",
    danger: "最怕全桌各玩各的没人响应围剿。",
  },
  {
    id: "DICE",
    name: "黑骰命",
    title: "黑骰命 DICE",
    tags: ["DICE", "EPIC"],
    weights: { DICE: 5, EPIC: 1, THINK: 1 },
    subtitle: "每次投骰都像和宇宙打官司。概率懂不懂你不知道，骰子肯定不懂。",
    symptoms: ["投骰前很虔诚，投完后很哲学", "常说概率不是这么算的", "会记住每一次离谱失败"],
    guide: "给他一点补偿机制或重投机会，能有效保护桌面心率。",
    danger: "最怕关键判定连续失败。",
  },
  {
    id: "LUCK",
    name: "神抽狗",
    title: "神抽狗 LUCK",
    tags: ["LUCK", "CARDS"],
    weights: { LUCK: 5, CARDS: 2, EPIC: 1 },
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
    tags: ["TALK", "LOOP", "MEME"],
    weights: { TALK: 5, LOOP: 1, MEME: 1 },
    subtitle: "身份局见到你，空气都会变浑。你坐下以后，游戏人数自动加一。",
    symptoms: ["发言阶段像开发布会", "能把普通交易讲成战略合作", "沉默玩家会被你点名唤醒"],
    guide: "给他谈判、身份、结盟空间，他会把桌面变成小型联合国。",
    danger: "最怕机制自闭局没人理他。",
  },
  {
    id: "HOST",
    name: "桌控官",
    title: "桌控官 HOST",
    tags: ["HOST", "RULE", "PLAN"],
    weights: { HOST: 5, RULE: 2, PLAN: 2, CARE: 1 },
    subtitle: "讲规则、递 token、照顾新人，一人多用。你是桌面操作系统。",
    symptoms: ["别人还没落座，你已经排好组件", "能同时处理规则问题和情绪问题", "经常玩着玩着变成半个裁判"],
    guide: "让他掌握流程，他会让一桌人少坐牢很多。",
    danger: "最怕所有人都默认他负责一切。",
  },
  {
    id: "CARE",
    name: "护新会",
    title: "护新会 CARE",
    tags: ["CARE", "HOST", "PARTY"],
    weights: { CARE: 5, HOST: 2, PARTY: 1 },
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
    id: "PLEDGE",
    name: "众筹僧",
    title: "众筹僧 PLEDGE",
    tags: ["PLEDGE", "DUST", "SHINE"],
    weights: { PLEDGE: 5, DUST: 2, SHINE: 1 },
    subtitle: "豪华版、金属币、全扩，一键超度钱包。你买的不是桌游，是未来的神龛。",
    symptoms: ["看到独享内容会心跳加速", "常说这次真的最后一次 all-in", "物流信息比游戏规则更熟"],
    guide: "他会带来最新、最大、最闪的盒子，请负责帮他开。",
    danger: "最怕到货后发现没人有空。",
  },
  {
    id: "DUST",
    name: "灰柜王",
    title: "灰柜王 DUST",
    tags: ["DUST", "PLEDGE"],
    weights: { DUST: 5, PLEDGE: 2, GEEK: 1 },
    subtitle: "柜子像博物馆，展品叫“总有一天”。你买的是希望，吃灰的是现实。",
    symptoms: ["推荐时总提到自己还没开的盒", "柜子容量永远差一点", "对塑封有复杂感情"],
    guide: "帮他定一个开盒日期，比劝他少买更有效。",
    danger: "最怕朋友问这盒开过几次。",
  },
  {
    id: "PLAN",
    name: "组局佬",
    title: "组局佬 PLAN",
    tags: ["PLAN", "HOST"],
    weights: { PLAN: 5, HOST: 2, RULE: 1 },
    subtitle: "约人排期选游戏，开局前已完成项目交付。你不是在组局，是在做资源调度。",
    symptoms: ["群里最常出现你的投票和接龙", "有人鸽局时立刻切备用方案", "局没开始已经累了一轮"],
    guide: "及时回复、准时到场，就是对他最大的尊重。",
    danger: "最怕临时鸽和已读不回。",
  },
  {
    id: "GHOST",
    name: "鸽王",
    title: "鸽王 GHOST",
    tags: ["GHOST"],
    weights: { GHOST: 6, FREE: 1 },
    subtitle: "报名最积极，开局前突然人间蒸发。你的常驻技能是“兄弟们我突然”。",
    symptoms: ["报名时热血，开局前失联", "理由往往很真，频率也很真", "群里对你的座位有备用预案"],
    guide: "给他安排可替补位置，别让整桌命运绑在他身上。",
    danger: "最怕被组局佬公开点名。",
  },
  {
    id: "GEEK",
    name: "查分员",
    title: "查分员 GEEK",
    tags: ["GEEK", "EURO"],
    weights: { GEEK: 5, EURO: 2, RULE: 1 },
    subtitle: "好不好玩先看均分、权重和评论区战争。你回答问题的方式是“综合来看”。",
    symptoms: ["选游戏前先查评分", "知道很多没玩过但研究过的游戏", "能从评论区判断一盒是否适合本桌"],
    guide: "让他做选品顾问，但最终还是要有人真的开盒。",
    danger: "最怕全桌只想凭感觉乱选。",
  },
  {
    id: "SHINE",
    name: "摆盘师",
    title: "摆盘师 SHINE",
    tags: ["SHINE", "PLEDGE"],
    weights: { SHINE: 5, PLEDGE: 1, DUST: 1 },
    subtitle: "开局前先让这一桌看起来贵三倍。你不是摆组件，是布展。",
    symptoms: ["token 必须顺手，卡牌必须对齐", "金属币和收纳能提升你的灵魂浓度", "拍照角度比起始玩家还重要"],
    guide: "给他一点整理时间，他会让桌面体验直接升级。",
    danger: "最怕有人把组件随手一堆。",
  },
  {
    id: "BARD",
    name: "跑团吟游",
    title: "跑团吟游 BARD",
    tags: ["BARD", "DOOM"],
    weights: { BARD: 5, DOOM: 2 },
    subtitle: "“很短的导入”通常意味着 40 分钟世界观。你不是开团，是开史诗序章。",
    symptoms: ["NPC 有家族史，村口有政治经济结构", "玩家还没进门，你已经准备三条支线", "说短导入时全桌会互相看一眼"],
    guide: "给他认真听众和愿意入戏的玩家，他会把晚上变成长篇回忆。",
    danger: "最怕玩家只想立刻踹门。",
  },
  {
    id: "DOOM",
    name: "掉 DOOM 人",
    title: "掉 DOOM 人 DOOM",
    tags: ["DOOM", "BARD", "MEME"],
    weights: { DOOM: 5, BARD: 2, MEME: 1 },
    subtitle: "调查没开始，理智已经开始退款。你不是来破案的，是来变成案子的。",
    symptoms: ["看到门就想开，看到 NPC 就怀疑", "理智值像限时资源", "越危险越有节目效果"],
    guide: "给他一点线索和一点恐怖，他会自己走向更恐怖的地方。",
    danger: "最怕谨慎到没有任何事故。",
  },
  {
    id: "LASER",
    name: "尺子侠",
    title: "尺子侠 LASER",
    tags: ["LASER", "RULE"],
    weights: { LASER: 5, RULE: 2, SHINE: 1 },
    subtitle: "1 毫米距离也有灵魂和争议。别人看到小人，你看到射线、掩体和角度。",
    symptoms: ["量距离时全桌屏住呼吸", "对视线判定有宗教级认真", "拍照留证不是玩笑，是流程"],
    guide: "给他清晰边界和工具，他会在严谨里获得快乐。",
    danger: "最怕有人说差不多就行。",
  },
  {
    id: "CARDS",
    name: "牌佬魂",
    title: "牌佬魂 CARDS",
    tags: ["CARDS", "LUCK"],
    weights: { CARDS: 5, LUCK: 2, GEEK: 1 },
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
  LOOP: "你不是单纯会玩规则，你是会和规则聊天。卡牌写了什么、没写什么、标点符号暗示了什么，你都能展开一场桌面法庭。你经常让对手产生一种复杂感受：明明觉得哪里不对，但又一时说不出哪里不对。和你同桌，规则书最好别离场，因为它随时可能被传唤作证。",
  EURO: "你对资源转换有一种近乎天然的亲切感。木头变房子，房子变分数，分数变精神稳定，这条链路在你脑内非常顺滑。你不需要太多剧情，只要系统够优雅、路线够多、结算够扎实，你就能获得深层快乐。别人说像上班，你心想上班要是这么公平就好了。",
  SCORE: "你是那种结算前不显山不露水，结算后让全桌沉默两秒的人。你嘴上说随便玩，身体却诚实地朝最高效率路线移动。你不一定最爱打人，也不一定最爱发言，但你会在没人注意的角落把分数一点点码起来。你的恐怖之处在于：你看起来没在赢，但分数轨知道真相。",
  THINK: "你的一回合里住着很多个平行宇宙。每个选择都通往不同未来，每个资源都牵动五轮后的命运。别人看到你在沉默，你其实正在脑内运行一台桌游模拟器。你不是故意拖时间，你只是对“随便走一步”这件事有生理性不适。催你的人不懂，你刚刚差点算出人生最优解。",
  EPIC: "你玩桌游不是为了安静地优化，而是为了见证命运掀桌。模型、剧情、骰子、背叛、最后一回合奇迹，这些东西合在一起才叫一局有血有肉的游戏。你可以接受输，但不能接受没有记忆点地输。和你同桌，大家常常会忘记最终分数，但记得某个离谱瞬间是谁喊得最大声。",
  BASH: "你对胜利的态度很灵活，对让别人舒服这件事则比较严格。只要有人领先，你就能迅速从普通玩家进化成公共危机发言人。你擅长把个人恩怨包装成桌面正义，把围剿讲成战略平衡。你不是恶意，你只是觉得一局游戏如果没人被针对，就像火锅没开火。",
  DICE: "你和骰子之间有一段长期、复杂、无法公开和解的关系。每次投骰前你都愿意相信科学，每次投完你又开始怀疑科学是不是没来上班。你的失败经常非常戏剧化，成功也带着一种劫后余生的荒诞感。你不是讨厌随机，你只是希望随机不要总是精准地踩你脸上。",
  LUCK: "你的牌库像认识你。别人苦苦规划十轮，你在最需要的时候伸手一摸，故事就换了导演。你常常把神抽解释成牌库理解、节奏把握、心理博弈，但全桌都知道这里面有一点玄学。你的存在提醒大家：桌游是策略游戏，也是命运突然给某个人递麦克风的地方。",
  PARTY: "你是毛线桌的天然燃料。规则可以薄，笑声必须厚；机制可以简单，事故一定要密集。你擅长把一个本来普通的小游戏玩成群聊长期素材，也擅长让拘谨的新玩家突然放下包袱。你不一定记得最后谁赢了，但你一定记得谁在第三轮笑到无法继续读题。",
  MEME: "你是桌游局里的梗循环系统。一句废话只要被你抓住，就可能变成今晚的精神图腾。你很懂桌面空气，知道什么时候该插一句，什么时候该把尴尬变成笑点。你输掉一局并不严重，因为你常常赢得更持久的东西：一个会在群里复读半年的烂梗。",
  TALK: "你一开口，桌面就从游戏区升级成会议现场。谈判、身份、结盟、背刺、控票，这些都是你的舒适区。你能让安静的人说话，让摇摆的人站队，让普通交易听起来像历史转折。你不是话多，你是在为这局游戏提供必要的空气扰动。",
  HOST: "你是桌游局能顺利发生的原因之一。你会讲规则、摆组件、照顾新人、提醒流程，还能在争议出现时把大家从情绪里捞回来。你的强大不一定体现在分数上，而体现在一桌人玩完之后觉得“这局很顺”。你像桌面操作系统，平时不抢戏，出问题时大家才发现你一直在运行。",
  CARE: "你对新手有一种近乎本能的保护欲。别人看到新手可能想到提款机，你看到的是一颗需要慢慢带进坑的种子。你会主动解释、提醒、放水、找台阶，甚至牺牲自己的胜率换别人第一次体验不坐牢。你的桌游观很温柔：赢一局很爽，但多一个愿意再来的人更重要。",
  ANY: "你是桌游生态里的万能接口。德式能坐，美式能冲，毛线能笑，跑团能演，战棋也能凑过去看看。你不一定每类都最精，但你有一种稀缺能力：不扫兴。朋友喊你时不用写复杂说明，只要说有局，你的人格系统就会自动适配。",
  FREE: "你是桌游圈的轻装传说。你没有占用太多柜子空间，却出现在很多人的局后合照里。你对盒子的拥有欲不强，对参与感的捕捉能力很强。你像一个游走型玩家，哪里有空位，哪里就可能出现你的身影。别人买游戏，你贡献稳定出勤，这也是生态平衡的一部分。",
  PLEDGE: "你的钱包和众筹页面之间存在一种神秘通道。豪华版、全扩、金属币、独享内容，这些词对你来说不是营销，是召唤仪式。你买的不只是游戏，还有未来某一天开盒时全桌惊叹的可能性。虽然那一天可能迟到很久，但你坚信每一个大盒都在等待属于它的命运之夜。",
  DUST: "你的柜子很有故事，只是很多故事还停留在塑封阶段。你并非真的不玩，你只是拥有太多“总有一天”的计划。每一盒游戏买下时都曾燃烧过理想，后来它们安静地变成家中地形。你对吃灰有自知之明，但这并不妨碍你继续相信下一盒会不一样。",
  PLAN: "你是开局前最累的人。别人以为桌游是从落座开始，你知道真正的游戏从约人、排期、改人数、选备选、催回复那一刻就开始了。你的能力让一群想玩但懒得组织的人真的坐到一起。你不是单纯组局，你是在和时间、地点、人数、鸽子进行多方谈判。",
  GHOST: "你报名时真心想来，消失时也真有理由，这正是问题复杂的地方。你像桌游群里的不确定事件卡，平时存在感不低，开局前风险上升。大家可能嘴上吐槽你，但也逐渐为你建立了备用方案。你的人生不是不热爱桌游，只是经常在开局前触发支线任务。",
  GEEK: "你选游戏像做研究。均分、权重、排名、评论区争议、最佳人数、推荐时长，都是你判断一盒游戏的证据链。你不一定每盒都玩过，但你能讲出很多盒为什么适合或不适合本桌。别人问好不好玩，你很难只回答好或不好，因为你脑内已经打开了综合评估报告。",
  SHINE: "你相信桌面美学会影响游戏灵魂。卡牌要齐，token 要顺，金属币要有手感，收纳要让下一次开局少受罪。你不是单纯爱摆，你是在给一局游戏建立仪式感。别人急着开，你先把桌面整理成值得拍照的样子，然后这局突然就显得高级了。",
  BARD: "你脑子里永远有一张比桌面更大的地图。一个村口 NPC 可以有三代家谱，一段短导入可以自然生长成史诗序章。你不是拖，你是在给世界装地基。玩家可能嘴上催快点，但很久以后，他们记住的往往正是你那些看似过量的细节。",
  DOOM: "你在调查局里像一根点燃的导火索。谨慎当然很好，但门就在那儿，不开一下怎么知道后面是不是剧情？你不怕理智下降，怕的是一晚上无事发生。你常常让队友头疼，也让故事变得有声音。你不是来破案的，你是来让案子承认你来过。",
  LASER: "你对距离和视线有一种精确的信仰。别人觉得差不多，你知道差一毫米可能就是生与死、命中与落空、规则与混沌。你不是抬杠，你是在维护战场的几何尊严。和你玩战棋，尺子不是工具，是圣物；拍照留证不是夸张，是历史档案。",
  CARDS: "你的桌游大脑自带卡牌语言包。资源交换是 tempo，关键回合是斩杀线，随机摸牌也能被你分析出牌库意志。哪怕不是卡牌游戏，你也会下意识寻找构筑、循环、爆发和节奏窗口。你不是把桌游玩成牌游，你只是看见了万物皆有牌序的一面。",
};

const dimensionConfig = [
  { id: "rule", name: "规则严谨", tags: ["RULE", "LOOP", "HOST", "GEEK", "LASER"] },
  { id: "win", name: "胜负跑分", tags: ["SCORE", "EURO", "THINK", "BASH", "CARDS", "LUCK"] },
  { id: "social", name: "社交整活", tags: ["PARTY", "MEME", "TALK", "EPIC", "BARD", "DOOM", "CARE", "GO"] },
  { id: "life", name: "桌游生态", tags: ["PLEDGE", "DUST", "PLAN", "FREE", "ANY", "SHINE", "GHOST"] },
];

const anchorPersonas = {
  TALK: 22,
  GHOST: 18,
};

const questions = [
  {
    phase: "主测试",
    text: "今晚桌游店只剩一个空桌，你最想把它开成：",
    options: [
      o("资源转换精密到能听见脑子转的德式局。", { EURO: 3, SCORE: 1 }),
      o("模型铺满、骰子乱飞、友情暂时下线的美式局。", { EPIC: 3, BASH: 1 }),
      o("规则三分钟、笑声三小时的毛线局。", { PARTY: 3, MEME: 1 }),
      o("一开口就是世界观，今晚先别睡的跑团局。", { BARD: 3, DOOM: 1 }),
      o("尺子、视线、掩体都要严谨的战棋局。", { LASER: 3, RULE: 1 }),
      o("构筑、牌序、斩杀线全都在线的卡牌局。", { CARDS: 3, LUCK: 1 }),
    ],
  },
  {
    phase: "主测试",
    text: "群里说“今晚谁来负责一下”，你最可能接过哪部分：",
    options: [
      o("我来讲规和控流程，别让新人坐牢。", { HOST: 3, RULE: 1, CARE: 1 }),
      o("我来约人排期，谁鸽我记小本。", { PLAN: 3, HOST: 1 }),
      o("我带盒，别问开没开过。", { PLEDGE: 2, DUST: 2 }),
      o("你们决定，我人到就行。", { FREE: 3, ANY: 1 }),
      o("我负责气氛和烂梗，沉默局不许存在。", { MEME: 3, PARTY: 1 }),
      o("我先查评分、人数和评论区雷点。", { GEEK: 3, EURO: 1 }),
    ],
  },
  {
    phase: "主测试",
    text: "一局游戏里，最能让你当场血压变化的是：",
    options: [
      o("规则被玩错，还说“差不多吧”。", { RULE: 3, LOOP: 1 }),
      o("队友长考到我开始怀疑时间。", { PARTY: 2, HOST: 1 }),
      o("骰子在关键时刻精准背刺。", { DICE: 3 }),
      o("朋友临开局说“我突然”。", { PLAN: 2, GHOST: 2 }),
      o("全桌没人说话，像在集体上班。", { TALK: 3, PARTY: 1 }),
      o("结算才发现自己被悄悄拉开 20 分。", { SCORE: 3 }),
    ],
  },
  {
    phase: "主测试",
    text: "如果今晚这局必须付出一点代价，你最能接受牺牲：",
    options: [
      o("钱包。豪华版都点了，还差这一点吗。", { PLEDGE: 3 }),
      o("睡眠。剧情开了就没有自然结束。", { BARD: 2, EPIC: 1 }),
      o("友情。互车完明天再修复关系。", { BASH: 3 }),
      o("脑细胞。路线复杂才说明今晚值了。", { EURO: 2, THINK: 2 }),
      o("形象。只要好笑，我可以不要包袱。", { MEME: 3 }),
      o("柜子空间。反正总能再挤一盒。", { DUST: 3, PLEDGE: 1 }),
    ],
  },
  {
    phase: "主测试",
    text: "朋友复盘你这个人，最可能给你贴的标签是：",
    options: [
      o("他会教，复杂游戏到他嘴里都能落地。", { HOST: 3, CARE: 1 }),
      o("他会赢，安静半局结算突然起飞。", { SCORE: 3 }),
      o("他会买，群里新品消息基本来自他。", { PLEDGE: 3, DUST: 1 }),
      o("他会嘴，身份局空气都被他说浑。", { TALK: 3, LOOP: 1 }),
      o("他会鸽，报名时很热血，开局前很神秘。", { GHOST: 4 }),
      o("他什么都玩，只要有局就有他。", { ANY: 3, FREE: 1 }),
    ],
  },
  {
    phase: "主测试",
    text: "如果你变成一张桌游配件，你觉得自己最像：",
    options: [
      o("米宝。朴素但核心，放哪都能开工。", { EURO: 2, SHINE: 1 }),
      o("骰子。命运由我滚出来，别问公不公平。", { DICE: 2, EPIC: 1 }),
      o("规则书。没有我你们迟早出事。", { RULE: 3 }),
      o("金属币。贵一点，但手感真的不一样。", { PLEDGE: 2, SHINE: 2 }),
      o("调查员卡。理智值只是剧情燃料。", { DOOM: 3, BARD: 1 }),
      o("尺子。差一毫米都不是同一个世界。", { LASER: 3 }),
    ],
  },
  {
    phase: "主测试",
    text: "新游戏刚拆封，规则书 28 页，你的第一反应是：",
    options: [
      o("“我先读，大家别碰组件。”", { RULE: 2, HOST: 1 }),
      o("“摆上吧，玩错算教学局。”", { GO: 2, PARTY: 1 }),
      o("“BGG 评分多少？有没有教学视频？”", { GEEK: 2 }),
      o("“这收纳不行，我先分 token。”", { SHINE: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "朋友说“这游戏很简单”，你发现桌上有 300 个 token：",
    options: [
      o("“很好，有深度。”", { EURO: 2 }),
      o("“简单指的是他讲得简单，不是我活得简单。”", { THINK: 2 }),
      o("“token 多说明拍照好看。”", { SHINE: 2 }),
      o("“我现在退出还来得及吗？”", { FREE: 2, PARTY: 1 }),
    ],
  },
  {
    phase: "主测试",
    text: "教学局第一轮，你最可能：",
    options: [
      o("严格按流程示范。", { RULE: 2, HOST: 2 }),
      o("直接打出一个离谱操作让大家记住规则。", { GO: 2, MEME: 1 }),
      o("暗中寻找最高分路线。", { SCORE: 2, EURO: 1 }),
      o("先和旁边的人结盟。", { TALK: 1, BASH: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "规则争议出现，全桌看向你：",
    options: [
      o("查规则书、FAQ、勘误，三堂会审。", { RULE: 3, GEEK: 1 }),
      o("“按字面意思，我觉得我可以。”", { LOOP: 3 }),
      o("“别查了，节目效果优先。”", { PARTY: 2, MEME: 1 }),
      o("“投票吧，少数服从多数。”", { HOST: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "你落后第一名 40 分：",
    options: [
      o("继续优化路线，尊严可以输，效率不能输。", { SCORE: 2, EURO: 1 }),
      o("开始组织全桌围剿第一名。", { BASH: 2, TALK: 1 }),
      o("进入“反正输了那我负责搞笑”模式。", { MEME: 2, PARTY: 1 }),
      o("说“这局只是熟悉规则”，但声音有点抖。", { GO: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "快结算了，你在做什么：",
    options: [
      o("已经心算出自己 87 分。", { SCORE: 3 }),
      o("问“谁第一？我现在还能打谁？”", { BASH: 3 }),
      o("拍照发群：“今晚又是一场恶战。”", { SHINE: 1, PARTY: 1 }),
      o("不知道自己几分，但知道刚刚很好笑。", { PARTY: 3 }),
    ],
  },
  {
    phase: "主测试",
    text: "骰子决定关键胜负，你会：",
    options: [
      o("相信命运，直接投。", { EPIC: 1, DICE: 2 }),
      o("先算概率，再被概率背叛。", { DICE: 2, THINK: 1 }),
      o("把骰子换个角度，进行玄学预热。", { DICE: 2, MEME: 1 }),
      o("“为什么我要玩这种不可控的东西？”", { EURO: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "抽牌阶段，你摸到神牌：",
    options: [
      o("“我就说牌库理解很重要。”", { LUCK: 2, CARDS: 2 }),
      o("立刻开始表演命运之子。", { MEME: 2, EPIC: 1 }),
      o("冷静打出，然后假装这是计划的一部分。", { SCORE: 2 }),
      o("不敢相信，先检查是不是摸错牌。", { RULE: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "有人长考 5 分钟：",
    options: [
      o("理解，他在构筑未来。", { THINK: 2, EURO: 1 }),
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
      o("装弱装晕，实际记了全场信息。", { LOOP: 1, SCORE: 2 }),
      o("发言内容不重要，气势必须很足。", { MEME: 1, TALK: 2 }),
      o("“我新手，我不知道。”但眼神很清醒。", { GO: 2, LOOP: 1 }),
    ],
  },
  {
    phase: "主测试",
    text: "谈判游戏里，你的核心策略是：",
    options: [
      o("画饼、结盟、背刺，一条龙服务。", { TALK: 2, BASH: 2 }),
      o("条款写清楚，别给我口头承诺。", { LOOP: 3 }),
      o("不谈感情，只谈资源汇率。", { EURO: 2, SCORE: 1 }),
      o("被别人拉去结盟，然后莫名其妙赢了。", { FREE: 1, LUCK: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "新人加入重度桌：",
    options: [
      o("我来教，保证不坐牢。", { HOST: 2, CARE: 2 }),
      o("先让他玩个轻的，别直接上刑。", { CARE: 2, PARTY: 1 }),
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
      o("最好能互车，我今天情绪很好。", { EPIC: 1, BASH: 2 }),
      o("最好别超过 20 分钟，我是来笑的。", { PARTY: 3 }),
    ],
  },
  {
    phase: "主测试",
    text: "看到 PLEDGE 豪华版全扩：",
    options: [
      o("all-in，少一个扩展都不完整。", { PLEDGE: 4 }),
      o("等朋友买，我负责出席。", { FREE: 3 }),
      o("先看主游戏开不开得动。", { DUST: 2, GEEK: 1 }),
      o("金属币可以不要吗？不，可以要。", { SHINE: 2, PLEDGE: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "你的桌游柜状态：",
    options: [
      o("已经从柜子变成地形。", { DUST: 2, PLEDGE: 1 }),
      o("没几盒，但我局很多。", { FREE: 3 }),
      o("分门别类，收纳舒适。", { SHINE: 3 }),
      o("我没有柜子，我有愿望清单。", { GEEK: 2, PLEDGE: 1 }),
    ],
  },
  {
    phase: "主测试",
    text: "朋友临时鸽局：",
    options: [
      o("立刻重排人数和游戏。", { PLAN: 2, HOST: 2 }),
      o("嘴上没事，心里记档。", { RULE: 2 }),
      o("“那我们改毛线吧。”", { PARTY: 2 }),
      o("我就是那个临时有事的人。", { GHOST: 5 }),
    ],
  },
  {
    phase: "主测试",
    text: "你报名一场局之后：",
    options: [
      o("提前看规则，准时到场。", { RULE: 2 }),
      o("提前问有没有新手位。", { CARE: 2 }),
      o("到场问“今天玩啥？”", { FREE: 2, GO: 1 }),
      o("开局前 20 分钟说“兄弟们我突然”。", { GHOST: 5 }),
    ],
  },
  {
    phase: "主测试",
    text: "跑团 BARD 说“很短的导入”：",
    options: [
      o("坐好听世界观。", { BARD: 3 }),
      o("问我什么时候能行动。", { GO: 2 }),
      o("已经开始写人物小传。", { BARD: 2, DOOM: 1 }),
      o("担心今晚又进不了主线。", { THINK: 1, BARD: 1 }),
    ],
  },
  {
    phase: "主测试",
    text: "COC 调查现场，你会：",
    options: [
      o("谨慎推理，保护理智。", { DOOM: 2, LOOP: 1 }),
      o("先开门，有事再说。", { GO: 1, DOOM: 2 }),
      o("调查员可以死，节目效果不能死。", { MEME: 2, DOOM: 2 }),
      o("我怀疑每个 NPC。", { LOOP: 1, DOOM: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "战棋量距离差 1 毫米：",
    options: [
      o("1 毫米也是距离。", { LASER: 3 }),
      o("大家开心就好，差不多吧。", { PARTY: 2 }),
      o("查视线、掩体、角度。", { RULE: 1, LASER: 3 }),
      o("我先拍照留证。", { SHINE: 1, LASER: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "卡牌构筑时，你最在意：",
    options: [
      o("斩杀线、节奏、资源交换。", { CARDS: 4 }),
      o("神抽翻盘的戏剧性。", { LUCK: 3 }),
      o("卡图好不好看。", { SHINE: 2 }),
      o("别问，抄牌表。", { GEEK: 1, CARDS: 2 }),
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
      o("爽，开始规划 5 回合。", { EURO: 2, THINK: 2 }),
      o("先问哪个最值钱。", { SCORE: 3 }),
      o("看起来像上班，但我可以试试。", { ANY: 2 }),
      o("我已经想去隔壁毛线桌。", { PARTY: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "美式大盒开桌，模型铺满：",
    options: [
      o("代入感拉满，今晚就是史诗。", { EPIC: 3 }),
      o("先问规则时长和随机性。", { GEEK: 2 }),
      o("我负责拍照。", { SHINE: 2 }),
      o("我负责被打。", { DICE: 1, MEME: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "你最像哪种桌面生物：",
    options: [
      o("讲规的人。", { HOST: 2, RULE: 2 }),
      o("组局的人。", { PLAN: 3 }),
      o("买盒的人。", { PLEDGE: 2, DUST: 2 }),
      o("被喊就到的人。", { FREE: 2, ANY: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "游戏结束后，你最常说：",
    options: [
      o("“我第二轮不该那样打。”", { SCORE: 2, THINK: 1 }),
      o("“刚才那段真的太好笑了。”", { PARTY: 2, MEME: 1 }),
      o("“这游戏机制挺妙。”", { EURO: 2 }),
      o("“下次再开，我把扩展带上。”", { PLEDGE: 1, PLAN: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "朋友问你推荐桌游：",
    options: [
      o("按人数、时长、重度列清单。", { HOST: 1, GEEK: 2 }),
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
      o("临时鸽。", { PLAN: 3 }),
    ],
  },
  {
    phase: "主测试",
    text: "如果桌游是一种修行，你修的是：",
    options: [
      o("分数大道。", { SCORE: 3 }),
      o("规则正法。", { RULE: 3 }),
      o("众筹功德。", { PLEDGE: 3 }),
      o("烂梗轮回。", { MEME: 3 }),
    ],
  },
  {
    phase: "主测试",
    text: "一张卡写着“可以移动一个单位”，你会怎么理解：",
    options: [
      o("只要没写不能移动敌方，我觉得可以。", { LOOP: 4, TALK: 1 }, "law-text"),
      o("先找英文原文和官方问答。", { RULE: 3, GEEK: 1 }),
      o("按设计意图来，别把游戏玩坏。", { HOST: 2, CARE: 1 }),
      o("能不能移动不重要，能不能好笑很重要。", { MEME: 2, PARTY: 1 }),
    ],
  },
  {
    phase: "主测试",
    text: "交易谈判时，对方说“下回合我肯定帮你”：",
    options: [
      o("写下来，资源、时点、违约责任都要清楚。", { LOOP: 4 }),
      o("听起来可以，先握手再背刺。", { TALK: 2, BASH: 2 }),
      o("算一下这个承诺折现值多少。", { EURO: 2, SCORE: 1 }),
      o("我信了，然后莫名其妙被卖。", { FREE: 2, LUCK: 1 }),
    ],
  },
  {
    phase: "主测试",
    text: "新手第一局连续犯错，你会：",
    options: [
      o("提醒并允许回退，体验比输赢重要。", { CARE: 4, HOST: 1 }, "newbie-care"),
      o("规则就是规则，错了也要承担。", { RULE: 3 }),
      o("偷偷不打他，让他先活到中盘。", { CARE: 3 }),
      o("告诉他：恭喜，桌游已经开始教你做人。", { MEME: 2, GO: 1 }),
    ],
  },
  {
    phase: "主测试",
    text: "你带新人入坑，最希望他第一局获得什么：",
    options: [
      o("觉得桌游没那么可怕，下次还愿意来。", { CARE: 4, HOST: 1 }),
      o("完整理解规则框架。", { RULE: 2, HOST: 1 }),
      o("体验一次爆笑事故。", { PARTY: 2, MEME: 1 }),
      o("知道输赢都是成长的一部分。", { GO: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "牌库只剩 3 张，你需要其中 1 张才能翻盘：",
    options: [
      o("我已经听见牌库在叫我名字。", { LUCK: 4, CARDS: 1 }, "topdeck-faith"),
      o("算概率，接受命运，但要算。", { DICE: 2, THINK: 1 }),
      o("没摸到也行，我还有 B 计划。", { SCORE: 2, CARDS: 1 }),
      o("摸到就站起来表演。", { LUCK: 2, MEME: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "别人说你神抽，你通常会：",
    options: [
      o("纠正他：这是牌序管理。", { LUCK: 3, CARDS: 2 }),
      o("承认，今天我是命运本人。", { LUCK: 4 }),
      o("说别急，下回合我就还债。", { DICE: 2, MEME: 1 }),
      o("开始复盘前面每一步如何铺垫这张牌。", { SCORE: 2, THINK: 1 }),
    ],
  },
  {
    phase: "主测试",
    text: "看到一套卡牌游戏的新环境，你第一反应是：",
    options: [
      o("先看主流构筑和克制关系。", { CARDS: 4, GEEK: 1 }, "tcg-meta"),
      o("自己组一套怪东西试试。", { CARDS: 3, LUCK: 1 }),
      o("只要卡图好看就能玩。", { SHINE: 2 }),
      o("我负责抽，不负责构筑。", { LUCK: 2, GO: 1 }),
    ],
  },
  {
    phase: "主测试",
    text: "你的手牌有 6 张可用牌，你会优先：",
    options: [
      o("算这回合和下回合的斩杀线。", { CARDS: 4, SCORE: 1 }),
      o("打出最帅的一套连招。", { LUCK: 2, EPIC: 1 }),
      o("保留互动牌，别让对面舒服。", { BASH: 2, CARDS: 2 }),
      o("问一下这张牌到底能不能这么结算。", { RULE: 2, LOOP: 1 }),
    ],
  },
  {
    phase: "主测试",
    text: "战棋里模型的枪口被墙角挡住一点点：",
    options: [
      o("一点点也是挡，视线要严谨。", { LASER: 4, RULE: 1 }, "los-ruling"),
      o("拍照、俯视、换角度，证据说话。", { LASER: 3, SHINE: 1 }),
      o("差不多能看见吧，别卡太死。", { PARTY: 2, GO: 1 }),
      o("按规则书的视线定义处理。", { RULE: 3, LASER: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "战棋地形摆完后，你最在意：",
    options: [
      o("掩体、射线、距离是否公平。", { LASER: 4 }),
      o("模型拍照是不是够帅。", { SHINE: 2, EPIC: 1 }),
      o("有没有能制造故事的危险位置。", { EPIC: 2, BASH: 1 }),
      o("这局会不会量到天荒地老。", { PARTY: 1, THINK: 1 }),
    ],
  },
  {
    phase: "主测试",
    text: "跑团里玩家问“这个 NPC 重要吗？”你会：",
    options: [
      o("他不重要，但他的祖父很重要。", { BARD: 4, MEME: 1 }, "gm-lore"),
      o("看你们怎么互动，世界会回应。", { BARD: 4 }),
      o("重要不重要，先过个侦查。", { DOOM: 2, LOOP: 1 }),
      o("不重要，我们快进。", { GO: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "你写跑团人物卡时，最容易加码的是：",
    options: [
      o("背景故事、关系网和童年创伤。", { BARD: 3, DOOM: 2 }),
      o("技能点怎么分最稳。", { SCORE: 1, THINK: 2 }),
      o("一个能制造事故的缺点。", { DOOM: 2, MEME: 2 }),
      o("名字先随便，进团再长出来。", { GO: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "调查员面前有一扇明显不对劲的门：",
    options: [
      o("先开，故事总得有人推进。", { DOOM: 4, GO: 1 }, "san-door"),
      o("侦查、聆听、心理学，流程走满。", { DOOM: 2, RULE: 2 }),
      o("让队友开，我负责记录遗言。", { MEME: 2, DOOM: 1 }),
      o("我们可以绕路吗？", { THINK: 1, CARE: 1 }),
    ],
  },
  {
    phase: "主测试",
    text: "看到 COC 线索墙，你最想做的是：",
    options: [
      o("把所有 NPC 串成阴谋网。", { DOOM: 3, LOOP: 1 }),
      o("开始给玩家讲城市秘史。", { BARD: 3 }),
      o("找最危险的点直接冲。", { DOOM: 3, GO: 1 }),
      o("把线索卡摆得很好看。", { SHINE: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "开局前 2 小时你发现自己可能来不了：",
    options: [
      o("立刻说，给组局人留调整时间。", { PLAN: 2, HOST: 1 }),
      o("再等等，也许奇迹会发生。", { GHOST: 4 }, "afk-delay"),
      o("直接找替补，不让整桌等我。", { HOST: 2, PLAN: 2 }),
      o("先发一句“兄弟们我突然”。", { GHOST: 5 }),
    ],
  },
  {
    phase: "主测试",
    text: "你报名桌游局的风格更像：",
    options: [
      o("报名即契约，准时是底线。", { RULE: 2, PLAN: 1 }),
      o("先占坑，人生变数再说。", { GHOST: 4 }),
      o("不确定就不报名，别影响大家。", { HOST: 2 }),
      o("我到不了但精神与你们同在。", { GHOST: 3, MEME: 1 }),
    ],
  },
  {
    phase: "主测试",
    text: "你的收纳盒到了，但游戏还没开过：",
    options: [
      o("先收纳，开不开是另一条时间线。", { SHINE: 3, DUST: 2 }, "dust-storage"),
      o("这说明我已经为开局做好准备。", { DUST: 3, PLEDGE: 1 }),
      o("收纳也是游戏体验的一部分。", { SHINE: 3 }),
      o("我甚至还没拆塑封。", { DUST: 4 }),
    ],
  },
  {
    phase: "主测试",
    text: "朋友来你家看到一墙桌游，你会：",
    options: [
      o("开始介绍每盒为什么值得买。", { PLEDGE: 2, GEEK: 1 }),
      o("强调这些都会开的，只是时机未到。", { DUST: 4 }),
      o("挑一盒最适合今晚人数的。", { HOST: 2, GEEK: 1 }),
      o("先整理桌面，拍照再说。", { SHINE: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "你打开众筹页面，最危险的按钮是：",
    options: [
      o("Deluxe pledge。", { PLEDGE: 4 }),
      o("Gameplay all-in。", { PLEDGE: 3, DUST: 1 }),
      o("Add metal coins。", { PLEDGE: 2, SHINE: 2 }),
      o("Remind me。先冷静一下。", { GEEK: 1, DUST: 1 }),
    ],
  },
  {
    phase: "主测试",
    text: "组局群里 6 个人说“都行”，你会：",
    options: [
      o("直接给三个方案投票。", { PLAN: 4, HOST: 1 }, "pm-schedule"),
      o("按人数、时长、重度筛游戏。", { GEEK: 2, HOST: 2 }),
      o("说那就毛线，别纠结。", { PARTY: 2, GO: 1 }),
      o("等别人决定，我负责出现。", { FREE: 3 }),
    ],
  },
  {
    phase: "主测试",
    text: "你最常在桌游店承担的隐藏工作是：",
    options: [
      o("催人、改时间、凑人数。", { PLAN: 4 }),
      o("讲规则和维持流程。", { HOST: 3, RULE: 1 }),
      o("提供游戏但不保证开。", { DUST: 2, PLEDGE: 1 }),
      o("贡献笑声和饮料。", { PARTY: 2, FREE: 1 }),
    ],
  },
  {
    phase: "主测试",
    text: "你第一次玩一款高分游戏前，最相信：",
    options: [
      o("BGG 均分和权重不会骗我。", { GEEK: 4 }, "bgg-score"),
      o("朋友说好玩就行。", { FREE: 1, ANY: 1 }),
      o("看规则能不能激发我。", { RULE: 1, EURO: 2 }),
      o("看它能不能出节目效果。", { PARTY: 2, MEME: 1 }),
    ],
  },
  {
    phase: "主测试",
    text: "你筛选桌游时最看重的隐藏信息是：",
    options: [
      o("最佳人数、时长、复杂度和评论争议。", { GEEK: 4, HOST: 1 }),
      o("有没有漂亮组件。", { SHINE: 2 }),
      o("有没有足够互车。", { BASH: 2, EPIC: 1 }),
      o("有没有新人能坐下玩的版本。", { CARE: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "桌面上 token 被人随手一堆，你会：",
    options: [
      o("忍不了，先分区摆好。", { SHINE: 4 }, "mpl-layout"),
      o("只要不影响规则就行。", { RULE: 1, GO: 1 }),
      o("乱一点才有生活感。", { PARTY: 2 }),
      o("拍照前必须整理。", { SHINE: 3 }),
    ],
  },
  {
    phase: "主测试",
    text: "你心中的完美桌面应该：",
    options: [
      o("动线清楚，组件顺手，照片好看。", { SHINE: 4, HOST: 1 }),
      o("资源区和弃牌区边界明确。", { RULE: 2, EURO: 1 }),
      o("能容纳一堆离谱事故。", { PARTY: 2, MEME: 1 }),
      o("不用我带盒子也能玩。", { FREE: 2 }),
    ],
  },
  {
    phase: "主测试",
    text: "有人问“今晚玩什么类型”，你最真实的回答是：",
    options: [
      o("只要有人开，我都能来。", { ANY: 4, FREE: 1 }, "any-open"),
      o("看大家，别太折磨新人就行。", { ANY: 2, CARE: 1 }),
      o("最好是我没玩过的。", { ANY: 3, GEEK: 1 }),
      o("我只想玩我熟的那几类。", { SCORE: 1 }),
    ],
  },
  {
    phase: "主测试",
    text: "连续三晚是三种完全不同的局，你会：",
    options: [
      o("太好了，桌游均衡饮食。", { ANY: 4 }),
      o("第一晚德式，第二晚毛线，第三晚跑团，合理。", { ANY: 3, BARD: 1 }),
      o("有点累，但还是想去。", { FREE: 2, ANY: 1 }),
      o("我需要固定舒适区。", { EURO: 1, CARDS: 1 }),
    ],
  },
  {
    phase: "主测试",
    text: "朋友突然缺一人，你被喊来救场：",
    options: [
      o("我到了，规则路上讲。", { FREE: 4, GO: 1 }, "free-seat"),
      o("先问时长，明早还要做人。", { GEEK: 1 }),
      o("可以，但别让我讲规则。", { FREE: 3 }),
      o("我带一盒备用。", { HOST: 2, PLAN: 1 }),
    ],
  },
  {
    phase: "主测试",
    text: "一局游戏你完全没准备就坐下了：",
    options: [
      o("没事，我擅长现场适应。", { FREE: 3, GO: 2 }),
      o("先观察别人怎么犯错。", { LOOP: 1, SCORE: 1 }),
      o("只要气氛好就行。", { PARTY: 2 }),
      o("这让我很没有安全感。", { RULE: 2 }),
    ],
  },
];

const followUps = {
  "law-text": {
    phase: "追问题",
    text: "你抠这条规则，主要是因为：",
    options: [
      o("文字既然这么写，就应该允许我这么玩。", { LOOP: 5 }),
      o("我要确认真实设计意图，不想误伤游戏。", { RULE: 2, GEEK: 2 }),
      o("能赢当然最好，但辩赢也很重要。", { LOOP: 3, TALK: 2 }),
    ],
  },
  "newbie-care": {
    phase: "追问题",
    text: "新手被老玩家连续针对时，你会：",
    options: [
      o("直接提醒桌面强度，别第一局就劝退。", { CARE: 5, HOST: 1 }),
      o("帮新人指出一个不坐牢的路线。", { CARE: 4, RULE: 1 }),
      o("让他感受完整桌游生态。", { GO: 2, BASH: 1 }),
    ],
  },
  "topdeck-faith": {
    phase: "追问题",
    text: "真摸到那张神牌后，你会：",
    options: [
      o("淡淡地说：计划之内。", { LUCK: 5, CARDS: 1 }),
      o("站起来接受命运加冕。", { LUCK: 4, MEME: 2 }),
      o("开始解释前面每步都在铺垫。", { CARDS: 3, SCORE: 2 }),
    ],
  },
  "tcg-meta": {
    phase: "追问题",
    text: "你研究环境的最终目的是：",
    options: [
      o("找到稳定上分的主流构筑。", { CARDS: 5, SCORE: 2 }),
      o("找一套专门克主流的怪东西。", { CARDS: 5, LOOP: 1 }),
      o("知道大家为什么这么组。", { GEEK: 2, CARDS: 3 }),
    ],
  },
  "los-ruling": {
    phase: "追问题",
    text: "如果全桌都说差不多算了，你会：",
    options: [
      o("不行，视线和距离是战棋尊严。", { LASER: 5, RULE: 1 }),
      o("可以让步，但先把判例说清楚。", { LASER: 3, HOST: 2 }),
      o("拍照留档，下次按这个标准。", { LASER: 4, SHINE: 1 }),
    ],
  },
  "gm-lore": {
    phase: "追问题",
    text: "你准备世界观时最停不下来的是：",
    options: [
      o("NPC 关系网和隐藏动机。", { BARD: 5 }),
      o("城市历史、组织结构、民俗传说。", { BARD: 5, DOOM: 1 }),
      o("玩家永远不会发现的支线。", { BARD: 4, MEME: 1 }),
    ],
  },
  "san-door": {
    phase: "追问题",
    text: "门后明显有问题，你还是想开，因为：",
    options: [
      o("调查员可以死，剧情不能停。", { DOOM: 5, MEME: 1 }),
      o("不开怎么知道 KP 准备了什么。", { DOOM: 4, BARD: 1 }),
      o("我只是帮队伍提高推进效率。", { DOOM: 3, GO: 2 }),
    ],
  },
  "afk-delay": {
    phase: "追问题",
    text: "你“再等等”的真实心理是：",
    options: [
      o("我真觉得自己能赶上，直到赶不上。", { GHOST: 5 }),
      o("不想扫兴，所以拖到最后才说。", { GHOST: 4, CARE: 1 }),
      o("我已经在找替补了，只是还没找到。", { PLAN: 2, HOST: 1 }),
    ],
  },
  "dust-storage": {
    phase: "追问题",
    text: "这盒游戏未来会不会开？",
    options: [
      o("会，一定会，只是不是今天。", { DUST: 5 }),
      o("等收纳、牌套、扩展都齐了就开。", { DUST: 3, PLEDGE: 2, SHINE: 1 }),
      o("其实摆在柜子里已经很快乐。", { DUST: 4, SHINE: 1 }),
    ],
  },
  "pm-schedule": {
    phase: "追问题",
    text: "面对已读不回，你通常：",
    options: [
      o("直接设截止时间，不回就默认。", { PLAN: 5 }),
      o("私聊确认，给大家留体面。", { PLAN: 3, HOST: 2 }),
      o("换一个更弹性的游戏方案。", { PLAN: 3, PARTY: 1 }),
    ],
  },
  "bgg-score": {
    phase: "追问题",
    text: "如果均分很高但评论区争议大：",
    options: [
      o("更要看，争议点决定适不适合本桌。", { GEEK: 5 }),
      o("先研究最佳人数和权重。", { GEEK: 4, EURO: 1 }),
      o("等身边人踩完坑再说。", { FREE: 1, GEEK: 2 }),
    ],
  },
  "mpl-layout": {
    phase: "追问题",
    text: "你整理组件的标准是：",
    options: [
      o("顺手、清楚、拍照好看，三者都要。", { SHINE: 5 }),
      o("每个人伸手距离都要舒服。", { SHINE: 4, HOST: 1 }),
      o("只要规则不乱，审美其次。", { RULE: 2 }),
    ],
  },
  "any-open": {
    phase: "追问题",
    text: "你来者不拒的底线是：",
    options: [
      o("没有底线，有局就是胜利。", { ANY: 5, FREE: 1 }),
      o("别让新人太坐牢就行。", { ANY: 3, CARE: 2 }),
      o("类型不限，但时长要做人。", { ANY: 3, GEEK: 1 }),
    ],
  },
  "free-seat": {
    phase: "追问题",
    text: "临时救场时你最擅长：",
    options: [
      o("快速坐下，快速听规，快速开玩。", { FREE: 5, GO: 1 }),
      o("不挑位置，不挑游戏，不挑输赢。", { FREE: 4, ANY: 2 }),
      o("虽然没准备，但能混出存在感。", { FREE: 3, MEME: 1 }),
    ],
  },
};

const state = {
  index: 0,
  scores: {},
  answers: [],
  pendingQuestions: [],
  result: null,
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
  shareOverlay: document.querySelector("#shareOverlay"),
  closeShareButton: document.querySelector("#closeShareButton"),
  sharePreviewImage: document.querySelector("#sharePreviewImage"),
};

function o(text, scores, followUpId) {
  return { text, scores, followUpId };
}

function renderQuestion() {
  const question = getCurrentQuestion();
  refs.phaseLabel.textContent = question.phase;
  refs.progressLabel.textContent = question.phase === "追问题"
    ? `追问 / ${questions.length}`
    : `${state.index + 1} / ${questions.length}`;
  refs.progressBar.style.width = `${(state.index / questions.length) * 100}%`;
  refs.questionKicker.textContent = "桌游事故现场";
  if (question.phase === "追问题") {
    refs.questionKicker.textContent = "折叠追问";
  }
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
  const question = getCurrentQuestion();
  state.answers.push({ question: question.text, option: option.text });
  addScores(option.scores);
  if (option.followUpId && followUps[option.followUpId]) {
    state.pendingQuestions.unshift(followUps[option.followUpId]);
  }
  if (state.pendingQuestions[0] === question) {
    state.pendingQuestions.shift();
  } else {
    state.index += 1;
  }

  if (state.index >= questions.length && state.pendingQuestions.length === 0) {
    showResult();
    return;
  }

  renderQuestion();
}

function getCurrentQuestion() {
  return state.pendingQuestions[0] || questions[state.index];
}

function addScores(scores) {
  Object.entries(scores).forEach(([tag, value]) => {
    state.scores[tag] = (state.scores[tag] || 0) + value;
  });
}

const personaMaxScores = calculatePersonaMaxScores();

function scorePersona(persona) {
  const directScore = state.scores[persona.id] || 0;
  const maxDirect = personaMaxScores[persona.id] || 1;
  const directRatio = Math.min(directScore / maxDirect, 1);
  const directCore = directRatio * 100;
  const affinity = getAffinityScore(persona);
  const anchorBonus = getAnchorBonus(persona.id, directRatio, state.scores);
  const thresholdBonus = getThresholdBonus(persona.id, directScore, directRatio);
  return directCore + affinity + anchorBonus + thresholdBonus;
}

function getAffinityScore(persona) {
  return persona.tags.reduce((sum, tag) => {
    if (tag === persona.id) {
      return sum;
    }
    const maxTag = personaMaxScores[tag] || 1;
    const ratio = Math.min((state.scores[tag] || 0) / maxTag, 1);
    return sum + ratio * 10;
  }, 0);
}

function calculatePersonaMaxScores() {
  const maxScores = {};
  personas.forEach((persona) => {
    maxScores[persona.id] = 0;
  });
  questions.forEach((question) => {
    addBestOptionScores(maxScores, question);
  });
  Object.values(followUps).forEach((question) => {
    addBestOptionScores(maxScores, question);
  });
  return maxScores;
}

function addBestOptionScores(maxScores, question) {
  Object.keys(maxScores).forEach((id) => {
    const best = Math.max(
      0,
      ...question.options.map((option) => option.scores[id] || 0),
    );
    maxScores[id] += best;
  });
}

function getThresholdBonus(id, score, ratio) {
  if (["BASH", "GHOST"].includes(id) && ratio >= 0.72) {
    return 38;
  }
  if (["BASH", "GHOST"].includes(id) && ratio >= 0.58) {
    return 26;
  }
  if (id === "TALK" && ratio >= 0.72) {
    return 30;
  }
  if (id === "TALK" && ratio >= 0.58) {
    return 20;
  }
  if (ratio >= 0.72) {
    return 24;
  }
  if (ratio >= 0.58) {
    return 14;
  }
  if (ratio >= 0.45) {
    return 7;
  }
  if (["GO", "LOOP", "THINK", "EPIC", "DICE", "LUCK", "MEME", "TALK", "CARE", "ANY", "PLEDGE", "PLAN", "GHOST", "GEEK", "BARD", "DOOM", "LASER", "CARDS"].includes(id) && ratio >= 0.36 && score >= 6) {
    return 6;
  }
  return 0;
}

function getAnchorBonus(id, ratio, scores) {
  const bonus = anchorPersonas[id] || 0;
  if (id === "TALK") {
    const bashRatio = Math.min((scores.BASH || 0) / (personaMaxScores.BASH || 1), 1);
    if (bashRatio >= 0.72) {
      return 0;
    }
  }
  if (ratio >= 0.72) {
    return bonus;
  }
  if (ratio >= 0.58) {
    return bonus * 0.55;
  }
  return 0;
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
  const resultSubtitle = isClose
    ? `${winner.subtitle} 但你体内还住着一个 ${runner.title}，两种桌面人格正在反复横跳。`
    : winner.subtitle;
  const dimensions = getDimensionStats();

  document.body.dataset.personaGroup = getPersonaGroup(winner);
  refs.resultTitle.textContent = winner.title;
  refs.resultSubtitle.textContent = resultSubtitle;
  refs.resultStory.textContent = personaStories[winner.id] || winner.subtitle;
  refs.dimensionStats.innerHTML = renderDimensionStats(dimensions);
  refs.symptomList.innerHTML = winner.symptoms.map((item) => `<li>${item}</li>`).join("");
  refs.teamGuide.textContent = winner.guide;
  refs.dangerZone.textContent = winner.danger;
  refs.tagCloud.innerHTML = topTags.map((tag) => `<span class="tag-chip">${tag}</span>`).join("");

  const secondary = isClose ? `，副人格 ${runner.title}` : "";
  refs.shareText.textContent = `我是 TGTI ${winner.title}${secondary}。${winner.subtitle}`;
  state.result = {
    winner,
    runner: isClose ? runner : null,
    subtitle: resultSubtitle,
    story: personaStories[winner.id] || winner.subtitle,
    symptoms: winner.symptoms,
    guide: winner.guide,
    danger: winner.danger,
    dimensions,
    tags: topTags,
    shareText: refs.shareText.textContent,
  };
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

function renderDimensionStats(stats = getDimensionStats()) {
  return stats
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
  if (["EURO", "SCORE", "THINK", "RULE", "LOOP", "GEEK"].includes(persona.id)) {
    return "euro";
  }
  if (["PARTY", "MEME", "TALK", "GO", "HOST", "CARE", "ANY", "FREE"].includes(persona.id)) {
    return "party";
  }
  if (["EPIC", "BASH", "DICE", "LUCK", "LASER", "CARDS"].includes(persona.id)) {
    return "epic";
  }
  if (["PLEDGE", "DUST", "PLAN", "GHOST", "SHINE"].includes(persona.id)) {
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
  state.pendingQuestions = [];
  state.result = null;
  document.body.removeAttribute("data-persona-group");
  refs.questionCard.hidden = false;
  refs.resultPanel.hidden = true;
  renderQuestion();
}

async function copyResult() {
  const originalText = refs.copyButton.textContent;
  refs.copyButton.textContent = "生成图片中";
  let previewUrl = "";
  try {
    const blob = await createResultScreenshot();
    const file = new File([blob], "tgti-result.png", { type: "image/png" });
    if (!isWeChatBrowser() && navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        files: [file],
        title: "我的 TGTI 桌游人格",
        text: refs.shareText.textContent,
      });
      refs.copyButton.textContent = "已唤起分享";
    } else {
      previewUrl = URL.createObjectURL(blob);
      openSharePreview(previewUrl);
      refs.copyButton.textContent = "已生成图片";
    }
  } catch (error) {
    refs.copyButton.textContent = "分享不可用";
  } finally {
    setTimeout(() => {
      refs.copyButton.textContent = originalText;
    }, 1600);
  }
}

function isWeChatBrowser() {
  return /MicroMessenger/i.test(navigator.userAgent);
}

function openSharePreview(url) {
  if (refs.sharePreviewImage.src && refs.sharePreviewImage.src.startsWith("blob:")) {
    URL.revokeObjectURL(refs.sharePreviewImage.src);
  }
  refs.sharePreviewImage.src = url;
  refs.shareOverlay.hidden = false;
  document.body.classList.add("modal-open");
}

function closeSharePreview() {
  if (refs.sharePreviewImage.src && refs.sharePreviewImage.src.startsWith("blob:")) {
    URL.revokeObjectURL(refs.sharePreviewImage.src);
  }
  refs.sharePreviewImage.removeAttribute("src");
  refs.shareOverlay.hidden = true;
  document.body.classList.remove("modal-open");
}

async function createResultScreenshot() {
  if (!state.result) {
    throw new Error("No result to share");
  }
  const width = 1080;
  const padding = 72;
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const subtitleLines = wrapCanvasText(context, state.result.subtitle, width - padding * 2, 32);
  const storyLines = wrapCanvasText(context, state.result.story, width - padding * 2, 30).slice(0, 6);
  const symptomLines = state.result.symptoms.flatMap((item) => wrapCanvasText(context, `- ${item}`, width - padding * 2, 28));
  const guideLines = wrapCanvasText(context, state.result.guide, width - padding * 2, 28).slice(0, 3);
  const dangerLines = wrapCanvasText(context, state.result.danger, width - padding * 2, 28).slice(0, 3);
  const height = 980
    + subtitleLines.length * 42
    + storyLines.length * 40
    + symptomLines.length * 36
    + guideLines.length * 36
    + dangerLines.length * 36
    + state.result.dimensions.length * 58;
  const scale = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = width * scale;
  canvas.height = height * scale;
  context.scale(scale, scale);

  drawRoundedRect(context, 0, 0, width, height, 0, "#f7f5f1");
  drawRoundedRect(context, 36, 36, width - 72, height - 72, 34, "#ffffff");

  let y = 92;
  context.fillStyle = "#4f8f4d";
  context.font = "900 30px Arial, sans-serif";
  context.fillText("TABLETOP GAMER TYPE INDICATOR", padding, y);

  y += 92;
  context.fillStyle = "#232323";
  context.font = "900 76px Arial, sans-serif";
  context.fillText(state.result.winner.name, padding, y);
  const nameWidth = context.measureText(state.result.winner.name).width;
  context.fillStyle = "#4f8f4d";
  context.font = "900 44px Arial, sans-serif";
  context.fillText(state.result.winner.id, padding + nameWidth + 24, y - 8);

  y += 58;
  context.fillStyle = "#5f5a66";
  context.font = "700 32px Arial, sans-serif";
  subtitleLines.forEach((line) => {
    context.fillText(line, padding, y);
    y += 42;
  });

  y += 20;
  drawSectionTitle(context, "维度占比", padding, y);
  y += 34;
  state.result.dimensions.forEach((dimension) => {
    context.fillStyle = "#34323a";
    context.font = "800 28px Arial, sans-serif";
    context.fillText(dimension.name, padding, y);
    context.fillStyle = "#4f8f4d";
    context.textAlign = "right";
    context.fillText(`${dimension.percent}%`, width - padding, y);
    context.textAlign = "left";
    y += 16;
    drawRoundedRect(context, padding, y, width - padding * 2, 16, 8, "#e7e2e9");
    drawRoundedRect(context, padding, y, ((width - padding * 2) * dimension.percent) / 100, 16, 8, "#4f8f4d");
    y += 42;
  });

  y += 20;
  drawSectionTitle(context, "人格小传", padding, y);
  y += 38;
  context.fillStyle = "#3d3940";
  context.font = "700 30px Arial, sans-serif";
  storyLines.forEach((line) => {
    context.fillText(line, padding, y);
    y += 40;
  });

  y += 24;
  drawTextBlock(context, "桌面症状", symptomLines, padding, y, 28);
  y += 46 + symptomLines.length * 36;

  drawTextBlock(context, "队友说明书", guideLines, padding, y, 28);
  y += 46 + guideLines.length * 36;

  drawTextBlock(context, "雷区提醒", dangerLines, padding, y, 28);
  y += 46 + dangerLines.length * 36;

  y += 26;
  drawSectionTitle(context, "风味标签", padding, y);
  y += 36;
  let x = padding;
  state.result.tags.forEach((tag) => {
    context.font = "900 26px Arial, sans-serif";
    const chipWidth = context.measureText(tag).width + 34;
    if (x + chipWidth > width - padding) {
      x = padding;
      y += 48;
    }
    drawRoundedRect(context, x, y - 28, chipWidth, 38, 19, "#eaf5e8");
    context.fillStyle = "#3f6c3c";
    context.fillText(tag, x + 17, y);
    x += chipWidth + 12;
  });

  context.fillStyle = "#8a8490";
  context.font = "700 24px Arial, sans-serif";
  context.fillText("生成自 TGTI 桌游人格测试", padding, height - 82);

  return await new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
      } else {
        reject(new Error("Canvas export failed"));
      }
    }, "image/png");
  });
}

function wrapCanvasText(context, text, maxWidth, fontSize) {
  context.font = `700 ${fontSize}px Arial, sans-serif`;
  const lines = [];
  let current = "";
  Array.from(text).forEach((char) => {
    const next = current + char;
    if (context.measureText(next).width > maxWidth && current) {
      lines.push(current);
      current = char;
    } else {
      current = next;
    }
  });
  if (current) {
    lines.push(current);
  }
  return lines;
}

function drawSectionTitle(context, text, x, y) {
  context.fillStyle = "#4f8f4d";
  context.font = "900 30px Arial, sans-serif";
  context.fillText(text, x, y);
}

function drawTextBlock(context, title, lines, x, y, fontSize) {
  drawSectionTitle(context, title, x, y);
  context.fillStyle = "#3d3940";
  context.font = `700 ${fontSize}px Arial, sans-serif`;
  let nextY = y + 38;
  lines.forEach((line) => {
    context.fillText(line, x, nextY);
    nextY += 36;
  });
}

function drawRoundedRect(context, x, y, width, height, radius, fillStyle) {
  context.fillStyle = fillStyle;
  context.beginPath();
  context.moveTo(x + radius, y);
  context.lineTo(x + width - radius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + radius);
  context.lineTo(x + width, y + height - radius);
  context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  context.lineTo(x + radius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - radius);
  context.lineTo(x, y + radius);
  context.quadraticCurveTo(x, y, x + radius, y);
  context.closePath();
  context.fill();
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

refs.restartButton.addEventListener("click", resetQuiz);
refs.copyButton.addEventListener("click", copyResult);
refs.overviewButton.addEventListener("click", openOverview);
refs.closeOverviewButton.addEventListener("click", closeOverview);
refs.closeShareButton.addEventListener("click", closeSharePreview);
refs.overviewOverlay.addEventListener("click", (event) => {
  if (event.target === refs.overviewOverlay) {
    closeOverview();
  }
});
refs.shareOverlay.addEventListener("click", (event) => {
  if (event.target === refs.shareOverlay) {
    closeSharePreview();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !refs.overviewOverlay.hidden) {
    closeOverview();
  }
  if (event.key === "Escape" && !refs.shareOverlay.hidden) {
    closeSharePreview();
  }
});

renderOverview();
renderQuestion();

