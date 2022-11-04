import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'
const TaskDetail =(props)=>  {
const [loading, setLoading] = useState(false)
const [task, setTask] = useState(false)
const [error, setError] = useState(null)

 const params = useParams()
 const navigate = useNavigate()
 
 useEffect(()=>{
    const fetchTask = async()=> {
        const res = await fetch(`http://localhost:5000/tasks/${params.id}`)
        const data = await res.json()
        setTask(data)
        setLoading(false)

        if(res.status === '404')
        setError('Task not found')
    }
    fetchTask()
})
if(error)
return navigate('/error')
 
return loading? (
    <h3>loading...</h3>
 ): (
    <div>
        <h3>{ task.text }</h3>
        <p>{ task.day }</p>
    </div>
 )

}

export default TaskDetail