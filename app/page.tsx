import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Scissors,
  User,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Award,
  Crown,
  Sparkles,
  ArrowRight,
  Check,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function JoaoNetoLanding() {
  const whatsappMessage = encodeURIComponent(
    "Olá, gostaria de agendar um horário com o JoãoNeto | Visagista!"
  );
  const whatsappNumber = "556332177937"; // Substitua pelo número real
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-premium-white via-gray-50 to-premium-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-premium-white/90 backdrop-blur-xl border-b border-premium-gold/20 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Image
                src="/logo.svg"
                alt="João Neto Visage Logo"
                width={150}
                height={150}
                className="w-150 h-150 rounded-xl object-contain"
              />
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#sobre"
              className="text-gray-600 hover:text-premium-black transition-colors font-medium"
            >
              Sobre
            </Link>
            <Link
              href="#visagismo"
              className="text-gray-600 hover:text-premium-black transition-colors font-medium"
            >
              Visagismo
            </Link>
            <Link
              href="#galeria"
              className="text-gray-600 hover:text-premium-black transition-colors font-medium"
            >
              Galeria
            </Link>
            <Link
              href="#contato"
              className="text-gray-600 hover:text-premium-black transition-colors font-medium"
            >
              Contato
            </Link>
          </nav>

          <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button className="bg-premium-black hover:bg-gray-800 text-premium-white px-6 py-2 rounded-xl font-medium shadow-lg shadow-premium-black/25 transition-all duration-300 hover:shadow-premium-black/40">
              Consultoria
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/principal.svg?height=1080&width=1920&text=Elegant+barbershop+interior+with+modern+styling+chair+and+premium+lighting"
            alt="Ambiente elegante de barbearia premium"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-premium-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-premium-black/60 via-transparent to-premium-black/30"></div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-premium-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-premium-gold/15 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
          <div className="mb-3">
            <div className="inline-flex items-center space-x-2 bg-premium-white/20 backdrop-blur-xl border border-premium-gold/30 rounded-full px-4 py-2 mb-3 shadow-lg shadow-premium-black/20">
              <Crown className="h-4 w-4 text-premium-gold" />
              <span className="text-premium-white text-sm font-medium">
                Consultoria de Visagismo Masculino
              </span>
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-12">
            <div className="bg-premium-white/20 backdrop-blur-xl rounded-2xl p-4 border border-premium-gold/30 shadow-lg shadow-premium-black/20">
              <Image
                src="/logo.svg"
                alt="João Neto Visage Logo"
                width={250}
                height={250}
                className="w-250 h-250 object-contain"
              />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-3 leading-tight">
            <span className="text-premium-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] shadow-black">
              Venha ser
            </span>
            <br />
            <span className="text-premium-gold drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] shadow-black">
              Elegante
            </span>
          </h1>

          <div className="mb-3">
            <h2 className="text-2xl md:text-3xl font-light text-premium-white/90 mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] shadow-black">
              Descubra o Melhor Estilo de cabelo para Você
            </h2>
            <p className="text-3xl md:text-4xl font-bold text-premium-white mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] shadow-black">
              Seu rosto é sua Marca!
            </p>
          </div>

          <p className="text-xl md:text-2xl mb-12 text-premium-white/80 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] shadow-black">
            Conte com minha orientação profissional para transformar seu visual,
            expressar sua personalidade e elevar sua autoestima.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://www.trinks.com/sion-barber-club-ltda/escolha-profissional/12564413/frameBusca"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-premium-gold hover:bg-premium-gold/90 text-premium-black px-10 py-4 text-lg rounded-xl font-medium shadow-xl shadow-premium-black/50 transition-all duration-300 hover:shadow-premium-black/60 hover:scale-105 group"
              >
                Agendar Consultoria
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link
              href="https://api.whatsapp.com/message/5DZV2XBIWZEKI1?autoload=1&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-premium-white/50 text-premium-white hover:bg-premium-white/10 px-8 py-4 text-lg rounded-xl font-medium backdrop-blur-xl bg-premium-white/5"
              >
                Saiba Mais
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
            <div className="order-2 md:order-1">
              <div className="mb-3">
                <div className="inline-flex items-center space-x-2 bg-premium-gold/10 border border-premium-gold/30 rounded-full px-4 py-2 mb-6">
                  <Award className="h-4 w-4 text-premium-gold" />
                  <span className="text-premium-black text-sm font-medium">
                    Mais de 10 Anos de Experiência
                  </span>
                </div>
              </div>

              <h2 className="text-5xl font-bold mb-8 text-premium-black">
                João Neto
              </h2>

              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p className="text-xl text-gray-700 font-light">
                  <span className="text-premium-black font-semibold">
                    Barbeiro há mais de 10 anos
                  </span>
                  , com foco em revelar a verdadeira identidade de cada cliente.
                </p>
                <p>
                  Desde 2022, aprofundei meus estudos no{" "}
                  <span className="text-premium-black font-medium">
                    visagismo masculino
                  </span>
                  , onde técnica e arte se encontram para criar um visual com
                  propósito.
                </p>
              </div>

              <div className="mt-10 flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-premium-gold" />
                  <span className="text-gray-700 font-medium">
                    Especialista em Visagismo
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-premium-gold" />
                  <span className="text-gray-700 font-medium">
                    Atendimento Personalizado
                  </span>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 relative">
              <div className="relative">
                <div className="absolute -inset-4 bg-premium-gold/10 rounded-3xl blur-2xl"></div>
                <div className="relative bg-premium-white/90 backdrop-blur-xl rounded-3xl p-2 shadow-2xl shadow-premium-black/10 border border-premium-gold/20">
                  <Image
                    src="/perfil.jpg?height=600&width=500"
                    alt="João Neto - Visagista"
                    width={500}
                    height={600}
                    className="rounded-2xl"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-premium-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-xl shadow-premium-black/10 border border-premium-gold/20">
                  <Scissors className="h-8 w-8 text-premium-gold" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visagismo Section */}
      <section
        id="visagismo"
        className="py-32 bg-gradient-to-b from-gray-50 to-premium-white relative"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-premium-gold/10 border border-premium-gold/30 rounded-full px-4 py-2 mb-8">
              <Sparkles className="h-4 w-4 text-premium-gold" />
              <span className="text-premium-black text-sm font-medium">
                O que é Visagismo?
              </span>
            </div>

            <h2 className="text-5xl font-bold mb-8 text-premium-black">
              A Arte de Harmonizar
            </h2>

            <div className="text-left max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                <span className="text-premium-black font-semibold">
                  Visagismo é a ciência e a arte
                </span>{" "}
                de harmonizar o seu rosto com o seu estilo, personalidade e
                estilo de vida. Não é apenas sobre aparência, mas sobre se
                sentir bem consigo mesmo, aumentar a confiança e destacar o que
                você tem de melhor.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed">
                Aqui, você vai descobrir como a{" "}
                <span className="text-premium-black font-medium">
                  consultoria personalizada
                </span>{" "}
                pode ajudar a transformar seu visual para que ele fale por você,
                mostrando sua identidade real.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-premium-white/90 backdrop-blur-xl border border-premium-gold/20 shadow-xl shadow-premium-black/5 hover:shadow-premium-black/10 transition-all duration-300 group rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-premium-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <User className="h-8 w-8 text-premium-gold" />
                </div>
                <h3 className="text-xl font-bold text-premium-black mb-4">
                  Análise Personalizada
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Estudo completo do seu rosto, personalidade e estilo de vida
                  para criar harmonia perfeita.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-premium-white/90 backdrop-blur-xl border border-premium-gold/20 shadow-xl shadow-premium-black/5 hover:shadow-premium-black/10 transition-all duration-300 group rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-premium-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Scissors className="h-8 w-8 text-premium-gold" />
                </div>
                <h3 className="text-xl font-bold text-premium-black mb-4">
                  Transformação Visual
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Corte e estilo que expressam sua personalidade e destacam seus
                  melhores atributos.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-premium-white/90 backdrop-blur-xl border border-premium-gold/20 shadow-xl shadow-premium-black/5 hover:shadow-premium-black/10 transition-all duration-300 group rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-premium-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Crown className="h-8 w-8 text-premium-gold" />
                </div>
                <h3 className="text-xl font-bold text-premium-black mb-4">
                  Elevação da Autoestima
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Aumento da confiança através de um visual que realmente
                  representa quem você é.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Galeria Section */}
      <section id="galeria" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-5">
            <div className="inline-flex items-center space-x-2 bg-premium-gold/10 border border-premium-gold/30 rounded-full px-4 py-2 mb-5">
              <Award className="h-4 w-4 text-premium-gold" />
              <span className="text-premium-black text-sm font-medium">
                Nossos Trabalhos
              </span>
            </div>

            <h2 className="text-5xl font-bold mb-3 text-premium-black">
              Galeria de Transformações
            </h2>
            <p className="text-xl text-gray-600">
              Conheça alguns dos nossos trabalhos e veja como cada cliente
              encontrou sua melhor versão
            </p>
          </div>

          {/* Grid de Imagens - Layout Otimizado para 4 Fotos Verticais */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-5">
            {/* Trabalho 1 */}
            <Card className="group bg-premium-white/90 backdrop-blur-xl border border-premium-gold/20 shadow-xl shadow-premium-black/5 hover:shadow-premium-black/15 transition-all duration-500 rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="/3.jpg?height=2080&width=1170&text=Transformação+executiva+premium+antes+e+depois"
                    alt="Transformação executiva premium"
                    width={1170}
                    height={2080}
                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-premium-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-premium-white/95 backdrop-blur-xl rounded-xl p-4 border border-premium-gold/20">
                      <h4 className="font-bold text-premium-black mb-1">
                        Executivo Premium
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Transformação completa
                      </p>
                      <div className="flex items-center mt-2">
                        <div className="w-2 h-2 bg-premium-gold rounded-full mr-2"></div>
                        <span className="text-xs text-premium-gold font-medium">
                          Antes & Depois
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trabalho 2 */}
            <Card className="group bg-premium-white/90 backdrop-blur-xl border border-premium-gold/20 shadow-xl shadow-premium-black/5 hover:shadow-premium-black/15 transition-all duration-500 rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="/4.jpg?height=2080&width=1170&text=Estilo+moderno+com+barba+alinhada+profissional"
                    alt="Estilo moderno profissional"
                    width={1170}
                    height={2080}
                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-premium-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-premium-white/95 backdrop-blur-xl rounded-xl p-4 border border-premium-gold/20">
                      <h4 className="font-bold text-premium-black mb-1">
                        Estilo Moderno
                      </h4>
                      <p className="text-gray-600 text-sm">Técnica avançada</p>
                      <div className="flex items-center mt-2">
                        <div className="w-2 h-2 bg-premium-gold rounded-full mr-2"></div>
                        <span className="text-xs text-premium-gold font-medium">
                          Corte + Barba
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trabalho 3 */}
            <Card className="group bg-premium-white/90 backdrop-blur-xl border border-premium-gold/20 shadow-xl shadow-premium-black/5 hover:shadow-premium-black/15 transition-all duration-500 rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="/1.jpg?height=2080&width=1170&text=Visagismo+completo+jovem+executivo+elegante"
                    alt="Visagismo jovem executivo"
                    width={1170}
                    height={2080}
                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-premium-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-premium-white/95 backdrop-blur-xl rounded-xl p-4 border border-premium-gold/20">
                      <h4 className="font-bold text-premium-black mb-1">
                        Jovem Executivo
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Estilo sofisticado
                      </p>
                      <div className="flex items-center mt-2">
                        <div className="w-2 h-2 bg-premium-gold rounded-full mr-2"></div>
                        <span className="text-xs text-premium-gold font-medium">
                          Visagismo
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trabalho 4 */}
            <Card className="group bg-premium-white/90 backdrop-blur-xl border border-premium-gold/20 shadow-xl shadow-premium-black/5 hover:shadow-premium-black/15 transition-all duration-500 rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="/2.jpg?height=2080&width=1170&text=Barba+esculpida+premium+design+personalizado"
                    alt="Barba esculpida premium"
                    width={1170}
                    height={2080}
                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-premium-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-premium-white/95 backdrop-blur-xl rounded-xl p-4 border border-premium-gold/20">
                      <h4 className="font-bold text-premium-black mb-1">
                        Barba Premium
                      </h4>
                      <p className="text-gray-600 text-sm">Design exclusivo</p>
                      <div className="flex items-center mt-2">
                        <div className="w-2 h-2 bg-premium-gold rounded-full mr-2"></div>
                        <span className="text-xs text-premium-gold font-medium">
                          Especialidade
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA da Galeria */}
          <div className="text-center">
            <p className="text-xl text-gray-600 mb-5">
              Quer ver mais trabalhos? Siga nosso Instagram para acompanhar as
              transformações diárias
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://instagram.com/joaonetovisage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-premium-gold hover:bg-premium-gold/90 text-premium-black px-8 py-4 text-lg rounded-xl font-medium shadow-xl shadow-premium-black/25 transition-all duration-300 hover:shadow-premium-black/40 hover:scale-105 group"
                >
                  <Instagram className="mr-2 h-5 w-5" />
                  Seguir no Instagram
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-premium-gold text-premium-black hover:bg-premium-gold/10 px-8 py-4 text-lg rounded-xl font-medium bg-transparent"
                >
                  Agendar Consultoria
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-15 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-premium-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-premium-gold/15 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-premium-gold/10 border border-premium-gold/30 rounded-full px-4 py-2 mb-8">
              <Crown className="h-4 w-4 text-premium-gold" />
              <span className="text-premium-black text-sm font-medium">
                Sua Transformação Começa Agora
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-5 text-premium-black leading-tight">
              Chegou a hora de investir em você
            </h2>

            <div className="space-y-6 text-xl md:text-2xl text-gray-600 mb-12">
              <p className="font-light">
                Sua imagem fala antes mesmo de você dizer qualquer palavra.
              </p>
              <p className="text-premium-black font-semibold text-2xl md:text-3xl">
                Seu rosto é sua marca.
              </p>
              <p className="font-light">
                Venha se redescobrir e encontrar a sua melhor versão.
              </p>
            </div>

            <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-premium-black hover:bg-gray-800 text-premium-white px-12 py-6 text-xl rounded-xl font-medium shadow-2xl shadow-premium-black/25 transition-all duration-300 hover:shadow-premium-black/40 hover:scale-105 group"
              >
                Descobrir Minha Melhor Versão
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section
        id="contato"
        className="py-32 bg-gradient-to-b from-gray-50 to-premium-white"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-5xl font-bold mb-8 text-premium-black">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-600">
              Pronto para transformar sua imagem? Vamos conversar sobre sua
              jornada de transformação.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <h3 className="text-3xl font-bold text-premium-black mb-12">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-start space-x-4 group cursor-pointer hover:bg-premium-gold/5 p-4 rounded-2xl transition-all duration-300 min-h-[100px]">
                    <div className="w-14 h-14 bg-premium-gold/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Phone className="h-6 w-6 text-premium-gold" />
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      <p className="font-semibold text-premium-black text-lg mb-1">
                        WhatsApp
                      </p>
                      <p className="text-gray-600 mb-1">+55 63 98437-6983</p>
                      <p className="text-premium-gold text-sm font-medium">
                        Clique para conversar
                      </p>
                    </div>
                  </div>
                </Link>

                <Link
                  href="https://www.instagram.com/joaonetovisage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-start space-x-6 group cursor-pointer hover:bg-premium-gold/5 p-4 rounded-2xl transition-all duration-300 min-h-[100px]">
                    <div className="w-14 h-14 bg-premium-gold/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Instagram className="h-6 w-6 text-premium-gold" />
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      <p className="font-semibold text-premium-black text-lg mb-1">
                        Instagram
                      </p>
                      <p className="text-gray-600 mb-1">@joaonetovisage</p>
                      <p className="text-premium-gold text-sm font-medium">
                        Siga para ver nosso trabalho
                      </p>
                    </div>
                  </div>
                </Link>

                <div className="flex items-start space-x-6 group cursor-pointer hover:bg-premium-gold/5 p-4 rounded-2xl transition-all duration-300 min-h-[100px]">
                  <div className="w-14 h-14 bg-premium-gold/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-premium-gold" />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <p className="font-semibold text-premium-black text-lg mb-1">
                      Localização
                    </p>
                    <p className="text-gray-600 mb-1">
                      Rua SO 05, ACSO 1, Nº 1 Conjunto 04, Lote 41, Sala 01,
                      Palmas, Tocantins 77015018
                    </p>
                    <p className="text-gray-600 text-sm">
                      Sion Barber Club | João Neto Visage
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="bg-premium-white/90 backdrop-blur-xl border border-premium-gold/20 shadow-2xl shadow-premium-black/10 rounded-3xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-8 pb-4">
                    <h3 className="text-3xl font-bold text-premium-black mb-4 text-center">
                      Nossa Localização
                    </h3>
                    <p className="text-gray-600 text-center mb-6">
                      Venha nos visitar em nosso espaço premium
                    </p>
                  </div>

                  {/* Mapa */}
                  <div className="relative h-96 bg-gray-100 rounded-b-3xl overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507.89527107222784!2d-48.33760097725805!3d-10.187876928980574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9324cbc769fdc40b%3A0x6a694989cb6835d6!2sSion%20Barber%20Club!5e1!3m2!1spt-BR!2sbr!4v1752254791471!5m2!1spt-BR!2sbr"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="grayscale hover:grayscale-0 transition-all duration-500"
                    ></iframe>

                    {/* Overlay com informações */}
                    <div className="absolute bottom-4 left-4 right-4 bg-premium-white/95 backdrop-blur-xl rounded-xl p-4 border border-premium-gold/20">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-premium-gold/10 rounded-xl flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-premium-gold" />
                        </div>
                        <div>
                          <p className="font-semibold text-premium-black text-sm">
                            Sion Barber Club | João Neto Visage
                          </p>
                          <p className="text-gray-600 text-xs">
                            Rua SO 05, ACSO 1, Nº 1 Conjunto 04, Lote 41, Sala
                            01, Palmas, Tocantins 77015018
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-premium-black text-premium-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <Image
                src="/logo2.svg"
                alt="João Neto Visage Logo"
                width={150}
                height={150}
                className="w-150 h-150 rounded-xl object-contain"
              />
            </div>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-premium-gold transition-colors p-3 rounded-xl hover:bg-gray-800"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-premium-gold transition-colors p-3 rounded-xl hover:bg-gray-800"
              >
                <Phone className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-premium-gold transition-colors p-3 rounded-xl hover:bg-gray-800"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 mb-2">
              &copy; 2025 Briefing Inteligência de Negócios. Todos os direitos
              reservados.
            </p>
            <p className="text-premium-gold text-sm">
              Transformando sua empresa através da tecnologia
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
