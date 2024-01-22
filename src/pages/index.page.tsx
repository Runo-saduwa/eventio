import Layout from "src/core/layouts/Layout"
import { BlitzPage } from "@blitzjs/next"
import { UserInfo } from "@/core/components/UserInfo"
import { Horizontal } from "mantine-layout-components"

const Home: BlitzPage = () => {
  return (
    <Layout title="Home">
      <Horizontal debug spacing="lg">
        <UserInfo />
      </Horizontal>
    </Layout>
  )
}

export default Home
