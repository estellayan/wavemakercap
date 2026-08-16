/**
 * Wavemaker Capital — English content pack (i18n)
 * Hung on window.WM_DATA_EN. Schema mirrors the Chinese content model (assets/data.js) 1:1
 * and satisfies every key consumed by assets/main.js.
 *
 * Stage 2 note (Worker_英文页面): the Stage 1 version of this file used a divergent
 * ui.* schema that did not match main.js (ui.nav.links / ui.brand / ui.hero.kicker /
 * founder.cta{href,label} etc.), which would have crashed rendering on the EN pages.
 * It has been re-aligned to the data.js contract; all translated copy is preserved.
 *
 * Translation policy:
 *  - 造浪资本 / 造浪者资本  → "Wavemaker Capital"
 *  - Media brand 造浪者      → "Wavemaker" (media matrix brand)
 *  - Investment institutions use their established English names where they exist
 *    (GSR Ventures, SCGC, Plum Ventures, CCV, K2VC, Addor Capital, Greenwoods...);
 *    where no established English name exists, Hanyu Pinyin is used with the original
 *    Chinese in parentheses on first mention in long text.
 *  - Amounts converted to institutional VC/PE conventions (RMB xxM / tens of millions RMB).
 *  - All "External Brain / 第二大脑" legacy wording removed.
 *
 * Path note: this file is loaded from en/*.html, so all asset hrefs carry the ../ prefix.
 */
