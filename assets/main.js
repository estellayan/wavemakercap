/**
 * 造浪资本 Wavemaker Capital — 交互逻辑（两语共用）
 * 中文版加载 data.js (window.WM_DATA)；英文版先加载 i18n-en.js (window.WM_DATA_EN)。
 */
const DATA = window.WM_DATA_EN || window.WM_DATA;
const UI = DATA.ui;

if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
}

document.addEventListener('DOMContentLoaded', () => {
    renderNav();
    renderHero();
    renderAbout();
    renderThisYear();
    renderFilters();
    renderProjects('all');
    renderInfluence();
    renderPartners();
    renderFounder();
    renderFooter();
    renderCharts();
    initAnimations();
    initModalEvents();
    if (window.lucide) lucide.createIcons();
});

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* 语言切换链接：在 about 页面上把目标从 index.html 派生为 about.html，
   保证 中about ↔ en/about 闭环（首页不受影响）。 */
function langSwitchHref(href) {
    if (/about\.html$/i.test(window.location.pathname)) {
        return href.replace(/index\.html$/, 'about.html');
    }
    return href;
}

/* 把 "30亿+" / "17+" / "20W+" 拆成数字 + 后缀，供 counter 动画 */
function splitStat(value) {
    const m = String(value).match(/^([\d.]+)(.*)$/);
    return m ? { num: parseFloat(m[1]), suffix: m[2] } : { num: 0, suffix: value };
}

/* ================= 导航 ================= */
function renderNav() {
    const nav = $('site-nav');
    if (!nav) return;

    const links = UI.nav.links.map(l =>
        `<a href="${l.href}" class="nav-link text-sm font-medium">${esc(l.label)}</a>`
    ).join('');

    nav.innerHTML = `
        <div class="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
            <a href="${UI.nav.logoHref}" class="flex items-center gap-3 group">
                <span class="seal seal-lg group-hover:scale-105 transition-transform">${esc(UI.brand.seal)}</span>
                <span class="leading-tight">
                    <span class="block font-serif-wm font-bold text-2xl tracking-wide" style="color:var(--wm-ink)">${esc(UI.brand.name)}</span>
                    <span class="block font-mono-wm text-xs tracking-[0.22em]" style="color:var(--wm-gold)">${esc(UI.brand.nameEn)}</span>
                </span>
            </a>
            <div class="hidden md:flex items-center gap-8">${links}</div>
            <div class="flex items-center gap-4">
                <span class="font-mono-wm text-xs tracking-widest" style="color:var(--wm-ink)">${esc(UI.nav.langCurrent)}</span>
                <span style="color:var(--wm-line)">|</span>
                <a href="${langSwitchHref(UI.nav.langOtherHref)}" class="font-mono-wm text-xs tracking-widest footer-link">${esc(UI.nav.langOther)}</a>
            </div>
        </div>
        <div class="md:hidden px-6 pb-3 flex flex-wrap gap-x-5 gap-y-2">${links}</div>
    `;
}

/* ================= Hero ================= */
function renderHero() {
    const el = $('hero-content');
    if (!el) return;
    const h = DATA.hero;

    el.innerHTML = `
        <div class="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full hairline border" style="background:var(--wm-accent-soft)">
            <span class="w-1.5 h-1.5 rounded-full" style="background:var(--wm-accent)"></span>
            <span class="font-mono-wm text-[11px] tracking-[0.25em] uppercase" style="color:var(--wm-accent)">${esc(UI.hero.kicker)}</span>
        </div>
        <h1 class="font-serif-wm font-bold leading-tight mb-4" style="font-size:clamp(3rem,7vw,5.5rem);color:var(--wm-ink)">
            ${esc(h.title)}
        </h1>
        <div class="font-mono-wm text-sm md:text-base tracking-[0.4em] mb-6" style="color:var(--wm-gold)">${esc(h.titleEn)}</div>
        <p class="font-serif-wm text-2xl md:text-3xl mb-6" style="color:var(--wm-accent)">${esc(h.subtitle)}</p>
        <p class="text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10" style="color:var(--wm-muted)">${esc(h.desc)}</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#cases" class="btn-primary">${esc(UI.hero.ctaPrimary)} <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
            <a href="mailto:${DATA.footer.contact.email}" class="btn-outline">${esc(UI.hero.ctaSecondary)} <i data-lucide="mail" class="w-4 h-4"></i></a>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto hairline-t pt-10">
            ${h.stats.map(s => {
                const { num, suffix } = splitStat(s.value);
                return `
                <div class="text-center">
                    <div class="stat-value text-4xl md:text-5xl mb-2">
                        <span class="counter" data-count="${num}" data-suffix="${esc(suffix)}">0${esc(suffix)}</span>
                    </div>
                    <div class="text-sm" style="color:var(--wm-muted)">${esc(s.label)}</div>
                </div>`;
            }).join('')}
        </div>
    `;

    const v = $('hero-vertical');
    if (v) v.textContent = UI.hero.vertical;
}

