"use client";
import { Card } from "@heroui/card";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import TextDefault from "../TextPadrao";
import TextPadraoSecudary from "../TextPadraoSecudary";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/stateful-button";
import { useState } from "react";
import axios from "axios";
import { addToast } from "@heroui/toast";

export default function Opportunity() {
  const handleSubmit = async () => {
    if (!values.name || !values.email || !values.message) {
      addToast({
        title: "Por favor, preencha todos os campos.",
        color: "danger",
        timeout: 3000,
        shouldShowTimeoutProgress: true,
      });
      return;
    }

    try {
      const send = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (send.status === 200) {
        addToast({
          title: "Mensagem enviada com sucesso!",
          description:
            "Obrigado por entrar em contato. Responderemos em breve.",
          color: "success",
          timeout: 3000,
          shouldShowTimeoutProgress: true,
        });
        setValues({ name: "", email: "", message: "" });
      } else {
        addToast({
          title: "Erro ao enviar a mensagem.",
          description: "Por favor, tente novamente mais tarde.",
          color: "danger",
          timeout: 3000,
          shouldShowTimeoutProgress: true,
        });
        setValues({ name: "", email: "", message: "" });
      }

      console.log("🚀 ~ handleSubmit ~ send:", send.status);
    } catch (error: any) {
      console.error(
        "❌ Erro ao enviar:",
        error.response?.data || error.message
      );
    }
  };

  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const valuesContact = async (field: string, value: string) => {
    setValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const data = {
    service_id: "service_ud9ddr9",
    template_id: "template_z6sr29i",
    user_id: "u0NQo0sRKaS8Kg6Wc",
    template_params: {
      nome: values.name,
      mensagem: values.message,
      email: values.email,
    },
  };

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
            <MapPin className="text-red-800 w-6 h-6 shrink-0" />
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
          <div className="space-y-4">
            <input
              value={values.name}
              type="text"
              onChange={(e) => valuesContact("name", e.target.value)}
              placeholder="Seu nome"
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-neutral-300 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              value={values.email}
              type="email"
              onChange={(e) => valuesContact("email", e.target.value)}
              placeholder="Seu e-mail"
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-neutral-300 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <textarea
              value={values.message}
              onChange={(e) => valuesContact("message", e.target.value)}
              placeholder="Sua mensagem"
              rows={4}
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-neutral-300 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <div className="justify-center flex">
              <Button onClick={handleSubmit}>Enviar Mensagem</Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
