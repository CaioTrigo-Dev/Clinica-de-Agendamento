'use client'

import { useState } from 'react';
import { CardHeader, Card, CardTitle, CardDescription, CardContent} from '../ui/card';
import { Calendar, CircleCheckBig, Clock, User } from 'lucide-react';


export default function dashboard(){
    const [agendamento, Setagendamento] = useState('12');
    const [descriptionAgendamento, SetDescriptionAgendamento] = useState('+2 que ontem');
    const [pacientes, SetPacientes] = useState('8');
    const [descriptionPacientes, SetDescriptionPacientes] = useState('67% da agenda');
    const [waitPaciente, SetWaitPaciente] = useState('4');
    const [descriptionWaitPaciente, SetDescriptionWaitPaciente] = useState('33% da agenda');
    const [totalPacientes, SetTotalPacientes] = useState('250');
    const [descriptionTotalPacientes, SetDescriptionTotalPacientes] = useState('12% este mês');

    return(

        <section className='grid grid-cols-1 lg:grid-cols-4  gap-4'>
            <Card className="hover:border-gray-300 hover:border-2 transition-all duration-300 ease-in-out">
                <CardHeader>
                <div className='flex items-center justify-center'>
                    <CardTitle className="font-light text-sm">
                        Agendamentos de Hoje
                    </CardTitle>
                    <Calendar className="w-6 h-6 ml-auto text-blue-500"/>
                </div>
                <CardContent className="p-0 justify-left ">
                    <p className='text-base sm:text-lg font-bold m-3'>{agendamento}</p>
                </CardContent>



                <CardDescription>
                    <span>{descriptionAgendamento}</span>
                </CardDescription>
                </CardHeader>
            </Card>


            <Card className="hover:border-gray-300 hover:border-2 transition-all duration-300 ease-in-out">
                <CardHeader>
                <div className='flex items-center justify-center'>
                    <CardTitle className="font-light text-sm">
                        Pacientes Atendidos
                    </CardTitle>
                    <CircleCheckBig className="w-6 h-6 ml-auto text-green-500"/>
                </div>
                <CardContent className="p-0 justify-left ">
                    <p className='text-sm sm:text-lg font-bold m-3'>{pacientes}</p>
                </CardContent>



                <CardDescription>
                    <span>{descriptionPacientes}</span>
                </CardDescription>
                </CardHeader>
            </Card>


            <Card className="hover:border-gray-300 hover:border-2 transition-all duration-300 ease-in-out">
                <CardHeader>
                <div className='flex items-center justify-center'>
                    <CardTitle className="font-light text-sm">
                        Pacientes Aguardando
                    </CardTitle>
                    <Clock className="w-6 h-6 ml-auto text-orange-500"/>
                </div>
                <CardContent className="p-0 justify-left ">
                    <p className='text-sm sm:text-lg font-bold m-3'>{waitPaciente}</p>
                </CardContent>



                <CardDescription>
                    <span>{descriptionWaitPaciente}</span>
                </CardDescription>
                </CardHeader>
            </Card>


            <Card className="hover:border-gray-300 hover:border-2 transition-all duration-300 ease-in-out">
                <CardHeader>
                <div className='flex items-center justify-center'>
                    <CardTitle className="font-light text-sm">
                        Total de Pacientes
                    </CardTitle>
                    <User className="w-6 h-6 ml-auto text-purple-500"/>
                </div>
                <CardContent className="p-0 justify-left ">
                    <p className='text-sm sm:text-lg font-bold m-3'>{totalPacientes}</p>
                </CardContent>



                <CardDescription>
                    <span>{descriptionTotalPacientes}</span>
                </CardDescription>
                </CardHeader>
            </Card>

            <Card>
                <CardHeader>
                    <div className='flex items-center space-x-2'>
                        <Clock className='h-5 w-5 text-blue-600'/>
                        <CardTitle>
                            Próximos Agendamentos
                        </CardTitle>
                    </div>
                </CardHeader>

                <CardContent>
                    <div className='space-y-3'>
                    </div>
                </CardContent>
            </Card>

        </section>
    )
}