//* Libraries Imports
import { type LucideIcon } from "lucide-react"
import * as z from "zod"

const roleSchema = z.object({
  name: z.string(),
  icon: z.custom<LucideIcon>(),
})

type RoleType = z.infer<typeof roleSchema>

export {
  roleSchema,
  type RoleType
}