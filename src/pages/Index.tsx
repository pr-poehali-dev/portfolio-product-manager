import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/d541260d-6435-4386-85ba-99560d0c766b/files/aad0deaf-2a35-4171-a741-9ed2052590a0.jpg';

const NAV = [
  { id: 'hero', label: 'Главная' },
  { id: 'about', label: 'Обо мне' },
  { id: 'skills', label: 'Навыки' },
  { id: 'experience', label: 'Опыт' },
  { id: 'education', label: 'Образование' },
];

const SKILLS = [
  {
    icon: 'Compass',
    title: 'Продакт-менеджмент',
    items: ['Product discovery & roadmap', 'CustDev и работа с гипотезами', 'Юнит-экономика и метрики', 'Управление командой и стейкхолдерами'],
  },
  {
    icon: 'Ship',
    title: 'Внешнеэкономическая деятельность',
    items: ['Контракты ВЭД и Incoterms', 'Валютный контроль и расчёты', 'Логистика и таможенное оформление', 'Сертификация и документооборот'],
  },
  {
    icon: 'PackageSearch',
    title: 'Международные закупки',
    items: ['Поиск и аудит поставщиков', 'Переговоры и тендеры', 'Контроль качества и сроков', 'Оптимизация затрат на закупку'],
  },
];

const EXPERIENCE = [
  {
    period: '2021 — наст. время',
    role: 'Product Manager / ВЭД',
    company: 'Компания',
    desc: 'Управление продуктовой линейкой и полным циклом закупок из-за рубежа: от поиска поставщиков до поставки на склад.',
  },
  {
    period: '2018 — 2021',
    role: 'Менеджер по закупкам',
    company: 'Компания',
    desc: 'Организация импортных поставок, ведение контрактов ВЭД, взаимодействие с таможенными брокерами и логистикой.',
  },
  {
    period: '2015 — 2018',
    role: 'Специалист по продукту',
    company: 'Компания',
    desc: 'Аналитика рынка, работа с ассортиментом и сопровождение запуска новых товарных категорий.',
  },
];

const EDUCATION = [
  {
    period: '2011 — 2015',
    title: 'Высшее образование',
    place: 'Университет',
    desc: 'Направление, связанное с экономикой и управлением.',
  },
  {
    period: '2020',
    title: 'Курс по продакт-менеджменту',
    place: 'Онлайн-школа',
    desc: 'Управление продуктом, аналитика и продуктовые исследования.',
  },
];

