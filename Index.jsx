import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, MapPin, Phone, Mail, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function BuffetSafariSite() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-gradient-to-b from-yellow-100 to-green-100 min-h-screen text-zinc-900">
      <header className="bg-yellow-400 p-6 flex justify-between items-center shadow-md">
        <h1 className="text-3xl font-bold text-green-900">Buffet Safari</h1>
        <Button
          className="bg-green-600 text-white rounded-xl hover:bg-green-700"
          onClick={() => window.open("https://wa.me/5519993207357", "_blank")}
        >
          Solicite um Orçamento
        </Button>
      </header>

      <main className="p-6 max-w-5xl mx-auto grid gap-8">
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-orange-600 mb-4">Realizamos Sonhos!</h2>
          <p className="text-lg text-green-800">
            Ambiente térreo, brinquedos para todas as idades (de 0 a 100 anos 😄),
            tirolesa, arvorismo, cardápios diversos, brindes especiais e equipe treinada.
            Tudo servido na hora, fresquinho, com segurança e muito carinho!
          </p>
        </motion.section>

        <section className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold text-green-700 mb-2">Serviços Inclusos</h3>
              <ul className="list-disc pl-5 text-green-900 space-y-1">
                <li>Espaço Físico completo</li>
                <li>Brinquedos para todas as idades</li>
                <li>Fotógrafo (em pacotes promocionais)</li>
                <li>Festa completa: decoração, bolo e muito mais!</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold text-green-700 mb-2">Diferenciais</h3>
              <ul className="list-disc pl-5 text-green-900 space-y-1">
                <li>Tirolesa e Arvorismo exclusivos</li>
                <li>Comidas fresquinhas servidas na hora</li>
                <li>Capacidade para até 90 convidados</li>
                <li>Brinquedos vistoriados e higienizados</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h3 className="text-xl text-orange-500 font-semibold mb-2">Promoção por tempo limitado!</h3>
          <p className="text-green-800">Aproveite os pacotes promocionais com fotógrafo incluso!*</p>
          <p className="text-xs text-zinc-500">*Oferta por tempo limitado — consulte disponibilidade</p>
        </motion.section>

        <section className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl shadow-inner">
          <div className="flex items-center gap-2">
            <MapPin className="text-green-700" />
            <span className="text-green-900">Av José Bonifácio 529 - Jd Flamboyant, Campinas</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="text-green-700" />
            <a href="tel:+5519993207357" className="text-green-900">(19) 99320-7357</a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="text-green-700" />
            <a href="mailto:buffetsafari.campinas@gmail.com" className="text-green-900">buffetsafari.campinas@gmail.com</a>
          </div>
        </section>

        <footer className="text-center py-6">
          <div className="flex justify-center gap-6 mb-2">
            <a href="https://www.instagram.com/buffetsafari" target="_blank">
              <Instagram className="text-orange-500 hover:text-orange-700" />
            </a>
            <a href="https://g.page/r/CbIXu2b4x7wqEBM/review" target="_blank">
              <Star className="text-yellow-400 hover:text-yellow-600" />
            </a>
          </div>
          <p className="text-sm text-zinc-600">© {currentYear} Buffet Safari - Todos os direitos reservados.</p>
        </footer>
      </main>
    </div>
  );
}
