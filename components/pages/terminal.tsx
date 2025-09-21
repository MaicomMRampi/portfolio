export default function Terminal() {
  return (
    <div className="my-6 bg-[#0a0c10] text-white rounded-lg shadow-lg border border-blue-500/30 overflow-hidden w-full max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-[#111318] border-b border-blue-500/30">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>
        <span className="ml-4 text-sm text-gray-400">~/portfolio</span>
      </div>

      {/* Body */}
      <div className="px-6 py-4 font-mono text-sm leading-relaxed">
        <span className="text-gray-400">{"// Sobre mim"}</span>
        <br />
        <span className="text-cyan-400">const</span> developer = {"{"}
        <br />
        &nbsp;&nbsp;<span className="text-blue-400">name:</span>{" "}
        <span className="text-green-400">{'"Desenvolvedor Full Stack"'}</span>,
        <br />
        &nbsp;&nbsp;<span className="text-blue-400">location:</span>{" "}
        <span className="text-green-400">{'"Chapecó, Brasil"'}</span>,
        <br />
        &nbsp;&nbsp;<span className="text-blue-400">skills:</span> [
        <span className="text-green-400">{'"React"'}</span>,{" "}
        <span className="text-green-400">{'"Node.js"'}</span>,{" "}
        <span className="text-green-400">{'"TypeScript"'}</span>], <br />
        &nbsp;&nbsp;<span className="text-blue-400">passion:</span>{" "}
        <span className="text-green-400">{'"Criar soluções inovadoras"'}</span>,
        <br />
        &nbsp;&nbsp;<span className="text-blue-400">currentFocus:</span> [
        <span className="text-green-400">{'"Arquitetura de Software"'}</span>,
        <span className="text-green-400">{'"Ciência de Dados"'}</span>
        <span className="text-green-400">{'"Cybersegurança"'}</span>]
        <br />
        {"}"}
      </div>
    </div>
  );
}
