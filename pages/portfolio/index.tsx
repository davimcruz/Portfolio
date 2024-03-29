"use client"
import { Inter } from "next/font/google"
import Image from "next/image"
import "../../app/globals.css"
import { useState } from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import {
  ChevronLeft,
  ChevronRight,
  SquareArrowOutUpRight,
  Github,
} from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

interface projectsData {
  name: string
  description: string
  image: string
  text: string
  status: string
  tech: string[]
  others: string[]
  link: string
  git: string
}

import projectsData from "./projectsData"
export default function PortfolioPage() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0)

  const goToProject = (url: string) => {
    window.open(url, "_blank")
  }

  const goHome = () => {
    window.location.href = "/"
  }

  const goToPreviousProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    )
  }

  const goToNextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
    )
  }

  const currentProject = projectsData[currentProjectIndex]

  return (
    <div
      className={`${inter.className} flex items-center lg:justify-center lg:h-screen bg-slate-50`}
    >
      <div className="flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:gap-8 gap-8 h-[800px] w-full lg:max-w-screen-xl mt-6">
          <Card className="lg:w-[900px] lg:h-[800px] w-full mb-1 lg:mb-0 -mt-8 shadow-sm">
            <CardTitle className="ml-8 lg:mt-8 mt-12">
              {currentProject?.name}
            </CardTitle>
            <CardDescription className="ml-8 mt-2">
              {currentProject?.description}
            </CardDescription>
            <Separator className="mt-8" />
            <CardContent>
              <div className="flex justify-center items-center">
                <Image
                  src={currentProject?.image}
                  alt="Project Image"
                  priority
                  width={712}
                  height={400}
                />
              </div>
              <Separator className="mt-8" />
              <div className="lg:mt-16 mt-8 flex justify-center">
                <p className="mx-2 lg:mt-2 lg:mb-0 mb-4">
                  {currentProject?.text}
                </p>
              </div>
            </CardContent>
          </Card>
          <div className="flex flex-col gap-4 w-full lg:w-auto">
            <Card className="w-full lg:w-[550px] lg:h-[550px] lg:-mt-6 shadow-sm">
              <CardTitle className="ml-8 mt-8">
                Informações do Projeto
              </CardTitle>
              <Separator className="mt-8" />
              <CardContent>
                <div className="lg:ml-8 ml-2 mt-8 lg:flex">
                  <p>Status:</p>
                  <Badge className="lg:mt-0 lg:ml-4 mt-4">
                    {currentProject?.status}
                  </Badge>
                </div>
                <div className="lg:ml-8 ml-2 mt-8 lg:flex">
                  <p>Principais Tecnologias:</p>
                  {currentProject?.tech.map((technology, index) => (
                    <Badge
                      key={index}
                      className="lg:mt-0 lg:ml-4 lg:mr-0 mr-4 mt-4"
                    >
                      {technology}
                    </Badge>
                  ))}
                </div>
                <div className="lg:ml-8 ml-2 mt-8 lg:flex">
                  <p>Outros:</p>
                  {currentProject?.others.map((other, index) => (
                    <Badge
                      key={index}
                      className="lg:mt-0 lg:ml-4 lg:mr-0 mr-4 mt-4"
                    >
                      {other}
                    </Badge>
                  ))}
                </div>
                <Separator className="mt-12" />
                <div className="flex justify-center mt-12">
                  <Button
                    onClick={() => goToProject(currentProject?.link)}
                    variant="outline"
                    className="text-lg p-6 w-[350px]"
                  >
                    <SquareArrowOutUpRight className="mr-6" /> Visitar Projeto
                  </Button>
                </div>
                <div className="flex justify-center mt-8">
                  <Button
                    onClick={() => goToProject(currentProject?.git)}
                    variant="outline"
                    className="text-lg p-6 w-[350px] lg:mb-0 mb-4"
                  >
                    <Github className="mr-4" /> Acessar Repositório
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full lg:w-[550px] lg:h-[80px] mt-auto lg:block hidden shadow-sm">
              <CardContent>
                <div className="flex justify-center items-center gap-4 mt-5">
                  <Button
                    onClick={goToPreviousProject}
                    variant="secondary"
                    className="text-sm w-[180px] lg:mb-0 mb-4"
                  >
                    <ChevronLeft className="mr-4" /> Projeto Anterior
                  </Button>

                  <Button
                    onClick={goHome}
                    variant="outline"
                    className="text-sm w-[180px] lg:mb-0 mb-4"
                  >
                    Voltar ao Início
                  </Button>

                  <Button
                    onClick={goToNextProject}
                    variant="secondary"
                    className="text-sm w-[180px] lg:mb-0"
                  >
                    Próximo Projeto <ChevronRight className="ml-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