/* ================= 关于造浪 ================= */
function renderAbout() {
    const el = $('about-content');
    if (!el) return;
    const a = DATA.about;

    el.innerHTML = `
        <div class="grid md:grid-cols-2 gap-16 items-center">
            <div class="reveal">
                <div class="section-no mb-5">${esc(UI.about.sectionNo)}</div>
                <h2 class="font-serif-wm text-3xl md:text-4xl font-bold mb-6" style="color:var(--wm-ink)">${esc(a.title)}</h2>
                <p class="leading-relaxed text-base md:text-lg mb-8" style="color:var(--wm-muted)">${esc(a.desc)}</p>
                <ul class="space-y-5">
                    ${a.points.map(p => `
                    <li class="flex items-start gap-3">
                        <span class="mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style="background:var(--wm-accent-soft);color:var(--wm-accent)">
                            <i data-lucide="check" class="w-3 h-3"></i>
                        </span>
                        <span style="color:var(--wm-ink)">${esc(p)}</span>
                    </li>`).join('')}
                </ul>
            </div>
            <div class="chart-panel p-8 reveal">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="font-serif-wm text-lg font-semibold" style="color:var(--wm-ink)">${esc(a.chart.title)}</h3>
                    <div class="flex items-center gap-2">
                        <span class="w-2.5 h-2.5 rounded-full" style="background:var(--wm-accent)"></span>
                        <span class="font-mono-wm text-[11px]" style="color:var(--wm-muted)">${esc(UI.about.chartLegend)}</span>
                    </div>
                </div>
                <div class="h-64 md:h-80 w-full">
                    <canvas id="trackChart"></canvas>
                </div>
            </div>
        </div>
    `;
}

