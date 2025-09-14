import { Card } from "@heroui/card";
import TextDefault from "../TextPadrao";
import TextPadraoSecudary from "../TextPadraoSecudary";
import { Avatar, AvatarGroup, AvatarIcon } from "@heroui/avatar";
export default function Depoiment() {
  return (
    <>
      <TextDefault text="O Que Dizem Sobre Mim" />
      <TextPadraoSecudary text="Feedback de clientes e colegas que trabalharam comigo" />

      <Card className="bg-black p-4 w-full md:w-[500px]">
        <div className="flex justify-center">
          <Avatar
            src="/images/logo.png"
            className="w-16 h-16 object-cover object-center"
            size="lg"
          />
        </div>
        <p className="text-center">⭐⭐⭐⭐⭐</p>

        <p className="text-center py-4">
          O nosso site ficou ótimo, Atendeu a nossa demanda. O seu atendimento
          foi excelente. Te agradeço pelo empenho e sempre vai ter a nossa
          indicação.
        </p>
        <p className="text-center text-blue-500 font-bold ">Adilson Robaldo</p>
        <p className="text-center">Ceo, Pwa Soluções Industriais</p>
      </Card>
    </>
  );
}
