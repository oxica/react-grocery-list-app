import { useState } from 'react';
import {
  useAddProductMutation,
  useGetGoodsQuery,
  useDeleteProductMutation,
} from '../redux';

export const App = () => {
  const [count] = useState();
  const [newProduct, setNewProduct] = useState();
  const { data = [], isLoading } = useGetGoodsQuery(count);
  const [addProduct] = useAddProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  const handleAddProduct = async () => {
    if (newProduct) {
      await addProduct({ name: newProduct }).unwrap();
      setNewProduct('');
    }
  };

  const handleDeleteProduct = async id => {
    await deleteProduct(id).unwrap();
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
      <p>Click on the product to delete &#128071;</p>
      {/* <div>
        <select value={count} onChange={e => setCount(e.target.value)}>
          <option value="''">all</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div> */}
      <ul>
        {data.length ? (
          data.map(item => (
            <li key={item.id} onClick={() => handleDeleteProduct(item.id)}>
              {item.name}
            </li>
          ))
        ) : (
          <p>This list is empty</p>
        )}
      </ul>
    </center>
  );
};
