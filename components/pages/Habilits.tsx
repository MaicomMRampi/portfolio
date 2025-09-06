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
import { Card } from "@heroui/card";
import { Progress } from "@heroui/progress";
import TextPadraoSecudary from "../TextPadraoSecudary";

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
      <TextPadraoSecudary
        text="Domínio completo do stack moderno de desenvolvimento, desde frontend até
        infraestrutura"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 w-full">
        {skills.map((skill) => (
          <Card
            className="bg-black p-6 w-full hover:scale-105 transition-all ease-in-out duration-300"
            key={skill.category}
          >
            <h3 className="text-xl text-blue-500 font-semibold mb-4 flex items-center gap-2">
              {skill.icon} {skill.category}
            </h3>
            <ul>
              {skill.items.map((item) => (
                <li key={item.name} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span>{item.name}</span>
                    <span>{item.level}%</span>
                  </div>
                  <Progress className="max-w-md" value={item.level} />
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </>
  );
}
