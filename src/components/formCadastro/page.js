'use client'

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { CalendarIcon, Stethoscope } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "@/components/ui/select"
import { User } from "lucide-react"
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"


export default function Formulario(){

    const [formData, setFormData] = useState({
        nomePaciente: "",
        telefonePaciente: "",
        emailpaciente: "",
        medico: "",
        especialidade: "",
        data: "",
        hora: "",
        anotacao: "" 
    });

    const doutores = [
        {id:1, nome:"Dr.João Silva", especialidade:"Clínico Geral"},
        {id:2, nome:"Dra.Ana Costa ", especialidade:"Cardiologia"},
        {id:3, nome:"Dr.Carlos Santos", especialidade:"Dermatologia"},
        {id:4, nome:"Dra. Maria Oliveira", especialidade:"Pediatra"}
    ]

    const horarios = [
        "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
        "11:00", "11:30", "14:00", "14:30", "15:00", "15:30",
        "16:00", "16:30", "17:00", "17:30"
    ]


    const handleSubmit = (e) =>{
        e.preventDefault();

        



        setFormData({
            nomePaciente: "",
            telefonePaciente: "",
            emailpaciente: "",
            medico: "",
            especialidade: "",
            data: "",
            hora: "",
            anotacao: ""
        })
    }
    return(
        <div className="max-w-2xl mx-auto mt-5">
            <Card className="">
                <CardHeader className="">
                        <CardTitle className="flex items-center space-x-2 ">
                            <CalendarIcon className="h-5 w-5 text-blue-600"/>
                            <span className="text-2xl">Novo Agendamento</span>
                        </CardTitle>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                            <User className="h-5 w-5 text-blue-600"/>
                            <h3>Dados do Paciente </h3>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="">
                                <Label htmlFor="nomePaciente" > Nome Completo *</Label>
                                <Input
                                id="nomePaciente"
                                value={formData.nomePaciente}
                                onChange = {(e)=> setFormData({ ...formData, nomePaciente})}
                                placeholder="Digite seu nome"
                                required
                                />
                            </div>

                            <div className="">
                                <Label htmlFor="nomePaciente"> Telefone</Label>
                                <Input
                                id="nomePaciente"
                                value={formData.telefonePaciente}
                                onChange = {(e)=> setFormData({ ...formData, telefonePaciente})}
                                placeholder="(21) 99999-9999"
                                required
                                />
                            </div>

                            <div className="">
                                <Label htmlFor="nomePaciente"> E-mail</Label>
                                <Input
                                id="nomePaciente"
                                value={formData.emailpaciente}
                                onChange = {(e)=> SetFormData({ ...formData, emailpaciente})}
                                placeholder="email@gmail.com"
                                required
                                />
                            </div>
                        </div>

                        <div className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                            <Stethoscope className="h-5 w-5 text-green-600"/>
                            <h3>Dados da Consulta</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="">
                                <Label htmlFor="doctor">Médico *</Label>
                                <Select 
                                value={formData.medico} 
                                onValueChange={(value) => {
                                    const selectedDoctor = doutores.find(d => String(d.nome) === value);
                                    setFormData({ 
                                        ...formData, 
                                        medico: value,
                                        especialidade: selectedDoctor ? selectedDoctor.especialidade : ''
                                    });
                                }}>
                                    <SelectTrigger className="">
                                        <SelectValue placeholder="Selecione o médico" />
                                    </SelectTrigger>
                                    <SelectContent position="popper" side="bottom" align="start" className="z-50">
                                        {doutores.map((medico) => (
                                            <SelectItem 
                                            key={medico.id} 
                                            value={medico.nome}
                                            >
                                            {medico.nome} - {medico.especialidade}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            
                            <div className="">
                                <Label htmlFor="nomePaciente"> Especialidade</Label>
                                <Input
                                id="especialidade"
                                value={formData.especialidade}
                                readOnly
                                placeholder="Selecionada automaticamente"
                                className="bg=gray-50"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="">
                                    <Label htmlFor="date" >Data *</Label>
                                    <Input
                                        id="date"
                                        type="date"
                                        value={formData.date}
                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                        min={new Date().toISOString().split('T')[0]}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="">
                                <Label htmlFor="time">Horário *</Label>
                                    <Select value={formData.time} onValueChange={(value) => setFormData({ ...formData, hora: value })}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecione o horário" />
                                        </SelectTrigger>
                                        <SelectContent position="popper" side="bottom" align="start" className="z-50">
                                        {horarios.map((time) => (
                                            <SelectItem key={time} value={time}>
                                            {time}
                                            </SelectItem>
                                        ))}
                                        </SelectContent>
                                    </Select>
                            </div>

                            <div className="">
                                <Label htmlFor="notes">Observações</Label>
                                <Textarea
                                    id="notes"
                                    value={formData.notes}
                                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                    placeholder="Observações adicionais sobre a consulta..."
                                    rows={3}
                                />
                            </div>
                            


                        </div>


                        <div className="flex justify-end space-x-4 pt-6">
                            <Button type="button" variant="outline" >
                                Cancelar
                            </Button>
                            <Button type="submit" className="bg-green-500 hover:bg-green-400">
                                Confirmar Agendamento
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}