"use client"
import { DownloadCloud } from "lucide-react"
import { Code } from "lucide-react"
import { BookMarked } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function LayoutPage() {
  const viewPortfolio = () => {
    window.location.href = "/portfolio"
  }

  const handleDownload = () => {
    window.open(
      "https://drive.google.com/uc?export=download&id=1xmdUhtV5Y9TyYNADqT045wF8uo40qtOv",
      "_blank"
    )
  }

  const viewCode = () => {
    window.open(
      "https://github.com/davimcruz/Portfolio/blob/main/app/page.tsx",
      "_blank"
    )
  }

  return (
    <div className="flex min-h-screen bg-slate-50 md:items-center justify-center">
      <Card className="w-[440px] md:h-[700px] rounded-lg shadow-xl">
        <CardHeader className="px-10 flex-row items-center gap-4 shadow-md">
          <Avatar className="w-14 h-14 shadow-sm">
            <AvatarFallback>DM</AvatarFallback>
            <AvatarImage src="./profile.jpg" />
          </Avatar>
          <div>
            <CardTitle className="font-semibold">Davi Machado</CardTitle>
            <CardDescription>Desenvolvedor FullStack</CardDescription>
          </div>
        </CardHeader>
        <CardContent></CardContent>
        <Accordion className="px-12" type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Resumo</AccordionTrigger>
            <AccordionContent>
              Desenvolvedor Fullstack com 4 anos de experiência.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Tecnologias</AccordionTrigger>
            <AccordionContent>
              Javascript/Typescript, PHP, Node.js, Next.js, React.js, Vue.js,
              Tailwind, Shadcn-ui, Laravel, SQL/noSQL
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Conhecimento Complementar</AccordionTrigger>
            <AccordionContent>
              Git, Github; Otimização de tempo de carregamento (LCP, FCP, CLS,
              TTI); Escala e Manutenção de grandes aplicações; Otimização de
              consulta e tratamento de grandes volumes de dados.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="flex justify-center items-center py-20 gap-6 flex-col max-w-screen-sm mx-12">
          <Button
            onClick={viewPortfolio}
            variant="outline"
            className="text-lg p-6 w-full"
          >
            <BookMarked className="mr-4" /> Portfólio de Projetos
          </Button>
          <Button
            onClick={handleDownload}
            variant="outline"
            className="text-lg p-6 w-full"
          >
            <DownloadCloud className="mr-4" /> Download Currículo
          </Button>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" className="text-lg p-6 w-full">
                <Code className="mr-4" /> Visualizar Código
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Visualização de Código</AlertDialogTitle>
                <AlertDialogDescription>
                  Você será redirecionado para a respectiva página no Github
                  contendo o código desse Portfólio.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction onClick={viewCode}>
                  Continuar
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </Card>
    </div>
  )
}
