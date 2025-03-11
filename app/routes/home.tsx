import { Terminal } from 'lucide-react'
import { useState } from 'react'
import { useNavigation, type MetaFunction } from 'react-router'
import { toast } from 'sonner'
import { Alert, AlertDescription, AlertTitle } from '~/components/ui/alert'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Toaster } from '~/components/ui/sonner'
import { DndContext } from '@dnd-kit/core'

export const meta: MetaFunction = () => [{ title: 'ToDo List' }]

type Todo = {
  id: number
  title: string
  completed: boolean
}

export default function Home() {
  const [todoList, setTodoList] = useState<Todo[]>([])
  const [todo, setToDo] = useState<string>('')
  const navigation = useNavigation()

  const createTodo = () => {
    if (!todo) {
      toast.error('请输入内容', { position: 'top-center' })
      return
    }

    setTodoList([...todoList, { id: Math.random(), title: todo, completed: false }])
    setToDo('')
  }

  const handleCreateTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      createTodo()
    }
  }

  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto min-h-svh p-2 box-border">
      <Toaster richColors closeButton />

      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>ToDo List!</AlertTitle>
        <AlertDescription>You can add components and dependencies to your app using the cli.</AlertDescription>
      </Alert>

      <div className="w-full flex items-center gap-5 mt-5">
        <Input
          placeholder="请输入..."
          onKeyDown={handleCreateTodo}
          onChange={(e) => setToDo(e.currentTarget.value)}
          value={todo}
        />
        <Button onClick={createTodo}>创建 ToDo</Button>
      </div>

      <div className="w-full flex flex-col mt-5">
        <ul className="w-full flex flex-col gap-5">
          <DndContext>
            {todoList.map((todo, index) => (
              <li key={todo.id}>
                {index + 1}. {todo.title}
              </li>
            ))}
          </DndContext>
        </ul>
      </div>
    </div>
  )
}
