import { useParam } from "@blitzjs/next"

export const useStringParam = (name: any) => useParam(name, "string")
