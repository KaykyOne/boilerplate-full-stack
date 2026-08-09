//* Components Imports
import { buttonVariants } from "@/components/ui/button";
import CardRole from "./_components/card-role";

//* Libraries Imports
import { CornerDownLeftIcon, MousePointerClickIcon } from "lucide-react";
import Link from "next/link";

//* Constants Imports
import roles from "@/constants/roles";

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