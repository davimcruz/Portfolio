"use client"
import { Inter } from "next/font/google"
import Image from "next/image"
import "../../app/globals.css"

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

export default function PortfolioPage() {
  const goToProject = () => {
    window.open("https://coldfy-production-line.vercel.app/pt-BR", "_blank")
  }
  const goToGithub = () => {
    window.open("https://github.com/davimcruz/Coldfy-Project", "_blank")
  }

  return (
    <div
      className={`${inter.className} flex items-center lg:justify-center lg:h-screen bg-slate-50`}
    >
      <div className="flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:gap-8 gap-8 h-[800px] w-full lg:max-w-screen-xl mt-6">
          <Card className="lg:w-[900px] lg:h-[800px] w-full mb-1 lg:mb-0 -mt-8 shadow-sm">
            <CardTitle className="ml-8 lg:mt-8 mt-12">Coldfy Project</CardTitle>
            <CardDescription className="ml-8 mt-2">
              Agência de Desenvolvimento Web
            </CardDescription>
            <Separator className="mt-8" />
            <CardContent>
              <div className="flex justify-center items-center">
                <Image
                  src="https://davimachado.cloud/coldfy-1.svg"
                  alt="Coldfy Project Image 1"
                  priority
                  width={712}
                  height={400}
                ></Image>
              </div>
              <Separator className="mt-8" />
              <div className="lg:mt-16 mt-8 flex justify-center">
                <p className="mx-2 lg:mt-2 lg:mb-0 mb-4">
                  Solução Web desenvolvida a partir de{" "}
                  <b>viéses cognitivos de Design</b>, bem como uma{" "}
                  <b>UI amigável</b> e <b>direta</b> com o usuário.
                  <br /> Inteiramente feita e otimizada para uma{" "}
                  <b>boa experiência de uso</b>, tal como visando a maximização
                  de <b>captura de clientes </b>
                  para a empresa. <br /> <b>Imersivo</b> e extremamente{" "}
                  <b>otimizado</b>, alcançando <b>98 pontos</b> no PageSpeed.
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
                  <Badge className="lg:mt-0 lg:ml-4 mt-4">Online</Badge>
                </div>
                <div className="lg:ml-8 ml-2 mt-8 lg:flex">
                  <p>Principais Tecnologias:</p>
                  <Badge className="lg:mt-0 lg:ml-4 mt-4">React.js</Badge>
                  <Badge className="lg:mt-0 lg:ml-4 ml-4">Next.js</Badge>
                  <Badge className="lg:mt-0 lg:ml-4 ml-4">Node.js</Badge>
                </div>
                <div className="lg:ml-8 ml-2 mt-8 lg:flex">
                  <p>Outros:</p>
                  <Badge className="lg:mt-0 lg:ml-4 mt-4">FramerMotion</Badge>
                  <Badge className="lg:mt-0 lg:ml-4 ml-4">Lucide</Badge>
                  <Badge className="lg:mt-0 lg:ml-4 ml-4">Vercel Hosted</Badge>
                </div>
                <Separator className="mt-12" />
                <div className="flex justify-center mt-12">
                  <Button
                    onClick={goToProject}
                    variant="outline"
                    className="text-lg p-6 w-[350px]"
                  >
                    <SquareArrowOutUpRight className="mr-6" /> Visitar Projeto
                  </Button>
                </div>
                <div className="flex justify-center mt-8">
                  <Button
                    onClick={goToGithub}
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
                    variant="secondary"
                    className="text-sm w-[180px] lg:mb-0 mb-4"
                  >
                    <ChevronLeft className="mr-4" /> Projeto Anterior
                  </Button>

                  <Button
                    variant="outline"
                    className="text-sm w-[180px] lg:mb-0 mb-4"
                  >
                    Voltar ao Início
                  </Button>

                  <Button
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
