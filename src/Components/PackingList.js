function PackingList({ items, onDeletItem, onToggleItem }) {
    // console.log(items)

    return (
        <div className="list">
            <ul>
                {items.map((item) => (
                    <Item
                        item={item}
                        onDeletItem={onDeletItem}
                        onToggleItem={onToggleItem}
                        key={item.id}
                    />
                ))}
            </ul>
        </div>
    );
}

function Item({ item, onDeletItem, onToggleItem }) {
    return (
        <li>
            <input
                type="checkbox"
                checked={item.packed}
                value={item.id}
                onChange={() => onToggleItem(item.id)}
            />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.description}
            </span>
            <button onClick={() => onDeletItem(item.id)}>❌</button>
        </li>
    );
}

export default PackingList;