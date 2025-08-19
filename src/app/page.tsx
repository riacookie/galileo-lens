import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Thermometer, Globe, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text">
              Explore our Universe
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Discover intriguing insights about our universe, spanning from
              Earth to the Moon and satellites. Galileo Lens leverages
              NASA&apos;s observation APIs to deliver the latest data, including
              stunning satellite imagery
            </p>
          </div>
        </div>
      </section>

      <section id="earth" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Globe className="h-12 w-12 text-blue-400 mr-3" />
              <h3 className="text-4xl font-bold text-white">Earth Data</h3>
            </div>
            <p className="text-slate-400 text-lg">
              Live environmental and atmospheric data from our home planet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2">
                  <Thermometer className="h-5 w-5 text-red-400" />
                  <CardTitle className="text-white">
                    Global Temperature
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-red-400 mb-2">32</div>
                <CardDescription className="text-slate-400">
                  Average surface temperature
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-green-400" />
                  <CardTitle className="text-white">Population</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-400 mb-2">
                  8.1B
                </div>
                <CardDescription className="text-slate-400">
                  Current world population
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
