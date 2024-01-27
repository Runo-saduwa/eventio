import Head from "next/head"
import React, { FC, Suspense } from "react"
import { BlitzLayout, Routes } from "@blitzjs/next"
import { AppShell, Navbar, Header, Text, Footer, Anchor, Button } from "@mantine/core"
import { Horizontal, Vertical } from "mantine-layout-components"
import Link from "next/link"
import { useMutation } from "@blitzjs/rpc"
import logout from "@/features/auth/mutations/logout"

const Layout: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => {
  const [logoutMutation] = useMutation(logout)
  return (
    <>
      <Head>
        <title>{title || "eventio"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppShell
        padding="md"
        // navbar={
        //   <Navbar width={{ base: 300 }} height={500} p="xs">
        //     {/* Navbar content */}
        //   </Navbar>
        // }
        header={
          <Header height={60} p="xs">
            <Horizontal fullH fullW spaceBetween>
              <Anchor underline={false} color="grey.3" component={Link} href={Routes.Home()}>
                Eventio
              </Anchor>
              <Button
              size="xs"
              variant="light"
                onClick={async () => {
                  await logoutMutation()
                }}
              >
                Logout
              </Button>
            </Horizontal>
          </Header>
        }
        footer={
          <Footer height={60}>
            <Horizontal fullH fullW center>
              <Text fz="xs" color="dimmed">
                Copyright &copy; 2023
              </Text>
            </Horizontal>
          </Footer>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        })}
      >
        <Vertical fullH fullW>
          <Suspense fallback="Loading...">{children}</Suspense>
        </Vertical>
      </AppShell>
    </>
  )
}

export default Layout
