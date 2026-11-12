
import Image from "next/image";
import Link from "next/link";

const whatsapp =
  "https://wa.me/5521979293827?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Orizon%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

const email =
  "https://mail.google.com/mail/?view=cm&fs=1&to=orizonsolucoesrj%40gmail.com";

export default function ContatoPage() {
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
              href="/contato"
              className="text-[#80B4FF] transition hover:text-white"
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
                Entre em contato
              </span>
            </div>

            <h1 className="text-5xl font-semibold leading-[1.12] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Vamos conversar
              <br />
              sobre o seu
              <br />
              <span className="text-[#1677FF]">projeto.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[#A1AABA] sm:text-lg">
              Tem uma necessidade tecnológica ou procura uma solução para
              sua empresa? Entre em contato com a Orizon. Estamos prontos
              para entender seu projeto e conversar sobre como podemos ajudar.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#1677FF] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#0865E5]"
              >
                Falar pelo WhatsApp
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href={email}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 px-7 py-4 text-sm font-medium text-white transition hover:border-[#1677FF] hover:bg-white/[0.04]"
              >
                Enviar um e-mail
              </a>
            </div>
          </div>

          <div className="mt-20 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-[#4C98FF]">
                WhatsApp
              </span>
              <p className="mt-2 text-sm text-[#A1AABA]">
                Atendimento direto e solicitação de orçamento.
              </p>
            </div>

            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-[#4C98FF]">
                E-mail
              </span>
              <p className="mt-2 text-sm text-[#A1AABA]">
                Comunicação e contato comercial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Canais de contato */}
      <section className="relative overflow-hidden bg-[#0A1020] py-28">
        <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-[#1677FF]/[0.07] blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-14 max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1677FF]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4C98FF]">
                Nossos canais
              </span>
            </div>

            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Escolha como
              <br />
              <span className="text-[#1677FF]">falar conosco.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#A1AABA]">
              Estamos disponíveis pelos nossos canais de atendimento para
              receber sua mensagem, entender sua necessidade e conversar
              sobre as melhores soluções.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-white/[0.10] bg-[#111F35] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#1677FF]/50 hover:shadow-[0_15px_45px_rgba(0,0,0,0.2)] sm:p-10"
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
                Converse conosco, tire suas dúvidas e solicite um orçamento
                para sua necessidade.
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
              href={email}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-white/[0.10] bg-[#111F35] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#1677FF]/50 hover:shadow-[0_15px_45px_rgba(0,0,0,0.2)] sm:p-10"
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
                Envie sua solicitação ou conte um pouco sobre o que sua
                empresa precisa.
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
                href="/contato"
                className="text-[#80B4FF] transition hover:text-white"
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
