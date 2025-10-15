import Logo from './Components/Logo';
import Form from './Components/Form';
import PackingList from './Components/PackingList';
import Stats from './Components/Stats';
import {useState} from 'react';

function App() {
  const [items, setNewItem] = useState([]);

  function handleItem(newItem) {
    setNewItem((prevItems) => {
      const exist = prevItems.some((item) => item.description.toLowerCase() === newItem.description.toLowerCase());
      if (exist) {
        console.log(`⚠️ This item is already available ${newItem.description} ❌`);
        return [...prevItems];
      }
      console.log("Added ✅");
      return [...prevItems, newItem];
    });
    // console.log(items);
  }

  return (
    <div className='app'>
      <Logo />
      <Form addItem={handleItem}/>
      <PackingList items={items}/>
      <Stats items={items}/>
    </div>
  );
}

export default App;
