
import Image from "next/image";
import Link from "next/link";

type Servico = {
  numero: string;
  titulo: string;
  descricao: string;
  categoria: string;
  ilustracao:
    | "programacao"
    | "website"
    | "camera"
    | "manutencao"
    | "redes"
    | "equipamentos";
};

const servicos: Servico[] = [
  {
    numero: "01",
    titulo: "Programação e desenvolvimento",
    descricao:
      "Desenvolvimento de aplicativos, sistemas e soluções personalizadas para facilitar processos e atender às necessidades da sua empresa.",
    categoria: "Desenvolvimento",
    ilustracao: "programacao",
  },
  {
    numero: "02",
    titulo: "Criação de websites",
    descricao:
      "Sites institucionais e comerciais modernos, responsivos e desenvolvidos para fortalecer a presença digital da sua empresa.",
    categoria: "Websites",
    ilustracao: "website",
  },
  {
    numero: "03",
    titulo: "Câmeras e CFTV",
    descricao:
      "Instalação, configuração e manutenção de sistemas de monitoramento, câmeras IP e equipamentos de segurança.",
    categoria: "Monitoramento",
    ilustracao: "camera",
  },
  {
    numero: "04",
    titulo: "Manutenção de computadores",
    descricao:
      "Diagnóstico, manutenção preventiva e corretiva, upgrades e configuração de computadores e periféricos.",
    categoria: "Suporte técnico",
    ilustracao: "manutencao",
  },
  {
    numero: "05",
    titulo: "Infraestrutura e redes",
    descricao:
      "Implantação e organização de redes, cabeamento estruturado, roteadores, switches e pontos de acesso Wi-Fi.",
    categoria: "Conectividade",
    ilustracao: "redes",
  },
  {
    numero: "06",
    titulo: "Instalação de equipamentos",
    descricao:
      "Instalação e configuração de computadores, impressoras, roteadores e outros dispositivos para sua empresa.",
    categoria: "Equipamentos",
    ilustracao: "equipamentos",
  },
];