/* ================= 今年项目（视觉权重最大） ================= */
function renderThisYear() {
    const el = $('this-year-content');
    if (!el) return;
    const t = DATA.thisYear;
    const faLabel = (UI.thisYear && UI.thisYear.faLabel) || '造浪资本担任财务顾问';

    el.innerHTML = `
        <div class="text-center mb-14 reveal">
            <div class="section-no justify-center mb-5" style="justify-content:center">${esc(UI.thisYear.sectionNo)}</div>
            <h2 class="font-serif-wm text-4xl md:text-5xl font-bold mb-4" style="color:var(--wm-ink)">
                ${esc(t.title)} <span class="font-mono-wm font-normal text-2xl md:text-3xl align-baseline" style="color:var(--wm-gold)">2026</span>
            </h2>
            <p class="text-base md:text-lg" style="color:var(--wm-muted)">${esc(t.subtitle)}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            ${t.slots.map((s, i) => `
            <div class="slot reveal flex flex-col ${i === 0 ? 'md:col-span-2' : ''}">
                <div class="slot-media">
                    <div class="slot-placeholder">
                        <span class="seal seal-lg">${esc(UI.brand.seal)}</span>
                        <span class="ph-text">${esc(UI.thisYear.placeholder)}</span>
                    </div>
                    <img src="${s.img}" alt="${esc(s.name)}" loading="lazy" onerror="this.classList.add('img-error')">
                    <span class="font-mono-wm text-[10px] font-bold tracking-wider uppercase"
                        style="position:absolute;top:16px;left:16px;z-index:3;color:var(--wm-gold);background:rgba(250,249,246,0.92);border:1px solid rgba(168,138,91,0.4);border-radius:6px;padding:3px 9px">${esc(s.round)}</span>
                </div>
                <div class="p-6 md:p-7 hairline-t flex flex-col flex-grow">
                    <div class="mb-3">
                        <h3 class="font-serif-wm text-xl md:text-2xl font-bold" style="color:var(--wm-ink)">${esc(s.name)}</h3>
                        <div class="font-mono-wm text-[11px] tracking-[0.18em] uppercase mt-1" style="color:var(--wm-gold)">${esc(s.nameEn)}</div>
                    </div>
                    <div class="flex flex-wrap items-center gap-2 mb-4">
                        <span class="round-badge">${esc(s.tagline)}</span>
                        <span class="font-mono-wm text-[10px] font-bold tracking-wider"
                            style="color:var(--wm-gold);background:var(--wm-gold-soft);border:1px solid rgba(168,138,91,0.35);border-radius:6px;padding:3px 9px">${esc(s.round)}</span>
                        ${s.fa ? `
                        <span class="inline-flex items-center gap-1 text-[10px] font-semibold"
                            style="color:var(--wm-accent);border:1px dashed rgba(166,68,46,0.45);border-radius:6px;padding:3px 9px">
                            <i data-lucide="handshake" class="w-3 h-3"></i>${esc(faLabel)}
                        </span>` : ''}
                    </div>
                    <p class="text-sm leading-relaxed mb-5" style="color:var(--wm-muted)">${esc(s.desc)}</p>
                    <ul class="space-y-2.5 ${s.link ? 'mb-6' : ''}">
                        ${(s.highlights || []).map(h => `
                        <li class="flex items-start gap-2.5">
                            <span class="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style="background:var(--wm-accent-soft);color:var(--wm-accent)">
                                <i data-lucide="check" class="w-2.5 h-2.5"></i>
                            </span>
                            <span class="text-sm leading-relaxed" style="color:var(--wm-ink)">${esc(h)}</span>
                        </li>`).join('')}
                    </ul>
                    ${s.link ? `
                    <div class="mt-auto pt-5 hairline-t">
                        <a href="${esc(s.link)}" target="_blank" rel="noopener"
                            class="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:-translate-y-0.5"
                            style="color:var(--wm-accent);border:1px solid rgba(166,68,46,0.4);border-radius:999px;padding:9px 22px">
                            ${esc(s.linkLabel || s.link)} <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                        </a>
                    </div>` : ''}
                </div>
            </div>`).join('')}
        </div>
    `;
}

/* ================= 过往项目：筛选 + 卡片 + 弹窗 ================= */
function renderFilters() {
    const header = $('cases-header');
    if (header) {
        header.innerHTML = `
            <div class="section-no mb-5" style="justify-content:center">${esc(UI.cases.sectionNo)}</div>
            <h2 class="font-serif-wm text-3xl md:text-4xl font-bold mb-4" style="color:var(--wm-ink)">${esc(DATA.cases.title)}</h2>
            <p class="text-base md:text-lg" style="color:var(--wm-muted)">${esc(DATA.cases.subtitle)}</p>
        `;
    }
    const dealTitle = $('deal-chart-title');
    if (dealTitle) dealTitle.textContent = DATA.cases.dealChart.title;

    const c = $('filter-container');
    if (!c) return;
    c.innerHTML = DATA.cases.categories.map(cat => `
        <button class="btn-filter ${cat.id === 'all' ? 'active' : ''}" data-filter="${cat.id}"
            onclick="window.filterProjects('${cat.id}')">${esc(cat.label)}</button>
    `).join('');
}

