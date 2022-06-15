import { useState } from 'react';
import { useGetGoodsQuery } from '../redux';

export const App = () => {
  const [count, setCount] = useState();
  const { data = [], isLoading } = useGetGoodsQuery(count);

  if (isLoading) return <p>Loading...</p>;

  return (
    <center>
      <h1>My grocery list</h1>
      <div>
        <select value={count} onChange={e => setCount(e.target.value)}>
          <option value="''">all</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </center>
  );
};
