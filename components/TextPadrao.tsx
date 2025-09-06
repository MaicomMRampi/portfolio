export default function TextDefault({ text }: { text: string }) {
  return (
    <h1 className="text-center text-4xl font-bold text-blue-500 neon-glow">
      {text}
    </h1>
  );
}
