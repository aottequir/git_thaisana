export default function GithubGuidePage() {
  const commands = [
    {
      step: '1',
      title: 'Empacotar os arquivos para envio',
      command: 'git add .',
      description:
        'Adiciona todas as alterações do projeto para a área de preparação antes do commit.',
    },
    {
      step: '2',
      title: 'Criar a versão do commit',
      command: 'git commit -m "versão do commit"',
      description:
        'Cria um commit com uma mensagem que descreve o que foi alterado no projeto.',
    },
    {
      step: '3',
      title: 'Enviar os arquivos para o GitHub',
      command: 'git push -u origin main',
      extra: 'ou git push -u origin master',
      description:
        'Envia os commits da sua máquina para o repositório remoto no GitHub.',
    },
    {
      step: '3.1',
      title: 'Verificar em qual branch você está',
      command: 'git branch',
      description:
        'Mostra a branch atual do projeto e também lista as outras branches disponíveis localmente.',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12">
        <div className="mb-12">
          <span className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 text-sm font-medium text-emerald-300">
            Guia rápido de GitHub
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Comandos essenciais para enviar seu projeto ao GitHub
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            Uma página simples e visual para consultar os principais comandos usados no fluxo de envio de arquivos para o repositório.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {commands.map((item) => (
            <article
              key={item.step}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-emerald-400 px-3 py-1 text-sm font-bold text-slate-950">
                  Passo {item.step}
                </span>
              </div>

              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>

              <div className="mt-5 rounded-2xl border border-emerald-400/20 bg-slate-900 p-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                  Comando
                </p>
                <code className="block overflow-x-auto text-sm text-emerald-200 md:text-base">
                  {item.command}
                </code>
                {item.extra && (
                  <code className="mt-2 block overflow-x-auto text-sm text-slate-400 md:text-base">
                    {item.extra}
                  </code>
                )}
              </div>
            </article>
          ))}
        </div>

        <section className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 p-8">
          <h3 className="text-2xl font-bold">Fluxo recomendado</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl bg-black/20 p-4">
              <p className="text-sm font-semibold text-emerald-300">1. Preparar</p>
              <p className="mt-2 text-sm text-slate-200">Use <code>git add .</code> para selecionar os arquivos alterados.</p>
            </div>
            <div className="rounded-2xl bg-black/20 p-4">
              <p className="text-sm font-semibold text-emerald-300">2. Salvar versão</p>
              <p className="mt-2 text-sm text-slate-200">Crie um commit com uma mensagem clara e objetiva.</p>
            </div>
            <div className="rounded-2xl bg-black/20 p-4">
              <p className="text-sm font-semibold text-emerald-300">3. Enviar</p>
              <p className="mt-2 text-sm text-slate-200">Faça o push para a branch principal do repositório.</p>
            </div>
            <div className="rounded-2xl bg-black/20 p-4">
              <p className="text-sm font-semibold text-emerald-300">4. Conferir</p>
              <p className="mt-2 text-sm text-slate-200">Veja a branch atual com <code>git branch</code>.</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
