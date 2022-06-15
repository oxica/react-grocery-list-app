import { useState } from 'react';
import { useAddProductMutation, useGetGoodsQuery } from '../redux';

export const App = () => {
  const [count, setCount] = useState();
  const [newProduct, setNewProduct] = useState();
  const { data = [], isLoading } = useGetGoodsQuery(count);
  const [addProduct, { isError }] = useAddProductMutation();

  const handleAddProduct = async () => {
    if (newProduct) {
      await addProduct({ name: newProduct }).unwrap();
      setNewProduct('');
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <center>
      <h1>My grocery list</h1>
      <div>
        <input
          type="text"
          value={newProduct}
          onChange={e => setNewProduct(e.target.value)}
        />
        <button onClick={handleAddProduct}>Add</button>
      </div>
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
