# TGTI 结果输出细则

## 当前问题与修复方向

旧版题库只有 36 题，且很多选项把分数集中给 `RULE / EURO / PARTY / HOST / GEEK / PLEDGE` 这类大人格，导致 `LOOP / CARE / LUCK / CARDS / LASER / BARD / GHOST` 等人格虽然有文案，但实际很难拿到第一名。

新版处理：

- 取消强分流题，所有固定题目都改为主测试题，避免开局答案直接锁定结果。
- 题库为 64 道主测试题 + 14 道折叠追问题，实际题量落在 64-78 题区间。
- 每个人格至少保留 8 个以上加分入口。
- 对容易被吞掉的相近人格加入折叠追问。
- 对专属标签达到阈值的人格增加保护分，避免大类人格长期压制冷门人格。

## 评分规则

每个选项给若干标签加分，结果分数按“专属分归一化 + 辅助标签 + 锚点保护”计算：

```text
人格得分 = 专属分占比核心分 + 辅助标签亲和分 + 锚点保护分 + 阈值保护分
```

具体逻辑：

- 专属分占比核心分：使用“当前专属分 / 该人格理论可获得最高专属分”计算，避免题目入口多的人格天然压过入口少的人格。
- 辅助标签亲和分：人格 `tags` 中的相邻标签只提供少量辅助，不再主导结果。
- 锚点保护分：对特别容易被相近人格吞掉的类型设置锚点，例如 `TALK`、`GHOST`。
- 阈值保护分：
  - 专属命中率 `>= 72%`：强保护
  - 专属命中率 `>= 58%`：中保护
  - 专属命中率 `>= 45%`：弱保护

这一版的原则是：每个人格可以通过自己的强特征路径被测出，交叉加分只负责体现副人格和风味标签，严格避免大类人格吞掉少数人格。

## 专属分数范围输出

这些规则用于人工检查结果是否合理。最终程序仍以总分最高者为主人格。

| 专属分范围 | 判定强度 | 输出含义 |
|---:|---|---|
| `0-3` | 弱 | 只作为风味标签，不应单独输出为主人格。 |
| `4-7` | 中 | 可作为副人格或总览标签。 |
| `8-9` | 强 | 冷门人格可进入主人格候选池。 |
| `10-13` | 很强 | 应稳定进入前三候选。 |
| `14-17` | 极强 | 应优先输出，除非另一个人格更集中。 |
| `18+` | 锁定 | 基本应输出该人格。 |

注：实际程序已从固定绝对分切换为“专属命中率”，所以上表用于人工理解强弱，最终以归一化得分为准。

## 每个人格触发细则

| 人格 | 主要分数范围 | 相近人格区分 |
|---|---|---|
| `GO 速开流` | `GO >= 10`，且 `RULE < GO` | 与 `FREE` 区分：GO 是不听规则先开，FREE 是随叫随到蹭局。 |
| `RULE 规则神` | `RULE >= 14`，且 `LOOP < RULE` | 与 `LOOP` 区分：RULE 维护秩序，LOOP 利用文本边界。 |
| `LOOP 口胡师` | `LOOP >= 8` 可候选，`LOOP >= 14` 优先 | 触发规则文本/交易条款追问后更容易输出。 |
| `EURO 德战神` | `EURO >= 14`，且 `SCORE/THINK` 不极端 | 与 `SCORE` 区分：EURO 爱机制系统，SCORE 爱分数最大化。 |
| `SCORE 分奴仙` | `SCORE >= 14` | 与 `EURO` 区分：SCORE 更关注结算、效率、胜利点。 |
| `THINK 长考王` | `THINK >= 10` 且规划题集中 | 与 `EURO` 区分：THINK 是思考时间和路线分叉极强。 |
| `EPIC 美战神` | `EPIC >= 10`，常伴随 `DICE/BASH` | 与 `BASH` 区分：EPIC 爱史诗主题，BASH 爱互车。 |
| `BASH 互车王` | `BASH >= 10` | 与 `TALK` 区分：BASH 以攻击/围剿为核心。 |
| `DICE 黑骰命` | `DICE >= 8`，骰运题集中 | 与 `EPIC` 区分：DICE 是骰运受害叙事。 |
| `LUCK 神抽狗` | `LUCK >= 8` 可候选，`LUCK >= 14` 优先 | 与 `CARDS` 区分：LUCK 偏神抽命运，CARDS 偏构筑节奏。 |
| `PARTY 毛战神` | `PARTY >= 14` | 与 `MEME` 区分：PARTY 是聚会体验，MEME 是梗输出。 |
| `MEME 烂梗王` | `MEME >= 12` | 与 `PARTY` 区分：MEME 的核心是复读、整活、吐槽。 |
| `TALK 嘴炮王` | `TALK >= 10` | 与 `LOOP` 区分：TALK 是发言控场，LOOP 是规则/条款辩论。 |
| `HOST 桌控官` | `HOST >= 14`，常伴随 `RULE/PLAN/CARE` | 与 `PLAN` 区分：HOST 管桌面流程，PLAN 管开局组织。 |
| `CARE 护新会` | `CARE >= 8` 可候选，`CARE >= 14` 优先 | 触发新手追问后优先级提高。 |
| `ANY 万金油` | `ANY >= 8` 且多个类型标签均衡 | 与 `FREE` 区分：ANY 是什么都玩，FREE 是被喊就到。 |
| `FREE 蹭局侠` | `FREE >= 10` | 与 `GO` 区分：FREE 不一定速开，但不买盒也能到场。 |
| `PLEDGE 众筹僧` | `PLEDGE >= 12` | 与 `DUST` 区分：PLEDGE 是购买冲动，DUST 是买后不开。 |
| `DUST 灰柜王` | `DUST >= 8` 可候选，`DUST >= 14` 优先 | 与 `PLEDGE` 区分：DUST 强调柜子、塑封、总有一天。 |
| `PLAN 组局佬` | `PLAN >= 10` | 与 `HOST` 区分：PLAN 是排期凑人，HOST 是桌面主持。 |
| `GHOST 鸽王` | `GHOST >= 8` 可候选，`GHOST >= 14` 优先 | 触发临时有事追问后应明显提高。 |
| `GEEK 查分员` | `GEEK >= 14` | 与 `EURO` 区分：GEEK 偏研究评分、权重、评论区。 |
| `SHINE 摆盘师` | `SHINE >= 10` | 与 `PLEDGE/DUST` 区分：SHINE 是组件审美和桌面秩序。 |
| `BARD 跑团吟游` | `BARD >= 8` 可候选，`BARD >= 14` 优先 | 与 `DOOM` 区分：BARD 讲世界，DOOM 冲调查事故。 |
| `DOOM 掉 DOOM 人` | `DOOM >= 10` | 与 `BARD` 区分：DOOM 是调查员冒险和理智蒸发。 |
| `LASER 尺子侠` | `LASER >= 8` 可候选，`LASER >= 14` 优先 | 与 `RULE` 区分：LASER 专注战棋距离/视线。 |
| `CARDS 牌佬魂` | `CARDS >= 8` 可候选，`CARDS >= 14` 优先 | 与 `LUCK` 区分：CARDS 是构筑和斩杀线。 |

