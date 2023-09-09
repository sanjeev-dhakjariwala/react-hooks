import React, { useEffect, useState } from 'react';

const UseEffect = () => {
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(`Hello World!!!`);
    const getData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch data`);
        }
        const data = await response.json();
        setTodo(data);
        setLoading(false);
        console.log(`API was called!!!`);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <ul>
        {todo?.map((item, index) => {
          return <li key={item?.userId + item?.id}>{item?.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default UseEffect;
