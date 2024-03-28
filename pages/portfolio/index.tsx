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
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const inter = Inter({ subsets: ["latin"] })

export default function PortfolioPage() {
  return (
    <div className={inter.className}>
      <div className="flex min-h-screen bg-slate-50 items-center justify-center">
        <div className="flex justify-between gap-8 h-[800px]">
          <Card className="w-[900px] h-[800px]">
            <CardTitle className="ml-8 mt-8">Coldfy Project</CardTitle>
            <CardDescription className="ml-8 mt-2">
              Agência de Desenvolvimento Web
            </CardDescription>
            <Image
              src=""
              alt="Coldfy Project Image 1"
              width={700}
              height={300}
            ></Image>
          </Card>
          <div className="flex flex-col justify-between">
            <div className="mb-4">
              <Card className="w-[550px] h-[550px]">
                <CardContent>Teste</CardContent>
              </Card>
            </div>
            <div>
              <Card className="w-[550px] h-[200px]">
                <CardContent>Teste</CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
