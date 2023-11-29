import React from 'react';

type Todo = {
  "userId": number,
  "id": number,
  "title": string,
  "completed": boolean
}

const getTodoData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();

  return data;
}

const Header = async () => {
  // const [todosData, setTodosData] = React.useState<Todo[] | []>([])

  // React.useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then((response) => response.json())
  //     .then((json) => setTodosData(json))
  // }, [])

  const todosData: Todo[] = await getTodoData();

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