// const initialItems = [
//     { id: 1, description: "Passports", quantity: 2, packed: false },
//     { id: 2, description: "Socks", quantity: 12, packed: true },
//     { id: 3, description: "Laptop", quantity: 1, packed: true },
// ];

function PackingList({items}) {
    // const travelList = [...initialItems, ...items];
    console.log(items)
    return (
        <div className="list">
            <ul>
                {
                    items.map((item, index) => <Item item={item} key={index}/>)
                }
            </ul>
        </div>
    );
}

function Item({item}) {
    return (
        <li>
            <input type="checkbox" />
            <span style={item.packed ? {textDecoration: "line-through"} : {} }>{item.quantity} {item.description}</span>
            <button>❌</button>
        </li>
    );
}

export default PackingList;