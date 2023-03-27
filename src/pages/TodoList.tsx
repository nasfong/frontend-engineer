import { useState } from "react"
import { useUpdateTodo } from "../features/todo-list/hooks/useUpdateTodo"
import { useFetch2 } from "../hooks/useFetch2"
type TodoType = {
  _id: string
  name: string
  isCompleted: boolean
}

const TodoList = () => {
  const {
    data,
    handleDelete,
  } = useFetch2<TodoType[]>('todo')

  const { handleEdit, handleSubmit, value, handleChange } = useUpdateTodo('todo')

  console.log(value)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="name" defaultValue={value.name} onChange={handleChange} />
        <input type="checkbox" name="isCompleted" checked={value.isCompleted} onChange={handleChange} />
        <input type="submit" value='Submit' />
      </form>

      {data?.map(todo => (
        <div key={todo._id}>
          {todo.name} - {todo._id}
          <button onClick={() => handleDelete(todo._id)}>delele</button>
          <button onClick={() => handleEdit(todo)}>edit</button>
        </div>
      ))}
    </div>
  )
}

export default TodoList