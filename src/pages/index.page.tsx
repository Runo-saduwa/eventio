import Layout from "src/core/layouts/Layout"
import { BlitzPage } from "@blitzjs/next"
import { UserInfo } from "@/core/components/UserInfo"
import { Horizontal, Vertical } from "mantine-layout-components"
import { AuthenticationForm } from "@/core/components/MainAuthenticationForm"
import { useCurrentUser } from "@/features/users/hooks/useCurrentUser"

const Home: BlitzPage = () => {
  const currentUser = useCurrentUser()
  return (
    <Layout title="Home">
      {currentUser && <UserInfo />}
      {!currentUser && (
        <Vertical fullH fullW center>
          <AuthenticationForm  />
        </Vertical>
      )}
    </Layout>
  )
}

export default Home
