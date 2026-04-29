import Link from 'next/link';

export default function Navbar() {
  const links = [
    { name: 'Início', href: '/' },
    { name: 'Configurações', href: '/paginas/configuracao' },
    { name: 'Repositórios', href: '/paginas/repositorio' },
    { name: 'Envio', href: '/paginas/envio' },
    { name: 'Clone', href: '/paginas/clone' },
    { name: 'Deploy', href: '/paginas/deploy' },
     
  ];

  return (
    <nav className="w-full border-b border-white/10 bg-slate-900/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="text-lg font-bold text-emerald-400">GitHub Guide</span>
        <div className="flex gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-emerald-400/10 hover:text-emerald-300"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
