import Section from "@/components/Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LucideIcon, MapPin, Moon, Thermometer } from "lucide-react";

const stats: {
  id: string;
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  color: string;
}[] = [
  {
    id: "distancce",
    title: "Distance",
    value: "384,400 km",
    description: "From Earth's center",
    icon: MapPin,
    color: "text-blue-400",
  },
  {
    id: "currentPhase",
    title: "Current Phase",
    value: "Waxing Gibbous",
    description: "78% illuminated",
    icon: Moon,
    color: "text-yellow-300",
  },
  {
    id: "surfaceTemp",
    title: "Surface Temp",
    value: "-173°C to 127°C",
    description: "Day/night range",
    icon: Thermometer,
    color: "text-purple-400",
  },
];

export default function MoonSection() {
  return (
    <Section
      id="moon"
      title="Moon Data"
      icon={Moon} // Replace with a moon icon if available
      subtitle="Current lunar information and orbital data"
      className="bg-slate-900/50"
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
                <div className="flex items-center">
                  <Icon className={`mr-3 h-8 w-8 ${s.color}`} />
                  <CardTitle className="text-lg font-semibold text-white">
                    {s.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{s.value}</div>
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
