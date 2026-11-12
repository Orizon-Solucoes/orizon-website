
import Image from "next/image";
import Link from "next/link";

type Servico = {
  numero: string;
  titulo: string;
  categoria: string;
  descricao: string;
  detalhes: string;
  itens: string[];
};

const servicos: Servico[] = [
  {
    numero: "01",
    titulo: "Programação e desenvolvimento",
    categoria: "Desenvolvimento",
    descricao:
      "Criamos soluções digitais personalizadas para simplificar processos, organizar informações e atender às necessidades específicas de cada negócio.",
    detalhes:
      "Desenvolvemos ferramentas e sistemas sob medida, buscando transformar necessidades operacionais em soluções práticas e eficientes.",
    itens: [
      "Desenvolvimento de sistemas personalizados",
      "Criação de aplicativos e ferramentas digitais",
      "Automatização de tarefas e processos",
      "Manutenção e evolução de soluções existentes",
    ],
  },
  {
    numero: "02",
    titulo: "Criação de websites",
    categoria: "Presença digital",
    descricao:
      "Desenvolvemos websites modernos, responsivos e profissionais para fortalecer a presença digital da sua empresa.",
    detalhes:
      "Criamos sites que apresentam sua empresa de maneira clara e profissional, proporcionando uma boa experiência aos visitantes em computadores e dispositivos móveis.",
    itens: [
      "Sites institucionais e comerciais",
      "Layout personalizado e responsivo",
      "Apresentação de serviços e informações",
      "Integração com canais de contato",
    ],
  },
  {
    numero: "03",
    titulo: "Câmeras e CFTV",
    categoria: "Monitoramento",
    descricao:
      "Implantamos, configuramos e realizamos manutenção em sistemas de monitoramento para auxiliar na segurança do seu ambiente.",
    detalhes:
      "Trabalhamos com equipamentos e sistemas de CFTV, buscando oferecer monitoramento adequado às necessidades de cada estabelecimento.",
    itens: [
      "Instalação e configuração de câmeras",
      "Configuração de DVR e NVR",
      "Sistemas IP e analógicos",
      "Manutenção e diagnóstico de equipamentos",
      "Configuração de acesso remoto",
    ],
  },
  {
    numero: "04",
    titulo: "Manutenção de computadores",
    categoria: "Suporte técnico",
    descricao:
      "Realizamos diagnóstico, manutenção e melhorias em computadores e periféricos para manter seus equipamentos funcionando corretamente.",
    detalhes:
      "Oferecemos suporte técnico para identificar problemas, recuperar o desempenho dos equipamentos e reduzir interrupções nas atividades da empresa.",
    itens: [
      "Diagnóstico de problemas de hardware e software",
      "Manutenção preventiva e corretiva",
      "Limpeza interna e organização dos componentes",
      "Instalação e configuração de sistemas",
      "Upgrades de memória, armazenamento e componentes",
    ],
  },
  {
    numero: "05",
    titulo: "Infraestrutura e redes",
    categoria: "Conectividade",
    descricao:
      "Planejamos e organizamos infraestruturas de rede para proporcionar conectividade, estabilidade e melhor comunicação entre os dispositivos.",
    detalhes:
      "Estruturamos ambientes de rede considerando as necessidades do negócio, a distribuição dos equipamentos e a qualidade da conexão.",
    itens: [
      "Implantação e organização de redes locais",
      "Cabeamento estruturado e conectores RJ-45",
      "Configuração de roteadores e switches",
      "Instalação e configuração de pontos de acesso Wi-Fi",
      "Diagnóstico de problemas de conectividade",
    ],
  },
  {
    numero: "06",
    titulo: "Instalação de equipamentos",
    categoria: "Equipamentos",
    descricao:
      "Realizamos instalação, configuração e integração de equipamentos tecnológicos para preparar o ambiente de trabalho da sua empresa.",
    detalhes:
      "Ajudamos sua empresa a colocar novos equipamentos em funcionamento, garantindo configurações adequadas e integração com a infraestrutura existente.",
    itens: [
      "Instalação de computadores e notebooks",
      "Configuração de impressoras e periféricos",
      "Instalação de roteadores e dispositivos de rede",
      "Configuração de softwares e drivers",
      "Integração de equipamentos ao ambiente de TI",
    ],
  },
];

const whatsapp =
  "https://wa.me/5521979293827?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Orizon%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

