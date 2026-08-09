//* Components Imports
import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import Card from "@/components/ui/card"

//* Libraries Imports
import Link from "next/link"

export default function page() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-background">
      <Card.CardRoot>
        <Card.CardHeader>
          <Card.CardTitle>
            Login
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
        <Card.CardFooter>
          <Link href="/forgot-password">
            Esqueci minha senha
          </Link>
        </Card.CardFooter>
      </Card.CardRoot>
    </div>
  )
}
