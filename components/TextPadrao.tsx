export default function TextDefault({ text }: { text: string }) {
  return (
    <h1 className="py-6 text-center text-4xl font-bold text-blue-500 drop-shadow [filter:drop-shadow(0_0_7px_#00a2ff)]">
      {text}
    </h1>
  );
}
