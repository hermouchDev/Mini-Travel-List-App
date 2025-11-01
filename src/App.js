import Logo from "./Components/Logo";
import Form from "./Components/Form";
import PackingList from "./Components/PackingList";
import Stats from "./Components/Stats";
import { useState } from "react";

function App() {
    const [items, setItems] = useState([
        { id: 1, description: "Passports", quantity: 2, packed: true },
        { id: 2, description: "Socks", quantity: 12, packed: false },
        { id: 3, description: "Laptop", quantity: 1, packed: false },
    ]);

    function handleAddItem(newItem) {
        setItems((prevItems) => {
            const exist = prevItems.some(
                (item) =>
                    item.description.toLowerCase() ===
                    newItem.description.toLowerCase()
            );
            if (exist) {
                alert(
                    `⚠️ This item is already available ${newItem.description} ❌`
                );
                return [...prevItems];
            }
            // alert("Added ✅");
            return [...prevItems, newItem];
        });
        // console.log(items);
    }

    function handleDeletItem(id) {
        const confirmed = window.confirm('Are you sure you want to delet the item 🤔 ? ');
        confirmed && setItems((items) => items.filter((item) => item.id !== id));
    }

    function handleToggleItem(id) {
        setItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, packed: !item.packed } : item
            )
        );
    }

    function handleClearList() {
        const confirmed = window.confirm('Are you sure you want to delet all items 🤔 ? ');
        confirmed && setItems([]);
    }

    return (
        <div className="app">
            <Logo />
            <Form onAddItem={handleAddItem} />
            <PackingList items={items} onDeletItem={handleDeletItem} onToggleItem={handleToggleItem} clearList={handleClearList} />
            <Stats items={items} />
        </div>
    );
}

export default App;
