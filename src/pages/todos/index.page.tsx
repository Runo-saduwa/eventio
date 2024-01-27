import { BlitzPage } from "@blitzjs/next"
import Layout from "src/core/layouts/Layout"
import { useRouter } from "next/router"
import { useMutation, useQuery } from "@blitzjs/rpc"
import getTodos from "@/features/todos/queries/getTodos"
import { Vertical } from "mantine-layout-components"
import { Button, Input } from "@mantine/core"
import { useState } from "react"
import addTodo from "@/features/todos/mutations/addTodo"

const TodosPage: BlitzPage = () => {
  const router = useRouter()

  const [todoTitle, setTodoTitle] = useState("")

  const [todos] = useQuery(getTodos, {})
  const [$addTodo] = useMutation(addTodo)

  const handleAddTodo = () => {
    $addTodo({ title: todoTitle }, {
      onSuccess: () => {
        console.log('Todo added')
      }
    })
  }

  return (
    <Layout title="Todos">
      <Vertical>
        <Input
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
          placeholder="Enter todo title"
        />
        <Button onClick={handleAddTodo}>Create Todo</Button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </Vertical>
    </Layout>
  )
}

export default TodosPage
