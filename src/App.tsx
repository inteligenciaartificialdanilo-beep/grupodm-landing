import { useEffect, useState } from 'react'
import {
  MessageCircle, Mail, Instagram, MapPin, ArrowRight, Menu, X,
  ShieldCheck, Truck, Sparkles, Users, Award, Calendar,
  Download, ChevronDown, Target, Eye, Heart, Wrench,
} from 'lucide-react'

// ==============================================
// FLAG DE MANUTENÇÃO
// Trocar pra `false` quando o site estiver pronto pra ir ao ar de verdade.
// ==============================================
const MODO_MANUTENCAO = true

const WHATSAPP = '5544997233294'
const WHATSAPP_DISPLAY = '(44) 99723-3294'
const EMAIL = 'atendimento@dmdistribuidora.net'
const INSTAGRAM = 'https://www.instagram.com/grupodm_oficial/'
const INSTAGRAM_HANDLE = '@grupodm_oficial'
const MAPS_QUERY = 'https://www.google.com/maps/search/?api=1&query=grupo+dm+distribuidora'

const whatsappLink = (msg = 'Olá! Vim pelo site e gostaria de um orçamento.') =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`

// Catálogos — capa gerada da 1ª página do PDF via pdf-poppler
const CATALOGOS = [
  {
    titulo: 'Copos Personalizados 2026',
    arquivo: 'copos-personalizados-2026.pdf',
    capa: '/catalogos/thumb-personalizados-01.jpg',
  },
  {
    titulo: 'Copos Acrílicos 2026',
    arquivo: 'copos-acrilico-2026.pdf',
    capa: '/catalogos/thumb-acrilico-01.jpg',
  },
  {
    titulo: 'Copos Térmicos 2026',
    arquivo: 'copos-termicos-2026.pdf',
    capa: '/catalogos/thumb-termicos-01.jpg',
  },
  {
    titulo: 'Coleção Copa 2026',
    arquivo: 'catalogo-copa-2026.pdf',
    capa: '/catalogos/thumb-copa-1.jpg',
  },
]

const NUMEROS = [
  { valor: '10+', label: 'Anos de mercado', icon: Calendar },
  { valor: '1000+', label: 'Clientes atendidos', icon: Users },
  { valor: '500k+', label: 'Copos produzidos', icon: Award },
  { valor: 'BR', label: 'Entrega em todo Brasil', icon: Truck },
]

const DIFERENCIAIS = [
  {
    titulo: 'Fabricação própria',
    desc: 'Controle total da qualidade — do desenho ao produto entregue.',
    icon: ShieldCheck,
  },
  {
    titulo: 'Agilidade na entrega',
    desc: 'Prazos apertados? A gente encara. Logística nacional otimizada.',
    icon: Truck,
  },
  {
    titulo: 'Personalização real',
    desc: 'Do logo simples ao design mais elaborado, criamos o que você imaginar.',
    icon: Sparkles,
  },
]

function Nav({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#mvv', label: 'Nossa história' },
    { href: '#produtos', label: 'Produtos' },
    { href: '#contato', label: 'Contato' },
  ]
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-lg shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          {scrolled ? (
            <img
              src="/logo-dm-horizontal.png"
              alt="Grupo DM"
              className="h-10 w-auto transition-all"
            />
          ) : (
            <span className="font-display text-white text-2xl font-bold tracking-tight">
              GRUPO <span className="italic">DM</span>
            </span>
          )}
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-semibold transition ${
                scrolled ? 'text-slate-700 hover:text-brand' : 'text-white/90 hover:text-white'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-brand hover:bg-brand-dark text-white text-sm font-bold px-5 py-2.5 rounded-full transition shadow-lg shadow-brand/30"
          >
            <MessageCircle size={16} /> Fale agora
          </a>
        </div>
        <button
          className={`md:hidden p-2 ${scrolled ? 'text-slate-900' : 'text-white'}`}
          onClick={() => setOpen(v => !v)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-3 shadow-lg">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-slate-700 font-semibold py-2"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 bg-brand text-white font-bold px-5 py-3 rounded-full mt-2"
          >
            <MessageCircle size={18} /> Fale agora
          </a>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-light via-brand to-brand-dark" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 20%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 75% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center text-white">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-8">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          Fábrica ativa · Entrega em todo Brasil
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6">
          Sua marca na mão <br className="hidden md:block" />
          <span className="italic font-light">de todo mundo.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-4 leading-relaxed">
          <span className="italic">Porque a sua ainda não está?</span>
        </p>

        <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Copos personalizados, brindes corporativos e produtos para eventos.
          Fabricação própria, qualidade garantida, entrega em todo Brasil.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href={whatsappLink('Olá! Gostaria de um orçamento.')}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-white text-brand font-bold px-8 py-4 rounded-full text-lg shadow-2xl hover:scale-105 transition-transform"
          >
            <MessageCircle size={22} /> Solicitar orçamento
          </a>
          <a
            href="#produtos"
            className="inline-flex items-center gap-2 text-white/90 font-semibold px-6 py-4 rounded-full border border-white/30 hover:bg-white/10 transition"
          >
            Ver catálogos <ArrowRight size={18} />
          </a>
        </div>

        <a
          href="#numeros"
          className="inline-flex flex-col items-center gap-1 text-white/60 hover:text-white transition animate-bounce"
        >
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  )
}

function Numeros() {
  return (
    <section id="numeros" className="relative -mt-20 z-20 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        {NUMEROS.map((n) => (
          <div key={n.label} className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-brand/10 text-brand rounded-2xl mb-3">
              <n.icon size={28} />
            </div>
            <div className="font-display text-3xl md:text-4xl font-bold text-brand-dark mb-1">
              {n.valor}
            </div>
            <div className="text-sm text-slate-500 font-medium">{n.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Sobre() {
  return (
    <section id="sobre" className="py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-brand font-bold uppercase tracking-widest text-xs mb-4">Sobre o Grupo DM</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Copos personalizados que <span className="text-brand">contam sua história</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Somos uma distribuidora e fábrica de copos e brindes personalizados especializada em
            transformar a identidade da sua marca em produtos que ficam na memória — e na mão — do seu cliente.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            De copos térmicos, acrílicos e descartáveis a produtos exclusivos pra eventos e empresas,
            entregamos qualidade, agilidade e criatividade em cada pedido. Do briefing à entrega,
            você conversa direto com quem produz.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {DIFERENCIAIS.map(d => (
              <div key={d.titulo} className="bg-slate-50 rounded-xl p-4">
                <d.icon size={22} className="text-brand mb-2" />
                <div className="font-bold text-slate-900 text-sm mb-1">{d.titulo}</div>
                <div className="text-xs text-slate-500 leading-relaxed">{d.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square bg-white border-4 border-brand/10 rounded-3xl shadow-2xl relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 30% 30%, rgba(11,22,138,0.06) 0%, transparent 60%)',
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center p-14">
              <img
                src="/logo-dm-horizontal.png"
                alt="Grupo DM"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 max-w-[240px] border border-slate-100">
            <div className="bg-emerald-100 text-emerald-700 rounded-lg p-2">
              <ShieldCheck size={20} />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">Qualidade garantida</div>
              <div className="text-xs text-slate-500">Controle em cada etapa</div>
            </div>
          </div>
          <div className="absolute -top-6 -left-6 bg-brand rounded-2xl shadow-xl p-4 flex items-center gap-3 max-w-[220px]">
            <div className="bg-white/20 text-white rounded-lg p-2">
              <Sparkles size={20} />
            </div>
            <div>
              <div className="font-bold text-white text-sm">Fabricação própria</div>
              <div className="text-xs text-white/70">Do desenho à entrega</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MissaoVisaoValores() {
  const itens = [
    {
      icon: Target,
      titulo: 'Missão',
      texto:
        'Transformar momentos em memórias únicas por meio da personalização, levando criatividade e qualidade a cada detalhe. Além disso, contribuir para o sucesso dos nossos parceiros lojistas, oferecendo soluções inovadoras e produtos que encantam seus clientes.',
    },
    {
      icon: Eye,
      titulo: 'Visão',
      texto:
        'Ser uma empresa referência em personalização de copos e distribuição de produtos para lojistas, reconhecida pela qualidade, inovação e pelo impacto positivo que geramos na vida dos nossos clientes e parceiros.',
    },
    {
      icon: Heart,
      titulo: 'Valores',
      texto:
        'Valorizamos cada cliente, parceiro e colaborador, reconhecendo que o crescimento da empresa é fruto do trabalho conjunto e da confiança que conquistamos.',
    },
  ]
  return (
    <section id="mvv" className="py-24 md:py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-brand font-bold uppercase tracking-widest text-xs mb-4">
            Quem somos
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Missão, Visão e Valores
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Os princípios que orientam cada decisão, cada peça produzida e cada relacionamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {itens.map((item) => (
            <div
              key={item.titulo}
              className="group relative bg-slate-50 hover:bg-white border border-slate-100 hover:border-brand/20 rounded-2xl p-8 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-brand text-white rounded-2xl mb-5 shadow-lg shadow-brand/20 group-hover:scale-110 transition-transform">
                <item.icon size={26} />
              </div>
              <h3 className="font-display text-2xl font-bold text-brand-dark mb-3 uppercase tracking-tight">
                {item.titulo}
              </h3>
              <p className="text-slate-600 leading-relaxed">{item.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Produtos() {
  return (
    <section id="produtos" className="py-24 md:py-32 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-brand font-bold uppercase tracking-widest text-xs mb-4">
            Nossos catálogos
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Escolha sua linha
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Baixe o catálogo completo em PDF ou chama a gente no WhatsApp pra receber o material atualizado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATALOGOS.map((cat) => (
            <div
              key={cat.titulo}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all hover:-translate-y-1 flex flex-col"
            >
              <a
                href={`/catalogos/${cat.arquivo}`}
                target="_blank"
                rel="noreferrer"
                className="block relative bg-slate-100 aspect-[3/4] overflow-hidden"
                title={`Abrir ${cat.titulo}`}
              >
                <img
                  src={cat.capa}
                  alt={`Capa ${cat.titulo}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-black/60 backdrop-blur-sm text-white/90 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">
                    Catálogo
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <span className="text-white text-sm font-bold flex items-center gap-2">
                    <Download size={16} /> Ver catálogo
                  </span>
                </div>
              </a>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-display font-bold text-slate-900 text-lg mb-4 flex-1">{cat.titulo}</h3>
                <div className="flex gap-2">
                  <a
                    href={`/catalogos/${cat.arquivo}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white text-sm font-bold px-4 py-2.5 rounded-lg transition"
                  >
                    <Download size={16} /> Baixar
                  </a>
                  <a
                    href={whatsappLink(`Olá! Quero mais informações sobre "${cat.titulo}".`)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 border border-slate-200 hover:border-brand hover:text-brand text-slate-700 text-sm font-bold px-4 py-2.5 rounded-lg transition"
                    title="Falar no WhatsApp"
                  >
                    <MessageCircle size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={whatsappLink('Olá! Gostaria de ver todos os produtos disponíveis.')}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-brand font-bold hover:underline"
          >
            Falar direto com um consultor <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

function Depoimentos() {
  const depoimentos = [
    {
      texto: 'Copos entregues no prazo, qualidade impecável. Já é a terceira encomenda pro nosso restaurante.',
      autor: 'Cliente Corporativo',
      cargo: 'Rede de Restaurantes',
    },
    {
      texto: 'Fizemos os brindes do casamento com eles. Todos os convidados amaram. Recomendo demais.',
      autor: 'Cliente Particular',
      cargo: 'Eventos sociais',
    },
    {
      texto: 'Precisávamos de 5000 copos em 15 dias. Entregaram em 12. Ninguém mais faz esse tipo de coisa.',
      autor: 'Agência de Eventos',
      cargo: 'Grande evento corporativo',
    },
  ]
  return (
    <section className="py-24 md:py-32 px-4 bg-brand-dark relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)',
        }}
      />
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16 text-white">
          <div className="text-white/70 font-bold uppercase tracking-widest text-xs mb-4">
            O que dizem de nós
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Clientes que confiam
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {depoimentos.map((d, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-white"
            >
              <div className="text-6xl font-display font-bold text-white/20 leading-none mb-2">"</div>
              <p className="text-white/90 leading-relaxed mb-6">{d.texto}</p>
              <div>
                <div className="font-bold">{d.autor}</div>
                <div className="text-sm text-white/60">{d.cargo}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contato() {
  return (
    <section id="contato" className="py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <div className="text-brand font-bold uppercase tracking-widest text-xs mb-4">Fale com a gente</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Vamos criar algo <span className="text-brand">único</span> pra sua marca?
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            Manda seu briefing pelo WhatsApp, e-mail ou Instagram. A gente responde rápido e monta um
            orçamento sob medida pro seu projeto.
          </p>
          <div className="space-y-4">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl p-4 transition"
            >
              <div className="bg-emerald-600 text-white p-3 rounded-lg">
                <MessageCircle size={20} />
              </div>
              <div>
                <div className="text-xs font-bold text-emerald-700 uppercase">WhatsApp</div>
                <div className="font-bold text-slate-900">{WHATSAPP_DISPLAY}</div>
              </div>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl p-4 transition"
            >
              <div className="bg-brand text-white p-3 rounded-lg">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-xs font-bold text-brand uppercase">E-mail</div>
                <div className="font-bold text-slate-900 break-all">{EMAIL}</div>
              </div>
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl p-4 transition"
            >
              <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 text-white p-3 rounded-lg">
                <Instagram size={20} />
              </div>
              <div>
                <div className="text-xs font-bold text-pink-600 uppercase">Instagram</div>
                <div className="font-bold text-slate-900">{INSTAGRAM_HANDLE}</div>
              </div>
            </a>
            <a
              href={MAPS_QUERY}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl p-4 transition"
            >
              <div className="bg-slate-800 text-white p-3 rounded-lg">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-700 uppercase">Nossa base</div>
                <div className="font-bold text-slate-900">Ver no Google Maps</div>
              </div>
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-br from-brand via-brand-light to-brand-dark rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)',
            }}
          />
          <div className="relative">
            <div className="text-xs font-bold uppercase tracking-widest text-white/60 mb-4">
              Atendimento
            </div>
            <h3 className="font-display text-3xl font-bold mb-4">Resposta rápida no WhatsApp</h3>
            <p className="text-white/80 leading-relaxed mb-8">
              A gente responde durante o horário comercial: <br />
              <strong className="text-white">Seg à Sex, das 8h às 18h.</strong>
              <br />
              Fora desse horário, deixa a mensagem que respondemos assim que possível.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-white text-brand font-bold px-6 py-3.5 rounded-full shadow-2xl hover:scale-105 transition-transform"
            >
              <MessageCircle size={20} /> Iniciar conversa
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-white/70 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="bg-white rounded-xl p-3 inline-block mb-4">
              <img src="/logo-dm-horizontal.png" alt="Grupo DM" className="h-8 w-auto" />
            </div>
            <p className="text-sm leading-relaxed">
              Copos personalizados, brindes e produtos corporativos.
              Fabricação própria com entrega em todo Brasil.
            </p>
          </div>
          <div>
            <div className="font-bold text-white mb-3 text-sm uppercase tracking-widest">Links</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#sobre" className="hover:text-white transition">Sobre nós</a></li>
              <li><a href="#produtos" className="hover:text-white transition">Catálogos</a></li>
              <li><a href="#contato" className="hover:text-white transition">Contato</a></li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-white mb-3 text-sm uppercase tracking-widest">Contato</div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <MessageCircle size={14} /> {WHATSAPP_DISPLAY}
              </li>
              <li className="flex items-center gap-2 break-all">
                <Mail size={14} /> {EMAIL}
              </li>
              <li>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <Instagram size={14} /> {INSTAGRAM_HANDLE}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-sm text-white/50 text-center">
          © {new Date().getFullYear()} Grupo DM Distribuidora. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}

function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl shadow-emerald-500/40 p-4 transition-transform hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute inset-0 rounded-full animate-ping bg-emerald-500 opacity-40" />
    </a>
  )
}

function Manutencao() {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-6 py-16 bg-brand">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-light via-brand to-brand-dark" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 20%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 75% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
        }}
      />
      <div className="relative z-10 max-w-2xl mx-auto text-center text-white">
        <div className="bg-white rounded-2xl p-4 inline-block mb-8 shadow-2xl">
          <img src="/logo-dm-horizontal.png" alt="Grupo DM" className="h-12 w-auto" />
        </div>

        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6">
          <Wrench size={14} className="animate-pulse" />
          Site em manutenção
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          Estamos deixando <br className="hidden sm:block" />
          <span className="italic font-light">tudo do jeito certo.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/80 mb-4 leading-relaxed">
          Nosso novo site chega em breve — com mais catálogos, novidades e a cara nova do Grupo DM.
        </p>
        <p className="text-base text-white/70 mb-10">
          Enquanto isso, fala com a gente direto pelo WhatsApp que o atendimento continua rodando normal.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={whatsappLink('Olá! Vi o site do Grupo DM em manutenção e gostaria de um orçamento.')}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-white text-brand font-bold px-8 py-4 rounded-full text-lg shadow-2xl hover:scale-105 transition-transform"
          >
            <MessageCircle size={22} /> WhatsApp {WHATSAPP_DISPLAY}
          </a>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-white/90 font-semibold px-6 py-4 rounded-full border border-white/30 hover:bg-white/10 transition"
          >
            <Instagram size={18} /> {INSTAGRAM_HANDLE}
          </a>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-white/60">
          <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-white transition">
            <Mail size={14} /> {EMAIL}
          </a>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (MODO_MANUTENCAO) {
    return <Manutencao />
  }

  return (
    <>
      <Nav scrolled={scrolled} />
      <Hero />
      <Numeros />
      <Sobre />
      <MissaoVisaoValores />
      <Produtos />
      <Depoimentos />
      <Contato />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