## 折叠追问触发

只有选择强特征选项时才插入追问，避免所有用户题量过长。

| 追问 ID | 主要区分 |
|---|---|
| `law-text` | `LOOP` vs `RULE/TALK` |
| `newbie-care` | `CARE` vs `HOST/RULE` |
| `topdeck-faith` | `LUCK` vs `CARDS/MEME` |
| `tcg-meta` | `CARDS` vs `GEEK/SCORE` |
| `los-ruling` | `LASER` vs `RULE/HOST` |
| `gm-lore` | `BARD` vs `DOOM/MEME` |
| `san-door` | `DOOM` vs `BARD/GO` |
| `afk-delay` | `GHOST` vs `PLAN/HOST` |
| `dust-storage` | `DUST` vs `PLEDGE/SHINE` |
| `pm-schedule` | `PLAN` vs `HOST/PARTY` |
| `bgg-score` | `GEEK` vs `EURO/FREE` |
| `mpl-layout` | `SHINE` vs `RULE/HOST` |
| `any-open` | `ANY` vs `FREE/CARE` |
| `free-seat` | `FREE` vs `ANY/GO` |

## 新旧代码映射

保留 `GO / RULE / EURO / BASH / DICE / PARTY / MEME / TALK / HOST / ANY / FREE / DUST` 等已经像单词或梗的代号；将短语首字母式代号替换为更好记的单词：

| 旧代码 | 新代码 | 人格 |
|---|---|---|
| `LAW` | `LOOP` | 口胡师 |
| `VP` | `SCORE` | 分奴仙 |
| `AP` | `THINK` | 长考王 |
| `AT` | `EPIC` | 美战神 |
| `TOPD` | `LUCK` | 神抽狗 |
| `N00B` | `CARE` | 护新会 |
| `KS` | `PLEDGE` | 众筹僧 |
| `PM` | `PLAN` | 组局佬 |
| `AFK` | `GHOST` | 鸽王 |
| `BGG` | `GEEK` | 查分员 |
| `MPL` | `SHINE` | 摆盘师 |
| `GM` | `BARD` | 跑团吟游 |
| `SAN` | `DOOM` | 掉 SAN 人 |
| `LOS` | `LASER` | 尺子侠 |
| `TCG` | `CARDS` | 牌佬魂 |

## 覆盖检查方法

每次新增或删除题目后，检查每个人格在题库中的出现次数：

```powershell
$code = Get-Content -LiteralPath app.js -Encoding utf8 -Raw
$ids = [regex]::Matches($code, 'id: "([A-Z0-9]+)"') | ForEach-Object { $_.Groups[1].Value }
$questionsPart = $code.Substring($code.IndexOf('const questions = ['), $code.IndexOf('const followUps =') - $code.IndexOf('const questions = ['))
$followPart = $code.Substring($code.IndexOf('const followUps ='), $code.IndexOf('const state =') - $code.IndexOf('const followUps ='))
foreach ($id in $ids) {
  $main = ([regex]::Matches($questionsPart, "\b$id\b")).Count
  $follow = ([regex]::Matches($followPart, "\b$id\b")).Count
  "$id main=$main follow=$follow total=$($main+$follow)"
}
```

验收标准：

- 每个人格 `total >= 8`。
- 冷门人格至少有 1 个追问入口。
- 相近人格必须有至少 2 道分叉题或 1 道追问题。

