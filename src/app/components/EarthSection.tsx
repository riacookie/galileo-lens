import Section from "@/components/Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Thermometer, Globe, Users, Wind, type LucideIcon } from "lucide-react";

const stats: {
  id: string;
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  color: string;
}[] = [
  {
    id: "temp",
    title: "Global Temperature",
    value: "32",
    description: "Average surface temperature",
    icon: Thermometer,
    color: "text-red-400",
  },
  {
    id: "pop",
    title: "Population",
    value: "8.1B",
    description: "Current world population",
    icon: Users,
    color: "text-green-400",
  },
  {
    id: "co2",
    title: "CO₂ Levels",
    value: "421 ppm",
    description: "Atmospheric carbon dioxide",
    icon: Wind,
    color: "text-yellow-400",
  },
];

export default function EarthSection() {
  return (
    <Section
      id="earth"
      title="Earth Data"
      icon={Globe}
      subtitle="Live environmental and atmospheric data from our home planet"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <Card
              key={s.id}
              className="border-slate-700 bg-slate-800/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Icon className={`h-5 w-5 ${s.color}`} />
                  <CardTitle className="text-white">{s.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className={`text-3xl font-bold ${s.color} mb-2`}>
                  {s.value}
                </div>
                <CardDescription className="text-slate-400">
                  {s.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