const Index = () => {
  const [active, setActive] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased grain selection:bg-primary/20">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo('hero')} className="font-display text-2xl font-semibold tracking-tight">
            Имя Фамилия<span className="text-primary">.</span>
          </button>
          <div className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className={`text-sm transition-colors hover:text-primary ${
                  active === n.id ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {n.label}
              </button>
            ))}
          </div>
          <button className="md:hidden" onClick={() => setMenuOpen((v) => !v)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </nav>
        {menuOpen && (
          <div className="md:hidden border-t border-border/60 bg-background/95 px-6 py-4 flex flex-col gap-4 animate-fade-in">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="text-left text-sm text-muted-foreground hover:text-primary">
                {n.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover opacity-[0.18]" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 w-full pt-20">
          <p className="reveal text-sm uppercase tracking-[0.3em] text-primary mb-6" style={{ animationDelay: '0.1s' }}>
            Product Manager · ВЭД · Закупки
          </p>
          <h1
            className="reveal font-display text-5xl sm:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight max-w-4xl"
            style={{ animationDelay: '0.25s' }}
          >
            Создаю продукты и&nbsp;выстраиваю
            <span className="text-primary"> международные поставки</span>
          </h1>
          <p
            className="reveal mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed"
            style={{ animationDelay: '0.4s' }}
          >
            Продакт-менеджер с опытом во внешнеэкономической деятельности и закупках из-за рубежа. Соединяю продуктовое мышление с управлением международными поставками.
          </p>
          <div className="reveal mt-10 flex flex-wrap gap-4" style={{ animationDelay: '0.55s' }}>
            <Button size="lg" onClick={() => scrollTo('experience')} className="rounded-full px-8">
              Смотреть опыт
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo('about')} className="rounded-full px-8 border-foreground/20">
              Обо мне
            </Button>
          </div>
        </div>
        <button
          onClick={() => scrollTo('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
          aria-label="Прокрутить вниз"
        >
          <Icon name="ChevronDown" size={28} />
        </button>
      </section>

      {/* About */}
      <section id="about" className="py-28 border-t border-border/60">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <span className="text-sm uppercase tracking-[0.25em] text-primary">01 — Обо мне</span>
          </div>
          <div className="md:col-span-8">
            <p className="font-display text-3xl sm:text-4xl leading-snug text-foreground/90">
              Помогаю компаниям запускать востребованные продукты и&nbsp;надёжно поставлять товар из&nbsp;любой точки мира.
            </p>
            <p className="mt-8 text-muted-foreground leading-relaxed max-w-2xl">
              За годы работы я объединила два мира: продуктовый менеджмент и внешнеэкономическую деятельность. Я знаю, как услышать клиента и превратить идею в продукт, и одновременно умею выстроить закупки из-за рубежа так, чтобы товар приходил вовремя, в нужном качестве и по выгодной цене.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { num: '8+', label: 'лет в продукте и ВЭД' },
                { num: '50+', label: 'поставщиков по миру' },
                { num: '∞', label: 'решённых задач' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-4xl sm:text-5xl text-primary font-semibold">{s.num}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-28 bg-secondary/40 border-t border-border/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-sm uppercase tracking-[0.25em] text-primary">02 — Навыки</span>
              <h2 className="font-display text-4xl sm:text-5xl mt-4">Что я умею</h2>
            </div>
            <p className="text-muted-foreground max-w-sm">Три направления, которые работают вместе и усиливают друг друга.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {SKILLS.map((s) => (
              <div
                key={s.title}
                className="group bg-background rounded-2xl p-8 border border-border/60 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon name={s.icon} size={24} />
                </div>
                <h3 className="font-display text-2xl mt-6 mb-4">{s.title}</h3>
                <ul className="space-y-3">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Icon name="Check" size={16} className="text-primary mt-0.5 shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-28 border-t border-border/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-sm uppercase tracking-[0.25em] text-primary">03 — Опыт</span>
            <h2 className="font-display text-4xl sm:text-5xl mt-4">Карьерный путь</h2>
          </div>
          <div className="space-y-0">
            {EXPERIENCE.map((e, i) => (
              <div
                key={i}
                className="group grid md:grid-cols-12 gap-4 md:gap-8 py-8 border-t border-border/60 hover:bg-secondary/30 transition-colors -mx-4 px-4 rounded-lg"
              >
                <div className="md:col-span-3 text-sm text-muted-foreground font-medium">{e.period}</div>
                <div className="md:col-span-9">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h3 className="font-display text-2xl">{e.role}</h3>
                    <span className="text-primary text-sm">· {e.company}</span>
                  </div>
                  <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl">{e.desc}</p>
                </div>
              </div>
            ))}
            <div className="border-t border-border/60" />
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-28 bg-secondary/40 border-t border-border/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-sm uppercase tracking-[0.25em] text-primary">04 — Образование</span>
            <h2 className="font-display text-4xl sm:text-5xl mt-4">Обучение</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {EDUCATION.map((ed, i) => (
              <div key={i} className="bg-background rounded-2xl p-8 border border-border/60">
                <div className="flex items-center gap-3 text-primary mb-4">
                  <Icon name="GraduationCap" size={22} />
                  <span className="text-sm font-medium">{ed.period}</span>
                </div>
                <h3 className="font-display text-2xl">{ed.title}</h3>
                <p className="text-primary text-sm mt-1">{ed.place}</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">{ed.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="py-24 border-t border-border/60 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <span className="text-sm uppercase tracking-[0.25em] text-primary">Связаться</span>
          <h2 className="font-display text-4xl sm:text-6xl mt-4 leading-tight">Открыта к&nbsp;удалённой работе</h2>
          <p className="mt-6 text-muted-foreground">Буду рада обсудить сотрудничество и&nbsp;ответить на&nbsp;ваши вопросы.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="rounded-full px-8">
              <Icon name="Mail" size={18} className="mr-2" />
              Написать письмо
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 border-foreground/20">
              <Icon name="Linkedin" size={18} className="mr-2" />
              LinkedIn
            </Button>
          </div>
          <p className="mt-16 text-xs text-muted-foreground/70">© 2026 · Портфолио продакт-менеджера</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
