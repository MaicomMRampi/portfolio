import { Card } from "@heroui/card";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import TextDefault from "../TextPadrao";
import TextPadraoSecudary from "../TextPadraoSecudary";
import Image from "next/image";
import Link from "next/link";

export default function Opportunity() {
  return (
    <section className="w-full space-y-10">
      <div className="text-center space-y-4">
        <TextDefault text="Vamos Criar Algo Incrível?" />
        <TextPadraoSecudary text="Estou sempre aberto a novos desafios e oportunidades. Entre em contato para discutirmos seu próximo projeto!" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contatos */}
        <div className="flex flex-col gap-4">
          <Link href={"https://wa.link/e9499v"} target="_blank">
            <Card className="bg-neutral-900 p-6 rounded-2xl shadow-lg flex items-start gap-4">
              <div className="flex justify-between w-full">
                <div className="flex flex-col gap-2">
                  <Image
                    src={"/images/whatsapp.png"}
                    width={25}
                    height={25}
                    alt="whats"
                  />
                  <div>
                    <p className="text-neutral-400 text-sm">WhatsApp</p>
                    <p className="text-white font-medium">(49) 99194-2288</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Image
                    src={"/images/wa.link_e9499v.png"}
                    width={80}
                    height={80}
                    alt="whats"
                  />
                </div>
              </div>
            </Card>
          </Link>

          <Card className="bg-neutral-900 p-6 rounded-2xl shadow-lg flex items-start gap-4">
            <Mail className="text-blue-500 w-6 h-6 shrink-0" />
            <div>
              <p className="text-neutral-400 text-sm">E-mail</p>
              <p className="text-white font-medium">
                maicom.mateus@yahoo.com.br
              </p>
            </div>
          </Card>

          <Card className="bg-neutral-900 p-6 rounded-2xl shadow-lg flex items-start gap-4">
            <MapPin className="text-blue-500 w-6 h-6 shrink-0" />
            <div>
              <p className="text-neutral-400 text-sm">Localização</p>
              <p className="text-white font-medium">Chapecó - SC</p>
            </div>
          </Card>
        </div>

        {/* Formulário / CTA */}
        <Card className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl shadow-lg text-white">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="w-7 h-7" />
            <h3 className="text-xl font-semibold">Envie uma Mensagem</h3>
          </div>
          <p className="text-sm text-neutral-200 mb-6">
            Preencha o formulário e entrarei em contato em breve.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-neutral-300 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-neutral-300 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <textarea
              placeholder="Sua mensagem"
              rows={4}
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-neutral-300 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-white text-blue-600 font-semibold hover:bg-neutral-100 transition"
            >
              Enviar
            </button>
          </form>
        </Card>
      </div>
    </section>
  );
}