window.filterProjects = (categoryId) => {
    document.querySelectorAll('[data-filter]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === categoryId);
    });
    const grid = $('project-grid');
    if (!grid) return;

    const swap = () => {
        renderProjects(categoryId);
        if (window.gsap) {
            gsap.fromTo(grid.children,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, clearProps: 'all' });
        }
    };

    if (window.gsap && grid.children.length) {
        gsap.to(grid.children, { opacity: 0, y: 10, duration: 0.25, stagger: 0.03, onComplete: swap });
    } else {
        swap();
    }
};

function renderProjects(filter) {
    const grid = $('project-grid');
    if (!grid) return;
    const list = filter === 'all'
        ? DATA.cases.projects
        : DATA.cases.projects.filter(p => p.category === filter);

    grid.innerHTML = list.map(p => `
        <div class="wm-card p-6 flex flex-col h-full">
            <div class="flex justify-between items-start mb-4">
                <span class="round-badge">${esc(p.round)}</span>
                <span class="font-mono-wm text-xs" style="color:var(--wm-gold)">${esc(p.amount)}</span>
            </div>
            <h3 class="font-serif-wm text-xl font-bold mb-3 cursor-pointer transition-colors hover:text-[#A6442E]"
                style="color:var(--wm-ink)" onclick="window.openModal(${p.id})">${esc(p.title)}</h3>
            <p class="text-sm leading-relaxed mb-6 flex-grow" style="color:var(--wm-muted)">${esc(p.short_desc)}</p>
            <div class="space-y-4 hairline-t pt-4 mt-auto">
                <div class="flex flex-wrap gap-2">
                    ${p.tags.slice(0, 3).map(t => `<span class="tag">${esc(t)}</span>`).join('')}
                </div>
                <div class="flex justify-between items-center">
                    <span class="flex items-center gap-1.5 text-xs" style="color:var(--wm-muted)">
                        <i data-lucide="landmark" class="w-3.5 h-3.5" style="color:var(--wm-gold)"></i> ${esc(p.investors[0])}
                    </span>
                    <button onclick="window.openModal(${p.id})"
                        class="text-xs font-semibold flex items-center gap-1 transition-colors hover:underline"
                        style="color:var(--wm-accent)">
                        ${esc(UI.cases.detailBtn)} <i data-lucide="maximize-2" class="w-3 h-3"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    if (window.lucide) lucide.createIcons();
}

window.openModal = (id) => {
    const p = DATA.cases.projects.find(proj => proj.id === id);
    const modal = $('project-modal');
    const content = $('modal-content');
    if (!p || !modal || !content) return;

    content.innerHTML = `
        <div class="relative p-8 md:p-10">
            <button onclick="window.closeModal()" class="absolute top-5 right-5 transition-colors"
                style="color:var(--wm-muted)" onmouseover="this.style.color='var(--wm-accent)'" onmouseout="this.style.color='var(--wm-muted)'">
                <i data-lucide="x" class="w-6 h-6"></i>
            </button>
            <div class="mb-8">
                <div class="flex items-center gap-3 mb-3">
                    <span class="round-badge">${esc(p.round)}</span>
                    <span class="font-mono-wm text-sm" style="color:var(--wm-gold)">${esc(p.amount)}</span>
                </div>
                <h3 class="font-serif-wm text-3xl font-bold" style="color:var(--wm-ink)">${esc(p.title)}</h3>
            </div>
            <div class="grid md:grid-cols-3 gap-8 mb-8">
                <div class="md:col-span-2">
                    <h4 class="text-sm font-semibold mb-3" style="color:var(--wm-ink)">${esc(UI.cases.modalDetails)}</h4>
                    <p class="text-sm leading-relaxed" style="color:var(--wm-muted)">${esc(p.detail)}</p>
                </div>
                <div class="p-5 rounded-xl hairline border" style="background:var(--wm-bg)">
                    <h4 class="text-sm font-semibold mb-4" style="color:var(--wm-ink)">${esc(UI.cases.modalInvestors)}</h4>
                    <ul class="space-y-2.5">
                        ${p.investors.map(inv => `
                        <li class="flex items-center gap-2 text-sm" style="color:var(--wm-muted)">
                            <i data-lucide="check-circle" class="w-3.5 h-3.5 flex-shrink-0" style="color:var(--wm-accent)"></i> ${esc(inv)}
                        </li>`).join('')}
                    </ul>
                </div>
            </div>
            <div class="hairline-t pt-6 flex flex-wrap gap-2">
                ${p.tags.map(t => `<span class="tag">${esc(t)}</span>`).join('')}
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    if (window.gsap) {
        gsap.fromTo($('modal-backdrop'), { opacity: 0 }, { opacity: 1, duration: 0.3 });
        gsap.fromTo(content, { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.6)' });
    }
    if (window.lucide) lucide.createIcons();
};

window.closeModal = () => {
    const modal = $('project-modal');
    const content = $('modal-content');
    if (!modal || modal.classList.contains('hidden')) return;
    document.body.style.overflow = '';
    if (window.gsap) {
        gsap.to(content, { scale: 0.95, opacity: 0, duration: 0.2 });
        gsap.to($('modal-backdrop'), {
            opacity: 0, duration: 0.2,
            onComplete: () => modal.classList.add('hidden')
        });
    } else {
        modal.classList.add('hidden');
    }
};

function initModalEvents() {
    const modal = $('project-modal');
    if (!modal) return;
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.id === 'modal-backdrop' || e.target.id === 'modal-wrap') window.closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') window.closeModal();
    });
}