window.WM_DATA_EN = {
    ui: {
        brand: {
            name: 'Wavemaker Capital',
            nameEn: '造浪资本',
            seal: '浪'
        },
        nav: {
            links: [
                { label: 'About', href: '#about' },
                { label: '2026 Deals', href: '#this-year' },
                { label: 'Track Record', href: '#cases' },
                { label: 'Influence', href: '#influence' },
                { label: 'Founder', href: 'about.html' }
            ],
            langCurrent: 'EN',
            langOther: '中文',
            langOtherHref: '../index.html',
            logoHref: 'index.html'
        },
        hero: {
            kicker: 'FA Advisory · Industry-Driven Research',
            ctaPrimary: 'View Deals',
            ctaSecondary: 'Submit Your BP',
            vertical: 'MAKING WAVES · 造浪未来 · 2026'
        },
        about: {
            sectionNo: '01',
            chartLegend: 'Resource Index'
        },
        thisYear: {
            sectionNo: '02',
            badge: 'In Progress · 2026',
            faLabel: 'FA by Wavemaker Capital',
            placeholder: 'Project screenshot coming soon'
        },
        cases: {
            sectionNo: '03',
            detailBtn: 'Details',
            modalDetails: 'Deal Overview',
            modalInvestors: 'Investors / Acquirer'
        },
        influence: {
            sectionNo: '04',
            fansLabel: 'Followers Across Media Matrix',
            mediaTitle: 'Media Endorsements'
        },
        partners: {
            sectionNo: '05'
        },
        founder: {
            backHome: 'Back to Home',
            contactCta: 'Get in Touch',
            photoAlt: 'Founding Partner of Wavemaker Capital'
        },
        footer: {
            contactTitle: 'Contact Us',
            wechatLabel: 'WeChat',
            phoneLabel: 'Phone',
            emailLabel: 'Email'
        }
    },

    hero: {
        title: 'Wavemaker Capital',
        titleEn: '造浪资本',
        subtitle: 'Empowering Hard Tech, Shaping the Future',
        desc: 'Focused on robotics, smart hardware, semiconductor M&A and healthcare — connecting exceptional founders with first-tier capital.',
        stats: [
            { value: '3B+', label: 'Cumulative Transaction Value (RMB)' },
            { value: '17+', label: 'Select Closed Deals' },
            { value: '200K+', label: 'Followers Across Media Matrix' }
        ]
    },

    about: {
        title: 'Deep Industry Roots, Precise Capital Connections',
        desc: 'Wavemaker Capital is more than a financial advisor — we are a strategic partner to our companies. Leveraging strong industry, investment and research capabilities, we work deep across the value chain to provide full-lifecycle capital services for hard-tech ventures.',
        points: [
            'Research-driven sourcing, locking in high-value targets in robotics and semiconductors',
            'Coverage from Pre-A to M&A, helping companies navigate full market cycles',
            'Connecting first-tier funds such as GSR Ventures and SCGC with listed companies'
        ],
        chart: {
            title: 'Sector Focus & Resource Depth',
            labels: [
                'AI & Smart Hardware',
                'Robotics',
                'Semiconductors / Hard Tech',
                'Healthcare & Education',
                'New Retail / E-Commerce',
                'M&A / Consolidation'
            ],
            data: [95, 85, 90, 75, 80, 92]
        }
    },

    thisYear: {
        title: "This Year's Deals",
        subtitle: '2026 · Active mandates across robotics, healthcare and semiconductors.',
        slots: [
            {
                img: '../assets/projects-this-year/p1.jpg',
                name: 'DaxAI Robot',
                nameEn: '大咖机器人',
                tagline: 'Embodied-AI Commercial Robots',
                round: 'Pre-A · RMB 100M+ (led by GSR Ventures)',
                fa: true,
                desc: 'An embodied-AI dark horse that closed seed-plus, angel and Pre-A rounds within 100 days. Powered by its DaxBrain-WM embodied world model, the company is bringing humanoid robots into real commercial settings with measurable business value.',
                highlights: [
                    'Three rounds closed within 100 days; the RMB 100M+ Pre-A was led by GSR Ventures, with Shengshi Investment and others participating',
                    'Dual-arm dexterous-hand humanoids priced from RMB 69,800, already deployed at scale in retail and logistics sorting',
                    "World's first ton-class heavy-duty robotic horse with a 1000KG max payload — 10x that of mainstream quadruped robots",
                    'Thousands of units on order, in deep partnership with leading global retail, logistics, pharmaceutical and industrial customers'
                ],
                link: 'https://mp.weixin.qq.com/s/dz-kos1bhdo3s4JpCHv6kw',
                linkLabel: 'Read the Story'
            },
            {
                img: '../assets/projects-this-year/p2.jpg',
                name: 'Shuyin Biotech',
                nameEn: '数因智科',
                tagline: 'AI + Nano-Micro High-Throughput RNA Molecular Design',
                round: 'Nearly RMB 100M raised (Decent Capital / Yunqi Partners / CSC Financial)',
                fa: false,
                desc: 'A high-value RNA molecular design platform combining AI with nano-micro high-throughput experimentation, closing the loop between AI-driven molecular design and real-world feedback.',
                highlights: [
                    'Breakthrough progress on disease targets including osteoarthritis and pulmonary fibrosis',
                    'AI+CRO services in target discovery and molecular design for pharma companies and research institutions; license-out to a Top-5 pharma in progress',
                    'Advancing dermatology pipelines in psoriasis, alopecia areata and atopic dermatitis',
                    "AI small-nucleic-acid technology applied to brightening, post-procedure repair and anti-aging, in partnership with global brands including L'Oréal and Estée Lauder; ingredient orders approaching RMB 10M",
                    'Tens of millions RMB in orders signed with a Top-5 brand, with multi-batch supply underway'
                ],
                link: null,
                linkLabel: null
            },
            {
                img: '../assets/projects-this-year/p3.jpg',
                name: 'Paibo Technology',
                nameEn: '湃泊科技',
                tagline: 'Ceramic Materials for High-Power Chips',
                round: 'Series C (IPO planning and shareholding reform underway)',
                fa: false,
                desc: 'A leader in heat-sink ceramics for high-power laser chips, and the only domestic player running an IDM vertically integrated model — self-manufacturing the full chain from powders and substrate casting/sintering to finished devices.',
                highlights: [
                    'Leading market share in laser-chip heat-sink ceramics, with customers including Raycus; revenue topped RMB 100M last year, with RMB 200–400M expected this year at ~10% profit margin',
                    'Expanding into optical communications with customers including Innolight, an NVIDIA supplier; a lights-out factory in Shenzhen goes live this July as the optical-comms business ramps',
                    "Founder formerly No.2 at Maxphotonics; a veteran of Maruwa's optical-communications technology joined full-time, alongside senior advisors from Japan and the US",
                    'Earlier investors include a CATL-backed industrial fund; M&A initiatives advancing in parallel this year'
                ],
                link: null,
                linkLabel: null
            }
        ]
    },

    cases: {
        title: 'Track Record',
        subtitle: '17 select closed deals, witnessing the power of technological change',
        categories: [
            { id: 'all', label: 'All Deals' },
            { id: 'hardware', label: 'AI & Smart Hardware' },
            { id: 'robotics', label: 'Robotics' },
            { id: 'semiconductor', label: 'Semiconductors / Hard Tech' },
            { id: 'consumer_med', label: 'Consumer & Healthcare / Education' }
        ],
        projects: [
            {
                id: 1,
                title: 'Gyges Labs',
                category: 'hardware',
                round: 'Pre-A',
                amount: 'Tens of millions RMB',
                investors: ['GSR Ventures', 'Founder of Shokz', 'NYX Ventures'],
                short_desc: "Zhu Xiaohu's first AI-hardware bet; the picks-and-shovels enabler of AI glasses and a pioneer of DigiWindow technology.",
                detail: 'Gyges Labs (formerly Xianshun Technology) solved the key challenge of integrating AI into conventional eyewear with its proprietary DigiWindow technology, creating the world\'s lightest and smallest near-eye display optical solution. Led by Stanford PhD Jia Jieyang, the core team hails from Apple, Google and other top-tier companies. Its products debuted at the China International Optoelectronic Exposition, and the company aims to become the underlying technology infrastructure of the AI glasses industry.',
                tags: ['AI Glasses', 'Stanford Team', 'Optical Technology']
            },
            {
                id: 11,
                title: 'Huaquejing Medical (华鹊景医疗)',
                category: 'robotics',
                round: 'Series A',
                amount: 'Tens of millions RMB',
                investors: ['Shenzhen Capital Group (SCGC)'],
                short_desc: 'A leader in intelligent rehabilitation robotics and the first to develop a 3D upper-limb mirror rehabilitation robot.',
                detail: 'Huaquejing Medical (华鹊景医疗) focuses on intelligent rehabilitation robots and integrated smart rehabilitation solutions. With 70+ intellectual property rights and multiple NMPA-registered products, its core team brings 15 years of R&D experience. The company created the world\'s first 3D upper-limb mirror rehabilitation robot, delivering innovative intelligent neuro-rehabilitation solutions.',
                tags: ['Rehabilitation Robotics', 'SCGC', 'Medical Devices']
            },
            {
                id: 6,
                title: 'Weibu Information (微步信息)',
                category: 'hardware',
                round: 'Strategic Financing',
                amount: 'Nearly RMB 200M',
                investors: ['Addor Capital (毅达资本)'],
                short_desc: 'A leading IT smart-hardware solutions provider in China and a strategic partner of Intel and AMD.',
                detail: 'Weibu Information (微步信息) is an integrated IT smart-hardware solutions provider built on x86 and ARM architectures. Its products span consumer electronics, intelligent transportation and smart education, with industry-leading annual shipment volumes. The new funding supports its build-out of a world-class industrial internet platform for IT smart hardware.',
                tags: ['IT Hardware', 'IoT', 'x86 Architecture']
            },
            {
                id: 17,
                title: 'Fuchuang Youyue (富创优越)',
                category: 'semiconductor',
                round: 'M&A',
                amount: '100% Acquisition',
                investors: ['Huamao Technology (603306, 华懋科技)'],
                short_desc: 'A hard-tech communications company acquired in full by a listed auto-parts maker crossing into a new sector.',
                detail: 'Huamao Technology (603306.SH, 华懋科技) acquired Fuchuang Youyue (富创优越) in a cross-sector takeover. Specializing in the communications business, the target exemplifies how listed companies can pursue industrial upgrading and sector expansion through M&A.',
                tags: ['Communications Technology', 'Cross-Sector M&A', 'Listed Company']
            },
            {
                id: 5,
                title: 'Sanweitong (三维通)',
                category: 'robotics',
                round: 'Pre-A',
                amount: 'RMB 20M',
                investors: ['CIMC Ruidexin (中集睿德信)', 'Leaguer VC (力合创投)'],
                short_desc: 'Intelligent logistics sorting systems; pioneer of the super linear cross-belt sorter, quadrupling per-unit efficiency.',
                detail: 'Sanweitong (三维通) specializes in intelligent sorting technology, offering AGV-based sorting, rail-robot sorting and its super linear cross-belt sorting system. A single rail robot sorts up to 200 parcels per hour — far beyond conventional solutions — dramatically reducing logistics sorting costs.',
                tags: ['Logistics Robotics', 'Smart Warehousing', 'AGV']
            },
            {
                id: 8,
                title: 'Smlink Technology (思林杰)',
                category: 'semiconductor',
                round: 'Strategic Financing',
                amount: 'Pre-IPO',
                investors: ['Huaqiang Venture Capital (华强创投)', 'F&G Venture (方广资本)'],
                short_desc: 'STAR Market-listed company (688115) and a core supplier of production-line test equipment for Apple and Huawei.',
                detail: 'Smlink Technology (688115, 思林杰) focuses on industrial automated testing, where its embedded smart instrument modules effectively replace traditional general-purpose instruments. A qualified supplier to Apple, Huawei and Foxconn, Smlink has listed on the STAR Market as a hidden champion of industrial testing.',
                tags: ['Industrial Testing', 'Automation', 'STAR Market']
            },
            {
                id: 7,
                title: 'Patuoxun (帕拓逊, Mpow)',
                category: 'consumer_med',
                round: 'M&A',
                amount: 'RMB 449M',
                investors: ['Globalegrow (002640, 跨境通)'],
                short_desc: 'A cross-border e-commerce powerhouse in consumer electronics, builder of global brands such as Mpow.',
                detail: 'Globalegrow (跨境通) acquired Patuoxun (帕拓逊), a leader in cross-border consumer-electronics retail with well-known brands including Mpow and operations across 11 countries in Europe and North America. The deal further strengthened Globalegrow\'s consumer-electronics portfolio and enhanced its profitability.',
                tags: ['Cross-Border E-Commerce', 'Consumer Electronics', 'M&A']
            },
            {
                id: 16,
                title: 'Keruisi (科睿斯)',
                category: 'semiconductor',
                round: 'Strategic Investment',
                amount: 'Undisclosed',
                investors: ['Zhongtian Jingzhuang (002989, 中天精装)'],
                short_desc: 'FC-BGA high-end packaging substrate maker; core team from Unimicron, tackling a bottleneck technology.',
                detail: 'Zhongtian Jingzhuang (中天精装) made a cross-sector investment in Keruisi (科睿斯), which focuses on FC-BGA (ABF) high-end packaging substrates used in CPU, GPU and AI chip packaging. With a core team drawn from Taiwan\'s Unimicron, the company is working to break China\'s bottleneck in high-end substrates.',
                tags: ['Semiconductor Packaging', 'FC-BGA', 'Import Substitution']
            },
            {
                id: 13,
                title: 'CZUR (成者科技)',
                category: 'hardware',
                round: 'Series A+',
                amount: 'Tens of millions RMB',
                investors: ['Pangu Ventures (磐谷创投)'],
                short_desc: 'An innovator in smart office hardware and a global category leader in scanners and document cameras.',
                detail: 'CZUR (成者科技) focuses on smart office products, launching intelligent scanners and document cameras that fix the poor user experience of legacy devices. Former ZTE executive Fan Hu has joined the company, supporting its further expansion into global office-hardware markets.',
                tags: ['Smart Office', 'Global Brand', 'AI Imaging']
            },
            {
                id: 12,
                title: 'Wanxiang Xindong (万象新动)',
                category: 'consumer_med',
                round: 'M&A',
                amount: 'RMB 560M',
                investors: ['Mason Technologies (002654, 万润科技)'],
                short_desc: 'A precision mobile-advertising platform, acquired in full by a listed company.',
                detail: 'Mason Technologies (万润科技) acquired Wanxiang Xindong (万象新动) for RMB 560 million, expanding into mobile internet advertising. Wanxiang Xindong holds clear strengths in precision marketing, user insights and programmatic buying, bringing the listed company rich media and client resources.',
                tags: ['Digital Marketing', 'M&A', 'Ad Tech']
            },
            {
                id: 10,
                title: 'Niudaji (牛大吉)',
                category: 'consumer_med',
                round: 'Series A+',
                amount: 'RMB 100M',
                investors: ['Shenxiong Capital (深熊资本) et al.'],
                short_desc: 'A community-based new retail chain focused on upgrading the beef consumption category.',
                detail: 'Niudaji (牛大吉) raised RMB 100 million to drive a consumption upgrade in the beef category. Through a community chain-store model, it provides high-quality beef products and sets a benchmark for new retail.',
                tags: ['New Retail', 'Consumption Upgrade', 'Chain Stores']
            },
            {
                id: 9,
                title: 'Dingdong Class (叮咚课堂)',
                category: 'consumer_med',
                round: 'Series A',
                amount: 'Tens of millions RMB',
                investors: ['China Creation Ventures (CCV)', 'K2VC (险峰长青)'],
                short_desc: 'An AI-powered English-learning platform for children that simulates real foreign teachers to cut education costs.',
                detail: 'Dingdong Class (叮咚课堂) uses AI to simulate real American teachers, creating interactive teaching scenarios that sharply lower the barrier and cost of learning English for children. The round was led by China Creation Ventures, with participation from K2VC.',
                tags: ['AI Education', 'K-12', 'Online Education']
            },
            {
                id: 3,
                title: 'Zhangxin Baobei (掌心宝贝)',
                category: 'hardware',
                round: 'Series A',
                amount: 'Tens of millions RMB',
                investors: ['Zhongyunhui Capital (中云辉资本)', 'Zeng Liqing'],
                short_desc: 'A kindergarten smart-hardware and SaaS platform backed early by a Tencent co-founder, connecting families and schools.',
                detail: 'Zhangxin Baobei (掌心宝贝) uses smart attendance machines, cameras and other hardware as entry points to build a mobile internet platform for home-kindergarten co-education. It has received two rounds of investment from Tencent co-founder Zeng Liqing and is a leader in early-education informatization.',
                tags: ['Early-Ed Hardware', 'SaaS', 'Tencent Ecosystem']
            },
            {
                id: 4,
                title: 'Xiaodou Health (小豆健康)',
                category: 'consumer_med',
                round: 'Angel Round',
                amount: 'Nearly RMB 10M',
                investors: ['Tiantu Capital (天图投资)'],
                short_desc: 'A digital operations service provider for community healthcare, enabling primary-care institutions to chain and digitize.',
                detail: 'Founded by a Tencent-product-manager-and-physician team, Xiaodou Health (小豆健康) empowers primary-care institutions with three new modernizations — branding, chaining and digitalization — addressing the operational pain points of grassroots healthcare during the pandemic.',
                tags: ['Healthcare SaaS', 'Primary Care', 'Digitalization']
            },
            {
                id: 2,
                title: 'Pingxingxian Technology (平行线科技)',
                category: 'hardware',
                round: 'Strategic Financing',
                amount: 'Undisclosed',
                investors: ['Plum Ventures (梅花创投)', 'Tiantu Capital (天图投资)'],
                short_desc: 'A hard-tech innovator backed early by renowned institutions.',
                detail: 'Shenzhen Pingxingxian Technology Holdings (平行线科技) received funding from Plum Ventures and Tiantu Capital in 2020, focusing on innovation and R&D in hard-tech sectors.',
                tags: ['Hard Tech', 'Early-Stage Investment']
            },
            {
                id: 15,
                title: 'Qingniu Zhisheng (青牛智胜)',
                category: 'hardware',
                round: 'Series A+',
                amount: 'Undisclosed',
                investors: ['Greenwoods Investment (景林投资)'],
                short_desc: 'A hard-tech innovator backed by top-tier private investment firm Greenwoods.',
                detail: 'Qingniu Zhisheng (Shenzhen) Technology (青牛智胜) completed a Series A+ round from the renowned investment firm Greenwoods Investment.',
                tags: ['Hard Tech', 'Greenwoods']
            },
            {
                id: 14,
                title: 'Xiaomianhua Digital Technology (小棉花数字科技)',
                category: 'hardware',
                round: 'Pre-A',
                amount: 'Undisclosed',
                investors: ['Undisclosed'],
                short_desc: 'An emerging force in digital technology.',
                detail: 'Xiaomianhua Digital Technology (小棉花数字科技) completed a Pre-A round, dedicated to the R&D and application of digital technology products.',
                tags: ['Digital Technology', 'Early-Stage Project']
            }
        ],
        dealChart: {
            title: 'Deal Stage Distribution',
            labels: ['Angel / Pre-A', 'Series A / A+', 'Strategic / Pre-IPO', 'M&A'],
            data: [5, 6, 3, 3]
        }
    },

    influence: {
        title: 'Influence',
        subtitle: 'An owned media matrix amplifying hard-tech founders and portfolio companies',
        totalFans: '200K+',
        channels: [
            {
                name: 'Lian Nao (连脑)',
                handle: 'Lian Nao',
                followers: '100K+',
                desc: 'Connecting hard-tech minds: in-depth analysis at the intersection of frontier technology and commerce.',
                type: 'In-Depth Essays',
                icon: 'brain-circuit'
            },
            {
                name: 'Wavemaker (造浪者)',
                handle: 'Wavemaker',
                followers: '50K+',
                desc: 'Spotlighting world-changing founders and chronicling the key moments of each technology wave.',
                type: 'Video & Articles',
                icon: 'waves'
            },
            {
                name: 'Super Brand (钞级品牌)',
                handle: 'Super Brand',
                followers: '50K+',
                desc: 'Deconstructing the capital logic and cultural icons behind commercial brands.',
                type: 'Business Commentary',
                icon: 'coins'
            },
            {
                name: 'Wavemaker Capital (造浪资本)',
                handle: 'Wavemaker Capital',
                followers: 'Targeted Reach',
                desc: 'Early-stage hard-tech investment and FA services, empowering portfolio companies with media momentum.',
                type: 'Fund / FA',
                icon: 'landmark'
            }
        ],
        mediaMarquee: [
            "People's Daily Online",
            'Xinhua Net',
            'CCTV.com',
            'China Daily',
            'Guangming Daily',
            '36Kr',
            'TMTPost (钛媒体)',
            'Huxiu (虎嗅)',
            'LatePost (晚点)',
            'Jazzyear (甲子光年)',
            'Bilibili Top Creators',
            'Douyin Tech KOLs',
            'Top WeChat Channels',
            'Zhihu Daily'
        ]
    },

    partners: {
        title: 'Investment Partners & Industry Players',
        subtitle: 'In league with first-tier capital, building the industry ecosystem together',
        list: [
            'GSR Ventures (金沙江创投)',
            'Shenzhen Capital Group (深创投)',
            'Tiantu Capital (天图投资)',
            'Plum Ventures (梅花创投)',
            'China Creation Ventures (创世伙伴)',
            'Addor Capital (毅达资本)',
            'Huaqiang Venture Capital (华强创投)',
            'CIMC Ruidexin (中集睿德信)',
            'Zhongtian Jingzhuang (中天精装)',
            'Mason Technologies (万润科技)',
            'Globalegrow (跨境通)',
            'Huamao Technology (华懋科技)',
            'Greenwoods Investment (景林投资)',
            'Pangu Ventures (磐谷创投)'
        ]
    },

    founder: {
        title: 'About the Founder',
        role: 'Founding Partner · Wavemaker Capital',
        photo: '../assets/founder.jpg',
        bio: [
            'Founding Partner of Wavemaker Capital; has helped 10+ hard-tech startups raise funding, accompanying them from angel round to Pre-IPO.',
            "Founder of the Wavemaker tech media matrix with 200K+ followers across platforms.",
            "Author of 'Crossroads of Civilizations: How Chinese and Western Civilizations Diverged' and translator of 'Innovation Around Us: Making Innovation as Easy as Eating and Sleeping'.",
            'CFA charterholder; visiting MBA at George Washington University; MSc in Management from ESSEC Business School (France); BA in English and Chinese from Beijing Foreign Studies University.'
        ],
        cta: { label: 'Get in Touch', href: 'mailto:bp@wavemaker.cap' }
    },

    footer: {
        desc: 'Committed to being the most trusted capital partner in hard tech. Focus: robotics, AI hardware, semiconductors and medical devices.',
        contact: {
            wechat: 'wavechanger',
            phone: '186 8220 4551',
            email: 'bp@wavemaker.cap'
        },
        cities: 'Shenzhen · Beijing · Shanghai',
        copyright: '© 2026 Wavemaker Capital. All rights reserved.'
    }
};
