//* Libraries Imports
import { ShieldIcon, UserIcon, GhostIcon } from "lucide-react"

//* TODO: padrão, sempre remover os 2 primeiros elementos do json
const rolesJson = {
    admin: {
        name: "Administrador",
        icon: ShieldIcon,
    },
    guest: {
        name: "Convidado",
        icon: GhostIcon,
    },
    user: {
        name: "Usuário",
        icon: UserIcon,
    },
}

const rolesArray = Object.entries(rolesJson).map(([key, value]) => ({
    key,
    ...value,
}))

const roles = {
    array: rolesArray,
    json: rolesJson,
}

export default roles