function Stats({ items }) {
    const itemsNum = items.length;
    const packedItems = items.filter((item) => item.packed);
    const percentage = Math.round((packedItems.length / itemsNum) * 100)

    if (!itemsNum)
        return (
            <footer className="stats">
                <em>Start adding some items to your travel list 😊</em>
            </footer>
        );
    return (
        <footer className="stats">
            <em>
                {percentage === 100
                    ? "You got everything! Ready to go ✈️😊"
                    : `
                    You have ${itemsNum} items in your list, And you already pick ${packedItems.length} ( ${percentage} %)
                `}
            </em>
        </footer>
    );
}

export default Stats;
