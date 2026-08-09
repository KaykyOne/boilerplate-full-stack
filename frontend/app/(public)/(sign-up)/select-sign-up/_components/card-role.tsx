//* Components Imports
import Card from "@/components/ui/card";

//* Types Imports
import type { RoleType } from "@/schemas/role";

type propsCardRole = {
    role: RoleType
}

export default function CardRole(props: propsCardRole) {
    return (
        <Card.CardRoot className="size-30 cursor-pointer hover:opacity-70 transition-all duration-100 hover:scale-105">
            <Card.CardTitle className="flex justify-center items-center">
                <props.role.icon size={50}/>
            </Card.CardTitle>
            <Card.CardContent>
                <span>{props.role.name}</span>
            </Card.CardContent>
        </Card.CardRoot>
    )
}
