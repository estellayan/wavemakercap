/**
 * 造浪资本 Wavemaker Capital — 中文内容模型
 * 挂载 window.WM_DATA，英文版由 i18n-en.js 以 window.WM_DATA_EN 覆盖同构数据。
 * 命名规则：机构名一律「造浪资本」（非"造浪者资本"）；媒体号「造浪者」保留原名。
 */
window.WM_DATA = {
    ui: {
        brand: {
            name: '造浪资本',
            nameEn: 'WAVEMAKER CAPITAL',
            seal: '浪'
        },
        nav: {
            links: [
                { label: '关于造浪', href: '#about' },
                { label: '今年项目', href: '#this-year' },
                { label: '过往项目', href: '#cases' },
                { label: '影响力', href: '#influence' },
                { label: '关于我', href: 'about.html' }
            ],
            langCurrent: '中文',
            langOther: 'EN',
            langOtherHref: 'en/index.html',
            logoHref: 'index.html'
        },
        hero: {
            kicker: 'FA 融资顾问 · 产投研驱动',
            ctaPrimary: '查看交割案例',
            ctaSecondary: 'BP 投递',
            vertical: '造浪未来 · MAKING WAVES · 2026'
        },
        about: {
            sectionNo: '01',
            chartLegend: '资源指数'
        },
        thisYear: {
            sectionNo: '02',
            badge: '进行中 · 2026',
            faLabel: '造浪资本担任财务顾问',
            placeholder: '项目截图即将上线'
        },
        cases: {
            sectionNo: '03',
            detailBtn: '详情',
            modalDetails: '项目详情',
            modalInvestors: '投资方 / 收购方'
        },
        influence: {
            sectionNo: '04',
            fansLabel: '全网矩阵粉丝',
            mediaTitle: '合作媒体背书'
        },
        partners: {
            sectionNo: '05'
        },
        founder: {
            backHome: '返回首页',
            contactCta: '与我联系',
            photoAlt: '造浪资本创始合伙人'
        },
        footer: {
            contactTitle: '联系我们',
            wechatLabel: '微信',
            phoneLabel: '电话',
            emailLabel: '邮箱'
        }
    },

    hero: {
        title: '造浪资本',
        titleEn: 'WAVEMAKER CAPITAL',
        subtitle: '赋能硬科技 · 造浪未来',
        desc: '深耕机器人、智能硬件、半导体并购与医疗赛道，连接顶尖创业者与一线资本，做科技浪潮的助推者。',
        stats: [
            { value: '30亿+', label: '累计交易金额' },
            { value: '17+', label: '精选交割案例' },
            { value: '20W+', label: '全网矩阵粉丝' }
        ]
    },

    about: {
        title: '深耕产业，精准链接',
        desc: '造浪资本不仅是财务顾问，更是企业的战略合伙人。我们依托强大的"产、投、研"能力，深入产业链上下游，为硬科技企业提供全生命周期的资本服务。',
        points: [
            '深度行业研究驱动，锁定机器人与半导体高价值标的',
            '覆盖 Pre-A 至并购全阶段，助力企业穿越周期',
            '连接金沙江、深创投等一线基金与上市公司'
        ],
        chart: {
            title: '赛道布局与资源深度',
            labels: ['AI智能硬件', '机器人', '半导体/硬科技', '医疗教育', '新零售/电商', '并购整合'],
            data: [95, 85, 90, 75, 80, 92]
        }
    },

    thisYear: {
        title: '今年项目',
        subtitle: '2026 · 正在发生的交易，见证新的浪头',
        slots: [
            {
                img: 'assets/projects-this-year/p1.jpg',
                name: '大咖机器人',
                nameEn: 'DaxAI Robot',
                tagline: '具身智能商用机器人',
                round: 'Pre-A轮 · 亿元（金沙江创投领投）',
                fa: true,
                desc: '百天完成种子加轮、天使轮、Pre-A 三轮融资的具身智能黑马，以 DaxBrain-WM 具身世界模型为核心引擎，推动人形机器人真正走进商业场景、创造可量化的商业价值。',
                highlights: [
                    '百天完成三轮融资，亿元 Pre-A 轮由金沙江创投领投，盛世投资等跟投',
                    '双臂灵巧手人形机器人入门价低至 6.98 万元，已在零售、物流分拣场景规模化部署',
                    '全球首创吨级重载机器马，最大负载 1000KG，达市面主流四足机器人 10 倍',
                    '已获数千台订单，与全球头部零售、物流、医药及工业客户深度合作'
                ],
                link: 'https://mp.weixin.qq.com/s/dz-kos1bhdo3s4JpCHv6kw',
                linkLabel: '阅读报道'
            },
            {
                img: 'assets/projects-this-year/p2.jpg',
                name: '数因智科',
                nameEn: 'Shuyin Biotech',
                tagline: 'AI + 纳微高通量 RNA 分子设计',
                round: '近亿元融资（德迅 / 云启 / 中信建投）',
                fa: false,
                desc: '基于 AI 与纳微高通量实验相结合的高价值 RNA 分子设计平台，实现 AI 分子设计与真实世界反馈的闭环。',
                highlights: [
                    '已在骨关节炎、肺纤维化等疾病靶点上取得突破性进展',
                    '为药企与科研机构提供靶点发现和分子设计等 AI+CRO 服务，Top5 药企 license out 推进中',
                    '推进银屑病、斑秃、特应性皮炎等皮肤疾病治疗管线',
                    'AI 小核酸技术应用于美白、术后修复、抗衰，与欧莱雅、雅诗兰黛等国际品牌达成合作，原料订单近千万',
                    'Top5 品牌签下数千万订单并开始多批次供货'
                ],
                link: null,
                linkLabel: null
            },
            {
                img: 'assets/projects-this-year/p3.jpg',
                name: '湃泊科技',
                nameEn: 'Paibo Technology',
                tagline: '高功率芯片陶瓷材料',
                round: 'C轮（上市规划与股改推进中）',
                fa: false,
                desc: '高功率激光芯片热沉陶瓷龙头，国内唯一采用 IDM 垂直整合制造模式，实现从粉体、基板流延烧结到成品器件全流程自制。',
                highlights: [
                    '激光芯片热沉陶瓷市占率领先，客户含锐科等，去年营收破亿，今年收入预计 2–4 亿元、利润率约 10%',
                    '布局光通信业务，客户含英伟达供应商旭创，今年 7 月深圳无人工厂投产、光通业务起量',
                    '创始人曾任创鑫激光二号位，引入日本丸和光通信技术元老全职加盟，另有日美资深顾问',
                    '前序资方含宁德时代背景产业基金，今年同步推进收并购动作'
                ],
                link: null,
                linkLabel: null
            }
        ]
    },

    cases: {
        title: '过往项目',
        subtitle: '17 个精选交割案例，见证科技变革的力量',
        categories: [
            { id: 'all', label: '全部案例' },
            { id: 'hardware', label: 'AI与智能硬件' },
            { id: 'robotics', label: '机器人' },
            { id: 'semiconductor', label: '半导体/硬科技' },
            { id: 'consumer_med', label: '大消费与医教' }
        ],
        projects: [
            {
                id: 1,
                title: "Gyges Labs",
                category: "hardware",
                round: "Pre-A轮",
                amount: "数千万元",
                investors: ["金沙江创投", "韶音创始人", "NYX Ventures"],
                short_desc: "朱啸虎首个AI硬件项目，AI眼镜界“卖铲人”，DigiWindow技术引领者。",
                detail: "Gyges Labs（前仙瞬科技）凭借自研DigiWindow技术，成功解决了传统眼镜与AI融合的关键难题。创造了全球最轻、小的近眼显示光学方案。团队由斯坦福博士贾捷阳领衔，核心成员来自苹果、谷歌等顶尖企业。产品已在光博会亮相，致力于成为AI眼镜行业的底层技术基础设施。",
                tags: ["AI眼镜", "斯坦福团队", "光学技术"]
            },
            {
                id: 11,
                title: "华鹊景医疗",
                category: "robotics",
                round: "A轮",
                amount: "数千万元",
                investors: ["深创投"],
                short_desc: "智能康复机器人领军企业，首创三维上肢镜像康复机器人。",
                detail: "华鹊景医疗专注于智能康复机器人及智慧康复医疗整体解决方案。拥有70余项知识产权，多款产品获NMPA注册证。核心团队拥有15年研发经验，全球首创三维上肢镜像康复机器人，提供创新性智能神经康复解决方案。",
                tags: ["康复机器人", "深创投", "医疗器械"]
            },
            {
                id: 6,
                title: "微步信息",
                category: "hardware",
                round: "战略融资",
                amount: "近2亿元",
                investors: ["毅达资本"],
                short_desc: "国内领先的IT智能硬件方案商，Intel/AMD战略合作伙伴。",
                detail: "微步信息是基于X86及ARM架构的IT智能硬件整体解决方案商。产品覆盖电子数码、智能交通、智能教育等领域，年出货量行业领先。本轮融资助力其构建国际领先的IT智能硬件产业互联网平台。",
                tags: ["IT硬件", "物联网", "X86架构"]
            },
            {
                id: 17,
                title: "富创优越",
                category: "semiconductor",
                round: "并购",
                amount: "全资收购",
                investors: ["华懋科技 (603306)"],
                short_desc: "通信业务硬科技公司，被汽车零部件上市公司跨界全资收购。",
                detail: "华懋科技(603306.SH)收购富创优越，实现跨界并购。富创优越主要从事通信业务，此次并购展示了上市公司通过收并购进行产业升级和赛道拓展的典型路径。",
                tags: ["通信技术", "跨界并购", "上市公司"]
            },
            {
                id: 5,
                title: "三维通",
                category: "robotics",
                round: "Pre-A轮",
                amount: "2000万元",
                investors: ["中集睿德信", "力合创投"],
                short_desc: "智能物流分拣系统，首创“超级直线交叉带分拣”，单车效率提升4倍。",
                detail: "三维通专注于智能分拣技术，推出智能AGV分拣、轨道机器人分拣及超级直线交叉带分拣系统。其轨道机器人单车速度可达200件/小时，远超传统方案，极大降低了物流分拣成本。",
                tags: ["物流机器人", "智能仓储", "AGV"]
            },
            {
                id: 8,
                title: "思林杰",
                category: "semiconductor",
                round: "战略融资",
                amount: "Pre-IPO",
                investors: ["华强创投", "方广资本"],
                short_desc: "科创板上市企业(688115)，苹果/华为产线检测设备核心供应商。",
                detail: "思林杰(688115)专注于工业自动化检测，其嵌入式智能仪器模块有效替代了传统通用仪器。作为苹果、华为、富士康的合格供应商，思林杰成功登陆科创板，是工业检测领域的隐形冠军。",
                tags: ["工业检测", "自动化", "科创板"]
            },
            {
                id: 7,
                title: "帕拓逊",
                category: "consumer_med",
                round: "并购",
                amount: "4.49亿元",
                investors: ["跨境通 (002640)"],
                short_desc: "跨境电商巨头，主营消费电子，打造了Mpow等全球知名品牌。",
                detail: "跨境通收购帕拓逊，后者是消费电子跨境零售出口的领军企业，拥有Mpow等知名品牌，业务覆盖欧美11国。此次并购进一步完善了跨境通在电子品类的布局，增强了其盈利能力。",
                tags: ["跨境电商", "消费电子", "并购重组"]
            },
            {
                id: 16,
                title: "科睿斯",
                category: "semiconductor",
                round: "战略投资",
                amount: "未披露",
                investors: ["中天精装 (002989)"],
                short_desc: "主营FC-BGA高端封装基板，核心团队来自欣兴电子，攻克卡脖子技术。",
                detail: "中天精装跨界投资科睿斯。科睿斯主营FC-BGA(ABF)高端封装基板，用于CPU、GPU及AI芯片封装。核心团队拥有台湾欣兴电子背景，致力于解决国内高端基板的卡脖子问题。",
                tags: ["半导体封装", "FC-BGA", "国产替代"]
            },
            {
                id: 13,
                title: "成者科技 CZUR",
                category: "hardware",
                round: "A+轮",
                amount: "数千万元",
                investors: ["磐谷创投"],
                short_desc: "智能办公硬件创新者，扫描仪/高拍仪细分领域全球头部品牌。",
                detail: "成者科技聚焦智能办公，推出智能扫描仪和高拍仪，解决了传统设备体验差的问题。中兴通讯前高管范虎加盟，助力其进一步拓展全球办公硬件市场。",
                tags: ["智能办公", "出海品牌", "AI图像"]
            },
            {
                id: 12,
                title: "万象新动",
                category: "consumer_med",
                round: "并购",
                amount: "5.6亿元",
                investors: ["万润科技 (002654)"],
                short_desc: "移动互联网广告精准营销平台，被上市公司全资收购。",
                detail: "万润科技作价5.6亿元收购万象新动，布局移动互联网广告。万象新动在精准营销、用户洞察及程序化购买方面具有显著优势，为上市公司带来了丰富的媒体和客户资源。",
                tags: ["数字营销", "并购", "广告Tech"]
            },
            {
                id: 10,
                title: "牛大吉",
                category: "consumer_med",
                round: "A+轮",
                amount: "1亿元",
                investors: ["深熊资本等"],
                short_desc: "社区连锁新零售品牌，专注于牛肉品类消费升级。",
                detail: "牛大吉完成1亿元融资，致力于牛肉品类的消费升级。通过社区连锁模式，提供高品质牛肉产品，打造新零售标杆。",
                tags: ["新零售", "消费升级", "连锁经营"]
            },
            {
                id: 9,
                title: "叮咚课堂",
                category: "consumer_med",
                round: "A轮",
                amount: "数千万元",
                investors: ["创世伙伴", "险峰长青"],
                short_desc: "AI少儿英语教育平台，利用AI模拟真人外教，降低教育成本。",
                detail: "叮咚课堂利用AI技术模拟真人美国教师，创建互动教学场景，大幅降低了少儿英语的学习门槛和成本。由创世伙伴领投，险峰长青跟投。",
                tags: ["AI教育", "K12", "在线教育"]
            },
            {
                id: 3,
                title: "掌心宝贝",
                category: "hardware",
                round: "A轮",
                amount: "数千万元",
                investors: ["中云辉资本", "曾李青"],
                short_desc: "幼儿园智能硬件+SaaS平台，腾讯创始人早期投资，连接家园共育。",
                detail: "掌心宝贝以智能考勤机、摄像头等硬件为入口，构建移动互联网家园共育平台。获腾讯联合创始人曾李青两轮投资，是幼教信息化领域的佼佼者。",
                tags: ["幼教硬件", "SaaS", "腾讯系"]
            },
            {
                id: 4,
                title: "小豆健康",
                category: "consumer_med",
                round: "天使轮",
                amount: "近千万元",
                investors: ["天图投资"],
                short_desc: "社区医疗数字化运营服务商，赋能基层医疗机构实现连锁化、数字化。",
                detail: "小豆健康由“腾讯产品经理+医生”团队创立，赋能基层医疗机构“新三化”（品牌化、连锁化、数字化），解决疫情下基层医疗运营痛点。",
                tags: ["医疗SaaS", "基层医疗", "数字化"]
            },
            {
                id: 2,
                title: "平行线科技",
                category: "hardware",
                round: "战略融资",
                amount: "未披露",
                investors: ["梅花创投", "天图投资"],
                short_desc: "专注硬科技领域的创新企业，获知名机构早期加持。",
                detail: "深圳市平行线科技控股有限公司，2020年获得梅花创投和天图投资的融资，专注于硬科技赛道的创新与研发。",
                tags: ["硬科技", "早期投资"]
            },
            {
                id: 15,
                title: "青牛智胜",
                category: "hardware",
                round: "A+轮",
                amount: "未披露",
                investors: ["景林投资"],
                short_desc: "硬科技领域创新企业，获顶级私募景林投资加持。",
                detail: "青牛智胜（深圳）科技有限公司，完成A+轮融资，投资方为知名机构景林投资。",
                tags: ["硬科技", "景林投资"]
            },
            {
                id: 14,
                title: "小棉花数字科技",
                category: "hardware",
                round: "Pre-A轮",
                amount: "未披露",
                investors: ["未披露"],
                short_desc: "数字科技领域新兴力量。",
                detail: "小棉花数字科技完成Pre-A轮融资，致力于数字科技产品的研发与应用。",
                tags: ["数字科技", "早期项目"]
            }
        ],
        dealChart: {
            title: '融资阶段分布',
            labels: ['天使/Pre-A', 'A/A+轮', '战略/Pre-IPO', '并购/M&A'],
            data: [5, 6, 3, 3]
        }
    },

    influence: {
        title: '影响力',
        subtitle: '自带媒体基因的硬科技捕手，以媒体势能赋能被投企业',
        totalFans: '20W+',
        channels: [
            {
                name: '连脑',
                handle: 'Lian Nao',
                followers: '10W+',
                desc: '连接硬科技大脑，专注前沿技术与商业的深度融合解析。',
                type: '深度文章',
                icon: 'brain-circuit'
            },
            {
                name: '造浪者',
                handle: 'Wave Maker',
                followers: '5W+',
                desc: '关注改变世界的创业者，记录科技浪潮中的关键节点。',
                type: '视频号/图文',
                icon: 'waves'
            },
            {
                name: '钞级品牌',
                handle: 'Super Brand',
                followers: '5W+',
                desc: '解构商业品牌背后的资本逻辑与文化图腾。',
                type: '商业评论',
                icon: 'coins'
            },
            {
                name: '造浪资本',
                handle: 'Wavemaker Capital',
                followers: '定向覆盖',
                desc: '专注硬科技早期投资与FA服务，以媒体势能赋能被投企业。',
                type: '基金/FA',
                icon: 'landmark'
            }
        ],
        mediaMarquee: [
            '人民网', '新华网', '央视网', '中国日报', '光明日报',
            '36Kr', '钛媒体', '虎嗅', '晚点LatePost', '甲子光年',
            'B站', '抖音', '视频号', '知乎'
        ]
    },

    partners: {
        title: '合作机构',
        subtitle: '与顶尖资本同行，共建产业生态',
        list: [
            '金沙江创投', '深创投', '天图投资', '梅花创投', '创世伙伴', '毅达资本',
            '华强创投', '中集睿德信', '中天精装', '万润科技', '跨境通', '华懋科技',
            '景林投资', '磐谷创投'
        ]
    },

    founder: {
        title: '关于我',
        role: '创始合伙人 · Founding Partner',
        bio: [
            '造浪资本创始合伙人，成功帮助十余家硬科技创业公司融资，陪跑企业从天使轮到 Pre-IPO。',
            '造浪者科技媒体矩阵创始人，全网粉丝 20W+。',
            '作者，出版有《文明岔路：驶向不同方向的中西方文明》，翻译出版《身边的创新：让创新像吃饭睡觉一样简单》。',
            'CFA，美国乔治华盛顿大学访问 MBA，法国高等商学院 ESSEC 管理学研究生，北京外国语大学英语汉语言双专业学士。'
        ],
        cta: { label: '与我联系', href: 'mailto:bp@wavemaker.cap' }
    },

    footer: {
        desc: '致力于成为硬科技领域最值得信赖的资本合伙人。重点关注：机器人、AI硬件、半导体、医疗器械。',
        contact: {
            wechat: 'wavechanger',
            phone: '186 8220 4551',
            email: 'bp@wavemaker.cap'
        },
        cities: '深圳 · 北京 · 上海',
        copyright: '© 2026 Wavemaker Capital 造浪资本. All rights reserved.'
    }
};
