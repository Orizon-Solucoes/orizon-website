
import Image from "next/image";
import Link from "next/link";

const diferenciais = [
  {
    numero: "01",
    titulo: "Soluções personalizadas",
    descricao:
      "Cada empresa possui necessidades próprias. Buscamos soluções adequadas à realidade e aos objetivos de cada negócio.",
    simbolo: "◇",
  },
  {
    numero: "02",
    titulo: "Tecnologia acessível",
    descricao:
      "Acreditamos que a tecnologia deve simplificar processos e estar ao alcance de empresas de diferentes portes.",
    simbolo: "⌘",
  },
  {
    numero: "03",
    titulo: "Compromisso técnico",
    descricao:
      "Trabalhamos com atenção aos detalhes, organização e responsabilidade na execução de cada serviço.",
    simbolo: "✓",
  },
  {
    numero: "04",
    titulo: "Proximidade com o cliente",
    descricao:
      "Valorizamos a comunicação e buscamos compreender cada necessidade antes de propor uma solução.",
    simbolo: "⌁",
  },
];

const valores = [
  {
    titulo: "Compromisso",
    descricao: "Responsabilidade em cada projeto e atendimento.",
  },
  {
    titulo: "Inovação",
    descricao: "Busca constante por novas possibilidades tecnológicas.",
  },
  {
    titulo: "Transparência",
    descricao: "Comunicação clara e relações de confiança.",
  },
  {
    titulo: "Eficiência",
    descricao: "Soluções práticas que facilitam o dia a dia.",
  },
];

