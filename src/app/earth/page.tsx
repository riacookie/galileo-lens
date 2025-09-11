"use client";
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  ArrowLeft,
  Camera,
  Calendar,
  AlertTriangle,
  Thermometer,
  Wind,
  Droplets,
  Eye,
  MapPin,
  Slice,
  LucideIcon,
} from "lucide-react";
import { accessSync } from 'fs';
import { get } from 'http';

export default function Home() {

  interface ClmtData {
    id: string;
    value: string;
    metric: string;
    icon: LucideIcon;
    trend: "increasing" | "decreasing" | "stable";
  }

  const [clmtData, setClmtData] = useState<ClmtData[] | []>([]);

  useEffect (() => {

    function getTrend(prevDateValue: number, latestDateValue: number): "increasing" | "decreasing" | "stable" {
      if (latestDateValue > prevDateValue) {
        return "increasing";
      } else if (latestDateValue < prevDateValue) {
        return "decreasing";
      } else {
        return "stable";
      }
    };

    async function fetchData() {
      setClmtData([]); //Clears the previous climate data

      try {
        const response = await fetch(
          "https://power.larc.nasa.gov/api/temporal/daily/point?parameters=T2M,PS,RH2M,WS50M&community=RE&longitude=0&latitude=0&start=20250701&end=20250705&format=JSON",
        );
        

        const actualData = await response.json();
        console.log(actualData);
        const properties = actualData.properties.parameter; //Access values
        const parameters = actualData.parameters; //Access description and unit

        const dateKey = Object.keys(properties.T2M);

        const [prevDate, latestDate] = dateKey.slice(-2);
        const items: ClmtData[] = []

        for (const key of Object.keys(properties)) {
          const currData = properties[key];

          const value = currData[latestDate].toString();
          const trend = getTrend(currData[prevDate], currData[latestDate]);

          const longName = parameters[key].longname;
          const unit = parameters[key].units;


          const iconMap: { [key: string]: LucideIcon } = {
            T2M: Thermometer,
            PS: MapPin,
            RH2M: Droplets,
            WS50M: Wind,
          };

          const icon = iconMap[key] || Globe;

          items.push({
              id: `${latestDate}-${key}`,
              value: `${value} ${unit}`,
              metric: longName,
              icon: icon,
              trend: trend,
            });


        setClmtData(items);
        }
      }

      catch (error) {
        console.error("Error fetching climate data:", error);
      };
    };

    fetchData();
    }, []);


  const earthImages = [
    {
      id: 1,
      title: "Earth from DSCOVR",
      date: "2024-01-15",
      description: "Full disk image of Earth showing the Americas",
      url: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      title: "Hurricane Formation",
      date: "2024-01-14",
      description: "Satellite view of tropical storm development",
      url: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      title: "Aurora Borealis",
      date: "2024-01-13",
      description: "Northern lights captured from the ISS",
      url: "/placeholder.svg?height=300&width=400",
    },
  ];

  const earthEvents = [
    {
      id: 1,
      title: "Solar Eclipse Path",
      date: "2024-04-08",
      type: "Eclipse",
      description: "Total solar eclipse visible across North America",
    },
    {
      id: 2,
      title: "Geomagnetic Storm Alert",
      date: "2024-01-16",
      type: "Space Weather",
      description: "Moderate geomagnetic storm expected due to solar activity",
    },
    {
      id: 3,
      title: "Equinox",
      date: "2024-03-20",
      type: "Seasonal",
      description: "Spring equinox - equal day and night duration",
    },
  ];

  const climateData = [
    {
      metric: "Sea Level Rise",
      value: "3.4 mm/year",
      trend: "increasing",
      icon: Droplets,
    },
    {
      metric: "Wind speed",
      value: "14.2M km²",
      trend: "decreasing",
      icon: Thermometer,
    },
    {
      metric: "Atmospheric Pressure",
      value: "1013.25 hPa",
      trend: "stable",
      icon: Wind,
    },
    { metric: "Ozone Layer", value: "300 DU", trend: "recovering", icon: Eye },
  ]


  const [titleClass, setTitleClass] = useState("etitle-hidden");

  useEffect (() => {
    const timeout = setTimeout(() => setTitleClass("etitle-visible"), 50);
    return () => clearTimeout(timeout);
  }, [])

  return (
    <div className="min-h-screen justify-center bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 p-10">
      <section className="px-4 py-20">
        <div className="container mx-auto text-center">
          <h1
            className={`z-10 mb-6 text-5xl font-bold text-white md:text-7xl ${titleClass}`}
          >
            Welcome to Earth
          </h1>
          <p
            className={`md:text-4-xl z-10 mb-10 text-2xl text-gray-200 ${titleClass}`}
          >
            All of Earth within your screen, powered by Galileo Lens
          </p>
        </div>
      </section>


      {/* Climate data */}
      <section className="px-4 py-20 sm:px-8 lg:px-20 xl:px-40">
        <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
          Climate Data
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card className="border-none bg-gray-800 text-white">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span>Your Location</span>
                <MapPin className="h-4 w-6 text-blue-400" />
              </CardTitle>
              <CardDescription>
                Current geographical coordinates
              </CardDescription>
            </CardHeader>
            <CardContent className="text-xl font-bold sm:text-2xl">
              {userLocation.latitude !== null &&
              userLocation.longitude !== null ? (
                <p>
                  {userLocation.latitude.toFixed(4)}°N,{" "}
                  {userLocation.longitude.toFixed(4)}°E
                </p>
              ) : (
                <p className="text-gray-400">Requesting location...</p>
              )}
            </CardContent>
          </Card>
          {loading ? (
            <Card className="border-none bg-gray-800 text-white">
              <CardContent className="text-xl font-bold sm:text-2xl">
                <p className="text-gray-400">Loading weather data...</p>
              </CardContent>
            </Card>
          ))}
          ;
        </div>
      </section>


      <section className="py-20 px-4 sm:px-8 lg:px-20 xl:px-40">
        <h2 className="text-3xl font-bold text-white mb-6">Earth stuff</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clmtData.map((item, index) => (
            <Card key={index} className="bg-gray-800 text-white border-none">
              <CardHeader>
                <CardTitle className="flex flex-wrap items-center my-2 justify-between">
                    <span>{item.metric}</span>
                    <div className='flex flex-wrap'>
                      <item.icon className="w-5 h-5 mr-2 text-blue-400" />
                      <Badge
                        variant={
                          item.trend === "increasing"
                            ? "destructive"
                            : item.trend === "decreasing"
                              ? "secondary"
                              : "default"
                        }
                        className="text-xs flex"
                      >
                        {item.trend}
                      </Badge>
                    </div>
                </CardTitle>
              </CardHeader>
              <CardContent className='text-3xl font-bold flex flex-wrap '>
                <p>{item.value}</p>
              </CardContent>
            </Card>
          ))}
          ;
        </div>
      </section>


      {/* Earth images */}
      <section className="px-4 py-20 sm:px-8 lg:px-20 xl:px-40">
        <h2 className="mb-6 text-3xl font-bold text-white">Earth Images</h2>
        <div className="flex flex-col items-center gap-6 py-8 md:flex-row">
          <Image
            src={
              "https://plus.unsplash.com/premium_photo-1712039658659-7019cfe912e1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWFydGglMjBzcGFjZXxlbnwwfHwwfHx8MA%3D%3D"
            }
            alt="Earth from space"
            width={600}
            height={400}
            className="aspect-[16/9] overflow-hidden rounded-lg object-cover md:aspect-[9/16]"
          />

          <div className='flex flex-col md:flex-row items-center gap-6 py-8'>
              <img
              src={"https://plus.unsplash.com/premium_photo-1712039658659-7019cfe912e1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWFydGglMjBzcGFjZXxlbnwwfHwwfHx8MA%3D%3D"}
                alt="Earth from space"
                className="aspect-[16/9] md:aspect-[9/16] rounded-lg overflow-hidden object-cover"
              />


              <p className='text-gray-200'>
                All the people here who bought this wireless tungsten cube to admire its surreal heft have precisely the wrong mindset.
                I, in my exalted wisdom and unbridled ambition, bought this cube to become fully accustomed to the intensity of its density,
                to make its weight bearable and in fact normal to me, so that all the world around me may fade into a fluffy arena of gravitational
                inconsequence. And it has worked, to profound success. I have carried the tungsten with me, have grown attached to the downward pull of its small form, its desire to be one with the floor. This force has become so normal to me that lifting any other object now feels like lifting cotton candy, or a fluffy pillow. Big burly manly men who pump iron now seem to me as little children who raise mere aluminum.
              </p>
          </div>
            



          <div className='flex flex-col md:flex-row items-center gap-6 py-8'>
            
            <img
              src={"https://images.unsplash.com/photo-1451187580459-43490279c0fa?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWFydGglMjBzcGFjZXxlbnwwfHwwfHx8MA%3D%3D"}
              alt="Earth from space"
              className="aspect-[16/9] md:aspect-[9/16] rounded-lg object-cover overflow-hidden order-first md:order-1"
            />
            
            <p className='text-gray-200'>
              All the people here who bought this wireless tungsten cube to admire its surreal heft have precisely the wrong mindset. 
              I, in my exalted wisdom and unbridled ambition, bought this cube to become fully accustomed to the intensity of its density, 
              to make its weight bearable and in fact normal to me, so that all the world around me may fade into a fluffy arena of gravitational 
              inconsequence. And it has worked, to profound success. I have carried the tungsten with me, have grown attached to the downward pull of its small form, its desire to be one with the floor. This force has become so normal to me that lifting any other object now feels like lifting cotton candy, or a fluffy pillow. Big burly manly men who pump iron now seem to me as little children who raise mere aluminum.
            </p>

          </div>

      </section>
      

		</div>

	);
}
