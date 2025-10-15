function Stats({items}) {
    const itemsNum = items.length;
    return (
        <footer className="stats">
            <em>You have {itemsNum} items in your list, And you already pick {itemsNum} ( {itemsNum}%)</em>
        </footer>
    );
}

export default Stats;