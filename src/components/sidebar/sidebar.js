import { TableHead, Table, TableCaption, TableRow, TableHeader } from "../ui/table";
import { Calendar, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Plus } from "lucide-react";
import Link  from "next/link";

export default function SideBar(){
    return(
        <section className=" flex items-center space-x-3 m-2 p-2 shadow-xl rounded-md bg-white">
                <div className="w-10 h-10  bg-green-500 rounded-lg flex items-center justify-center">
                <Calendar className="h-6 w-6 text-white" />
                </div>
            <div className="">
                <p className="text-2xl font-bold ">ClinicaApp</p>
                <p className="text-sm font-extralight ">Sistema de Agendamento</p>
            </div>

            <div className=" flex items-center gap-2 ml-auto">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                        placeholder="Buscar pacientes..."
                        className="pl-10 w-64:"
                    />
                </div>
                <div>
                    <Link href="/novo">
                        <Button className="bg-green-500 hover:bg-green-400">
                            <Plus/>
                            Novo Agendamento
                        </Button>
                    </Link>
                </div>
            </div>
                
        </section>
    )
}