import { useState, useEffect } from 'react'
import { Menu, X, Linkedin, Github, Send, MessageCircle } from 'lucide-react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'
import { useIsMobile } from './hooks/use-mobile'
import './App.css'

// Import assets
import fluxLogoGelo from './assets/Logotipo_Flux_Gelo.png'



function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notification, setNotification] = useState(null)
  const isMobile = useIsMobile()

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://formspree.io/f/mjkodezd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
          _subject: 'Contato via Site - Fluxomize'
        })
      })

      if (response.ok) {
        setNotification({
          type: 'success',
          title: 'Mensagem Enviada!',
          message: 'Recebemos sua mensagem e entraremos em contato em até 24 horas úteis.'
        })
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        })
        // Auto-close success notification after 5 seconds
        setTimeout(() => {
          setNotification(null)
        }, 5000)
      } else {
        throw new Error('Erro ao enviar mensagem')
      }
    } catch (error) {
      console.error('Erro:', error)
      setNotification({
        type: 'error',
        title: 'Ops! Algo deu errado',
        message: 'Não foi possível enviar sua mensagem. Tente novamente ou entre em contato pelo WhatsApp.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle WhatsApp contact
  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da Fluxomize.')
    window.open(`https://wa.me/5545999260139?text=${message}`, '_blank')
  }

  // Smooth scroll to section with offset for fixed header
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 72 // Height of fixed header
      const elementPosition = element.offsetTop - headerHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'contact']
      const scrollPosition = window.scrollY + 100 // Offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Set initial active section

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.menu-button')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  // Close mobile menu when pressing Escape key and manage focus
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
        // Return focus to menu button
        const menuButton = document.querySelector('.menu-button')
        if (menuButton) {
          menuButton.focus()
        }
      }
    }

    document.addEventListener('keydown', handleEscapeKey)
    return () => document.removeEventListener('keydown', handleEscapeKey)
  }, [isMenuOpen])

  // Prevent body scroll when mobile menu is open and manage focus
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
      // Focus first menu item when menu opens
      setTimeout(() => {
        const firstMenuItem = document.querySelector('#mobile-navigation button')
        if (firstMenuItem) {
          firstMenuItem.focus()
        }
      }, 100)
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Skip Navigation Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded z-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Skip to main content
      </a>
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-18 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded"
            aria-label="Go to home section"
          >
            <img 
              src={fluxLogoGelo} 
              alt="Fluxomize - Quality Assurance, Automation and Technical Consulting" 
              className="h-12 w-auto object-contain filter brightness-95 hover:brightness-100 transition-all"
            />
          </button>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="flex items-center gap-8" role="navigation" aria-label="Main navigation">
              <button
                onClick={() => scrollToSection('home')}
                onKeyDown={(e) => e.key === 'Enter' && scrollToSection('home')}
                className={`text-sm font-medium transition-all hover:text-primary hover:text-shadow-glow relative focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1 ${
                  activeSection === 'home' ? 'text-primary' : 'text-foreground'
                }`}
                aria-current={activeSection === 'home' ? 'page' : undefined}
              >
                Início
                <span className={`absolute -bottom-1 left-2 h-px bg-primary transition-all duration-300 ${
                  activeSection === 'home' ? 'w-[calc(100%-1rem)]' : 'w-0 group-hover:w-[calc(100%-1rem)]'
                }`} />
              </button>
              <button
                onClick={() => scrollToSection('services')}
                onKeyDown={(e) => e.key === 'Enter' && scrollToSection('services')}
                className={`text-sm font-medium transition-all hover:text-primary hover:text-shadow-glow relative focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1 group ${
                  activeSection === 'services' ? 'text-primary' : 'text-foreground'
                }`}
                aria-current={activeSection === 'services' ? 'page' : undefined}
              >
                Serviços
                <span className={`absolute -bottom-1 left-2 h-px bg-primary transition-all duration-300 ${
                  activeSection === 'services' ? 'w-[calc(100%-1rem)]' : 'w-0 group-hover:w-[calc(100%-1rem)]'
                }`} />
              </button>
              <button
                onClick={() => scrollToSection('about')}
                onKeyDown={(e) => e.key === 'Enter' && scrollToSection('about')}
                className={`text-sm font-medium transition-all hover:text-primary hover:text-shadow-glow relative focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1 group ${
                  activeSection === 'about' ? 'text-primary' : 'text-foreground'
                }`}
                aria-current={activeSection === 'about' ? 'page' : undefined}
              >
                Sobre
                <span className={`absolute -bottom-1 left-2 h-px bg-primary transition-all duration-300 ${
                  activeSection === 'about' ? 'w-[calc(100%-1rem)]' : 'w-0 group-hover:w-[calc(100%-1rem)]'
                }`} />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                onKeyDown={(e) => e.key === 'Enter' && scrollToSection('contact')}
                className={`text-sm font-medium transition-all hover:text-primary hover:text-shadow-glow relative focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1 group ${
                  activeSection === 'contact' ? 'text-primary' : 'text-foreground'
                }`}
                aria-current={activeSection === 'contact' ? 'page' : undefined}
              >
                Contato
                <span className={`absolute -bottom-1 left-2 h-px bg-primary transition-all duration-300 ${
                  activeSection === 'contact' ? 'w-[calc(100%-1rem)]' : 'w-0 group-hover:w-[calc(100%-1rem)]'
                }`} />
              </button>
            </nav>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="menu-button p-2 hover:bg-accent rounded-md transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="mobile-menu absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border">
            <nav id="mobile-navigation" className="container mx-auto px-4 py-4 flex flex-col gap-2" role="navigation" aria-label="Mobile navigation">
              <button
                onClick={() => scrollToSection('home')}
                onKeyDown={(e) => e.key === 'Enter' && scrollToSection('home')}
                className={`text-left py-3 px-2 text-sm font-medium hover:text-primary transition-colors rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${
                  activeSection === 'home' ? 'text-primary bg-primary/10' : 'text-foreground'
                }`}
                aria-current={activeSection === 'home' ? 'page' : undefined}
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('services')}
                onKeyDown={(e) => e.key === 'Enter' && scrollToSection('services')}
                className={`text-left py-3 px-2 text-sm font-medium hover:text-primary transition-colors rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${
                  activeSection === 'services' ? 'text-primary bg-primary/10' : 'text-foreground'
                }`}
                aria-current={activeSection === 'services' ? 'page' : undefined}
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('about')}
                onKeyDown={(e) => e.key === 'Enter' && scrollToSection('about')}
                className={`text-left py-3 px-2 text-sm font-medium hover:text-primary transition-colors rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${
                  activeSection === 'about' ? 'text-primary bg-primary/10' : 'text-foreground'
                }`}
                aria-current={activeSection === 'about' ? 'page' : undefined}
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                onKeyDown={(e) => e.key === 'Enter' && scrollToSection('contact')}
                className={`text-left py-3 px-2 text-sm font-medium hover:text-primary transition-colors rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${
                  activeSection === 'contact' ? 'text-primary bg-primary/10' : 'text-foreground'
                }`}
                aria-current={activeSection === 'contact' ? 'page' : undefined}
              >
                Contato
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main id="main-content" className="pt-18">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-tech-pattern relative" aria-labelledby="hero-heading">
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/70"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="animate-fade-in-up">
              <div className="mb-6 flex justify-center">
                <img 
                  src={fluxLogoGelo} 
                  alt="Flux - Transforming complex processes into clear and intelligent solutions" 
                  className="hero-logo h-16 sm:h-20 md:h-28 w-auto"
                />
              </div>
              <h1 id="hero-heading" className="text-xl sm:text-2xl md:text-4xl font-manrope text-primary mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
                Processos complexos em soluções claras e inteligentes.
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-enhanced mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
                QA, Automação e Consultoria Técnica que entregam resultados reais.
              </p>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 touch-manipulation"
              >
                Vamos Conversar
              </Button>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <button 
            onClick={() => scrollToSection('services')}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded"
            aria-label="Scroll to services section"
          >
            <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-accent rounded-full mt-2" />
            </div>
          </button>
        </section>

        {/* Services Section */}
        <section id="services" className="section-padding" aria-labelledby="services-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <h2 id="services-heading" className="text-3xl sm:text-4xl md:text-5xl font-vinila text-gradient mb-4 sm:mb-6 px-4">
                Nossos Serviços
              </h2>
              <p className="text-base sm:text-lg text-muted-enhanced max-w-3xl mx-auto px-4">
                Soluções especializadas com foco em resultados práticos e mensuráveis.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* QA Service */}
              <Card className="service-card hover-lift">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center" role="img" aria-label="Quality Assurance icon">
                      <div className="text-accent text-2xl" aria-hidden="true">🧪</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-vinila text-primary mb-4">
                    Qualidade de Software
                  </h3>
                  <p className="text-muted-enhanced mb-6 leading-relaxed">
                    Testes rigorosos que garantem que seu software funcione exatamente como deve. 
                    Identificamos problemas antes que cheguem ao usuário.
                  </p>
                  <ul className="text-sm text-muted-enhanced space-y-2">
                    <li>• QA contínuo ou pontual</li>
                    <li>• Integração com seu time</li>
                    <li>• Soluções sob medida</li>
                    <li>• Processos estruturados</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Automation Service */}
              <Card className="service-card hover-lift">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center" role="img" aria-label="Process Automation icon">
                      <div className="text-accent text-2xl" aria-hidden="true">🤖</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-vinila text-primary mb-4">
                    Automação de Processos
                  </h3>
                  <p className="text-muted-enhanced mb-6 leading-relaxed">
                    Automatizamos tarefas repetitivas para aumentar eficiência e reduzir erros. 
                    Sua equipe foca no que realmente importa.
                  </p>
                  <ul className="text-sm text-muted-enhanced space-y-2">
                    <li>• RPA inteligente</li>
                    <li>• Automações específicas</li>
                    <li>• Otimização de fluxos</li>
                    <li>• Integração de sistemas</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Consulting Service */}
              <Card className="service-card hover-lift">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center" role="img" aria-label="Technical Consulting icon">
                      <div className="text-accent text-2xl" aria-hidden="true">🛠️</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-vinila text-primary mb-4">
                    Consultoria Técnica
                  </h3>
                  <p className="text-muted-enhanced mb-6 leading-relaxed">
                    Ferramentas sob medida e integrações inteligentes. 
                    Estruturamos processos de QA do planejamento à implementação.
                  </p>
                  <ul className="text-sm text-muted-enhanced space-y-2">
                    <li>• Soluções personalizadas</li>
                    <li>• Integrações eficientes</li>
                    <li>• Estratégia de QA</li>
                    <li>• Implementação prática</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-padding bg-muted/5" aria-labelledby="about-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <h2 id="about-heading" className="text-3xl sm:text-4xl md:text-5xl font-vinila text-gradient mb-4 sm:mb-6 px-4">
                Sobre a Flux
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <p className="text-lg text-muted-enhanced leading-relaxed mb-8">
                  Nascemos em 2025 para democratizar tecnologia e transformar operações digitais. 
                  Especialistas identificaram uma lacuna: faltavam soluções acessíveis que gerassem impacto real.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
                {/* Mission */}
                <Card className="glass-effect hover-lift">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-xl font-vinila text-accent mb-4">Missão</h3>
                    <p className="text-muted-enhanced leading-relaxed">
                      Capacitar organizações com soluções focadas em qualidade e automação, 
                      promovendo excelência operacional.
                    </p>
                  </CardContent>
                </Card>

                {/* Vision */}
                <Card className="glass-effect hover-lift">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-xl font-vinila text-accent mb-4">Visão</h3>
                    <p className="text-muted-enhanced leading-relaxed">
                      Transformar IA e automação em soluções práticas e eficientes — 
                      com clareza, responsabilidade e foco em resultado.
                    </p>
                  </CardContent>
                </Card>

                {/* Values Preview */}
                <Card className="glass-effect hover-lift">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-xl font-vinila text-accent mb-4">Valores</h3>
                    <p className="text-muted-enhanced leading-relaxed">
                      Inteligência estratégica, clareza aplicada e responsabilidade 
                      em cada projeto.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Values Detail */}
              <div className="space-y-8">
                <div className="border-l-4 border-accent pl-6">
                  <h4 className="text-xl font-vinila text-primary mb-3">Inteligência Estratégica</h4>
                  <p className="text-muted-enhanced leading-relaxed">
                    Pensamos antes de construir. Cada ação conecta contexto com objetivos reais.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h4 className="text-xl font-vinila text-primary mb-3">Clareza Aplicada</h4>
                  <p className="text-muted-enhanced leading-relaxed">
                    Eliminamos complexidade desnecessária. Entregamos soluções objetivas e compreensíveis.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h4 className="text-xl font-vinila text-primary mb-3">Responsabilidade</h4>
                  <p className="text-muted-enhanced leading-relaxed">
                    Cumprimos promessas. Atuamos com ética, transparência e compromisso real.
                  </p>
                </div>
              </div>

              {/* Differentiators */}
              <div className="mt-16 text-center">
                <h3 className="text-2xl font-vinila text-gradient mb-8">Por que Flux?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div className="p-4">
                    <h4 className="font-manrope font-semibold text-primary mb-2">Foco Especializado</h4>
                    <p className="text-sm text-muted-enhanced">
                      Software, SaaS, agências e negócios digitais
                    </p>
                  </div>
                  <div className="p-4">
                    <h4 className="font-manrope font-semibold text-primary mb-2">Comunicação Direta</h4>
                    <p className="text-sm text-muted-enhanced">
                      Sem enrolação. Resultados claros e objetivos.
                    </p>
                  </div>
                  <div className="p-4">
                    <h4 className="font-manrope font-semibold text-primary mb-2">Resultados Reais</h4>
                    <p className="text-sm text-muted-enhanced">
                      Problemas resolvidos com precisão e confiabilidade
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding" aria-labelledby="contact-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <h2 id="contact-heading" className="text-3xl sm:text-4xl md:text-5xl font-vinila text-gradient mb-4 sm:mb-6 px-4">
                Vamos Conversar
              </h2>
              <p className="text-base sm:text-lg text-muted-enhanced max-w-2xl mx-auto px-4">
                Pronto para otimizar seus processos? Descubra como podemos ajudar 
                sua empresa a alcançar excelência operacional.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                {/* Contact Form */}
                <Card className="glass-effect">
                  <CardContent className="p-6 sm:p-8">
                    <h3 className="text-2xl font-vinila text-primary mb-6">Envie uma Mensagem</h3>
                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-manrope text-muted-enhanced mb-2">
                          Nome *
                        </label>
                        <Input 
                          id="contact-name"
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Seu nome completo"
                          className="bg-background/50 border-border focus:border-accent text-primary touch-manipulation"
                          required
                          autoComplete="name"
                          aria-describedby="name-error"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-sm font-manrope text-muted-enhanced mb-2">
                          Email *
                        </label>
                        <Input 
                          id="contact-email"
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="seu@email.com"
                          className="bg-background/50 border-border focus:border-accent text-primary touch-manipulation"
                          required
                          autoComplete="email"
                          aria-describedby="email-error"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-message" className="block text-sm font-manrope text-muted-enhanced mb-2">
                          Mensagem *
                        </label>
                        <Textarea 
                          id="contact-message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Conte sobre seu projeto ou necessidade..."
                          rows={5}
                          className="bg-background/50 border-border focus:border-accent resize-none text-primary touch-manipulation"
                          required
                          aria-describedby="message-error"
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="btn-primary w-full touch-manipulation"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Contact Info */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-vinila text-primary mb-6">Contato</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center" role="img" aria-label="Email contact">
                          <Send className="text-accent" size={20} aria-hidden="true" />
                        </div>
                        <div>
                          <p className="font-manrope font-semibold text-primary">Email</p>
                          <a href="mailto:contato@fluxomize.com" className="text-muted-enhanced hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded">
                            contato@fluxomize.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center" role="img" aria-label="WhatsApp contact">
                          <MessageCircle className="text-accent" size={20} aria-hidden="true" />
                        </div>
                        <div>
                          <p className="font-manrope font-semibold text-primary">WhatsApp</p>
                          <button 
                            onClick={handleWhatsApp}
                            className="text-muted-enhanced hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded"
                            aria-label="Contact via WhatsApp"
                          >
                            (45) 99926-0139
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Card className="glass-effect">
                    <CardContent className="p-6">
                      <h4 className="font-vinila text-primary mb-4">Resposta Rápida</h4>
                      <p className="text-muted-enhanced leading-relaxed mb-4">
                        Estamos prontos para discutir como otimizar seus processos 
                        e alcançar resultados excepcionais.
                      </p>
                      <p className="text-sm text-muted-enhanced">
                        Resposta garantida em até 24 horas úteis.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted/20 border-t border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center gap-6">
            {/* Social Links */}
            <div className="flex gap-4" role="list" aria-label="Social media links">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              >
                <a
                  href="https://linkedin.com/company/fluxomize"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our LinkedIn company page"
                  role="listitem"
                >
                  <Linkedin className="w-5 h-5" aria-hidden="true" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              >
                <a
                  href="https://github.com/fluxomize"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our GitHub organization"
                  role="listitem"
                >
                  <Github className="w-5 h-5" aria-hidden="true" />
                </a>
              </Button>
            </div>

            {/* Copyright */}
            <p className="text-sm text-muted-foreground text-center">
              &copy; {new Date().getFullYear()} Fluxomize - Soluções em Tecnologia. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Notification */}
      {notification && (
        <div className="fixed inset-0 bg-black/50 notification-backdrop flex items-center justify-center z-50 p-4">
          <div className="bg-background border border-border rounded-lg shadow-2xl max-w-md w-full mx-4 notification-modal">
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                  notification.type === 'success' 
                    ? 'notification-success' 
                    : 'notification-error'
                }`}>
                  {notification.type === 'success' ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-vinila text-primary mb-2">
                    {notification.title}
                  </h3>
                  <p className="text-muted-enhanced leading-relaxed text-sm">
                    {notification.message}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-3">
                {notification.type === 'error' && (
                  <Button 
                    onClick={handleWhatsApp}
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-white"
                  >
                    WhatsApp
                  </Button>
                )}
                <Button 
                  onClick={() => setNotification(null)}
                  className="btn-primary"
                >
                  {notification.type === 'success' ? 'Perfeito!' : 'Entendi'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App