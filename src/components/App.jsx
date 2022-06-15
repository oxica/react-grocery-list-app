import { useGetGoodsQuery } from '../redux';

export const App = () => {
  const { data = [], isLoading } = useGetGoodsQuery();

  if (isLoading) return <p>Loading...</p>;

  return (
    <center>
      <h1>My grocery list</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </center>
  );
};
