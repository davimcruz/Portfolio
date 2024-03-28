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

const inter = Inter({ subsets: ["latin"] })

export default function PortfolioPage() {
  return (
    <div className={inter.className}>
      <div className="flex min-h-screen bg-slate-50 items-center justify-center">
        <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between gap-8 h-[800px] w-full lg:max-w-screen-xl mx-auto lg:mt-0 mt-6">
          <Card className="lg:w-[900px] lg:h-[800px] w-full mb-8 lg:mb-0 lg:shadow-md shadow-sm">
            <CardTitle className="ml-8 mt-8">Coldfy Project</CardTitle>
            <CardDescription className="ml-8 mt-2">
              Agência de Desenvolvimento Web
            </CardDescription>
            <Separator className="mt-8" />
            <CardContent>
              <div className="flex justify-center items-center">
                <Image
                  src="https://davimachado.cloud/coldfy-1.svg"
                  alt="Coldfy Project Image 1"
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
          <div className="flex flex-col gap-8 w-full lg:w-auto">
            <Card className="w-full lg:w-[550px] lg:h-[550px]">
              <CardContent>Teste</CardContent>
            </Card>
            <Card className="w-full lg:w-[550px] lg:h-[200px] mt-auto">
              <CardContent>
                proximo projeto / voltar para o inicio / projeto anterior
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
