"use client"

//* Components Imports
import Button, { buttonVariants } from "@/components/ui/button";
import Card from "@/components/ui/card";
import Input from "@/components/ui/input";

//* Libraries Imports
import { UserKeyIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

//* Hooks Imports
import { useLogin } from "@/hooks/auth/use-login";

export default function LoginForm() {
    const loginMutation = useLogin();
    const router = useRouter();

    function handleLogin(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        loginMutation.mutate(
            {
                email,
                password,
            },
            {
                onSuccess: () => {
                    router.push("/dashboard");
                },
            }
        );
    };

    return (
        <form onSubmit={handleLogin}>
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
                        <Input placeholder="Email" type="email" name="email" />
                        <Input placeholder="Senha" type="password" name="password" />
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                        <Button
                            type="submit"
                            disabled={loginMutation.isPending}
                            variant="foreground"
                        >
                            {loginMutation.isPending
                                ? "Entrando..."
                                : "Entrar"}
                        </Button>

                        <Link
                            href="/select-sign-up"
                            className={buttonVariants({
                                variant: "foreground",
                            })}
                        >
                            Cadastrar
                        </Link>
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
        </form>
    )
}