function IlustracaoServico({
  tipo,
}: {
  tipo: Servico["ilustracao"];
}) {
  const prefixo = `servico-${tipo}`;

  return (
    <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden border-b border-white/[0.07] bg-[#142642]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(22,119,255,0.13),transparent_70%)]" />

      <svg
        viewBox="0 0 480 270"
        className="relative h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`${prefixo}-metal`} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#344967" />
            <stop offset="1" stopColor="#14243C" />
          </linearGradient>

          <linearGradient id={`${prefixo}-blue`} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#56A0FF" />
            <stop offset="1" stopColor="#1261D9" />
          </linearGradient>

          <linearGradient id={`${prefixo}-screen`} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#152C4C" />
            <stop offset="1" stopColor="#0A1426" />
          </linearGradient>
        </defs>

        <circle cx="240" cy="135" r="100" stroke="#1677FF" strokeOpacity=".10" />
        <circle cx="240" cy="135" r="76" stroke="#1677FF" strokeOpacity=".08" strokeDasharray="4 8" />
        <path d="M65 224H415" stroke="#314765" strokeOpacity=".45" />

        {tipo === "programacao" && (
          <>
            <rect x="112" y="49" width="256" height="157" rx="12" fill={`url(#${prefixo}-metal)`} stroke="#486386" />
            <rect x="120" y="57" width="240" height="141" rx="7" fill={`url(#${prefixo}-screen)`} />
            <path d="M120 81H360" stroke="#344D70" />
            <circle cx="134" cy="69" r="3" fill="#1677FF" />
            <circle cx="146" cy="69" r="3" fill="#71849F" />
            <circle cx="158" cy="69" r="3" fill="#71849F" />
            <path d="M143 105L160 118L143 131" stroke="#56A0FF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M173 132H230" stroke="#8DBBFF" strokeWidth="4" strokeLinecap="round" />
            <path d="M173 151H264" stroke="#4D78AB" strokeWidth="4" strokeLinecap="round" />
            <path d="M173 169H245" stroke="#4D78AB" strokeWidth="4" strokeLinecap="round" />
            <path d="M277 104H333" stroke="#1677FF" strokeWidth="5" strokeLinecap="round" />
            <path d="M277 123H318" stroke="#4D78AB" strokeWidth="5" strokeLinecap="round" />
            <path d="M277 142H328" stroke="#4D78AB" strokeWidth="5" strokeLinecap="round" />
            <path d="M277 161H310" stroke="#4D78AB" strokeWidth="5" strokeLinecap="round" />
            <path d="M240 206V222M190 222H290" stroke="#54708F" strokeWidth="5" strokeLinecap="round" />
            <rect x="324" y="150" width="49" height="83" rx="9" fill="#1B3455" stroke="#5C8BC6" strokeWidth="2" />
            <rect x="330" y="160" width="37" height="61" rx="4" fill="#0B172A" />
            <rect x="337" y="169" width="23" height="5" rx="2" fill="#1677FF" />
            <rect x="337" y="180" width="17" height="4" rx="2" fill="#5B8DC8" />
            <rect x="337" y="190" width="23" height="4" rx="2" fill="#5B8DC8" />
            <circle cx="348" cy="227" r="2" fill="#56A0FF" />
          </>
        )}

        {tipo === "website" && (
          <>
            <rect x="91" y="47" width="298" height="169" rx="10" fill={`url(#${prefixo}-metal)`} stroke="#486386" />
            <rect x="99" y="55" width="282" height="153" rx="5" fill={`url(#${prefixo}-screen)`} />
            <path d="M99 80H381" stroke="#344D70" />
            <circle cx="112" cy="67" r="3" fill="#1677FF" />
            <circle cx="124" cy="67" r="3" fill="#71849F" />
            <circle cx="136" cy="67" r="3" fill="#71849F" />
            <rect x="116" y="94" width="116" height="8" rx="4" fill="#56A0FF" />
            <rect x="116" y="110" width="100" height="5" rx="2" fill="#5B7597" />
            <rect x="116" y="121" width="85" height="5" rx="2" fill="#5B7597" />
            <rect x="116" y="139" width="67" height="20" rx="5" fill="#1677FF" />
            <rect x="247" y="93" width="116" height="87" rx="6" fill="#1B3556" />
            <rect x="256" y="102" width="98" height="48" rx="4" fill="#244B78" />
            <path d="M265 138L286 117L302 132L320 112L345 139" stroke="#56A0FF" strokeWidth="3" strokeLinejoin="round" />
            <rect x="256" y="158" width="53" height="5" rx="2" fill="#6E91BB" />
            <rect x="256" y="168" width="76" height="4" rx="2" fill="#49698F" />
            <path d="M240 216V230M184 230H296" stroke="#54708F" strokeWidth="5" strokeLinecap="round" />
          </>
        )}

        {tipo === "camera" && (
          <>
            <path d="M112 74H210L230 94" stroke="#54708F" strokeWidth="7" strokeLinecap="round" />
            <path d="M210 94L197 111" stroke="#54708F" strokeWidth="7" strokeLinecap="round" />
            <path d="M195 93L224 112L197 151L168 132Z" fill={`url(#${prefixo}-metal)`} stroke="#6685A9" strokeWidth="2" />
            <path d="M218 107L279 119L267 164L206 151Z" fill={`url(#${prefixo}-blue)`} stroke="#79B4FF" strokeWidth="2" />
            <path d="M278 119L315 126L304 165L267 164Z" fill="#1D3B60" stroke="#79B4FF" strokeWidth="2" />
            <ellipse cx="310" cy="145" rx="15" ry="19" fill="#0B172A" stroke="#75B4FF" strokeWidth="3" />
            <ellipse cx="313" cy="145" rx="7" ry="10" fill="#1677FF" />
            <circle cx="315" cy="142" r="3" fill="#B9DBFF" />
            <path d="M334 123Q360 144 334 166" stroke="#56A0FF" strokeWidth="3" strokeLinecap="round" />
            <path d="M348 109Q391 144 348 180" stroke="#56A0FF" strokeOpacity=".55" strokeWidth="3" strokeLinecap="round" />
            <rect x="116" y="170" width="111" height="60" rx="7" fill={`url(#${prefixo}-metal)`} stroke="#486386" />
            <rect x="125" y="179" width="93" height="43" rx="3" fill="#0A1729" />
            <rect x="133" y="187" width="36" height="26" rx="3" fill="#1C426B" />
            <rect x="174" y="187" width="36" height="26" rx="3" fill="#1C426B" />
            <circle cx="190" cy="202" r="4" fill="#56A0FF" />
            <circle cx="149" cy="200" r="4" fill="#56A0FF" />
          </>
        )}

        {tipo === "manutencao" && (
          <>
            <rect x="106" y="70" width="181" height="126" rx="9" fill={`url(#${prefixo}-metal)`} stroke="#5A789D" strokeWidth="2" />
            <rect x="116" y="80" width="161" height="105" rx="4" fill="#0A1729" />
            <rect x="127" y="91" width="139" height="83" rx="3" fill="#142A46" />
            <path d="M139 105H252M139 117H219M139 129H242" stroke="#4D78AB" strokeWidth="4" strokeLinecap="round" />
            <rect x="153" y="142" width="83" height="20" rx="4" fill="#1D3C62" />
            <circle cx="194" cy="152" r="5" fill="#56A0FF" />
            <path d="M196 196V213M157 213H235" stroke="#54708F" strokeWidth="5" strokeLinecap="round" />
            <path d="M319 74L342 97L301 138L278 115Z" fill={`url(#${prefixo}-blue)`} stroke="#82B8FF" strokeWidth="2" />
            <path d="M278 115L269 139L292 131" fill="#A9CCF5" />
            <path d="M338 70L350 58L365 73L353 85" stroke="#8DBBFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M304 149L340 185" stroke="#5A789D" strokeWidth="11" strokeLinecap="round" />
            <path d="M340 185L356 201" stroke="#A8C9EE" strokeWidth="11" strokeLinecap="round" />
            <circle cx="353" cy="111" r="23" stroke="#1677FF" strokeWidth="2" strokeOpacity=".8" />
          </>
        )}

        {tipo === "redes" && (
          <>
            <rect x="113" y="74" width="254" height="65" rx="9" fill={`url(#${prefixo}-metal)`} stroke="#5A789D" strokeWidth="2" />
            <rect x="125" y="86" width="230" height="42" rx="4" fill="#0B172A" />
            {Array.from({ length: 8 }).map((_, i) => (
              <g key={i}>
                <rect x={137 + i * 26} y="94" width="17" height="19" rx="2" fill="#1E3E65" stroke="#547BA9" />
                <circle cx={145 + i * 26} cy="119" r="2" fill="#56A0FF" />
              </g>
            ))}
            <rect x="164" y="165" width="152" height="46" rx="8" fill="#172F4D" stroke="#547BA9" strokeWidth="2" />
            <path d="M183 179H297" stroke="#5D82AD" strokeWidth="4" strokeLinecap="round" />
            <path d="M183 192H253" stroke="#1677FF" strokeWidth="4" strokeLinecap="round" />
            <circle cx="287" cy="192" r="5" fill="#56A0FF" />
            <path d="M240 139V164M190 139V165M290 139V165" stroke="#56A0FF" strokeWidth="2" strokeDasharray="4 5" />
            <path d="M105 178H143V165H164M375 178H337V165H316" stroke="#1677FF" strokeWidth="2" strokeOpacity=".7" />
            <circle cx="105" cy="178" r="5" fill="#56A0FF" />
            <circle cx="375" cy="178" r="5" fill="#56A0FF" />
          </>
        )}

        {tipo === "equipamentos" && (
          <>
            <rect x="97" y="66" width="174" height="120" rx="8" fill={`url(#${prefixo}-metal)`} stroke="#5A789D" strokeWidth="2" />
            <rect x="107" y="76" width="154" height="100" rx="4" fill={`url(#${prefixo}-screen)`} />
            <rect x="120" y="88" width="128" height="72" rx="3" fill="#142B49" />
            <rect x="133" y="100" width="103" height="6" rx="3" fill="#56A0FF" />
            <rect x="133" y="115" width="83" height="5" rx="2" fill="#5B7597" />
            <rect x="133" y="128" width="93" height="5" rx="2" fill="#5B7597" />
            <path d="M184 186V203M146 203H222" stroke="#54708F" strokeWidth="5" strokeLinecap="round" />
            <rect x="295" y="99" width="76" height="105" rx="8" fill={`url(#${prefixo}-metal)`} stroke="#6685A9" strokeWidth="2" />
            <rect x="304" y="110" width="58" height="67" rx="4" fill="#0A1729" />
            <rect x="312" y="120" width="42" height="29" rx="3" fill="#1D426A" />
            <path d="M312 159H350" stroke="#5B8DC8" strokeWidth="4" strokeLinecap="round" />
            <circle cx="333" cy="190" r="4" fill="#56A0FF" />
            <path d="M271 137H294" stroke="#56A0FF" strokeWidth="3" strokeDasharray="4 4" />
            <circle cx="282" cy="137" r="5" fill="#1677FF" />
          </>
        )}
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <main id="inicio" className="min-h-screen overflow-hidden bg-[#080D18]">
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
            <Link href="/servicos" className="transition hover:text-[#1677FF]">
              Serviços
            </Link>
            <Link href="/sobre" className="transition hover:text-[#1677FF]">
              Sobre nós
            </Link>
            <a href="#contato" className="transition hover:text-[#1677FF]">
              Contato
            </a>
          </nav>

          <a
            href="#contato"
            className="hidden shrink-0 justify-self-end rounded-lg border border-[#1677FF]/60 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#1677FF] lg:inline-flex xl:px-5"
          >
            Fale conosco
          </a>

          <Link
            href="/servicos"
            className="justify-self-end text-right text-sm font-medium text-white transition hover:text-[#80B4FF] lg:hidden"
          >
            Explorar →
          </Link>
        </div>
      </header>

      {/* Apresentação principal */}
      <section className="relative flex min-h-[calc(100vh-80px)] items-center">
        <div className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-[#1677FF]/10 blur-[140px]" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-28 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1677FF]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4C98FF]">
                Orizon Soluções · Soluções em Tecnologia
              </span>
            </div>

            <h1 className="text-5xl font-semibold leading-[1.12] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Tecnologia que
              <br />
              impulsiona o seu
              <br />
              <span className="text-[#1677FF]">negócio.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-[#A1AABA] sm:text-lg">
              Soluções tecnológicas para pequenas empresas. Cuidamos da sua
              infraestrutura, dos seus equipamentos e dos seus sistemas para
              você focar no crescimento do seu negócio.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/servicos"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#1677FF] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#0865E5]"
              >
                Conheça nossas soluções
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/sobre"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 px-7 py-4 text-sm font-medium text-white transition hover:border-[#1677FF] hover:bg-white/[0.04]"
              >
                Conheça a Orizon
              </Link>
            </div>
          </div>

          <div className="mt-24 flex flex-wrap items-center gap-x-12 gap-y-5 border-t border-white/10 pt-8">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
              Tecnologia
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
              Conectividade
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
              Inovação
            </span>
          </div>
        </div>
      </section>

      {/* Soluções */}
      <section
        id="servicos"
        className="relative border-t border-white/[0.07] bg-[#0A1020] py-28"
      >
        <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-[#1677FF]/[0.07] blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-14 max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1677FF]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4C98FF]">
                O que fazemos
              </span>
            </div>

            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Tecnologia para cada
              <br />
              <span className="text-[#1677FF]">necessidade.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#A1AABA]">
              Da infraestrutura ao desenvolvimento, oferecemos soluções
              tecnológicas para ajudar pequenas empresas a trabalhar melhor,
              com mais segurança e eficiência.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {servicos.map((servico) => (
              <Link
                key={servico.numero}
                href={`/servicos#servico-${servico.numero}`}
                aria-label={`Saiba mais sobre ${servico.titulo}`}
                className="group block overflow-hidden rounded-xl border border-white/[0.12] bg-[#111F35] transition duration-300 hover:-translate-y-1 hover:border-[#1677FF]/50 hover:shadow-[0_15px_45px_rgba(0,0,0,0.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1677FF]"
              >
                <IlustracaoServico tipo={servico.ilustracao} />

                <div className="flex min-h-[220px] flex-col p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-wider text-[#4C98FF]">
                      {servico.numero}
                    </span>
                    <span className="rounded-full border border-[#1677FF]/20 bg-[#1677FF]/[0.08] px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-[#80B4FF]">
                      {servico.categoria}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold leading-snug text-white transition group-hover:text-[#80B4FF]">
                    {servico.titulo}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#A1AABA]">
                    {servico.descricao}
                  </p>

                  <div className="mt-auto flex items-center justify-between border-t border-white/[0.08] pt-5">
                    <span className="text-xs font-medium text-gray-500">
                      Orizon Soluções
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-lg text-[#1677FF] transition duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/servicos"
              className="inline-flex items-center gap-3 rounded-lg border border-[#1677FF]/50 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1677FF]"
            >
              Conheça todos os serviços
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre a Orizon */}
      <section
        id="sobre"
        className="relative overflow-hidden border-t border-white/[0.07] bg-[#080D18] py-28"
      >
        <div className="pointer-events-none absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-[#1677FF]/[0.07] blur-[130px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1677FF]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4C98FF]">
                Sobre a empresa
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Tecnologia próxima,
              <br />
              soluções que
              <br />
              <span className="text-[#1677FF]">fazem a diferença.</span>
            </h2>

            <p className="mt-7 text-base leading-8 text-[#A1AABA]">
              A Orizon Soluções nasceu com o propósito de tornar a tecnologia
              mais acessível e eficiente para pequenas empresas.
            </p>

            <p className="mt-4 text-base leading-8 text-[#A1AABA]">
              Atuamos no desenvolvimento de soluções digitais, suporte técnico
              e infraestrutura de TI, buscando entender as necessidades de cada
              negócio para oferecer soluções práticas, confiáveis e adequadas
              à sua realidade.
            </p>

            <Link
              href="/sobre"
              className="mt-9 inline-flex items-center gap-3 text-sm font-semibold text-[#80B4FF] transition hover:text-white"
            >
              Conheça nossa história
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/[0.10] bg-[#111F35] p-7 transition hover:border-[#1677FF]/40">
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg border border-[#1677FF]/20 bg-[#1677FF]/10 text-xl text-[#80B4FF]">
                <span aria-hidden="true">⌘</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Tecnologia</h3>
              <p className="mt-3 text-sm leading-7 text-[#A1AABA]">
                Soluções tecnológicas pensadas para facilitar o dia a dia
                das empresas.
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.10] bg-[#111F35] p-7 transition hover:border-[#1677FF]/40 sm:translate-y-8">
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg border border-[#1677FF]/20 bg-[#1677FF]/10 text-xl text-[#80B4FF]">
                <span aria-hidden="true">◇</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Eficiência</h3>
              <p className="mt-3 text-sm leading-7 text-[#A1AABA]">
                Processos mais organizados, equipamentos funcionando
                e ambientes conectados.
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.10] bg-[#111F35] p-7 transition hover:border-[#1677FF]/40">
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg border border-[#1677FF]/20 bg-[#1677FF]/10 text-xl text-[#80B4FF]">
                <span aria-hidden="true">⌁</span>
              </div>
              <h3 className="text-lg font-semibold text-white">
                Conectividade
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#A1AABA]">
                Infraestrutura e redes preparadas para manter sua
                empresa conectada.
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.10] bg-[#111F35] p-7 transition hover:border-[#1677FF]/40 sm:translate-y-8">
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg border border-[#1677FF]/20 bg-[#1677FF]/10 text-xl text-[#80B4FF]">
                <span aria-hidden="true">+</span>
              </div>
              <h3 className="text-lg font-semibold text-white">
                Proximidade
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#A1AABA]">
                Atendimento atento às necessidades e à realidade
                de cada cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section
        id="contato"
        className="relative overflow-hidden border-t border-white/[0.07] bg-[#0A1020] py-28"
      >
        <div className="pointer-events-none absolute -left-40 top-10 h-[400px] w-[400px] rounded-full bg-[#1677FF]/[0.08] blur-[130px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[350px] w-[350px] rounded-full bg-[#1677FF]/[0.06] blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#1677FF]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4C98FF]">
                Entre em contato
              </span>
              <span className="h-px w-10 bg-[#1677FF]" />
            </div>

            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Vamos conversar sobre
              <br />
              <span className="text-[#1677FF]">o seu negócio?</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#A1AABA]">
              Precisa de uma solução tecnológica para sua empresa?
              Entre em contato com a Orizon. Estamos prontos para
              entender suas necessidades e ajudar você.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-5 md:grid-cols-2">
            <a
              href="https://wa.me/5521979293827"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-white/[0.10] bg-[#111F35] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#1677FF]/50 hover:shadow-[0_15px_45px_rgba(0,0,0,0.2)]"
            >
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-lg border border-[#1677FF]/20 bg-[#1677FF]/10 text-2xl text-[#80B4FF]">
                <span aria-hidden="true">◉</span>
              </div>

              <span className="text-xs font-semibold uppercase tracking-wider text-[#4C98FF]">
                Atendimento direto
              </span>

              <h3 className="mt-3 text-xl font-semibold text-white transition group-hover:text-[#80B4FF]">
                Fale pelo WhatsApp
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#A1AABA]">
                Converse com a nossa equipe e tire suas dúvidas
                sobre nossos serviços.
              </p>

              <div className="mt-8 flex items-center justify-between border-t border-white/[0.08] pt-5">
                <span className="text-sm text-gray-400">
                  (21) 97929-3827
                </span>
                <span className="text-lg text-[#1677FF] transition group-hover:translate-x-1">
                  →
                </span>
              </div>
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=orizonsolucoesrj%40gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-white/[0.10] bg-[#111F35] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#1677FF]/50 hover:shadow-[0_15px_45px_rgba(0,0,0,0.2)]"
            >
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-lg border border-[#1677FF]/20 bg-[#1677FF]/10 text-2xl text-[#80B4FF]">
                <span aria-hidden="true">✉</span>
              </div>

              <span className="text-xs font-semibold uppercase tracking-wider text-[#4C98FF]">
                Contato comercial
              </span>

              <h3 className="mt-3 text-xl font-semibold text-white transition group-hover:text-[#80B4FF]">
                Envie um e-mail
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#A1AABA]">
                Envie sua solicitação ou conte um pouco sobre
                o que sua empresa precisa.
              </p>

              <div className="mt-8 flex items-center justify-between gap-3 border-t border-white/[0.08] pt-5">
                <span className="break-all text-sm text-gray-400">
                  orizonsolucoesrj@gmail.com
                </span>
                <span className="shrink-0 text-lg text-[#1677FF] transition group-hover:translate-x-1">
                  →
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="border-t border-white/[0.07] bg-[#080D18]">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <Link href="/" className="inline-flex items-center">
                <Image
                  src="/logo-orizon-solucoes.png"
                  alt="Orizon Soluções"
                  width={220}
                  height={75}
                  className="h-auto w-[165px] object-contain"
                />
              </Link>

              <p className="mt-5 max-w-sm text-sm leading-7 text-[#A1AABA]">
                Soluções em tecnologia para pequenas empresas.
                Desenvolvimento, suporte técnico e infraestrutura
                para impulsionar o seu negócio.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                Navegação
              </h3>

              <ul className="mt-5 space-y-3 text-sm text-[#A1AABA]">
                <li>
                  <Link href="/" className="transition hover:text-[#80B4FF]">
                    Início
                  </Link>
                </li>
                <li>
                  <Link href="/servicos" className="transition hover:text-[#80B4FF]">
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link href="/sobre" className="transition hover:text-[#80B4FF]">
                    Sobre nós
                  </Link>
                </li>
                <li>
                  <a href="#contato" className="transition hover:text-[#80B4FF]">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                Contato
              </h3>

              <ul className="mt-5 space-y-4 text-sm text-[#A1AABA]">
                <li>
                  <a
                    href="https://wa.me/5521979293827"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-[#80B4FF]"
                  >
                    WhatsApp
                    <span className="mt-1 block text-xs text-gray-500">
                      (21) 97929-3827
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=orizonsolucoesrj%40gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all transition hover:text-[#80B4FF]"
                  >
                    E-mail
                    <span className="mt-1 block text-xs text-gray-500">
                      orizonsolucoesrj@gmail.com
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-white/[0.07] pt-7 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              &copy; 2026 Orizon Soluções. Todos os direitos reservados.
            </p>

            <a
              href="#inicio"
              className="transition-colors hover:text-white"
            >
              Voltar ao início ↑
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
