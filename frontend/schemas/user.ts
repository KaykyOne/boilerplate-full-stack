//* Libraries Imports
import * as z from "zod"

const userSchema = z.object({
    id: z.uuid(),
    name: z.string(),
    email: z.email(),

    email_verified_at: z.string().nullable(),

    created_at: z.string(),
    updated_at: z.string(),
})

type UserType = z.infer<typeof userSchema>

export {
    userSchema,
    type UserType
}