import axios from "axios"
import { useCallback, useState } from "react"

export const useUpdateTodo = (url: string) => {
  const [formInput, setformInput] = useState({
    _id: '',
    name: '',
    isCompleted: false
  })

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setformInput({ ...formInput, [name]: value })
  }, [formInput])

  const handleEdit = useCallback(async (value: any) => {
    setformInput(value)
  }, [setformInput])

  const handleSubmit = useCallback(async (e: React.SyntheticEvent) => {
    e.preventDefault()
    await axios
      .put(`/${url}/${formInput._id}`, formInput)
      .then(res => {
        console.log(res.data.data)
      })
      .catch(error => console.log(error.message))
  }, [formInput])
  
  return { handleEdit, handleSubmit, value: formInput, handleChange }
}
