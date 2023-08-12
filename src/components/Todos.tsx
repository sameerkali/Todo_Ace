import { useTodos } from "../store/Todos"


const Todos = () => {
    const {Todos} = useTodos();
    const filterData = Todos;
  return (
    <>
    <ul>
        {
            filterData.map((Todos)=>{
                return <li key={Todos.id}>

                </li>
            })
        }
    </ul>
    </>
  )
}

export default Todos