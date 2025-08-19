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
} from "lucide-react";

export default function Home() {
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
      metric: "Arctic Ice Extent",
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
		<div className='min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 p-10 justify-center'>
			<section className='py-20 px-4'>
				<div className='container mx-auto text-center'>
					<h1 className={`text-5xl z-10 md:text-7xl font-bold text-white mb-6 ${titleClass}`}>
						Welcome to Earth
					</h1>
          <p className={`text-2xl z-10 md:text-4-xl text-gray-200 mb-10 ${titleClass}`}>
            All of Earth within your screen, powered by Galileo Lens
          </p>
        </div>
      </section>

      {/* Climate data */}
      <section className="py-20 px-40">
        <h2 className="text-3xl font-bold text-white mb-6">Climate Data</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
          {climateData.map((item, index) => (
            <Card key={index} className="bg-gray-800 text-white border-none">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span>{item.metric}</span>
                  <item.icon className="w-6 h-4  text-blue-400" />
                </CardTitle>
                <CardDescription>{item.metric} data</CardDescription>
              </CardHeader>
              <CardContent className="text-2xl font-bold">
                <p>{item.value}</p>
              </CardContent>
            </Card>
          ))}
          ;
        </div>
      </section>

      <section className="py-20 px-40">
        <h2 className="text-3xl font-bold text-white mb-6">Earth Images</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
          {climateData.map((item, index) => (
            <Card key={index} className="bg-gray-800 text-white border-none">
              <CardHeader>
                <CardTitle className="flex items-center justify-between ">
                  <span>{item.metric}</span>
                  <item.icon className="w-6 h-4  text-blue-400" />
                  <Badge
                    variant={
                      item.trend === "increasing"
                        ? "destructive"
                        : item.trend === "decreasing"
                          ? "secondary"
                          : "default"
                    }
                    className="text-xs"
                  >
                    {item.trend}
                </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className='text-3xl font-bold'>
                <p>{item.value}</p>
              </CardContent>
            </Card>
          ))}
          ;
        </div>
      </section>


      {/* Earth images */}
      <section className='py-20 px-10'>
        <h2 className='text-3xl font-bold text-white mb-6'>Earth Images</h2>
          <div className='inline-block'>
            <img src={"https://helios-i.mashable.com/imagery/articles/00s8f1oiaNcJk74RFAdquIC/hero-image.fill.size_1248x702.v1746122691.jpg"} alt="Earth from space" className="w-full h-auto rounded-lg"/>
            <p className='whitespace-nowrap text-gray-200 mt-4'>
              somhting somethinanafajhflksdjasfhjdjalsdfhaljshfdajfshaksjfhdaldfhaldfhjkasdhflakshflajfh
            'text-whitespace-nowrap 'text-whitespace-nowrap 'text-whitespace-nowrap 'text-whitespace-nowrap
            </p>
          </div>
         
      </section>


		</div>

	);
}
