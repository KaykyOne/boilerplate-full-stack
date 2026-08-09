"use client"

//* Components Imports
import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import Card from "@/components/ui/card"

//* Libraries Imports
import Link from "next/link"
import { UserKeyIcon } from "lucide-react"

export default function LoginForm() {
    return (
        <Card.CardRoot>
            <Card.CardHeader>
                <Card.CardTitle>
                    <div className="flex gap-2">
                        <UserKeyIcon />
                        Login
                    </div>
                </Card.CardTitle>
            </Card.CardHeader>
            <Card.CardContent>
                <div className="flex flex-col gap-2">
                    <Input placeholder="Email" type="email" />
                    <Input placeholder="Senha" type="password" />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <Button variant="foreground">
                        Entrar
                    </Button>
                    <Button variant="foreground">
                        Cadastrar
                    </Button>
                </div>
            </Card.CardContent>
            <Card.CardDescription>
                Insira seu email e senha para acessar sua conta.
            </Card.CardDescription>
            <Card.CardFooter>
                <Link href="/forgot-password">
                    Esqueci minha senha
                </Link>
            </Card.CardFooter>
        </Card.CardRoot>
    )
}
