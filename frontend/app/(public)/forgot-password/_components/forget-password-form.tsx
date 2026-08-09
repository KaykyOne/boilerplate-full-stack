//* Components Imports
import Input from "@/components/ui/input"
import Card from "@/components/ui/card"
import Button from "@/components/ui/button"

//* Libraries Imports
import Link from "next/link"
import { ShieldLockIcon } from "lucide-react"

export default function ForgotPasswordForm() {
  return (
    <Card.CardRoot>
      <Card.CardHeader>
        <Card.CardTitle>
          <div className="flex gap-2">
            <ShieldLockIcon />
            Esqueci minha senha
          </div>
        </Card.CardTitle>
      </Card.CardHeader>
      <Card.CardContent>
        <div className="flex flex-col gap-2">
          <Input placeholder="Email" type="email" />
          <Button variant="foreground">
            Recuperar senha
          </Button>
        </div>
      </Card.CardContent>
      <Card.CardDescription>
        Insira seu email para receber instruções de recuperação de senha.
      </Card.CardDescription>
      <Card.CardFooter>
        <Link href="/login">
          Voltar para login
        </Link>
      </Card.CardFooter>
    </Card.CardRoot>
  )
}
