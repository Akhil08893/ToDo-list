import { useState,useEffect } from 'react'
import axios from 'axios'
import Table from './components/Table'
import TodoForm from './components/TodoForm'


function App() {


  const [todos,setTodos] = useState("")
  const [isLoading, setisLoading] = useState(true)

  useEffect(()=>{
      fetchData()
  },[])

  const fetchData = async () =>{
      try { 
          const response = await axios.get("http://127.0.0.1:8000/api/todo")
          setTodos(response.data)
          setisLoading(false)
      } catch (error) {
          console.log(error)
      }
  }


  return (
    <div className='bg-indigo-100 px-8 min-h-screen '>
      <nav className='pt-8'>
      <h1 className='text-6xl text-center pb-8'> ToDo List </h1>
    </nav>
    <TodoForm
    setTodos = {setTodos}
    fetchData={fetchData}
    />
    <Table 
      todos = {todos}
      setTodos = {setTodos}
      isLoading = {isLoading}
      fetchData={fetchData}
    />
    </div>
  )
}

export default App
