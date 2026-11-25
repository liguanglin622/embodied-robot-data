window.TX_DATA = [
{
"src": "v1",
"ch": "硅谷101 · 开场 · 数据荒芜",
"ts": "0:00",
"sec": 0,
"text": "诶 问你个问题 机器人领域最羡慕AI大语言模型领域的什么?答案是数据 你猜对了吗? We don't have that data for training robots. It's not on the internet. The video data out there isn't enough? Like, it's not. 当Scaling Law让大语言模型一路狂飙,用万亿参数涌现一代又一代更强大的智能之际,机器人领域却被数据荒漠所困,让具身智能的泛化性和自主性进展迟缓。",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=0"
},
{
"src": "v1",
"ch": "硅谷101 · 开场 · 数据荒芜",
"ts": "0:27",
"sec": 27,
"text": "为什么 AI 能用的数据 机器人用不了 机器人的四层数据金字塔是如何运作的 每一层的进展和技术困境分别是什么 以及我们如何才能解决掉机器人的数据难题呢",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=27"
},
{
"src": "v1",
"ch": "硅谷101 · 开场 · 数据荒芜",
"ts": "0:40",
"sec": 40,
"text": "哈喽 小伙伴们 欢迎回到硅谷101 我是陈倩 这期视频继续我们的机器人专辑 之前我们已经讲过了灵巧手 机器人闭源模型 还有开源模型",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=40"
},
{
"src": "v1",
"ch": "硅谷101 · 开场 · 数据荒芜",
"ts": "0:50",
"sec": 50,
"text": "但这一期我们来聊聊这个领域非常核心的部分 数据 为此我们飞到上海 走进了机器人 数采工厂 甚至我们亲自有机会尝试了一下遥操作 采集员",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=50"
},
{
"src": "v1",
"ch": "硅谷101 · 开场 · 数据荒芜",
"ts": "1:01",
"sec": 61,
"text": "这份工作 以及和 Sharpa 等机器人公司们聊了聊 机器人数据的基础路线与未来发展 目前还需要一些科学方法上的一些创新 那大家就跟随我的脚步一起走进机器人的数采工厂吧",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=61"
},
{
"src": "v1",
"ch": "硅谷101 · 开场 · 数据荒芜",
"ts": "1:34",
"sec": 94,
"text": "首先我们来回答一个问题 什么是机器人数据 它跟AI大模型以及图片和视频模型的数据有什么不同呢 大模型是靠吃掉互联网变聪明的",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=94"
},
{
"src": "v1",
"ch": "硅谷101 · 开场 · 数据荒芜",
"ts": "1:54",
"sec": 114,
"text": "GPT-4的训练数据量以万亿Token计 相当于把人类有记录的知识积累全部摄入 简单来说 AI 生成文 生成图 以及生成声音 生成视频的模型参数都可以在互联网上找到",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=114"
},
{
"src": "v1",
"ch": "硅谷101 · 开场 · 数据荒芜",
"ts": "2:07",
"sec": 127,
"text": "大语言模型用的是世界的文本语言 包括文本 代码以及标注过的结构化文本来帮助AI理解和生成语言序列 类似的 图像模型用的是世界的瞬间截图",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=127"
},
{
"src": "v1",
"ch": "硅谷101 · 开场 · 数据荒芜",
"ts": "2:19",
"sec": 139,
"text": "声音模型用的是世界的振动信号 而视频模型用的是世界的连续变化 而这些数据都大量存在在互联网上 当然这是不考虑版权的前提下 而机器人需要的数据需要的是",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=139"
},
{
"src": "v1",
"ch": "硅谷101 · 开场 · 数据荒芜",
"ts": "2:33",
"sec": 153,
"text": "具身本体在真实物理世界里和具体物体发生具体交互时产生的多维度传感器信号 视觉 力觉 关节位置 电机控制量 全部要精确同步 时间戳对齐",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=153"
},
{
"src": "v1",
"ch": "硅谷101 · 开场 · 数据荒芜",
"ts": "2:45",
"sec": 165,
"text": "才能够构成一条有用的训练轨迹 这些信息从来没有被系统性地记录过 也没有任何理由会被动地产生 完整的数据 这里面会包括各种传感器所带来的数据",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=165"
},
{
"src": "v1",
"ch": "硅谷101 · 开场 · 数据荒芜",
"ts": "2:58",
"sec": 178,
"text": "有视频 还有一些其他的力触觉 传感器等等的 它的输出是对身体上每一个垫肌关节的一些控制量 能够控制全身多达几十个自由度的关节",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=178"
},
{
"src": "v1",
"ch": "硅谷101 · 开场 · 数据荒芜",
"ts": "3:10",
"sec": 190,
"text": "是完成后协调一起去完成具体的一些事情 那么它的难点就在于这些数据天然是不存在互联网上的 它需要我们去以某种方式去采集它 那这里面无论是在真实的环境里面去采集",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=190"
},
{
"src": "v1",
"ch": "硅谷101 · 开场 · 数据荒芜",
"ts": "3:25",
"sec": 205,
"text": "还是在一些虚拟的世界里去采集 它都需要去首先布设机器人 搭建场景 再次就是要引入像我们后面看到的这些工作人员 我们叫做遥操人员",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=205"
},
{
"src": "v1",
"ch": "硅谷101 · 开场 · 数据荒芜",
"ts": "3:37",
"sec": 217,
"text": "控制机器人去采集这类数据 我觉得数据最大的难点是在于我们没有办法采集到机器人去操作的数据 我指的机器人去操作就是机器人自己在那里干活的数据",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=217"
},
{
"src": "v1",
"ch": "硅谷101 · 开场 · 数据荒芜",
"ts": "3:48",
"sec": 228,
"text": "而我们更能采集到是人在操作的数据 比如一些Mocap Data 比如一些YouTube Data 所以要去做好Tele Operation",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=228"
},
{
"src": "v1",
"ch": "硅谷101 · 开场 · 数据荒芜",
"ts": "3:56",
"sec": 236,
"text": "让机器人去操作 其实比较困难的 主要的原因是因为操作员是感受不到机器人的感受 这就是整个行业数据困境的根源 每一条高质量的数据都必须从零开始生产",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=236"
},
{
"src": "v1",
"ch": "硅谷101 · 开场 · 数据荒芜",
"ts": "4:09",
"sec": 249,
"text": "我们来用几个数字试图展示一下这个缺口有多大 谷歌DeepMind在研发机器人模型RT系列第一代的时候调动了13台机器人",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=249"
},
{
"src": "v1",
"ch": "硅谷101 · 开场 · 数据荒芜",
"ts": "4:19",
"sec": 259,
"text": "在办公室厨房环境里面持续采集了整整17个月 才累积了大约13万条的操作轨迹 覆盖700多项技能 那为了训练RT2 谷歌是联合了全球34所的研究机构",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=259"
},
{
"src": "v1",
"ch": "硅谷101 · 开场 · 数据荒芜",
"ts": "4:32",
"sec": 272,
"text": "把60个已有数据集全部合并 加上来自22种机器人平台的真机数据 才凑出了OpenX Embodiment 这样的一个包含超过100万条操作轨迹的开源数据集",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=272"
},
{
"src": "v1",
"ch": "硅谷101 · 开场 · 数据荒芜",
"ts": "4:44",
"sec": 284,
"text": "而这已经被认为是目前全球最大的跨机构真机数据集了 但是即便如此 它涵盖的527项技能和对应的场景和现实世界的需求之间 依然是以数量集计的差距",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=284"
},
{
"src": "v1",
"ch": "硅谷101 · 开场 · 数据荒芜",
"ts": "4:58",
"sec": 298,
"text": "那么面对如此难获得的机器人数据怎么办呢 那如今行业摸索出了四条并行的路线 它们的质量是由低到高排列构成了一个金字塔 每一层都有自己的优势",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=298"
},
{
"src": "v1",
"ch": "硅谷101 · 第一层 · 真机数据（遥操工厂）",
"ts": "5:11",
"sec": 311,
"text": "上限和真实的代价 那接下来我们就一层一层的给大家拆解 金字塔的顶层就是遥操数据 又被称为真机数据 遥操员通过外骨骼或者遥操系统",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=311"
},
{
"src": "v1",
"ch": "硅谷101 · 第一层 · 真机数据（遥操工厂）",
"ts": "5:26",
"sec": 326,
"text": "实时操控机器人在真实场景里完成操作 机器人所有的传感器全程录制 这层数据信息最完整 真实的物理接触 真实的不确定性 真实的失败和恢复",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=326"
},
{
"src": "v1",
"ch": "硅谷101 · 第一层 · 真机数据（遥操工厂）",
"ts": "5:38",
"sec": 338,
"text": "使今天让机器人真正能在现实场景落地的核心原材料 我们也正好有机会来到上海走进智元机器人的数据采集工厂 看看真机数据是怎么采集的",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=338"
},
{
"src": "v1",
"ch": "硅谷101 · 第一层 · 真机数据（遥操工厂）",
"ts": "5:49",
"sec": 349,
"text": "我们这里有200台机器 然后每个机器 它至少有一个采集员 有一些任务的话 它还会配备一位同事来搭配它来布置场景 但你以为要操员是一个很简单的工作吗?",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=349"
},
{
"src": "v1",
"ch": "硅谷101 · 第一层 · 真机数据（遥操工厂）",
"ts": "6:03",
"sec": 363,
"text": "No no no 但是并不是啊 反正我在现场是试了一下 发现这个工作还是挺有门槛的 好 哎呀 哇 这个真的比我想装难很多哎 哎呀 我现在全身都很僵硬",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=363"
},
{
"src": "v1",
"ch": "硅谷101 · 第一层 · 真机数据（遥操工厂）",
"ts": "6:19",
"sec": 379,
"text": "快了快了快了 太不容易了 我应该没有办法成为金牌的数据采集员了 一个数据采集员他需要什么样的资质 才能把这个数据采集好 我觉得最重要的是天赋",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=379"
},
{
"src": "v1",
"ch": "硅谷101 · 第一层 · 真机数据（遥操工厂）",
"ts": "6:42",
"sec": 402,
"text": "这个需要什么样的天赋 好的数据采集员和差的数据采集员 他可能是三倍的效率的差 我认为一个有天赋的数据采集员 首先是一个协调性非常好",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=402"
},
{
"src": "v1",
"ch": "硅谷101 · 第一层 · 真机数据（遥操工厂）",
"ts": "6:52",
"sec": 412,
"text": "然后空间感特别好的一个人 因为它在采集数据的过程中 其实是隔空在控制另外一个身体 它是没有直观的反馈的 更多只能通过自己肉眼来闭环",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=412"
},
{
"src": "v1",
"ch": "硅谷101 · 第一层 · 真机数据（遥操工厂）",
"ts": "7:05",
"sec": 425,
"text": "机器人的手臂和人的手臂构型也不一样的 人很多能达到的姿态 机器未必的能够到 所以它也要去预判机器人怎样才能更高效的去够到 去设计自己的一些轨迹",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=425"
},
{
"src": "v1",
"ch": "硅谷101 · 第一层 · 真机数据（遥操工厂）",
"ts": "7:18",
"sec": 438,
"text": "其次就是说你的空间的这种精度判断要很准 不能是突然比较差的话 明明你想要让他去抓那儿 但你自己就抓过了 或是勾不到 或者一夹划了",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=438"
},
{
"src": "v1",
"ch": "硅谷101 · 第一层 · 真机数据（遥操工厂）",
"ts": "7:30",
"sec": 450,
"text": "对吧 这种都是非常常见的 还有体力好 对吧 体力好 一天下来其实非常幸福的 有些人是站着踩的 有些人坐着踩的 两种感觉不一样 那从刚入门的一个采集员到你这样的金牌采集员需要多长时间",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=450"
},
{
"src": "v1",
"ch": "硅谷101 · 第一层 · 真机数据（遥操工厂）",
"ts": "7:44",
"sec": 464,
"text": "来的话就是需要有一个周的肯定时间 肯定过后的话你先入门 入门过后任务的难度逐一地间 对于一位专业的金牌数据采集员来说 我刚才失败了N次的机器人摆放字母的任务",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=464"
},
{
"src": "v1",
"ch": "硅谷101 · 第一层 · 真机数据（遥操工厂）",
"ts": "8:07",
"sec": 487,
"text": "他一次就搞定了 而这样的数据采集为的就是机器人的精确控制能力 专家水平 金牌数据采集员的水平 但就算是专家水平的遥操员 也不一定是每一条都可以被算作是有效数据的",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=487"
},
{
"src": "v1",
"ch": "硅谷101 · 第一层 · 真机数据（遥操工厂）",
"ts": "8:24",
"sec": 504,
"text": "人类遥操的这个数据它的成功率是多少 当然你说可能根据任务的难易程度也不一样嘛 然后我只是很好奇说这个效率是怎么去做的 效率对吧",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=504"
},
{
"src": "v1",
"ch": "硅谷101 · 第一层 · 真机数据（遥操工厂）",
"ts": "8:33",
"sec": 513,
"text": "像一个专业的这种遥操员 8小时的工作大概能平均产出2到3小时的有效数据 因为这中间呢 它一定会涉及到一些两个采集之间一些场景的这个布置",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=513"
},
{
"src": "v1",
"ch": "硅谷101 · 第一层 · 真机数据（遥操工厂）",
"ts": "8:47",
"sec": 527,
"text": "是吧 有时候可能数据的一些上传操作界面 再到操作总有一些失败的时候 它可能要丢弃掉 重新尝试 所以就大概四分之一 所以大家可以看出来",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=527"
},
{
"src": "v1",
"ch": "硅谷101 · 第一层 · 真机数据（遥操工厂）",
"ts": "9:00",
"sec": 540,
"text": "真机数据的优势是准确 更容易直接部署 后期调参成本也更低 但是它的代价也非常的直白 贵并且慢 不容易指数级扩张 数采工厂涉及到硬件成本",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=540"
},
{
"src": "v1",
"ch": "硅谷101 · 第一层 · 真机数据（遥操工厂）",
"ts": "9:13",
"sec": 553,
"text": "场地成本 人工标注和监督成本 以及时间成本 与互联网数据相比 规模完全不在一个量级 我们今年的真机的产能有200万小时 它对应的话我们已经有接近2000台机器人和背后的采集员的这样的规模了",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=553"
},
{
"src": "v1",
"ch": "硅谷101 · 第一层 · 真机数据（遥操工厂）",
"ts": "9:30",
"sec": 570,
"text": "然后这个规模会越来越大吗 真机我们今年差不多目前稳定在这个水平 当然看市场的一个动态的需求吧 我们也会去相应的做一些扩产 这个我相信人力成本一定会是将来竞争力和效率里面",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=570"
},
{
"src": "v1",
"ch": "硅谷101 · 第一层 · 真机数据（遥操工厂）",
"ts": "9:46",
"sec": 586,
"text": "非常重要的一环不可否认 所以这也是为什么在中国发展起了大量的数据采集 在美国相对来讲进展比较缓慢 因为在美国之前也看到过特斯拉的招聘",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=586"
},
{
"src": "v1",
"ch": "硅谷101 · 第一层 · 真机数据（遥操工厂）",
"ts": "9:57",
"sec": 597,
"text": "它采集员的招聘50美金一小时 如果是100万小时 100万小时今天放在全球 就一定是绝对非常碾压式的这种存在了 但是问题是100万小时就能解决问题了",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=597"
},
{
"src": "v1",
"ch": "硅谷101 · 第一层 · 真机数据（遥操工厂）",
"ts": "10:10",
"sec": 610,
"text": "100万小时我觉得在一些特定的领域 应该是可以达到非常好的一个效果了 因为今年我们也在接触了很多数据需求的客户 作为觅蜂的话",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=610"
},
{
"src": "v1",
"ch": "硅谷101 · 第一层 · 真机数据（遥操工厂）",
"ts": "10:21",
"sec": 621,
"text": "我们也在看很多客户的需求 提出100万小时的单个客户已经非常多了 那这只是第一步 我觉得大家到了100万一定会去想一千万 但即使是1亿小时",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=621"
},
{
"src": "v1",
"ch": "硅谷101 · 第一层 · 真机数据（遥操工厂）",
"ts": "10:31",
"sec": 631,
"text": "对于每年这种大的人工智能公司的基础设施投入来讲 也还是一个非常可控的一部分 顺便说一句 觅蜂科技正在将真机数据 做成一站式的物理AI数据服务平台",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=631"
},
{
"src": "v1",
"ch": "硅谷101 · 第一层 · 真机数据（遥操工厂）",
"ts": "10:44",
"sec": 644,
"text": "想要解决的就是当前机器人行业面临的真机交互数据荒漠的问题 觅蜂科技押注的是构建物理AI数据基础设施 实现织机遥操 无本体采集",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=644"
},
{
"src": "v1",
"ch": "硅谷101 · 第一层 · 真机数据（遥操工厂）",
"ts": "10:55",
"sec": 655,
"text": "仿真数据 全范式覆盖 并且想要打通硬件软件平台运营的全链路 觅蜂科技2026年的真机遥操产能接近200万小时 同时规划采集大约800万小时的Human-Centric数据",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=655"
},
{
"src": "v1",
"ch": "硅谷101 · 第一层 · 真机数据（遥操工厂）",
"ts": "11:09",
"sec": 669,
"text": "背后是将近2000台机器人和对应规模的采集团队 在中国国内以及东南亚多地同步运作 我们可以看出来啊 这就是机器人行业中的石油业务",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=669"
},
{
"src": "v1",
"ch": "硅谷101 · 第一层 · 真机数据（遥操工厂）",
"ts": "11:20",
"sec": 680,
"text": "而数据生态正在迅速的崛起 并且的需求量非常大 好 那么聊完了最顶层 我们接着来看一下机器人数据金字塔的第二层 就是仿真合成数据",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=680"
},
{
"src": "v1",
"ch": "硅谷101 · 第二层 · 仿真合成",
"ts": "11:32",
"sec": 692,
"text": "金字塔从上往下的第二层 就是仿真合成数据这条规模效应最极致的路线了 这也是黄仁勋的英伟达重点压注的路线 顺便说一个小八卦 听说黄仁勋的一儿一女都在英伟达的Physical AI 仿真部门 可见老黄对这一块是有多看重 简单来说 这不是从真实世界采集 而是在虚拟环境里面生成出来的数据 与一条一条训出来的真机数据做个对比",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=692"
},
{
"src": "v1",
"ch": "硅谷101 · 第二层 · 仿真合成",
"ts": "12:04",
"sec": 724,
"text": "英伟达Isaac Lab 可以在单台GPU上并行并行成千上万个虚拟机器人同时训练 规模可以是无限的 你想要多少数据就有多少数据",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=724"
},
{
"src": "v1",
"ch": "硅谷101 · 第二层 · 仿真合成",
"ts": "12:14",
"sec": 734,
"text": "比如说 机器人公司 Sharpa 在2026年 CES上面超火出圈的乒乓球机器人 就是花了40个小时用纯仿真数据训练出了0.02秒量级的机球反应速度",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=734"
},
{
"src": "v1",
"ch": "硅谷101 · 第二层 · 仿真合成",
"ts": "12:25",
"sec": 745,
"text": "那这就是这条路线的一个具体案例哈 仿真还能做到一件真机采集做不到的事 就是生成现实中极难遇到的边缘场景 机器人在仿真里面可以反复的摔倒",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=745"
},
{
"src": "v1",
"ch": "硅谷101 · 第二层 · 仿真合成",
"ts": "12:37",
"sec": 757,
"text": "反复的失败 所有的失败都会成为数据 而不造成任何真实的损失 Svina Sharpa 的研究科学家还告诉我们 仿真技术让触觉这样真机更难采集的数据有了新的突破",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=757"
},
{
"src": "v1",
"ch": "硅谷101 · 第二层 · 仿真合成",
"ts": "12:49",
"sec": 769,
"text": "我们最近跟英伟达合作了一个触觉仿真的一个工具叫TacMap 它其实做了这样一个事情 就是对于传统的视触觉而言 你需要在Simulation里面去建模这样的一个视触觉的指尖",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=769"
},
{
"src": "v1",
"ch": "硅谷101 · 第二层 · 仿真合成",
"ts": "13:01",
"sec": 781,
"text": "其实你可以考虑的事情是 你不可能在Simulation里面去装一些摄像头去看这个marker点的形变 所以我们提出了TacMap",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=781"
},
{
"src": "v1",
"ch": "硅谷101 · 第二层 · 仿真合成",
"ts": "13:11",
"sec": 791,
"text": "它是用了物体和指尖穿插的深度图作为一种介质 然后在仿真里面我们可以高效地得到这样的一个DeformationMap 并且它有很好的物理特性",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=791"
},
{
"src": "v1",
"ch": "硅谷101 · 第二层 · 仿真合成",
"ts": "13:21",
"sec": 801,
"text": "那在现实环境之中我们也通过类似的方式得到这样的一个DeformationMap 然后通过大量的数据采集 然后训练了一个翻译模型叫Translation Model 然后把Row Image翻译成了这个DeformationMap 然后基于这样的一个Deformation Map",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=801"
},
{
"src": "v1",
"ch": "硅谷101 · 第二层 · 仿真合成",
"ts": "13:39",
"sec": 819,
"text": "我们其实实现了一些技能的Sim-to-Real 然后它能够做一些精细化的一些操作 当然这个路线有一个巨大的bug 就是刚才我们嘉宾提到的Sim-to-Real Gap 这个字面的意思就是仿真到现实的鸿沟 那问题的本质是机器人在虚拟环境里面练得再好 放到真实世界里面往往会出现问题 为什么这么说呢",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=819"
},
{
"src": "v1",
"ch": "硅谷101 · 第二层 · 仿真合成",
"ts": "14:03",
"sec": 843,
"text": "因为仿真环境是人用代码构建的物理世界的近似 但是真实世界的物理要复杂得多 举一个最简单的例子 机器人在仿真里面学会了抓一个塑料杯子",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=843"
},
{
"src": "v1",
"ch": "硅谷101 · 第二层 · 仿真合成",
"ts": "14:15",
"sec": 855,
"text": "仿真里面这个杯子的重量 摩擦系数 形变方式都是固定的参数 但是在真实世界里 吃手拿杯子和干手拿杯子的摩擦系数是不一样的 杯子里有没有水重量也不一样",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=855"
},
{
"src": "v1",
"ch": "硅谷101 · 第二层 · 仿真合成",
"ts": "14:28",
"sec": 868,
"text": "光滑桌面和粗糙桌面上的杯子滑动方式也不一样 那么这些细节仿真里面要么没有建模 要么建模不够精确 那总的来说 运动学层面的问题包括关节怎么弯",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=868"
},
{
"src": "v1",
"ch": "硅谷101 · 第二层 · 仿真合成",
"ts": "14:39",
"sec": 879,
"text": "手臂走什么样的轨迹相对容易在仿真里面做好 放到真机效果上也还行 但是真正难的是动力学的层面 比如说物体之间接触的时候力怎么传递",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=879"
},
{
"src": "v1",
"ch": "硅谷101 · 第二层 · 仿真合成",
"ts": "14:49",
"sec": 889,
"text": "软性材料怎么形变 液体怎么流动 那这些现象对今天的物理引擎来说还很难完整的浮现 结果就是 机器人在仿真里面练了一万次叠衣服 但是放到真实的毛衣面前",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=889"
},
{
"src": "v1",
"ch": "硅谷101 · 第二层 · 仿真合成",
"ts": "15:01",
"sec": 901,
"text": "因为布料的柔软程度和仿真里面的参数对不上 那动作就会出错 这不是模型不够聪明 使他从来没有经历过真实的物理接触 目前行业中的解决办法包括了",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=901"
},
{
"src": "v1",
"ch": "硅谷101 · 第二层 · 仿真合成",
"ts": "15:13",
"sec": 913,
"text": "域随机化 也就是说不去做一个完美的仿真 而是做很多不一样的仿真 逼模型去学会忽略差异 抓住本质 那么第二呢 还有把仿真做得更好更真",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=913"
},
{
"src": "v1",
"ch": "硅谷101 · 第二层 · 仿真合成",
"ts": "15:24",
"sec": 924,
"text": "那这也是因为大家主要在做的事情 那第三呢 是用少量的真机数据去做微调 但是张凯峰就认为最终还需要一个更加创新的解决之道 现在很难解决的一个动力学的Sim-to-Real Gap是这个环境的Dynamics 也就是说你很难对齐这个物理世界的环境和现实世界的环境的这种迁移的这种我们所谓的Transition Model 所以这个是我觉得是目前还需要一些科学方法上的一些创新 除了Sim-to-Real 那么Real to SIM Gap也是目前行业中的核心挑战",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=924"
},
{
"src": "v1",
"ch": "硅谷101 · 第二层 · 仿真合成",
"ts": "15:57",
"sec": 957,
"text": "这个词你看和Sim-to-Real它是反过来的 意思就是说你没有办法把真实世界准确的搬进仿真里面 因为现实世界实在是太复杂了",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=957"
},
{
"src": "v1",
"ch": "硅谷101 · 第二层 · 仿真合成",
"ts": "16:08",
"sec": 968,
"text": "咱们的真实环境里面有无限的细节 噪音和不规则的事件还有很多难以预测的参数 所以仿真世界其实没有那么好见 这里面的细节我们这个视频就先不展开了",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=968"
},
{
"src": "v1",
"ch": "硅谷101 · 第二层 · 仿真合成",
"ts": "16:19",
"sec": 979,
"text": "仿真数据值得单看一期视频来详聊 我们已经在采访当中 记得先关注我的账号不要错过我们的深度更新 那现在我们继续往机器人的数据金字塔下面走来到第三层",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=979"
},
{
"src": "v1",
"ch": "硅谷101 · 第三层 · 动捕数据",
"ts": "16:32",
"sec": 992,
"text": "也就是动作捕捉数据 动作捕捉数据集被称为mocap 这个派系是用光学设备或者视觉算法追踪人手的运动轨迹 以纯视觉多了怎么动的信息维度",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=992"
},
{
"src": "v1",
"ch": "硅谷101 · 第三层 · 动捕数据",
"ts": "16:48",
"sec": 1008,
"text": "那动捕数据的本质是记录人是怎么动的 然后再把这个动作映射到机器人上 比如说机器人算法公司Physical Intelligence的π",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1008"
},
{
"src": "v1",
"ch": "硅谷101 · 第三层 · 动捕数据",
"ts": "16:58",
"sec": 1018,
"text": "系列系列就大量的使用了这类数据 而Pi 0.5 在大约400小时移动操作数据和大规模网络数据的基础上 实现了在真实家庭环境里面完成长程任务的能力",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1018"
},
{
"src": "v1",
"ch": "硅谷101 · 第三层 · 动捕数据",
"ts": "17:09",
"sec": 1029,
"text": "它的优点是数据质量高 尤其在运动结构上能够大幅度减少无效数据 对复杂动作特别有效 大家看到的很多很fancy的机器人跳舞 武术等等任务",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1029"
},
{
"src": "v1",
"ch": "硅谷101 · 第三层 · 动捕数据",
"ts": "17:20",
"sec": 1040,
"text": "都是用到了动作捕捉的数据收集 而这是纯强化学习很难达到的效果 但是这个路线除了成本贵 还有数据覆盖有限之外 还有一个很关键的劣势",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1040"
},
{
"src": "v1",
"ch": "硅谷101 · 第三层 · 动捕数据",
"ts": "17:32",
"sec": 1052,
"text": "就是人毕竟和机器人的结构不一样 那么这就是Embodiment Gap 一个方面是你看到的视觉上它是人的手 而不是机器人的手",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1052"
},
{
"src": "v1",
"ch": "硅谷101 · 第三层 · 动捕数据",
"ts": "17:42",
"sec": 1062,
"text": "所以它有视觉上的这种Gap 第二个问题是它有State上面的Gap 比如说你通过动补或者其他的一些方式得到了这个State",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1062"
},
{
"src": "v1",
"ch": "硅谷101 · 第三层 · 动捕数据",
"ts": "17:52",
"sec": 1072,
"text": "它其实是不准确的 它会有一些遮挡的问题 它会有一些被物体遮挡的问题 所以你得到的动作也是不准确的 Embodiment Gap",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1072"
},
{
"src": "v1",
"ch": "硅谷101 · 第三层 · 动捕数据",
"ts": "18:01",
"sec": 1081,
"text": "的意思是 人的身体和机器人的身体之间 有一道操作语义上的沟壑 人手在操作的时候依赖皮肤上密布的触觉感受器 每抓一个物体 神经系统都在实时根据触觉反馈调整力度",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1081"
},
{
"src": "v1",
"ch": "硅谷101 · 第三层 · 动捕数据",
"ts": "18:14",
"sec": 1094,
"text": "而机器人没有这套系统 所以即使动作轨迹被精确复制 完成任务的能力 也不会自动跟上 除了 Embodiment Gap 还有另外一个没有克服的难题叫做",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1094"
},
{
"src": "v1",
"ch": "硅谷101 · 第三层 · 动捕数据",
"ts": "18:25",
"sec": 1105,
"text": "Functional Retargeting 它的意思是机器人只是在模仿动作的形状 而不是理解这个动作要完成什么 也就是意味着你把人的动作映射到机器人动作上之后",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1105"
},
{
"src": "v1",
"ch": "硅谷101 · 第三层 · 动捕数据",
"ts": "18:38",
"sec": 1118,
"text": "它只是做了一个运动学上的一个对应关系 它没有真正的去实现这个操作本身的语意上的一个对应 也就是说动补数据会出现比如说关节角度超限",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1118"
},
{
"src": "v1",
"ch": "硅谷101 · 第三层 · 动捕数据",
"ts": "18:51",
"sec": 1131,
"text": "力矩不够 平衡失败等问题 那这就让这个层级的数据在一定程度上和一会儿我们会讲到的第四层的视频数据一起被认为是低质量数据 从YouTube到抖音",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1131"
},
{
"src": "v1",
"ch": "硅谷101 · 第三层 · 动捕数据",
"ts": "19:06",
"sec": 1146,
"text": "人类完成各种任务的视频海量存在 这是今天具身智能训练里面唯一真正不缺的原材料 但它能够教会机器人什么呢 更多是让我们的机器人的模型大脑去学习一种通用的表征",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1146"
},
{
"src": "v1",
"ch": "硅谷101 · 第四层 · 互联网视频与 Ego",
"ts": "19:24",
"sec": 1164,
"text": "就是说简单的认知 以及说很多物理规律的一些粗浅的一些认知 但是呢就是说它还只停留在一个认知的阶段 姚卯青用了一个有趣的比喻",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1164"
},
{
"src": "v1",
"ch": "硅谷101 · 第四层 · 互联网视频与 Ego",
"ts": "19:36",
"sec": 1176,
"text": "看再多别人打乒乓球的比赛视频 你第一天拿起球拍也接不住球 对吧 那视频呢给机器人建立了关于物理世界的基础认知 知道乒乓球是什么形状",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1176"
},
{
"src": "v1",
"ch": "硅谷101 · 第四层 · 互联网视频与 Ego",
"ts": "19:48",
"sec": 1188,
"text": "知道打球大概是什么动作 但是从知道到会做之间隔着一道鸿沟 视频里面根本就没有动作信号 只有结果 互联网上的海量视频数据也被 Sharpa",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1188"
},
{
"src": "v1",
"ch": "硅谷101 · 第四层 · 互联网视频与 Ego",
"ts": "20:00",
"sec": 1200,
"text": "称为是最低质量的数据啊 YouTube videos 最大的劣势是它没有力和触觉信息 它的优势是它的量非常大 然后它能够给我们一些信息",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1200"
},
{
"src": "v1",
"ch": "硅谷101 · 第四层 · 互联网视频与 Ego",
"ts": "20:11",
"sec": 1211,
"text": "这些信息包括世界是怎么变化的 我们常常讲word models 就是利用好了这种in the wild的数据来训练这样的一个word models 第二个事情是它能够给我们一些操作的一些信息 比如说这个affordance是什么 那这个信息对于我们操作来讲其实也非常关键",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1211"
},
{
"src": "v1",
"ch": "硅谷101 · 第四层 · 互联网视频与 Ego",
"ts": "20:29",
"sec": 1229,
"text": "在进一步聊视频作为机器人数据之前呢 我们引入两个很关键的概念 分别是ego-centric和human-centric 这两个分类呢",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1229"
},
{
"src": "v1",
"ch": "硅谷101 · 第四层 · 互联网视频与 Ego",
"ts": "20:39",
"sec": 1239,
"text": "是视频数据中被认为对机器人最有用的数据 EgoCentric 的意思是自我中心数据 也就是以机器人的视角看出去 看到桌子 杯子",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1239"
},
{
"src": "v1",
"ch": "硅谷101 · 第四层 · 互联网视频与 Ego",
"ts": "20:48",
"sec": 1248,
"text": "自己的机械臂 甚至还有遮挡 接触和动态变化 这样和行动绑定的低视角视频 并且能够直接用于决策的数据 被称为EgoCentric",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1248"
},
{
"src": "v1",
"ch": "硅谷101 · 第四层 · 互联网视频与 Ego",
"ts": "20:58",
"sec": 1258,
"text": "为什么这个视角很重要呢 是因为机器人从他的摄像头 特别是人型机器人 他看到的视角就是这样的 苹果在2025年5月发布了一个Ego-Centric的数据集",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1258"
},
{
"src": "v1",
"ch": "硅谷101 · 第四层 · 互联网视频与 Ego",
"ts": "21:10",
"sec": 1270,
"text": "名为Ego Dex 用Apple Vision Pro采集了829小时第一人称视角视频 每一帧都配有手部 每个关节的精确3D追踪数据",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1270"
},
{
"src": "v1",
"ch": "硅谷101 · 第四层 · 互联网视频与 Ego",
"ts": "21:19",
"sec": 1279,
"text": "覆盖机械带 折叠硬物等194种的桌面操作任务 数据集完全开源 希望能推动机器人灵巧操作研究 那最近我们刚才提到的密封科技也是推出了M-Ego系列",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1279"
},
{
"src": "v1",
"ch": "硅谷101 · 第四层 · 互联网视频与 Ego",
"ts": "21:33",
"sec": 1293,
"text": "无本体数据采集 设备 M-Ego Gripper 和 M-Ego View 搭配 M-Ego Engine 一战式数据治理服务平台 试图去降低物理",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1293"
},
{
"src": "v1",
"ch": "硅谷101 · 第四层 · 互联网视频与 Ego",
"ts": "21:42",
"sec": 1302,
"text": "AI 数据采集对实体机器人本体的依赖 让高质量的第一视角数据走向轻量化 规模化和全场景化 另外一个词 Human-Centric",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1302"
},
{
"src": "v1",
"ch": "硅谷101 · 第四层 · 互联网视频与 Ego",
"ts": "21:52",
"sec": 1312,
"text": "数据的意思就是围绕着人类行为和意图以及偏好或示范来构建 用来让机器人学习人类想要的行为方式 比如说人类抓杯子 人类开门 人类折叠衣服",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1312"
},
{
"src": "v1",
"ch": "硅谷101 · 第四层 · 互联网视频与 Ego",
"ts": "22:04",
"sec": 1324,
"text": "这类的 人直接做给机器人看的视频 能够让具身智能理解人想达到什么样的目标 以及人类标准中的正确做法 而Human-Centric的数据可以是第一视角",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1324"
},
{
"src": "v1",
"ch": "硅谷101 · 第四层 · 互联网视频与 Ego",
"ts": "22:17",
"sec": 1337,
"text": "也可以是第三视角 来 我们来总结一下 Ego-Centric是第一人称视角视频 但是任务不一定和人相关 而Human-Centric是人类一图的视频",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1337"
},
{
"src": "v1",
"ch": "硅谷101 · 第四层 · 互联网视频与 Ego",
"ts": "22:28",
"sec": 1348,
"text": "那么这两者 交集的那个区域呢 就是Ego-Centric Jack Human-Centric 这个人类在第一视角下完成任务的数据",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1348"
},
{
"src": "v1",
"ch": "硅谷101 · 第四层 · 互联网视频与 Ego",
"ts": "22:37",
"sec": 1357,
"text": "那么这是被视为视频数据当中最有价值的部分 比如说呢 英伟达在今年3月推出的Ego Scale 就使用超过2万小时的人类视频进行运训练",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1357"
},
{
"src": "v1",
"ch": "硅谷101 · 第四层 · 互联网视频与 Ego",
"ts": "22:48",
"sec": 1368,
"text": "涵盖数千个独特的任务和环境 精确的骨骼手部追踪使模型能够提取并且重新定位 21个人体运动关键点 从而构建统一的机器人运动空间",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1368"
},
{
"src": "v1",
"ch": "硅谷101 · 第四层 · 互联网视频与 Ego",
"ts": "22:59",
"sec": 1379,
"text": "所以虽然YouTube data 被机器人专家们各种嫌弃 但是你想想 因为它的海量存在和低成本效应 如果某家公司通过某种技术突破",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1379"
},
{
"src": "v1",
"ch": "硅谷101 · 第四层 · 互联网视频与 Ego",
"ts": "23:10",
"sec": 1390,
"text": "让这些互联网视频变得更可用 能够大幅度提升机器人的表现 那不就赚大法了 诶 这正是目前各大公司压住的重点 特斯拉在2025年6月做了一次重要的策略调整",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1390"
},
{
"src": "v1",
"ch": "硅谷101 · 第四层 · 互联网视频与 Ego",
"ts": "23:24",
"sec": 1404,
"text": "把此前依赖动作捕捉套装和 VR 头显的采集方式 换成了摄像机头盔 让工人带着装有5个摄像头的装备 录制日常操作视频 再用这些视频训练Optimus",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1404"
},
{
"src": "v1",
"ch": "硅谷101 · 第四层 · 互联网视频与 Ego",
"ts": "23:36",
"sec": 1416,
"text": "公司内部表示 这样能够更快规模化 顺便说一句 自动驾驶不就是Egocentric的数据吗 而且 FSD 不就是用视频数据驱动汽车这个物理本体的案例吗",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1416"
},
{
"src": "v1",
"ch": "硅谷101 · 第四层 · 互联网视频与 Ego",
"ts": "23:49",
"sec": 1429,
"text": "所以Optimus会在视频数据路线上再次的压注 我也是一点都不意外 这也是非常符合马斯克的第一性原理了 而同时 初创公司们也在如何将低质量数据变得更可用路线上有着非常积极的尝试",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1429"
},
{
"src": "v1",
"ch": "硅谷101 · 第四层 · 互联网视频与 Ego",
"ts": "24:04",
"sec": 1444,
"text": "在今年年初 Sharpa 发布了CraftNet 他们用一套触觉反射层 System 0做补偿 机器人上层策略只需要给出粗糙的动作意图",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1444"
},
{
"src": "v1",
"ch": "硅谷101 · 第四层 · 互联网视频与 Ego",
"ts": "24:13",
"sec": 1453,
"text": "底层触觉感知系统根据实时力反馈自动完成精细调整 这个设计从硬件层降低了对上层数据精度的要求 使得低质量动作捕捉和视频数据也可以被利用起来",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1453"
},
{
"src": "v1",
"ch": "硅谷101 · 第四层 · 互联网视频与 Ego",
"ts": "24:25",
"sec": 1465,
"text": "因为有了这样一个System 0的话 所以我们可以达到一个顶时澄清的作用 就是能够把大量的低质量数据用起来 因为我们的System",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1465"
},
{
"src": "v1",
"ch": "硅谷101 · 第四层 · 互联网视频与 Ego",
"ts": "24:35",
"sec": 1475,
"text": "1只需要给出一个粗糙的动作 粗糙的手势 以及它的操作意图就能够去实现一个Find Manipulation的能力 好 我们说完了机器人数据的四层金字塔结构",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1475"
},
{
"src": "v1",
"ch": "硅谷101 · 成本天平 · 混合配方",
"ts": "24:46",
"sec": 1486,
"text": "各自的优劣性以及各层级正在发生的进展 你会发现那个真理 与熊掌不可兼得 真的是有道理的 你看啊 最精确 最高质量的真机数据呢 是最少最难获取的",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1486"
},
{
"src": "v1",
"ch": "硅谷101 · 成本天平 · 混合配方",
"ts": "25:00",
"sec": 1500,
"text": "而最容易获取的视频数据呢 又是质量最低 最不可用的数据 所以呢 行业现在的做法是 我把它们混合起来用 能不能又平衡数据质量 又能平衡一下成本呢",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1500"
},
{
"src": "v1",
"ch": "硅谷101 · 成本天平 · 混合配方",
"ts": "25:13",
"sec": 1513,
"text": "那么这个混合的配方又是如何实现的呢 我们在业界跟很多机器人公司聊啊 目前一个普遍的共识是 这四层金字塔代表着数据的不同来源",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1513"
},
{
"src": "v1",
"ch": "硅谷101 · 成本天平 · 混合配方",
"ts": "25:27",
"sec": 1527,
"text": "并且也要适配不同的巨身本体和模型 没有一个统一的标准 每个公司都会有自己的配方和天平 它其实可能是一个整合的solution到最后",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1527"
},
{
"src": "v1",
"ch": "硅谷101 · 成本天平 · 混合配方",
"ts": "25:38",
"sec": 1538,
"text": "对 它会是一个整合的solution 那分别就是它们中间的比例大概是什么样子 现在来讲我觉得很难说究竟什么样的一个比例是黄金配方",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1538"
},
{
"src": "v1",
"ch": "硅谷101 · 成本天平 · 混合配方",
"ts": "25:49",
"sec": 1549,
"text": "因为它不是一个简单的配比 然后达成一个单一目标的问题 因为现在首先在技术路线上还有很多多路径的探索 它并没有说皈依到一种确定的范式",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1549"
},
{
"src": "v1",
"ch": "硅谷101 · 成本天平 · 混合配方",
"ts": "26:01",
"sec": 1561,
"text": "大家以一个确定的配方就能完成一个非常好的效果 其次 我们训练机器人模型目前的目标和目的也不是唯一的 在有一些情况下 可能我们训练机器人就是要让他在某一个特定的场景干到极致",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1561"
},
{
"src": "v1",
"ch": "硅谷101 · 成本天平 · 混合配方",
"ts": "26:16",
"sec": 1576,
"text": "让它去达到比如说工业场景 人的这种节拍效率 100%的成功率 但有一些场景它可能更考虑是一个泛化性 它能接受你成功率没有到100",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1576"
},
{
"src": "v1",
"ch": "硅谷101 · 成本天平 · 混合配方",
"ts": "26:30",
"sec": 1590,
"text": "也许98 99它是可以接受的 甚至是允许人去在过程中做一些干预 做一些接管兜底 是吧 但它对泛化性要求很高 面向于这种不同的目标",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1590"
},
{
"src": "v1",
"ch": "硅谷101 · 成本天平 · 混合配方",
"ts": "26:41",
"sec": 1601,
"text": "不同的要求 其实大家用到的数据比例也会不一样 而对 Sharpa来说 答案也很类似 对于不同的任务 他们采取了不同的数据策略 我们的乒乓球机器人",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1601"
},
{
"src": "v1",
"ch": "硅谷101 · 成本天平 · 混合配方",
"ts": "26:52",
"sec": 1612,
"text": "其实是在仿真里面训练的 他大概是训练了40小时左右 然后我们的发牌机器人 其实是用的是Imitation的方式来训练的 他大概是用到了两三百小时的Teleoperation data 以及一些EgoSanTrack的数据 张凯峰也给了我们一个非常平均的估算 在训练较为复杂的任务当中 各层数据之间的轨迹数量比大约是遥操数据和动捕数据的比是1比100",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1612"
},
{
"src": "v1",
"ch": "硅谷101 · 成本天平 · 混合配方",
"ts": "27:21",
"sec": 1641,
"text": "那动捕数据和互联网视频的数据是1比100 那换算下来 遥操数据在整个数据池里面大约是万分之一的存在 但就是这万分之一 往往是最终决定模型能否在真实场景里落地的关键",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1641"
},
{
"src": "v1",
"ch": "硅谷101 · 成本天平 · 混合配方",
"ts": "27:35",
"sec": 1655,
"text": "如果非要我选择一个更重要的点的话 我会选择数据质量 因为只有有好高质量数据你才能够训练出有用的模型 然后但是如果我们的数量很难去规模化的话",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1655"
},
{
"src": "v1",
"ch": "硅谷101 · 成本天平 · 混合配方",
"ts": "27:50",
"sec": 1670,
"text": "其实我们需要做一个折中 那这个折中的话可能就像我刚刚讲的这种数据金斯塔的方式 然后把每一部分的数据都能够利用起来 它能够去理解环境的一个变化",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1670"
},
{
"src": "v1",
"ch": "硅谷101 · 成本天平 · 混合配方",
"ts": "28:01",
"sec": 1681,
"text": "也能够去理解这个操作的语义 然后最终能够帮我们完成这样的一个操作任务 那以上呢 我们聊到了智元账的中国机器人公司如何去处理数据问题",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1681"
},
{
"src": "v1",
"ch": "硅谷101 · 成本天平 · 混合配方",
"ts": "28:13",
"sec": 1693,
"text": "太贵太慢 就直接呢把它做成工厂 利用人力成本和效率优势来打造货城河 但在人力成本高昂的硅谷 几家最受关注的机器人公司却不得不走数据的捷径路线",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1693"
},
{
"src": "v1",
"ch": "硅谷101 · 硅谷的数据「捷径」",
"ts": "28:33",
"sec": 1713,
"text": "比如说Physical Intelligence的数据策略呢 就是靠精度加迭代 他们在旧金山Dandelion Chocolate工厂部署了一台机器人",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1713"
},
{
"src": "v1",
"ch": "硅谷101 · 硅谷的数据「捷径」",
"ts": "28:42",
"sec": 1722,
"text": "整天打包巧克力盒子 同时在办公室提供咖啡服务 员工在 Slack 里面发 我要一杯拿铁 机器人就会去做 创始人 Sergey Levine的哲学是",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1722"
},
{
"src": "v1",
"ch": "硅谷101 · 硅谷的数据「捷径」",
"ts": "28:52",
"sec": 1732,
"text": "就去看当机器人不得不在真实事件里面完成任务的时候会发生什么 以及这类部署的数据能如何继续的改善系统 在这个基础上 Pi 试图让机器人在真实部署里面通过强化学习RL",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1732"
},
{
"src": "v1",
"ch": "硅谷101 · 硅谷的数据「捷径」",
"ts": "29:05",
"sec": 1745,
"text": "去持续的自我改进 2015年11月发布的 Pi 0.6 用的一套叫做 Recap 的方法 在折叠衣物 装纸箱 做浓缩咖啡的任务上 把最难任务的吞吐量提升了一倍以上",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1745"
},
{
"src": "v1",
"ch": "硅谷101 · 硅谷的数据「捷径」",
"ts": "29:18",
"sec": 1758,
"text": "失败率降低了大约一半 2026年3月发布的RLT方法 引入了一个特殊的输出token 作为VLA模型与轻量级RL策略之间的紧凑接口",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1758"
},
{
"src": "v1",
"ch": "硅谷101 · 硅谷的数据「捷径」",
"ts": "29:30",
"sec": 1770,
"text": "只需要几小时真实操作练习 机器人在精细操作任务上的速度就能提升三倍 某些动作甚至超过人类遥操员 那么这条强化学习路线的吸引力在于",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1770"
},
{
"src": "v1",
"ch": "硅谷101 · 硅谷的数据「捷径」",
"ts": "29:41",
"sec": 1781,
"text": "机器人自己产生自己的训练数据是绕过了人工采集 但是它有三个今天还没有好答案的真实问题 第一是奖励函数 衣服叠得够好的标准很难量化",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1781"
},
{
"src": "v1",
"ch": "硅谷101 · 硅谷的数据「捷径」",
"ts": "29:53",
"sec": 1793,
"text": "第一不准机器人就会去找捷径 比如说把衣服揉成一团塞进角落 因为这样占用空间最小是满足了某个错误的优化目标 第二就是安全边界",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1793"
},
{
"src": "v1",
"ch": "硅谷101 · 硅谷的数据「捷径」",
"ts": "30:06",
"sec": 1806,
"text": "机器人在客户生产线上试错 每次失败都有现实代价 损坏产品 影响节拍 甚至伤到工人 第三就是数据归属 强化学习数据是机器人用客户的物理空间和物理资产试错产生的",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1806"
},
{
"src": "v1",
"ch": "硅谷101 · 硅谷的数据「捷径」",
"ts": "30:22",
"sec": 1822,
"text": "所有权比遥操数据更加模糊 遥操好大又明确的人工生产主体 但是强化学习没有 如今Physical Intelligence在Pi0.6上面验证的场景是相对结构化的人物",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1822"
},
{
"src": "v1",
"ch": "硅谷101 · 硅谷的数据「捷径」",
"ts": "30:35",
"sec": 1835,
"text": "在受控实验环境里运行了13小时 距离真实工厂大规模部署 在陌生场景里面稳定运行还有相当的距离 除了强化学习RL路线 派同时在探索用我们上面提到的一个Centric视频去补充训练数据",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1835"
},
{
"src": "v1",
"ch": "硅谷101 · 硅谷的数据「捷径」",
"ts": "30:50",
"sec": 1850,
"text": "派在2025年12月发布的研究显示 一旦机器人基础模型积累了足够的真实操作经验 加入第一人称人类视频之后 各个繁华人物的平均成功率接近三倍",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1850"
},
{
"src": "v1",
"ch": "硅谷101 · 硅谷的数据「捷径」",
"ts": "31:01",
"sec": 1861,
"text": "2025年9月 Figure AI 与全球最大另类资产管理公司 Brookfield 签署战略合作 那 Brookfield 管理着超过10万套住宅",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1861"
},
{
"src": "v1",
"ch": "硅谷101 · 硅谷的数据「捷径」",
"ts": "31:16",
"sec": 1876,
"text": "5亿平方英尺的商业办公室和 1.6亿平方英尺的物流空间 那 Figure 的计划是在这些真实的家和写字楼里面 让人带着摄像头拍视频",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1876"
},
{
"src": "v1",
"ch": "硅谷101 · 硅谷的数据「捷径」",
"ts": "31:27",
"sec": 1887,
"text": "再用这些视频训练 Helix 模型 它的目标是建成全球规模最大 最多样化的人型机器人预训练数据集 Brookfield同时跟投了Figure超10亿美元的C",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1887"
},
{
"src": "v1",
"ch": "硅谷101 · 硅谷的数据「捷径」",
"ts": "31:39",
"sec": 1899,
"text": "轮融资 Figure随后发布了初步结果 Helix模型在只用第一人称人类视频训练没有任何机器人数据的情况下 已经能够根据自然语言指令在杂乱的真实房间里面导航移动了",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1899"
},
{
"src": "v1",
"ch": "硅谷101 · 硅谷的数据「捷径」",
"ts": "31:52",
"sec": 1912,
"text": "还有一家更小的创业公司Sunday Robotics走的路是更极端的 他们直接付钱让普通人在家里面录自己做家务的视频 然后用这些视频去训练机器人",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1912"
},
{
"src": "v1",
"ch": "硅谷101 · 硅谷的数据「捷径」",
"ts": "32:07",
"sec": 1927,
"text": "把数据采集源直接变成众包经纪的工作 那如果我们看看不同机器人公司如何压住数据路线 我们会发现不同的市场因为生态不同做出了不同的决策",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1927"
},
{
"src": "v1",
"ch": "硅谷101 · 硅谷的数据「捷径」",
"ts": "32:19",
"sec": 1939,
"text": "那整个硅谷是在往视频数据靠的 减少对遥操的依赖 压住可以被动规模化的采集方式 那么这和中国公司的方向还是形成了差异化 但是这两种选择可能也无所谓对错",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1939"
},
{
"src": "v1",
"ch": "硅谷101 · 硅谷的数据「捷径」",
"ts": "32:33",
"sec": 1953,
"text": "因为我们还在行业的一个超级初期 任何的尝试都是有意义的 特别是对于数据来说 开源更是一件广受欢迎和好评的事 2024年 智元做了一些让行业困惑的决定",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1953"
},
{
"src": "v1",
"ch": "硅谷101 · 开源与数据飞轮",
"ts": "32:46",
"sec": 1966,
"text": "把自己辛苦采集的百万条遥操数据打包成AGI BotWorld的数据机 免费向全球开放 但是这背后有一个被大多数报道忽略的行业困境",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1966"
},
{
"src": "v1",
"ch": "硅谷101 · 开源与数据飞轮",
"ts": "33:00",
"sec": 1980,
"text": "2023年到2024年 具身智能公司大量涌现 但整个行业命令一个根本性的认知危机 没有公共的数据基准就无法判断一个模型的训练方法对不对",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1980"
},
{
"src": "v1",
"ch": "硅谷101 · 开源与数据飞轮",
"ts": "33:11",
"sec": 1991,
"text": "谷歌的RT系列和看院模型OpenVLA在学术界引发了广泛的关注 是开创了VLA这个范式 但是因为训练数据全是学术级的数据集",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=1991"
},
{
"src": "v1",
"ch": "硅谷101 · 开源与数据飞轮",
"ts": "33:22",
"sec": 2002,
"text": "在实际场景里面的效果依然很有限 这导致这个范式的真实潜力长期得不到验证 这个事情一定得有人迈出第一步 是吧 工业界的人有人得迈出第一步",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=2002"
},
{
"src": "v1",
"ch": "硅谷101 · 开源与数据飞轮",
"ts": "33:33",
"sec": 2013,
"text": "因为否则的话就是谁也无法去真正训练出高质量的模型 且有一个公允的benchmark的数据集去做benchmark 面对这个数据荒漠吧",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=2013"
},
{
"src": "v1",
"ch": "硅谷101 · 开源与数据飞轮",
"ts": "33:45",
"sec": 2025,
"text": "我们算是种下第一棵树 希望将来能这个变成一片森林了 而这棵树发芽了 2025年3月 英伟达在GTC大会上发布了第一代具身基础模型",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=2025"
},
{
"src": "v1",
"ch": "硅谷101 · 开源与数据飞轮",
"ts": "33:57",
"sec": 2037,
"text": "GR00T N1 而 GR00T N1 训练所用的真实世界数据里面 大约80%都来自 AgiBot World 而开源的连锁效应还不止于此",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=2037"
},
{
"src": "v1",
"ch": "硅谷101 · 开源与数据飞轮",
"ts": "34:06",
"sec": 2046,
"text": "越来越多的学术团队在用了 AgiBot World 之后 转而去采购支援的机器人本体做研发 因为在同一款本体上面采集的数据 在这款本体上训练出来的模型效果会更好",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=2046"
},
{
"src": "v1",
"ch": "硅谷101 · 开源与数据飞轮",
"ts": "34:18",
"sec": 2058,
"text": "也就是说 数据开源带来了生态 生态带来了硬件销量 而硬件销量能够产生更多的数据 那说到这里呢 我们看到机器人的数据工厂在建 开源生态正在形成",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=2058"
},
{
"src": "v1",
"ch": "硅谷101 · 开源与数据飞轮",
"ts": "34:31",
"sec": 2071,
"text": "下一个问题是 具身智能能否形成真正的数据飞轮呢 这是绝对会存在的 具身智能跟大模型其实太一样了 数据飞轮的核心要因就是说 在模型部署之后",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=2071"
},
{
"src": "v1",
"ch": "硅谷101 · 开源与数据飞轮",
"ts": "34:45",
"sec": 2085,
"text": "在用户的使用过程中 它还能够持续地接收到反馈 然后利用这些反馈去不断提升自己的能力 最终变成用户体验的一个提升 机器人现在其实更需要这样的飞轮",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=2085"
},
{
"src": "v1",
"ch": "硅谷101 · 开源与数据飞轮",
"ts": "35:00",
"sec": 2100,
"text": "也更会催生这样的飞轮 因为语言模型相对来讲 它的容错度是比较高的 今天大语模型跟你续续刀说一堆话 是吧 里面可能说说几个字 似是而非一些",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=2100"
},
{
"src": "v1",
"ch": "硅谷101 · 开源与数据飞轮",
"ts": "35:14",
"sec": 2114,
"text": "你觉得还好 那机器人他如果是作业 你进工厂打螺丝 是吧 你这个就是毫米机的东西 你差一点点可能就不行了 你一定是需要在这个现实的部署过程中",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=2114"
},
{
"src": "v1",
"ch": "硅谷101 · 开源与数据飞轮",
"ts": "35:25",
"sec": 2125,
"text": "遇到了很多失败的这种场景 然后把这些数据采集回来 然后不断地去提升 才能达到我们刚刚说进工厂 人类的节拍 百小时千小时MTBF这样的一些级别",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=2125"
},
{
"src": "v1",
"ch": "硅谷101 · 开源与数据飞轮",
"ts": "35:37",
"sec": 2137,
"text": "这么一个数据飞轮 比如说你要类比代元模型的scaling law 它们是一回事吗 还是有区别的 其实它们就基本上还是一回事 数据飞轮就是一定要在使用的过程中",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=2137"
},
{
"src": "v1",
"ch": "硅谷101 · 开源与数据飞轮",
"ts": "35:51",
"sec": 2151,
"text": "在真正实地部署的这种形态下去持续收集数据 那这一套其实我们现在已经是在我们的所有的机器人产品上作为一个标配搭售的 在用户许可的情况下",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=2151"
},
{
"src": "v1",
"ch": "硅谷101 · 开源与数据飞轮",
"ts": "36:03",
"sec": 2163,
"text": "我们会像现在自动驾驶的这种功能一样 它去收集那些高优的数据 部署的机器人收集到数据当中 大概有多少的比例就可以回流回来 再给咱们进行一个训练",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=2163"
},
{
"src": "v1",
"ch": "硅谷101 · 开源与数据飞轮",
"ts": "36:17",
"sec": 2177,
"text": "大概的比例我估计就是可能在5%以内吧 因为大部分时间它这个数据对我们来讲并没有提升的意义 它因为都是成功的 属于是已经会的东西",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=2177"
},
{
"src": "v1",
"ch": "硅谷101 · 开源与数据飞轮",
"ts": "36:29",
"sec": 2189,
"text": "所以你们只需要失败的 我们只需要 还不会的 要不然天天这么多车在路上跑 全世界的存储都存不下这些实施的数据 大家都是触发一些高价值的数据",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=2189"
},
{
"src": "v1",
"ch": "硅谷101 · 开源与数据飞轮",
"ts": "36:40",
"sec": 2200,
"text": "但飞轮能转不代表转速能够达到预期 这里有一个比飞轮更基础的问题 具身智能的scaling law是否成立呢 在语言模型里面这个问题有着明确的答案",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=2200"
},
{
"src": "v1",
"ch": "硅谷101 · 开源与数据飞轮",
"ts": "36:52",
"sec": 2212,
"text": "数据翻倍 模型变大 能力就会涌现 但是机器人行业目前还没有答案 至少我们需要看到随着数据量的增加 随着模型的规模的变大 然后我们可以看到它能够有这种智能的涌现",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=2212"
},
{
"src": "v1",
"ch": "硅谷101 · 开源与数据飞轮",
"ts": "37:07",
"sec": 2227,
"text": "它能够实现任务级的泛化能力 我认为现在还没有看到有任务级别的泛化 我们现在能够看到的泛化往往是一些比如物体的泛化 比如说我看到过很多的物体能够实现物体层面的泛化",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=2227"
},
{
"src": "v1",
"ch": "硅谷101 · 开源与数据飞轮",
"ts": "37:20",
"sec": 2240,
"text": "也能够实现环境层面的泛化 但是在任务层级的泛化我们还没有看到 而这里就是关键区别了 物体泛化 也就是见过类似物体就能够处理 和任务泛化",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=2240"
},
{
"src": "v1",
"ch": "硅谷101 · 开源与数据飞轮",
"ts": "37:32",
"sec": 2252,
"text": "也就是从来没见过这类任务也能举一反三 这是两个完全不同量级的能力 前者在今天已经在一定程度上实现了 但是后者还没有可信的证据",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=2252"
},
{
"src": "v1",
"ch": "硅谷101 · 开源与数据飞轮",
"ts": "37:44",
"sec": 2264,
"text": "而这个证据是整个机器人行业走向下一步进化的钥匙 而在机器人大规模部署之前 我们可能都不会有答案 Pi的创始人Sagate Levine教授在他的Substack上面写道",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=2264"
},
{
"src": "v1",
"ch": "硅谷101 · 开源与数据飞轮",
"ts": "37:57",
"sec": 2277,
"text": "在美国有大约1万家麦当劳 一旦每家麦当劳各放一台机器人 每天工作2小时 一年就能够产生1000万小时的具身智能训练数据 比现有全球积累的总量还要多几个数量级",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=2277"
},
{
"src": "v1",
"ch": "硅谷101 · 开源与数据飞轮",
"ts": "38:11",
"sec": 2291,
"text": "在今年3月底 智元率先在产量上突破了1万台具身机器人 我们距离找到这把机器人的数据钥匙是否更近了呢 我们拭目以待 好啦 这就是我们的机器人系列的最新一期内容了",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=2291"
},
{
"src": "v1",
"ch": "硅谷101 · 开源与数据飞轮",
"ts": "38:26",
"sec": 2306,
"text": "接下来呢 我们将带大家走进机器人的本体测试工厂啊 聊聊机器人的本体与硬件供应链 之后呢 我们也准备就仿真数据这条线再进行深度的挖掘",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=2306"
},
{
"src": "v1",
"ch": "硅谷101 · 开源与数据飞轮",
"ts": "38:38",
"sec": 2318,
"text": "大家不要忘记关注硅谷101哦 之后的内容会更加的精彩 那么以上就是这期视频的全部内容了 你们的点赞留言和转发是支持我们硅谷101",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=2318"
},
{
"src": "v1",
"ch": "硅谷101 · 开源与数据飞轮",
"ts": "38:47",
"sec": 2327,
"text": "做好深度科技和商业内容的最佳动力 我是陈倩 那我们就下期视频再见啦 Bye",
"url": "https://www.bilibili.com/video/BV1uQ5Y6mExN?t=2327"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 开场：四种采集方式",
"ts": "0:00",
"sec": 0,
"text": "具身智能的数据到底从何而来?我今天的一个视频讲清楚从最初的遥控操作就是遥操到现在最火的技术前沿的这个UMI和Ego 数据啊目前新闻上已经很多了就是可以在生活中第一人生视角就可以去采集数据甚至诞生了一个新的岗位叫数据采集师嘛那么这几种素材的方式他们的价值是什么优势劣势是什么以及最终他们会演变为何种方式啊这个趋势的判断我今天呢一口气讲完",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=0"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 为什么数据决定一切",
"ts": "0:30",
"sec": 30,
"text": "共识就是 具身智能的数据为什么那么重要 好 我们先去类比一下大语言模型 大语言模型为什么现在大家公认的能力很不错 很智能 有生产力",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=30"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 为什么数据决定一切",
"ts": "0:39",
"sec": 39,
"text": "是因为模型强大 对吧 模型为什么强大 因为数据的量大 它是以天然存在的互联网上的这些文字文本作为数据的 那这个数量即在Tradium级别",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=39"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 为什么数据决定一切",
"ts": "0:51",
"sec": 51,
"text": "就是在万亿级别 数据体量越大 模型能力才能越强 所以我们如果希望具身智能它将来能够产生physicalAI 就是能够去跟物理世界做交互",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=51"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 为什么数据决定一切",
"ts": "1:00",
"sec": 60,
"text": "做家务啊什么的 他也需要大量的数据 而这些数据呢 目前互联网上数据还很难被利用起来 所以需要依靠我们去采集数据 就是我们今天讲的四种采集方式",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=60"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 为什么数据决定一切",
"ts": "1:11",
"sec": 71,
"text": "那么当下进展如何呢 这个数据体量相比于大语言模型的数据体量差了四到五个数量级 就是远远不够 而具身智能所要解决的问题又比大语言模型要难好多倍",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=71"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 为什么数据决定一切",
"ts": "1:23",
"sec": 83,
"text": "大语言模型只要生成文字就行了 具身智能要去干活的 更难 所以我现在来讲一句话 就是说目前 具身智能整个行业的模型发展 比如说VLA也好",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=83"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 为什么数据决定一切",
"ts": "1:34",
"sec": 94,
"text": "世界模型也好 几乎都可以理解为是在数据不足的情况之下 我们变着法 变着花样 去在模型层面进行创新 比如说像大约模型去借一个智能",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=94"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 为什么数据决定一切",
"ts": "1:46",
"sec": 106,
"text": "那么这个就是VLA了 这个L就是Language Model 或者我自己脑补就虚拟生成一个动态变化的环境 然后我基于这个环境去做一些任务的规划",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=106"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 为什么数据决定一切",
"ts": "1:57",
"sec": 117,
"text": "这就是世界模型了 所以这两者都是因为当下的具身数据不足 远远不足 我又需要机器人去做一些智能的操作那怎么办呢 那只能是在模型层面去做一些创新",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=117"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 为什么数据决定一切",
"ts": "2:09",
"sec": 129,
"text": "所以未来如果说具身的数据爆炸式的增长 我们可以利用起来了 那我觉得模型应该也会有更大的变革创新 目前大家接触这些模型可能都会被替代掉",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=129"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 为什么数据决定一切",
"ts": "2:23",
"sec": 143,
"text": "好吧 这个铺垫先讲这么多 然后我们正式开始 我们先从遥操开始讲 这是最基础的 就字面意思 遥控操作 比如说人操作两只机械臂 那么去遥控最终干活的两只机械臂",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=143"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 遥操作",
"ts": "2:35",
"sec": 155,
"text": "所以就会有主臂 Leader 从臂 Follower 就是会有四只机械臂这样的一种配置 因为这样它的对应关系比较好找 就是关节角度一一对应就好了",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=155"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 遥操作",
"ts": "2:46",
"sec": 166,
"text": "然后真人遥控 比如说叠衣服 做家务都可以 然后摄像头实时的记录下来 那么告诉机器人 你看到什么样的画面 你这个机械臂该怎么运动 那么让机器人去学习",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=166"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 遥操作",
"ts": "2:57",
"sec": 177,
"text": "它背后的逻辑 就是训练模型 那么遥操作的方式有很多 可以用主臂的方式 也可以用VR设备 戴一个头鞋 手上两个手柄 也可以用来操作这个机器人去完成任务",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=177"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 遥操作",
"ts": "3:09",
"sec": 189,
"text": "那么这个也被很多人诟病 就觉得你是一个遥控的大号玩具 事实上 遥操这件事并不是说我们做了一个遥控的机器人 他之后就永远是遥控着干活了",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=189"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 遥操作",
"ts": "3:19",
"sec": 199,
"text": "不是的 而是说具身智能 智能是需要数据的 数据从而来呢 那么从模仿学习中来 模仿学习就人先做一遍 视力 按例 数据记录下来之后去训练模型",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=199"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 遥操作",
"ts": "3:30",
"sec": 210,
"text": "最终机器人是能够自己做的 然后后来又演变为你可以穿上一些动补设备 就是跟拍电影里面的那个动作捕捉 然后可以做一些全身的遥控操作",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=210"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 遥操作",
"ts": "3:40",
"sec": 220,
"text": "这些本质上都是遥操 那么遥操它的优势是什么呢 因为它是存在机器人真实的本体与真实世界的交互 这个爪子怎么去夹一件衣服啊 真实环境中的各种光线的角度啊",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=220"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 遥操作",
"ts": "3:54",
"sec": 234,
"text": "衣服的粗糙程度啊 其实它都会考虑进去的 因为是真人在操作 所以其实你看到不同的这个对象 比如说柔软的衣服 还是说一个玻璃杯 你要用什么力度去夹",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=234"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 遥操作",
"ts": "4:04",
"sec": 244,
"text": "人是知道怎么夹的 所以最终你要完成这个任务 你已经把这样的一种能力 体现在这个机器人的一些动作上了 这数据已经都吸收进去了 这个数据是很宝贵的",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=244"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 遥操作",
"ts": "4:15",
"sec": 255,
"text": "对于模型的训练来说 价值是非常大的 它的缺点是什么呢 效率低 因为要靠真人来遥控 一个人一天差不多采集200票 你算一下人工 所以为了批量产生这些数据",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=255"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 遥操作",
"ts": "4:26",
"sec": 266,
"text": "我们第一代的数据采集工厂 就是这么在干的 一个一个工位 一个一个的人遥控这个机器 去做各种家务碟被子什么的 而且需要这么多本体机器人",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=266"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 遥操作",
"ts": "4:35",
"sec": 275,
"text": "它的硬件成本投入也比较大 但是效率依旧是比较低 所以你光靠遥控操作 产生的数据体量远远达不到我这个机器人最终能够通用去完成各种家务的这样的一种能力",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=275"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 遥操作",
"ts": "4:48",
"sec": 288,
"text": "数量不够 那么遥操的劣势怎么弥补呢 由于你硬件成本不是贵吗 那我把硬件去掉可不可以 我在计算机中虚拟仿真可不可以 然后由于你需要真人实操对吧",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=288"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 遥操作",
"ts": "4:59",
"sec": 299,
"text": "那我直接用计算机来合成生成可不可以 所以这就是另外一种数据采取方式叫仿真合成数据 相当于我这个机器人完全是在电脑里面 通过仿真器生成的",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=299"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 仿真",
"ts": "5:12",
"sec": 312,
"text": "虚拟的 那么一开始 其实它也需要人去控制这个虚拟机线去完成任务 那么夹过几次之后 训练一个小模型之后 你可以用模型去批量的生成它自主的一些操作",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=312"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 仿真",
"ts": "5:24",
"sec": 324,
"text": "然后在仿真器里面改变一些光线 桌子的材质变一变 任务化一下 因为它是计算机技术 所以它可以批量的合成大量的数据 所以数据成本一下子又降下来了",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=324"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 仿真",
"ts": "5:36",
"sec": 336,
"text": "这是仿真数据的一个最大优势 低成本 批量化 规模化 但是它带来的一个问题刚好跟摇槽数据是相对的 因为它是无本体的 虚拟的 所以它没有办法真实的还原物理世界的一些特性",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=336"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 仿真",
"ts": "5:51",
"sec": 351,
"text": "摩擦力 材料的软硬 就比较难仿真出来 所以经常会出现一个问题叫做SIM2 REAL GAP 就是我在虚拟的环境中训练的成功率非常高了",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=351"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 仿真",
"ts": "6:01",
"sec": 361,
"text": "但是当我把这个模型部署到真实的机器身上的时候 发现它的成功率很低 这里面有个鸿沟 其实我们老话说的好 叫纸上得来终绝潜 就是你总是纸上谈兵",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=361"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 仿真",
"ts": "6:13",
"sec": 373,
"text": "你不去真实的去操作交互 你最终很难获得真正的physical AI 就是物理世界的智能 所以这两种数据其实是互补的 我们目前很多模型公司他在训练采集数据的时候也是按照一定的比例",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=373"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 仿真",
"ts": "6:27",
"sec": 387,
"text": "这个解决量的问题 这个解决真实世界交互的问题 整体谋求一个最优解 然后另外还有一种解决办法就是 我能不能够让这个虚拟的世界更逼真",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=387"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 仿真",
"ts": "6:38",
"sec": 398,
"text": "更真实 更还原呢 那么世界模型这条路线 技术发展起来之后呢 它其中一个作用就是在虚拟仿真合成数据中 世界模型也有作用 它构建了一个虚拟的更真实的环境",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=398"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 仿真",
"ts": "6:50",
"sec": 410,
"text": "尽量去缩小与现实世界的差距 好 那么技术发展到这儿才真正迎来一个转折点 就前面这个两个其实凡是过往皆为序章 接下来就要讲UMI了",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=410"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 仿真",
"ts": "7:02",
"sec": 422,
"text": "或者叫VUMI 它是如何诞生的 Universal Manipulation Interface 就简称UMI 通用操作接口 什么意思",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=422"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 仿真",
"ts": "7:12",
"sec": 432,
"text": "仿真数据虽然无本体 所以它可以规模化 但是它没有与物理世界的接触 先干掉 遥操不错 但是遥操我面临一个问题 就是你每次操作都需要一个真实的机器人",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=432"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 仿真",
"ts": "7:24",
"sec": 444,
"text": "成本贵 它更可怕的一点在哪里呢 就不同厂家生产的机器人结构还不一样 所以我这一台机器人采集的数据 你换一台机器人未必能用 它不通用",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=444"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 仿真",
"ts": "7:35",
"sec": 455,
"text": "那这个麻烦就大了 原本呢 这个本体采了一万小时 换一个本体采了一万个小时 另外一个厂家采了两万个小时 那加起来其实是四万个小时",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=455"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · UMI：把本体去掉",
"ts": "7:45",
"sec": 465,
"text": "如果大家都数据共享 那一下子我们数量就加起来了 但问题是 如果说你本体的结构不一样 你数据不能通用 所以我为了数据能通用 我把这个本体去掉",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=465"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · UMI：把本体去掉",
"ts": "7:56",
"sec": 476,
"text": "我只保留一个爪子 因为我最终去操作干家务的时候 跟物理事件发生交互的是那个爪子 是那个末端 就是这个爪子保留下来 然后呢 这个爪子呢",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=476"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · UMI：把本体去掉",
"ts": "8:07",
"sec": 487,
"text": "我也不要求机器人去操作了 我直接给到人 人手直接去捏着这个爪子 直接去干活 同时摄像头记录下来 你叠衣服 你这个爪子是手部是怎么操作的",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=487"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · UMI：把本体去掉",
"ts": "8:20",
"sec": 500,
"text": "好 就这个人 捏着一个手柄 末端是爪子 不用机器人了 直接去干活 然后我这个爪子里面是有传感器的 它能够确定空间的位姿的 空间的坐标的",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=500"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · UMI：把本体去掉",
"ts": "8:31",
"sec": 511,
"text": "那么我在算法上只要做一件事 逆运动学的求解 这个空间的位姿直接算出来这个机械臂 后端的这个手臂 如何去让末端达到那个位姿 然后由于爪子是一样的",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=511"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · UMI：把本体去掉",
"ts": "8:45",
"sec": 525,
"text": "所以就近似的等价成 是我这个机器人的机械臂在那做家务 好比是我们为所有的机器人构建了一个通用的人类操作的一个接口 这就是VLA UMI了 你看我VLA UMI的数据采集方式就是手持夹爪 直接干活 不用机器人本体了 做一层运算就可以映射到似乎是机器人在做家务",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=525"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · UMI：把本体去掉",
"ts": "9:09",
"sec": 549,
"text": "好 那么它是非常轻量化低成本的 它就可以进入到老百姓的生活中 可以进入到更真实的家庭场景 直接去做家务 它就不用在数据工厂里进行了",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=549"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · UMI：把本体去掉",
"ts": "9:21",
"sec": 561,
"text": "然后它再采取众包的形式 比如说多少钱给你结算一条 它就变成一个新的职业了 然后层层众包 最终的数据汇总到模型公司 或者数据工厂卖给模型公司",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=561"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · UMI：把本体去掉",
"ts": "9:32",
"sec": 572,
"text": "那么它采集的效率大概是遥操的5到10倍 而且它众包之后就可以发动起群众 平时你家务也要干的 你一边干着家务 一边就把数据采了",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=572"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · UMI：把本体去掉",
"ts": "9:43",
"sec": 583,
"text": "再卖一笔钱 所以从人数上可能再乘个10 甚至乘个100 所以这个的数据体量会爆炸式的增长 相比于遥操 而且它有真实的物理世界的交互",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=583"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · UMI：把本体去掉",
"ts": "9:53",
"sec": 593,
"text": "这个香蕉要用什么力量讲 这个花瓶要怎么摆放 你可以理解为它是一种遥操的升级版 但你不能说它是遥操了 因为它并不是在遥控操作了",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=593"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · UMI：把本体去掉",
"ts": "10:03",
"sec": 603,
"text": "非常的具有创造力啊 好 那么VLA UMI还有不有缺点呢 有的啊 它毕竟还是要有夹爪 是不是啊 还是要有设备啊 那这个设备还是有一点成本",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=603"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · UMI：把本体去掉",
"ts": "10:14",
"sec": 614,
"text": "而且你会发现它大部分都是爪子 所以它没有办法去做一些特别精巧的 要靠手指才能干的活 就灵巧操作不行 那我们现在很多的机器人 他最终人型机器人",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=614"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · UMI：把本体去掉",
"ts": "10:26",
"sec": 626,
"text": "他是灵巧手的 所以靠VLA UMI采集的数据 他大部分也是夹爪的机器人用的 那么技术进一步发展 2024年的一片工作叫Ego Mimic",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=626"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · UMI：把本体去掉",
"ts": "10:37",
"sec": 637,
"text": "以及到今年两月份的一片工作Ego Scale 向我们展示了一种数据采集的全新方式 就叫做 Ego 数据 那 Ego 就是 Ego-Centric Data 其实就是第一人称视角的一个简称 第一人称视角很多小班很熟悉的 就这些画面 摄像头似乎是人眼睛的那个视角 在看到你眼前的这个操作",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=637"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · Ego：连夹爪也不要",
"ts": "11:00",
"sec": 660,
"text": "然后我这个手上 我连这个夹爪都不用戴了 直接就是人 直接人手干活 靠一个摄像头把它拍下来就好了 连设备都不用了 只要一副AR眼镜了",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=660"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · Ego：连夹爪也不要",
"ts": "11:10",
"sec": 670,
"text": "然后我通过一个模型训练 一个算法 自动实现一个映射 就是我人手怎么操作的 我人的每个手指的关节 这个画面映射到我机器人的操作 我可以映射到机身的爪子",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=670"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · Ego：连夹爪也不要",
"ts": "11:23",
"sec": 683,
"text": "我也可以映射到灵巧手 它相比于VLA UMI 其实就是把这个夹爪也给丢掉了 VLA UMI 的本身就是要有一个俯拍摄像头的 已经有了技术",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=683"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · Ego：连夹爪也不要",
"ts": "11:33",
"sec": 693,
"text": "再把夹爪丢掉 那硬件成本进一步降 然后你戴一个眼镜的话 你日常生活中干的所有事都可以记录下来 那么可想而知 这个数据体量又进一步的爆炸式增长",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=693"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · Ego：连夹爪也不要",
"ts": "11:44",
"sec": 704,
"text": "规模化 采集成本进一步降低 当然你在技术上要做一个定位 就是手腕的末端位置 它是可以通过AI来解决的 就特征识别 然后还要再加个技术",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=704"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · Ego：连夹爪也不要",
"ts": "11:55",
"sec": 715,
"text": "就是你要数据筛选 就是我不是一天比如拍了八个小时 八个小时全是数据的 就是有的时候我手是闲着的 或者我这个头再晃来晃去 我并没有在操作",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=715"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · Ego：连夹爪也不要",
"ts": "12:05",
"sec": 725,
"text": "我是要操作的时候 我开始干活了 开始做家务了 这个时候 诶 视频截取出来啊 那么他比污名呢 他就难点在这儿 因为污名呢 我平时的时候并没有在用",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=725"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · Ego：连夹爪也不要",
"ts": "12:16",
"sec": 736,
"text": "是吧 闲置的 我真正拿起夹爪的时候 我我肯定是在干活 所以他这个数据天然就已经就是筛选出来了啊 本身就是能用的数据 这个呢 就是要做一个数据的筛选",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=736"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · Ego：连夹爪也不要",
"ts": "12:27",
"sec": 747,
"text": "然后定位 2024年的Ego Mimic 其实向我们正证实这个方法是可行的 第一人称视角的数据确实可以指导机器人去干活 然后今年两月份的工作又在数据上证明了它的收敛特性",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=747"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · Ego：连夹爪也不要",
"ts": "12:43",
"sec": 763,
"text": "就随着你Ego数据的增加 最终训练出来的模型 它机器人干活的这个能力确实是进一步的提升了 好 那么这条路线跑通了之后 以后数据采集就每个人带一副能够拍视频的眼镜就好了",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=763"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · Ego：连夹爪也不要",
"ts": "12:59",
"sec": 779,
"text": "当然里面还是要加一些传感器 头部的角度 空间 位资 这个技术都好解决 那么这项技术现在当下正在聚光灯下 还没有真正开始 现在大家看到生活中采集的很多都是戴夹爪的",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=779"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · Ego：连夹爪也不要",
"ts": "13:15",
"sec": 795,
"text": "未来半年你们会看到戴一副眼镜就可以了 这种数据采集 然后它也会走众包模式 所以接下来大家会看到 会有一批一批的公司数据采集的方式",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=795"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · Ego：连夹爪也不要",
"ts": "13:27",
"sec": 807,
"text": "开始逐步的增大Ego数据的占比 那这四种数据采集的方式 它并不是互相替代的 就是我全用Ego数据了 不用遥操了 其实不是的 你可以这么理解",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=807"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 四种方式如何配合",
"ts": "13:39",
"sec": 819,
"text": "就VLA UMI跟Ego它更多的是在预训练阶段 就是我让这个机器人有一种通用的 通识的一个基础能力 尤其是Ego它特别擅长去让机器人获得一个长上下文的一个理解能力",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=819"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 四种方式如何配合",
"ts": "13:54",
"sec": 834,
"text": "就比如说我左手已经抓了一个橘子了 我剩下要去拿个杯子的话 我只能用右手 再比如我在地上捡过垃圾了 那么我在叠衣服之前 我可能要去洗一下手",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=834"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 四种方式如何配合",
"ts": "14:05",
"sec": 845,
"text": "你这样训练出来的机器人 你到时候捡过垃圾 他也会去条件反射的去洗手 然后再去做别的家务 所以他前文后文 它是有逻辑的 这个用Ego数据特别适合体现",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=845"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 四种方式如何配合",
"ts": "14:17",
"sec": 857,
"text": "对于我们大模型里面的一个词语 就是说长上下文 长时间的这个长程任务 靠Ego数据来获得这里面的能力 但Ego数据 大家发现它的缺点是什么呢",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=857"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 四种方式如何配合",
"ts": "14:29",
"sec": 869,
"text": "就它没有夹爪了 所以它其实并没有与物理世界的交互 所以遥操跟VLA UMI它其实还是有价值的 尤其是像遥操 我会认为它接下来可能会承担一个后训练的角色",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=869"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 四种方式如何配合",
"ts": "14:40",
"sec": 880,
"text": "就是我这个通用的预训练模型到一个具体的场景中 我要去解决一个具体的问题 我还要在遥操采集组数据 微调一下这个模型 进一步的提高成功率",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=880"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 四种方式如何配合",
"ts": "14:51",
"sec": 891,
"text": "就大量的Ego数据 再结合少量的后训练遥操数据 而且我们在Pi0.6那篇文章中 提到了一个叫真机强化学习 就我觉得遥操作很有可能在后训练的阶段中承担的是真机强化学习的角色",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=891"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 四种方式如何配合",
"ts": "15:08",
"sec": 908,
"text": "就是你让这个机器人去真实的去干活嘛 你要去测试的嘛 对吧 在测试过程中他依旧有可能任务失败嘛 这个时候我通过遥操介入去纠正他",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=908"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 四种方式如何配合",
"ts": "15:17",
"sec": 917,
"text": "好 那么这一段数据就非常宝贵 就是原先模型能力的不足 然后以及怎么样操作了一下 他就能够救回来进一步去完成任务 那么我们在后训练微调的时候",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=917"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 四种方式如何配合",
"ts": "15:29",
"sec": 929,
"text": "把这一部分失败数据 失败后的补救数据 进一步的去让它训练 学习 那它的成功率会进一步提高 所以我觉得遥操作是不可被代替的 那仿真也不可能被代替的",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=929"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 四种方式如何配合",
"ts": "15:41",
"sec": 941,
"text": "仿真也有价值 它就是一个低成本 我举个例子 比如说你Ego采集的数据 我整体通过算法把它亮度降低一点 那我是不是模拟出一个在天有点暗的环境中的一些操作",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=941"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 四种方式如何配合",
"ts": "15:53",
"sec": 953,
"text": "那这个其实就是仿真合成 就一段代码的事儿 一下子数据量就double了一下 或者你再把它亮度调亮 曝光增强 就模拟一个太阳暴晒的时候你的一些操作",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=953"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 四种方式如何配合",
"ts": "16:05",
"sec": 965,
"text": "所以仿真合成它也有价值 所以我觉得未来这四种数据可能是共存的状态 其实这也是EgoScale那篇文章中提到的 你看他在预训练的时候用了两万个小时的人类数据",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=965"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 四种方式如何配合",
"ts": "16:17",
"sec": 977,
"text": "这个就是Ego数据 没有夹爪的 没有真机的 没有本体的 然后呢 它中间还加了一个mid training 就是中期训练 它是50个小时的人的数据",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=977"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 四种方式如何配合",
"ts": "16:30",
"sec": 990,
"text": "那这个它是带那个5米的 或者说这种设备的啊 然后呢 还有4个小时的机器数据 那这个机器数据 最终在后训练 那么你可以再用真机的数据采集啊",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=990"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 四种方式如何配合",
"ts": "16:44",
"sec": 1004,
"text": "所以它是三种方式合在一起了 既解决一个量的问题 预训练 通用能力 又解决一个最终去后训练微调不断的提高成功率 所以这种方式未来其实大部分企业它都会逐步逐步的往这个方向上靠",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=1004"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 四种方式如何配合",
"ts": "17:02",
"sec": 1022,
"text": "按照一定的比例多种素材方式融合的方式 好 这就是我今天想讲的主要内容 但我依旧想引申出一个话题就是光靠这四种就够了吗 其实它还有个问题",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=1022"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 未来判断：第三视角",
"ts": "17:14",
"sec": 1034,
"text": "就这四种数据都是人为创造产生的 大家不发现这个问题 而我们大语言模型所训练的数据是人为了训练而特地编写出来的吗 不是吧 互联网上天然存在的吧",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=1034"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 未来判断：第三视角",
"ts": "17:27",
"sec": 1047,
"text": "所以它的体量非常大嘛 虽然Ego数据可以规模化的生产 它毕竟还是一个人造 人重新创造的过程 而互联网上已经存在的视频数据是什么呢",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=1047"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 未来判断：第三视角",
"ts": "17:38",
"sec": 1058,
"text": "是第三视角 不是第一人成视角 电视剧也好 电影也好 对吧 大量的都是第三视角 做饭 做菜 其实都是第三视角 其实人的学习也是靠第三视角来学的",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=1058"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 未来判断：第三视角",
"ts": "17:50",
"sec": 1070,
"text": "你看你边上那个人他怎么做 看视频中的做饭做菜的教程 你自己就会了 对不对 所以我觉得未来还有一种数据类型 就是第三视角的视频能不能够指导我们机器人直接干活",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=1070"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 未来判断：第三视角",
"ts": "18:04",
"sec": 1084,
"text": "如果那个可以 Ego数据会被干掉的 它完全可以用来替代Ego数据 就第三视角 这是我对未来的一个判断 所以大家可以一点点关注 我们一起了解具身智能技术发展的前沿",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=1084"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 未来判断：第三视角",
"ts": "18:18",
"sec": 1098,
"text": "一起见证具身智能的落地 欢迎一键三连点赞收藏 然后这还只是我平时在讲的具身智能前沿技术报告中的一小部分片段 如果大家想听更详细的",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=1098"
},
{
"src": "v2",
"ch": "陈老师具身xbotics · 未来判断：第三视角",
"ts": "18:30",
"sec": 1110,
"text": "那么也可以联系我 好 感谢大家",
"url": "https://www.bilibili.com/video/BV161jy6MEwt?t=1110"
}
];
