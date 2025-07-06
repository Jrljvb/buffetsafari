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
        {/* conteúdo */}
      </main>
    </div>
  );
}