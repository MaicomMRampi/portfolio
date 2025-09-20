import { Coffee, Copyright, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {/* Sobre */}
        <div>
          <h4 className="font-bold text-2xl mb-4 text-blue-500">
            Maicom Mateus Rampi
          </h4>
          <p className="text-gray-600">
            Full stack que adora meter a mão no código e criar coisas novas.
            Sempre caçando desafios e brincando com tech.
          </p>
        </div>

        {/* Links Rápidos */}
        <div>
          <h4 className="font-bold mb-4 text-blue-500">Links Rápidos</h4>
          <ul className="text-gray-600 space-y-2">
            <li className="hover:text-blue-500 cursor-pointer">Sobre</li>
            <li className="hover:text-blue-500 cursor-pointer">Projetos</li>
            <li className="hover:text-blue-500 cursor-pointer">Contato</li>
          </ul>
        </div>

        {/* Serviços */}
        <div>
          <h4 className="font-bold mb-4 text-blue-500">Serviços</h4>
          <ul className="text-gray-600 space-y-2">
            <li className="hover:text-blue-500 cursor-pointer">
              Desenvolvimento Web
            </li>
          </ul>
        </div>
      </div>

      {/* Rodapé */}
      <div className="mt-8 border-t border-gray-200 pt-6 text-center flex flex-col md:flex-row items-center justify-center gap-2 text-gray-600">
        <Copyright className="w-4 h-4" />
        <span>{new Date().getFullYear()} Maicom Mateus Rampi, feito com</span>
        <Heart className="w-4 h-4 text-red-600" />
        <span>e</span>
        <Coffee className="w-4 h-4 text-blue-500" />
      </div>
    </footer>
  );
}
