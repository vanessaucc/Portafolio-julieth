const links = [
  { href: 'https://github.com/vanessaucc',                        icon: 'fab fa-github',     title: 'GitHub' },
  { href: 'https://www.linkedin.com/in/vanessa-mena-a9a642324/', icon: 'fab fa-linkedin-in', title: 'LinkedIn' },
  { href: '#contact',                                             icon: 'fas fa-envelope',   title: 'Contact' },
  { href: '#home',                                                icon: 'fas fa-arrow-up',   title: 'Back to top' },
]

export default function SocialFloat() {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 z-[99] max-[900px]:hidden">
      {links.map(l => (
        <a
          key={l.title}
          href={l.href}
          title={l.title}
          {...(l.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="w-10 h-10 rounded-full bg-surface-card border-2 border-brand-500/25 flex items-center justify-center text-brand-600 dark:text-brand-500 text-[0.85rem] no-underline transition-all duration-300 shadow-card hover:bg-brand-500 hover:border-brand-500 hover:text-white hover:scale-110 hover:shadow-glow-lg"
        >
          <i className={l.icon} />
        </a>
      ))}
    </div>
  )
}
