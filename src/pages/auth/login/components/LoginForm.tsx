import { AuthenticationError, PromiseReturnType } from "blitz"
import Link from "next/link"
import login from "@/features/auth/mutations/login"
import { useMutation } from "@blitzjs/rpc"
import { Routes } from "@blitzjs/next"
import { useForm } from "@mantine/form"
import { Button, PasswordInput, TextInput, Title } from "@mantine/core"
import { FORM_ERROR } from "@/core/components/Form"
import { Vertical } from "mantine-layout-components"

type LoginFormProps = {
  onSuccess?: (user: PromiseReturnType<typeof login>) => void
}

export const LoginForm = (props: LoginFormProps) => {
  const [$login] = useMutation(login)

  const onSubmit = async (values) => {
    try {
      const user = await $login(values)
      props.onSuccess?.(user)
    } catch (error: any) {
      console.log(error)
    }
  }

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  })

  return (
    <Vertical>
      <Title>Login</Title>
      <form onSubmit={form.onSubmit(onSubmit)}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />

        <PasswordInput
          withAsterisk
          label="Password"
          placeholder="Enter a strong password"
          {...form.getInputProps("password")}
        />

        <Button type="submit">Log in</Button>
      </form>
      <Link href={Routes.ForgotPasswordPage()}>Forgot your password?</Link>
      Or
      <Link href={Routes.SignupPage()}>Sign Up</Link>
    </Vertical>
  )
}

export default LoginForm
