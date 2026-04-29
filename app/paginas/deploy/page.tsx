export default function Page() {
  const steps = [
    {
      title: '1 - Acessar o site da Vercel',
      description: 'Entre no painel oficial da Vercel para iniciar a publicação do seu projeto hospedado no GitHub.',
      code: 'https://vercel.com',
      note: 'Faça login com sua conta GitHub para importar repositórios automaticamente.',
    },
    {
      title: '2 - Fazer login com GitHub',
      description: 'Na tela inicial, escolha continuar com GitHub e autorize o acesso da Vercel à sua conta.',
      code: null,
      note: 'Isso permite listar seus repositórios disponíveis.',
    },
    {
      title: '3 - Importar projeto',
      description: 'Clique em New Project e selecione o repositório que contém o site que deseja publicar.',
      code: 'New Project -> Import Git Repository',
      note: 'Se o repositório não aparecer, revise as permissões do GitHub.',
    },
    {
      title: '4 - Configurar projeto',
      description: 'A Vercel detecta automaticamente projetos Next.js. Revise nome, branch principal e variáveis de ambiente se necessário.',
      code: 'Framework Preset: Next.js',
      note: 'Na maioria dos casos não é preciso alterar nada.',
    },
    {
      title: '5 - Publicar site',
      description: 'Clique no botão Deploy para iniciar o build e a publicação do projeto.',
      code: 'Deploy',
      note: 'Aguarde alguns minutos até o processo finalizar.',
    },
    {
      title: '6 - Acessar link gerado',
      description: 'Após a conclusão, a Vercel exibirá uma URL pública para seu site online.',
      code: 'https://seu-projeto.vercel.app',
      note: 'Você pode conectar domínio próprio depois.',
    },
    {
      title: '7 - Atualizações automáticas',
      description: 'Sempre que enviar alterações ao GitHub, a Vercel fará novo deploy automaticamente.',
      code: 'git push origin main',
      note: 'Ideal para manter o site sempre atualizado.',
    },
  ]

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-8 lg:py-24">
        <div className="mb-10">
          <span className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-300">Guia prático</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">Publicar Site na Vercel pelo GitHub</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">Siga este passo a passo para conectar seu repositório GitHub à Vercel e deixar seu site online em poucos minutos.</p>
        </div>

        <div className="grid gap-6">
          {steps.map((step, index) => (
            <article key={step.title} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-black/20 backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-400/15 text-sm font-bold text-emerald-300 ring-1 ring-emerald-400/20">{index + 1}</div>
                <div className="w-full">
                  <h2 className="text-xl font-semibold text-white md:text-2xl">{step.title}</h2>
                  <p className="mt-2 text-slate-300 leading-7">{step.description}</p>
                  {step.code && (
                    <div className="mt-5 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
                      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
                        <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">Ação</span>
                        <span className="text-xs text-slate-500">Siga este passo</span>
                      </div>
                      <pre className="overflow-x-auto p-4 text-sm leading-7 text-emerald-300"><code>{step.code}</code></pre>
                    </div>
                  )}
                  {step.note && <div className="mt-4 rounded-2xl border border-amber-400/20 bg-amber-400/10 px-4 py-3 text-sm leading-6 text-amber-100"><span className="font-semibold">Observação:</span> {step.note}</div>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}