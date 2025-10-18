function Stats({ items }) {
    const itemsNum = items.length;
    const packedItems = items.filter((item) => item.packed);
    const percentage = itemsNum === 0 ? 0 : Math.round((packedItems.length / itemsNum) * 100);
    return (
        <footer className="stats">
            <em>
                You have {itemsNum} items in your list, And you already pick{" "}
                {packedItems.length} ( {percentage} %)
            </em>
        </footer>
    );
}

export default Stats;
