export default function Page() {
  const steps = [
    {
      title: '1 - Clonar um projeto do GitHub',
      description:
        'Use o comando abaixo para copiar um projeto do GitHub para o seu computador em uma pasta definida por você.',
      code: 'git clone "https://github.com/seuusuario/seuprojeto.git" "meu-projeto"',
      note: 'Substitua a URL pelo link do repositório e informe o nome da pasta desejada.',
    },
    {
      title: '1.1 - Navegar até a pasta do projeto',
      description:
        'Após clonar, entre na pasta criada para começar a trabalhar no projeto.',
      code: 'cd /pasta_do_projeto',
      note: 'Use o nome correto da pasta criada no clone.',
    },
    {
      title: '1.2 - Ver conteúdo da pasta',
      description:
        'Confira os arquivos e pastas do projeto clonado.',
      code: 'ls',
      note: 'No Windows PowerShell também pode usar dir.',
    },
    {
      title: '2 - Instalar dependências do projeto',
      description:
        'Baixe todas as dependências necessárias para rodar o projeto localmente.',
      code: 'npm install',
      note: 'Esse processo pode levar alguns minutos.',
    },
    {
      title: '3 - Ver repositório conectado',
      description:
        'Veja qual repositório remoto está vinculado ao projeto atual.',
      code: 'git remote -v',
      note: 'Normalmente aparecerá origin apontando para o projeto original.',
    },
    {
      title: '3.1 - Remover repositório original',
      description:
        'Desconecte o projeto do repositório antigo para conectar ao seu GitHub.',
      code: 'git remote remove origin',
      note: 'Corrigido: o nome correto é origin.',
    },
    {
      title: '4 - Conectar ao seu repositório',
      description:
        'Adicione o seu próprio repositório GitHub como origem remota.',
      code: 'git remote add origin "https://github.com/seuusuario/meurepositorio.git"',
      note: 'Crie o repositório no GitHub antes deste passo.',
    },
    {
      title: '4.1 - Ir para branch main',
      description:
        'Renomeie ou defina a branch principal como main.',
      code: 'git branch -M main',
      note: 'Muito comum em projetos modernos.',
    },
    {
      title: '5 - Preparar arquivos para envio',
      description:
        'Adicione todos os arquivos modificados para o próximo commit.',
      code: 'git add .',
      note: 'O ponto indica todos os arquivos da pasta atual.',
    },
    {
      title: '5.1 - Criar commit',
      description:
        'Crie uma nova versão salva do projeto com uma mensagem descritiva.',
      code: 'git commit -m "versao 1"',
      note: 'Use mensagens claras para facilitar histórico.',
    },
    {
      title: '5.2 - Enviar para o GitHub',
      description:
        'Envie o projeto para o seu repositório remoto.',
      code: 'git push -u origin main',
      note: 'No primeiro envio, esse comando vincula branch local e remota.',
    },
  ]

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-8 lg:py-24">
        <div className="mb-10">
          <span className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-300">
            Guia prático
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Clonar Projeto e Enviar para Seu GitHub
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
            Aprenda a clonar um projeto existente, instalar dependências, trocar o repositório remoto e publicar no seu GitHub.
          </p>
        </div>

        <div className="grid gap-6">
          {steps.map((step, index) => (
            <article key={step.title} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-black/20 backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-400/15 text-sm font-bold text-emerald-300 ring-1 ring-emerald-400/20">
                  {index + 1}
                </div>
                <div className="w-full">
                  <h2 className="text-xl font-semibold text-white md:text-2xl">{step.title}</h2>
                  <p className="mt-2 text-slate-300 leading-7">{step.description}</p>
                  {step.code && (
                    <div className="mt-5 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
                      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
                        <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">Terminal</span>
                        <span className="text-xs text-slate-500">Copie e execute</span>
                      </div>
                      <pre className="overflow-x-auto p-4 text-sm leading-7 text-emerald-300"><code>{step.code}</code></pre><div className="border-t border-slate-800 px-4 py-3 text-xs leading-6 text-slate-400">{step.title.includes('Clonar') && 'git clone = copiar projeto | URL = link do GitHub | meu-projeto = nome da pasta'}{step.title.includes('Navegar') && 'cd = entrar em pasta | nome informado = pasta do projeto'}{step.title.includes('Ver conteúdo') && 'ls = listar arquivos'}{step.title.includes('Instalar dependências') && 'npm install = instala bibliotecas'}{step.title.includes('Ver repositório') && 'git remote -v = mostra conexões remotas'}{step.title.includes('Remover repositório') && 'git remote remove origin = remove repositório remoto'}{step.title.includes('Conectar ao seu repositório') && 'git remote add origin = conecta ao seu GitHub | URL = link do seu repositório'}{step.title.includes('branch main') && 'git branch -M main = define branch principal'}{step.title.includes('Preparar arquivos') && 'git add . = adiciona todos arquivos'}{step.title.includes('Criar commit') && 'git commit -m = cria versão | texto = nome do commit'}{step.title.includes('Enviar para o GitHub') && 'git push -u origin main = envia arquivos para GitHub'}</div>
                    </div>
                  )}
                  {step.note && (
                    <div className="mt-4 rounded-2xl border border-amber-400/20 bg-amber-400/10 px-4 py-3 text-sm leading-6 text-amber-100">
                      <span className="font-semibold">Observação:</span> {step.note}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
