import { resolver } from "@blitzjs/rpc"
import { Role } from "types"
import { Login } from "../schemas"
import { authenticateUser } from "@/utils/auth-utils"

export default resolver.pipe(resolver.zod(Login), async ({ email, password }, ctx) => {
  // This throws an error if credentials are invalid
  const user = await authenticateUser(email, password)

  await ctx.session.$create({ userId: user.id, role: user.role as Role})

  return user
})