/* ================= 影响力 ================= */
function renderInfluence() {
    const el = $('influence-content');
    if (!el) return;
    const inf = DATA.influence;
    const { num, suffix } = splitStat(inf.totalFans);

    el.innerHTML = `
        <div class="text-center mb-14 reveal">
            <div class="section-no mb-5" style="justify-content:center">${esc(UI.influence.sectionNo)}</div>
            <h2 class="font-serif-wm text-3xl md:text-4xl font-bold mb-4" style="color:var(--wm-ink)">${esc(inf.title)}</h2>
            <p class="text-base md:text-lg max-w-2xl mx-auto" style="color:var(--wm-muted)">${esc(inf.subtitle)}</p>
        </div>

        <div class="text-center mb-12 reveal">
            <div class="stat-value text-6xl md:text-7xl mb-2">
                <span class="counter" data-count="${num}" data-suffix="${esc(suffix)}">0${esc(suffix)}</span>
            </div>
            <div class="font-mono-wm text-xs tracking-[0.3em] uppercase" style="color:var(--wm-muted)">${esc(UI.influence.fansLabel)}</div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            ${inf.channels.map(ch => `
            <div class="wm-card p-6 reveal">
                <div class="flex items-center justify-between mb-5">
                    <span class="w-10 h-10 rounded-xl flex items-center justify-center" style="background:var(--wm-accent-soft);color:var(--wm-accent)">
                        <i data-lucide="${ch.icon}" class="w-5 h-5"></i>
                    </span>
                    <span class="stat-value text-2xl">${esc(ch.followers)}</span>
                </div>
                <h3 class="font-serif-wm text-lg font-bold" style="color:var(--wm-ink)">${esc(ch.name)}</h3>
                <div class="font-mono-wm text-[10px] tracking-[0.2em] uppercase mb-3" style="color:var(--wm-gold)">${esc(ch.handle)} · ${esc(ch.type)}</div>
                <p class="text-sm leading-relaxed" style="color:var(--wm-muted)">${esc(ch.desc)}</p>
            </div>`).join('')}
        </div>

        <div class="reveal">
            <div class="text-center mb-8">
                <span class="font-mono-wm text-xs tracking-[0.3em] uppercase" style="color:var(--wm-muted)">${esc(UI.influence.mediaTitle)}</span>
            </div>
            <div class="marquee">
                <div class="marquee-track">
                    ${[...inf.mediaMarquee, ...inf.mediaMarquee].map(m => `<span class="marquee-item">${esc(m)}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

/* ================= 合作机构 ================= */
function renderPartners() {
    const el = $('partners-content');
    if (!el) return;
    const pt = DATA.partners;

    el.innerHTML = `
        <div class="text-center mb-12 reveal">
            <div class="section-no mb-5" style="justify-content:center">${esc(UI.partners.sectionNo)}</div>
            <h2 class="font-serif-wm text-3xl md:text-4xl font-bold mb-4" style="color:var(--wm-ink)">${esc(pt.title)}</h2>
            <p class="text-sm md:text-base" style="color:var(--wm-muted)">${esc(pt.subtitle)}</p>
        </div>
        <div class="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto reveal">
            ${pt.list.map(p => `<span class="partner-badge">${esc(p)}</span>`).join('')}
        </div>
    `;
}

/* ================= 关于我（about.html） ================= */
function renderFounder() {
    const el = $('founder-content');
    if (!el) return;
    const f = DATA.founder;

    el.innerHTML = `
        <div class="grid md:grid-cols-5 gap-14 items-start">
            <div class="md:col-span-2 reveal">
                <div class="founder-frame">
                    <img src="${(DATA.founder && DATA.founder.photo) || 'assets/founder.jpg'}" alt="${esc(UI.founder.photoAlt)}" class="w-full block"
                         onerror="this.closest('.founder-frame').classList.add('no-photo');this.remove();">
                    <span class="seal seal-lg seal-corner">${esc(UI.brand.seal)}</span>
                </div>
            </div>
            <div class="md:col-span-3 reveal">
                <div class="section-no mb-5">ABOUT</div>
                <h1 class="font-serif-wm text-4xl md:text-5xl font-bold mb-3" style="color:var(--wm-ink)">${esc(f.title)}</h1>
                <div class="font-mono-wm text-sm tracking-[0.25em] uppercase mb-10" style="color:var(--wm-gold)">${esc(f.role)}</div>
                <div class="space-y-7 mb-12">
                    ${f.bio.map((b, i) => `
                    <div class="bio-item">
                        <span class="bio-no">${String(i + 1).padStart(2, '0')}</span>
                        <p class="leading-relaxed" style="color:var(--wm-ink)">${esc(b)}</p>
                    </div>`).join('')}
                </div>
                <div class="flex flex-col sm:flex-row gap-4 hairline-t pt-8">
                    <a href="${UI.nav.logoHref}" class="btn-outline">${esc(UI.founder.backHome)}</a>
                    <a href="${f.cta.href}" class="btn-primary">${esc(f.cta.label)} <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
                </div>
            </div>
        </div>
    `;
}

/* ================= 页脚 ================= */
function renderFooter() {
    const el = $('site-footer');
    if (!el) return;
    const ft = DATA.footer;

    el.innerHTML = `
        <div class="max-w-7xl mx-auto px-6 py-16">
            <div class="grid md:grid-cols-3 gap-12 mb-14">
                <div>
                    <div class="flex items-center gap-3 mb-5">
                        <span class="seal seal-md">${esc(UI.brand.seal)}</span>
                        <span class="font-serif-wm font-bold text-lg" style="color:var(--wm-ink)">${esc(UI.brand.name)}</span>
                    </div>
                    <p class="text-sm leading-relaxed max-w-xs mb-4" style="color:var(--wm-muted)">${esc(ft.desc)}</p>
                    <p class="font-mono-wm text-xs tracking-[0.2em]" style="color:var(--wm-gold)">${esc(ft.cities)}</p>
                </div>
                <div>
                    <h4 class="font-serif-wm font-semibold mb-5" style="color:var(--wm-ink)">${esc(UI.footer.contactTitle)}</h4>
                    <ul class="space-y-3 text-sm" style="color:var(--wm-muted)">
                        <li class="flex items-center gap-2.5">
                            <i data-lucide="message-circle" class="w-4 h-4" style="color:var(--wm-gold)"></i>
                            ${esc(UI.footer.wechatLabel)}：<span class="font-mono-wm">${esc(ft.contact.wechat)}</span>
                        </li>
                        <li class="flex items-center gap-2.5">
                            <i data-lucide="phone" class="w-4 h-4" style="color:var(--wm-gold)"></i>
                            ${esc(UI.footer.phoneLabel)}：<span class="font-mono-wm">${esc(ft.contact.phone)}</span>
                        </li>
                        <li class="flex items-center gap-2.5">
                            <i data-lucide="mail" class="w-4 h-4" style="color:var(--wm-gold)"></i>
                            ${esc(UI.footer.emailLabel)}：<a href="mailto:${esc(ft.contact.email)}" class="footer-link font-mono-wm">${esc(ft.contact.email)}</a>
                        </li>
                    </ul>
                </div>
                <div class="flex md:justify-end items-start">
                    <a href="${langSwitchHref(UI.nav.logoOtherHref || UI.nav.langOtherHref)}" class="font-mono-wm text-xs tracking-widest footer-link hairline border rounded-full px-5 py-2.5">
                        ${esc(UI.nav.langCurrent)} | ${esc(UI.nav.langOther)}
                    </a>
                </div>
            </div>
            <div class="hairline-t pt-8 text-center text-xs" style="color:var(--wm-muted)">${esc(ft.copyright)}</div>
        </div>
    `;
}

/* ================= 图表（浅色配色） ================= */
function renderCharts() {
    if (!window.Chart) return;

    const radarEl = $('trackChart');
    if (radarEl && DATA.about) {
        new Chart(radarEl.getContext('2d'), {
            type: 'radar',
            data: {
                labels: DATA.about.chart.labels,
                datasets: [{
                    data: DATA.about.chart.data,
                    backgroundColor: 'rgba(166, 68, 46, 0.12)',
                    borderColor: '#A6442E',
                    pointBackgroundColor: '#A6442E',
                    pointBorderColor: '#FAF9F6',
                    pointRadius: 4,
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: { color: 'rgba(29, 27, 24, 0.08)' },
                        grid: { color: 'rgba(29, 27, 24, 0.08)' },
                        pointLabels: { color: '#6E675E', font: { size: 11, family: "'Inter','PingFang SC',sans-serif" } },
                        ticks: { display: false },
                        suggestedMin: 50,
                        suggestedMax: 100
                    }
                },
                plugins: { legend: { display: false } }
            }
        });
    }

    const dealEl = $('dealChart');
    if (dealEl && DATA.cases) {
        new Chart(dealEl.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: DATA.cases.dealChart.labels,
                datasets: [{
                    data: DATA.cases.dealChart.data,
                    backgroundColor: ['#A6442E', '#A88A5B', '#1D1B18', '#D8CBB4'],
                    borderColor: '#FAF9F6',
                    borderWidth: 3,
                    hoverOffset: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '64%',
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#6E675E',
                            font: { size: 11, family: "'Inter','PingFang SC',sans-serif" },
                            boxWidth: 10,
                            boxHeight: 10,
                            padding: 14,
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    }
                }
            }
        });
    }
}

