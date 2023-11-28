import React from 'react';

type Todo = {
  "userId": number,
  "id": number,
  "title": string,
  "completed": boolean
}

const Header = () => {
  const [todosData, setTodosData] = React.useState<Todo[] | []>([])

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => setTodosData(json))
  }, [])

  return (
    <div>
      <ul>
        {todosData && todosData.length > 0 ? todosData.map((todo, index) => (
          <li key={index} className='boder-white p-2 rounded hover:shadow'>
            <h3>{todo.title}</h3>
            <p>Id: {todo.id}</p>
            <p>User Id: {todo.userId}</p>
            <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
          </li>
        )) : <li>No data, please wait...</li>
        }
      </ul>
    </div>
  )
}

export default Header