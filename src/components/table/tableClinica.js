'use client'

import { usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger} from "../ui/tabs";
import { Calendar, Plus, TimerIcon } from "lucide-react";
import Link  from "next/link";


export default function TableClinica (){
    const pathnome = usePathname();

    const handleItemClick = ()=>{
        if(pathnome === '/dashboard'){
            return "dashboard";
        }
        else if(pathnome === '/agendamentos'){
            return "agendamentos";
        }
        else{
            return "novo";
        }
    }
    

    return(
        <Tabs value={handleItemClick()} className="space-y-6 ">
            <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3 ">
                <Link href="/dashboard"  className="flex items-center space-x-2">
                    <TabsTrigger value="dashboard" className="flex items-center space-x-2">
                        <span className="text-gray-500 ">Dashboard</span>
                        <Calendar className="h4 w-4 text-gray-500"/>
                    </TabsTrigger>
                </Link>
                <Link href="/agendamentos" className="flex items-center space-x-2">
                    <TabsTrigger value="agendamentos" className="flex items-center space-x-2">
                        <TimerIcon className="h-4 w-4 text-gray-500"/>
                        <span className="text-gray-500">Agendamentos</span>
                    </TabsTrigger>
                </Link>
                <Link href="/novo" className="flex items-center space-x-2">
                    <TabsTrigger value="novo" className="flex items-center space-x-2 ">
                        <Plus className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-500 ">Novo</span>
                    </TabsTrigger>
                </Link>
            </TabsList>
        </Tabs>
    )
}