/* ================= 动画 ================= */
function initAnimations() {
    /* 导航滚动毛玻璃 */
    const nav = $('site-nav');
    if (nav) {
        const onScroll = () => nav.classList.toggle('glass', window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    if (!window.gsap) return;

    /* GSAP 滚动淡入（克制：translateY 28px + opacity） */
    if (window.ScrollTrigger) {
        gsap.utils.toArray('.reveal').forEach(el => {
            gsap.from(el, {
                y: 28,
                opacity: 0,
                duration: 0.7,
                ease: 'power2.out',
                scrollTrigger: { trigger: el, start: 'top 88%' }
            });
        });
    }

    /* counter 数字滚动动画 */
    document.querySelectorAll('.counter').forEach(el => {
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        if (isNaN(target)) return;
        const obj = { v: 0 };
        const render = () => {
            el.textContent = (Number.isInteger(target) ? Math.round(obj.v) : obj.v.toFixed(1)) + suffix;
        };
        if (window.ScrollTrigger) {
            gsap.to(obj, {
                v: target,
                duration: 1.6,
                ease: 'power2.out',
                onUpdate: render,
                scrollTrigger: { trigger: el, start: 'top 92%' }
            });
        } else {
            gsap.to(obj, { v: target, duration: 1.6, ease: 'power2.out', onUpdate: render });
        }
    });
}
