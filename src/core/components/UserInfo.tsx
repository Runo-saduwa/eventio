import { useCurrentUser } from "@/features/users/hooks/useCurrentUser"
import { Button, Text } from "@mantine/core"
import { Vertical } from "mantine-layout-components"

export const UserInfo = () => {
  const currentUser = useCurrentUser()
  if (!currentUser) return null
  return (
    <div>
      <Vertical>
        <Button>Fetch todos</Button>
        <Text>
          User id: <code>{currentUser.id}</code>
        </Text>
        <Text>
          User role: <code>{currentUser.role}</code>
        </Text>
      </Vertical>
    </div>
  )
}