export default function ServicosPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080D18]">
      {/* Cabeçalho */}
      <header className="relative z-10 border-b border-white/[0.07]">
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-6 lg:px-10">
          <Link href="/" className="flex w-fit shrink-0 items-center justify-self-start">
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
            <Link
              href="/servicos"
              className="text-[#80B4FF] transition hover:text-white"
            >
              Serviços
            </Link>
            <Link
              href="/#sobre"
              className="transition hover:text-[#1677FF]"
            >
              Sobre nós
            </Link>
            <Link
              href="/#contato"
              className="transition hover:text-[#1677FF]"
            >
              Contato
            </Link>
          </nav>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 justify-self-end rounded-lg border border-[#1677FF]/60 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#1677FF] lg:inline-flex xl:px-5"
          >
            Solicitar orçamento
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

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1677FF]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4C98FF]">
                Nossas soluções
              </span>
            </div>

            <h1 className="text-5xl font-semibold leading-[1.12] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Tecnologia para
              <br />
              transformar
              <br />
              <span className="text-[#1677FF]">seu negócio.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[#A1AABA] sm:text-lg">
              Conheça nossas soluções em desenvolvimento, suporte técnico e
              infraestrutura de TI. Trabalhamos para tornar a tecnologia mais
              acessível, eficiente e adequada à realidade da sua empresa.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#lista-servicos"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#1677FF] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#0865E5]"
              >
                Explorar serviços
                <span aria-hidden="true">↓</span>
              </a>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 px-7 py-4 text-sm font-medium text-white transition hover:border-[#1677FF] hover:bg-white/[0.04]"
              >
                Solicitar orçamento
              </a>
            </div>
          </div>

          <div className="mt-20 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
            <div>
              <span className="text-3xl font-semibold text-white">01</span>
              <p className="mt-2 text-sm text-[#A1AABA]">
                Soluções digitais
              </p>
            </div>
            <div>
              <span className="text-3xl font-semibold text-white">02</span>
              <p className="mt-2 text-sm text-[#A1AABA]">
                Suporte e manutenção
              </p>
            </div>
            <div>
              <span className="text-3xl font-semibold text-white">03</span>
              <p className="mt-2 text-sm text-[#A1AABA]">
                Infraestrutura e conectividade
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lista de serviços */}
      <section
        id="lista-servicos"
        className="relative bg-[#0A1020] py-24 lg:py-28"
      >
        <div className="pointer-events-none absolute -left-40 top-40 h-[400px] w-[400px] rounded-full bg-[#1677FF]/[0.06] blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16 max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1677FF]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4C98FF]">
                O que oferecemos
              </span>
            </div>

            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Soluções completas
              <br />
              para sua <span className="text-[#1677FF]">empresa.</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[#A1AABA]">
              Cada negócio possui necessidades diferentes. Por isso,
              trabalhamos com diferentes áreas da tecnologia para oferecer
              soluções alinhadas aos seus objetivos.
            </p>
          </div>

          <div className="space-y-5">
            {servicos.map((servico) => (
              <article
                key={servico.numero}
                id={`servico-${servico.numero}`}
                className="group rounded-xl border border-white/[0.10] bg-[#111F35] p-7 transition duration-300 hover:border-[#1677FF]/40 sm:p-9"
              >
                <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
                  <div>
                    <div className="mb-6 flex flex-wrap items-center gap-4">
                      <span className="text-sm font-semibold tracking-widest text-[#4C98FF]">
                        {servico.numero}
                      </span>
                      <span className="h-px w-8 bg-[#1677FF]/60" />
                      <span className="rounded-full border border-[#1677FF]/20 bg-[#1677FF]/[0.08] px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-[#80B4FF]">
                        {servico.categoria}
                      </span>
                    </div>

                    <h3 className="text-2xl font-semibold leading-tight text-white transition group-hover:text-[#80B4FF] sm:text-3xl">
                      {servico.titulo}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-[#A1AABA] sm:text-base">
                      {servico.descricao}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-[#8493A8]">
                      {servico.detalhes}
                    </p>

                    <a
                      href={`${whatsapp}%20Tenho%20interesse%20em%20${encodeURIComponent(servico.titulo)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#80B4FF] transition hover:text-white"
                    >
                      Tenho interesse
                      <span
                        aria-hidden="true"
                        className="transition group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </a>
                  </div>

                  <div className="rounded-lg border border-white/[0.07] bg-[#0A1426]/70 p-6 sm:p-8">
                    <h4 className="text-sm font-semibold text-white">
                      O que está incluído
                    </h4>

                    <ul className="mt-6 space-y-4">
                      {servico.itens.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-6 text-[#A1AABA]"
                        >
                          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#1677FF]/30 bg-[#1677FF]/10 text-xs text-[#80B4FF]">
                            ✓
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Chamada para contato */}
      <section className="relative overflow-hidden border-t border-white/[0.07] bg-[#080D18] py-24">
        <div className="pointer-events-none absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-[#1677FF]/[0.08] blur-[130px]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#1677FF]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4C98FF]">
              Vamos conversar?
            </span>
            <span className="h-px w-10 bg-[#1677FF]" />
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Sua empresa precisa
            <br />
            de uma solução em <span className="text-[#1677FF]">tecnologia?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#A1AABA]">
            Conte para nós o que sua empresa precisa. Vamos entender sua
            necessidade e encontrar uma solução adequada para o seu negócio.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#1677FF] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#0865E5]"
            >
              Solicitar orçamento
              <span aria-hidden="true">→</span>
            </a>

            <Link
              href="/#contato"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 px-8 py-4 text-sm font-medium text-white transition hover:border-[#1677FF] hover:bg-white/[0.04]"
            >
              Outros canais de contato
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
              <Link
                href="/servicos"
                className="transition hover:text-white"
              >
                Serviços
              </Link>
              <Link
                href="/#sobre"
                className="transition hover:text-white"
              >
                Sobre nós
              </Link>
              <Link
                href="/#contato"
                className="transition hover:text-white"
              >
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
