import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Globe,
  Download,
  MapPin,
  Calendar,
  Award,
  Coffee,
  Zap,
  Terminal,
  Rocket,
  Star,
  Eye,
  GitBranch,
  Server,
  Target,
  MessageSquare,
  Heart,
  ArrowRight,
  Play,
  ChevronDown,
} from "lucide-react";
import TextDefault from "../TextPadrao";
export default function Expert() {
  const skills = [
    {
      category: "Frontend",
      icon: <Globe className="h-5 w-5" />,
      items: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Vue.js", level: 75 },
      ],
    },
    {
      category: "Backend",
      icon: <Server className="h-5 w-5" />,
      items: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 82 },
        { name: "MongoDB", level: 78 },
        { name: "GraphQL", level: 70 },
      ],
    },
    {
      category: "DevOps & Tools",
      icon: <Terminal className="h-5 w-5" />,
      items: [
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Git", level: 95 },
        { name: "Vercel", level: 90 },
        { name: "CI/CD", level: 72 },
      ],
    },
  ];

  return (
    <>
      <TextDefault text={"Habilidades e Expertise"} />
      <p className="font-bold text-gray-400 text-center py-6">
        Domínio completo do stack moderno de desenvolvimento, desde frontend até
        infraestrutura
      </p>
      <div className="p-8 rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((item, index) => (
          <div className="bg-black rounded-2xl h-[200px] w-[400px]"></div>
        ))}
      </div>
    </>
  );
}
