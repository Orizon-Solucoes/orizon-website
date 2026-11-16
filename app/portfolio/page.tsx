
import Image from "next/image";
import Link from "next/link";

const projetos = [
  {
    numero: "01",
    categoria: "Sistema web",
    titulo: "Chromebook Manager",
    descricao:
      "Sistema para gerenciamento de equipamentos de TI, permitindo centralizar o inventário, acompanhar manutenções e consultar informações e custos dos equipamentos.",
    tecnologias: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MySQL"],
    github: "https://github.com/Orizon-Solucoes/chromebook-manager",
  },
  {
    numero: "02",
    categoria: "Sistema desktop",
    titulo: "Gestão Oliveira",
    descricao:
      "Sistema desktop desenvolvido para auxiliar no gerenciamento comercial, reunindo recursos de controle de vendas, estoque e movimentações de caixa.",
    tecnologias: ["Electron", "React", "TypeScript", "Vite"],
    github: "https://github.com/Orizon-Solucoes/gestao-oliveira",
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080D18]">
      {/* Cabeçalho */}
      <header className="relative z-10 border-b border-white/[0.07]">
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-6 lg:px-10">
          <Link
            href="/"
            className="flex w-fit shrink-0 items-center justify-self-start"
          >
            <Image
              src="/logo-orizon-solucoes.png"
              alt="Orizon Soluções"
              width={240}
              height={80}
              priority
              className="h-auto w-[150px] object-contain sm:w-[170px] lg:w-[190px]"
            />
          </Link>

          <nav className="hidden items-center justify-self-center gap-5 whitespace-nowrap text-xs text-gray-300 lg:flex xl:gap-8 xl:text-sm">
            <Link href="/" className="transition hover:text-[#1677FF]">
              Início
            </Link>
            <Link href="/servicos" className="transition hover:text-[#1677FF]">
              Serviços
            </Link>
            <Link href="/sobre" className="transition hover:text-[#1677FF]">
              Sobre nós
            </Link>
            <Link
              href="/portfolio"
              className="text-[#80B4FF] transition hover:text-white"
            >
              Portfólio
            </Link>
            <Link href="/contato" className="transition hover:text-[#1677FF]">
              Contato
            </Link>
          </nav>

          <Link
            href="/contato"
            className="hidden shrink-0 justify-self-end rounded-lg border border-[#1677FF]/60 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#1677FF] lg:inline-flex xl:px-5"
          >
            Fale conosco
          </Link>

          <Link
            href="/"
            className="justify-self-end text-right text-sm font-medium text-white transition hover:text-[#80B4FF] lg:hidden"
          >
            Voltar →
          </Link>
        </div>
      </header>

      {/* Apresentação */}
      <section className="relative border-b border-white/[0.07]">
        <div className="pointer-events-none absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-[#1677FF]/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-32">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1677FF]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4C98FF]">
                Nossos projetos
              </span>
            </div>

            <h1 className="text-5xl font-semibold leading-[1.12] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Ideias que se
              <br />
              transformam em
              <br />
              <span className="text-[#1677FF]">soluções.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[#A1AABA] sm:text-lg">
              Conheça alguns dos projetos desenvolvidos pela Orizon.
              Sistemas e soluções tecnológicas criados para atender
              necessidades reais e facilitar processos.
            </p>
          </div>

          <div className="mt-20 flex flex-wrap items-center gap-x-12 gap-y-5 border-t border-white/10 pt-8">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
              Desenvolvimento
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
              Tecnologia
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
              Soluções digitais
            </span>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section className="relative overflow-hidden bg-[#0A1020] py-28">
        <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-[#1677FF]/[0.07] blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-14 max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1677FF]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4C98FF]">
                Projetos selecionados
              </span>
            </div>

            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Conheça nosso
              <br />
              <span className="text-[#1677FF]">trabalho.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#A1AABA]">
              Cada projeto representa uma aplicação prática da tecnologia
              para organizar processos, resolver problemas e criar novas
              possibilidades.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {projetos.map((projeto) => (
              <article
                key={projeto.numero}
                className="group overflow-hidden rounded-xl border border-white/[0.10] bg-[#111F35] transition duration-300 hover:-translate-y-1 hover:border-[#1677FF]/50"
              >
                {/* Espaço reservado para a interface */}
                <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden border-b border-white/[0.07] bg-[#142642]">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(22,119,255,0.13),transparent_70%)]" />

                  <div className="relative flex flex-col items-center gap-4 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-[#1677FF]/30 bg-[#1677FF]/10">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-8 w-8 text-[#80B4FF]"
                        aria-hidden="true"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="13"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M8 21h8M12 17v4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>

                    <div>
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#80B4FF]">
                        Interface do projeto
                      </span>
                      <p className="mt-2 text-sm text-[#A1AABA]">
                        Imagens em breve
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-7 sm:p-9">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4C98FF]">
                      {projeto.categoria}
                    </span>
                    <span className="text-xs font-medium tracking-widest text-gray-500">
                      {projeto.numero}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold text-white transition group-hover:text-[#80B4FF]">
                    {projeto.titulo}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#A1AABA]">
                    {projeto.descricao}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {projeto.tecnologias.map((tecnologia) => (
                      <span
                        key={tecnologia}
                        className="rounded-md border border-white/[0.10] bg-[#0A1020] px-3 py-1.5 text-xs text-gray-300"
                      >
                        {tecnologia}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 border-t border-white/[0.08] pt-6">
                    <a
                      href={projeto.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-sm font-medium text-white transition hover:text-[#80B4FF]"
                    >
                      Ver projeto no GitHub
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="relative overflow-hidden border-t border-white/[0.07] bg-[#080D18] py-28">
        <div className="pointer-events-none absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-[#1677FF]/[0.08] blur-[130px]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#1677FF]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4C98FF]">
              Seu projeto começa aqui
            </span>
            <span className="h-px w-10 bg-[#1677FF]" />
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Vamos desenvolver
            <br />
            sua próxima
            <br />
            <span className="text-[#1677FF]">solução?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#A1AABA]">
            Tem uma ideia ou precisa de uma solução tecnológica para sua
            empresa? Entre em contato e vamos conversar sobre seu projeto.
          </p>

          <div className="mt-10">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#1677FF] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#0865E5]"
            >
              Fale conosco
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="border-t border-white/[0.07] bg-[#080D18]">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo-orizon-solucoes.png"
                alt="Orizon Soluções"
                width={220}
                height={75}
                className="h-auto w-[150px] object-contain"
              />
            </Link>

            <nav className="flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm text-[#A1AABA]">
              <Link href="/" className="transition hover:text-white">
                Início
              </Link>
              <Link href="/servicos" className="transition hover:text-white">
                Serviços
              </Link>
              <Link href="/sobre" className="transition hover:text-white">
                Sobre nós
              </Link>
              <Link
                href="/portfolio"
                className="text-[#80B4FF] transition hover:text-white"
              >
                Portfólio
              </Link>
              <Link href="/contato" className="transition hover:text-white">
                Contato
              </Link>
            </nav>
          </div>

          <div className="mt-10 border-t border-white/[0.07] pt-6 text-center text-xs text-gray-500 sm:text-left">
            © 2026 Orizon Soluções. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}
