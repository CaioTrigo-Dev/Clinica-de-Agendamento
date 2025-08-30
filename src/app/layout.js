
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/sidebar/sidebar";
import TableClinica from "@/components/table/tableClinica";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Agendamento-Clinica",
  description: "Agendamento de consultas para clínicas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} `}
      >
        <SideBar/>
        <TableClinica />
        {children}
      </body>
    </html>
  );
}
