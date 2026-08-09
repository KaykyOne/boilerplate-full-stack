//* Constants Imports
import roles from "@/constants/roles"

//* Components Imports
import CardRole from "./_components/card-role"
import { buttonVariants } from "@/components/ui/button"

//* Libraries Imports
import { MousePointerClickIcon, CornerDownLeftIcon } from "lucide-react"
import Link from "next/link"

export default function Page() {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-2 pb-3 justify-center items-center">
                <MousePointerClickIcon size={30} />
                <h1>Selecione o tipo de cadastro</h1>
            </div>
            <div className="flex gap-2 flex-wrap">
                {roles.array.map((role) => (
                    <CardRole
                        key={role.name}
                        role={role}
                    />
                ))}
            </div>
            <Link href="/login" className={buttonVariants({ variant: "outline" })}>
                <CornerDownLeftIcon />
                Voltar para login
            </Link>
        </div>
    )
}