export default function SobrePage() {
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
            <Link
              href="/sobre"
              className="text-[#80B4FF] transition hover:text-white"
            >
              Sobre nós
            </Link>
            <Link href="/#contato" className="transition hover:text-[#1677FF]">
              Contato
            </Link>
          </nav>

          <a
            href="https://wa.me/5521979293827"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 justify-self-end rounded-lg border border-[#1677FF]/60 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#1677FF] lg:inline-flex xl:px-5"
          >
            Fale conosco
          </a>

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

        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1677FF]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4C98FF]">
                Conheça a Orizon
              </span>
            </div>

            <h1 className="text-5xl font-semibold leading-[1.12] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Tecnologia com
              <br />
              propósito e
              <br />
              <span className="text-[#1677FF]">conectividade.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[#A1AABA] sm:text-lg">
              Somos a Orizon Soluções, uma iniciativa voltada à tecnologia,
              conectividade e desenvolvimento de soluções para empresas.
              Nosso objetivo é transformar necessidades em soluções práticas,
              eficientes e acessíveis.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/servicos"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#1677FF] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#0865E5]"
              >
                Conheça nossos serviços
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/#contato"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 px-7 py-4 text-sm font-medium text-white transition hover:border-[#1677FF] hover:bg-white/[0.04]"
              >
                Entre em contato
              </Link>
            </div>
          </div>

          <div className="mt-20 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-[#4C98FF]">
                Tecnologia
              </span>
              <p className="mt-2 text-sm text-[#A1AABA]">
                Soluções digitais e desenvolvimento.
              </p>
            </div>

            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-[#4C98FF]">
                Infraestrutura
              </span>
              <p className="mt-2 text-sm text-[#A1AABA]">
                Suporte, equipamentos e conectividade.
              </p>
            </div>

            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-[#4C98FF]">
                Relacionamento
              </span>
              <p className="mt-2 text-sm text-[#A1AABA]">
                Atenção às necessidades de cada cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa proposta */}
      <section className="relative overflow-hidden bg-[#0A1020] py-28">
        <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-[#1677FF]/[0.07] blur-[130px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1677FF]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4C98FF]">
                Nossa proposta
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Simplificar a
              <br />
              tecnologia para
              <br />
              <span className="text-[#1677FF]">impulsionar negócios.</span>
            </h2>

            <p className="mt-7 text-base leading-8 text-[#A1AABA]">
              Acreditamos que a tecnologia deve ser uma ferramenta para
              facilitar o trabalho, melhorar processos e criar novas
              oportunidades.
            </p>

            <p className="mt-4 text-base leading-8 text-[#A1AABA]">
              Por isso, reunimos diferentes áreas da tecnologia em um só lugar,
              oferecendo desde desenvolvimento de soluções digitais até
              suporte técnico e infraestrutura.
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.10] bg-[#111F35] p-8 sm:p-10">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4C98FF]">
              Nossa essência
            </span>

            <h3 className="mt-6 text-3xl font-semibold leading-snug text-white">
              Conectar tecnologia às necessidades reais das empresas.
            </h3>

            <div className="mt-8 h-px bg-white/[0.10]" />

            <p className="mt-7 text-sm leading-7 text-[#A1AABA]">
              Mais do que oferecer serviços, buscamos compreender os desafios
              de cada negócio e encontrar caminhos tecnológicos que façam
              sentido para sua realidade.
            </p>
          </div>
        </div>
      </section>

      {/* Missão e visão */}
      <section className="relative border-t border-white/[0.07] bg-[#080D18] py-28">
        <div className="pointer-events-none absolute -right-40 top-10 h-[400px] w-[400px] rounded-full bg-[#1677FF]/[0.06] blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-14 max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1677FF]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4C98FF]">
                Nossa direção
              </span>
            </div>

            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              O que nos
              <br />
              <span className="text-[#1677FF]">move.</span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-xl border border-white/[0.10] bg-[#111F35] p-8 sm:p-10">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4C98FF]">
                01 · Missão
              </span>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                Tornar a tecnologia mais acessível.
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#A1AABA]">
                Oferecer soluções tecnológicas práticas e eficientes,
                contribuindo para que empresas utilizem melhor seus recursos,
                equipamentos e sistemas.
              </p>
            </article>

            <article className="rounded-xl border border-white/[0.10] bg-[#111F35] p-8 sm:p-10">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4C98FF]">
                02 · Visão
              </span>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                Crescer junto com nossos clientes.
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#A1AABA]">
                Construir uma empresa reconhecida pela qualidade das soluções,
                pela confiança no relacionamento e pela capacidade de
                acompanhar a evolução tecnológica.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="relative border-t border-white/[0.07] bg-[#0A1020] py-28">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-14 max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1677FF]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4C98FF]">
                Por que a Orizon
              </span>
            </div>

            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              O que valorizamos
              <br />
              em cada <span className="text-[#1677FF]">projeto.</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[#A1AABA]">
              Nossa forma de trabalhar é guiada por princípios que colocam
              as necessidades do cliente e a qualidade técnica em primeiro
              lugar.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {diferenciais.map((item) => (
              <article
                key={item.numero}
                className="rounded-xl border border-white/[0.10] bg-[#111F35] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#1677FF]/50"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-widest text-[#4C98FF]">
                    {item.numero}
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#1677FF]/20 bg-[#1677FF]/10 text-xl text-[#80B4FF]">
                    {item.simbolo}
                  </span>
                </div>

                <h3 className="mt-8 text-lg font-semibold text-white">
                  {item.titulo}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#A1AABA]">
                  {item.descricao}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="relative border-t border-white/[0.07] bg-[#080D18] py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#1677FF]" />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4C98FF]">
                  Nossos valores
                </span>
              </div>

              <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                Princípios que
                <br />
                orientam nosso
                <br />
                <span className="text-[#1677FF]">trabalho.</span>
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {valores.map((valor, index) => (
                <div
                  key={valor.titulo}
                  className="rounded-xl border border-white/[0.10] bg-[#111F35] p-7 transition hover:border-[#1677FF]/40"
                >
                  <span className="text-xs font-semibold tracking-widest text-[#4C98FF]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {valor.titulo}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#A1AABA]">
                    {valor.descricao}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="relative overflow-hidden border-t border-white/[0.07] bg-[#0A1020] py-28">
        <div className="pointer-events-none absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-[#1677FF]/[0.08] blur-[130px]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#1677FF]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4C98FF]">
              Vamos construir juntos?
            </span>
            <span className="h-px w-10 bg-[#1677FF]" />
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Sua empresa também
            <br />
            pode evoluir com
            <br />
            <span className="text-[#1677FF]">a tecnologia.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#A1AABA]">
            Conheça nossas soluções e descubra como a Orizon pode ajudar
            sua empresa a conectar ideias, processos e tecnologia.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/servicos"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#1677FF] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#0865E5]"
            >
              Conhecer serviços
              <span aria-hidden="true">→</span>
            </Link>

            <a
              href="https://wa.me/5521979293827"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 px-8 py-4 text-sm font-medium text-white transition hover:border-[#1677FF] hover:bg-white/[0.04]"
            >
              Fale conosco
            </a>
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
              <Link href="/sobre" className="text-[#80B4FF] transition hover:text-white">
                Sobre nós
              </Link>
              <Link href="/#contato" className="transition hover:text-white">
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
