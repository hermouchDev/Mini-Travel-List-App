import {useState} from 'react';

function Form({addItem}) {
    // const itemsNbr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const [desc, setDesc] = useState('');
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();

        if (!desc) return;
        const newItem = {
            id : Date.now(), 
            description : desc, 
            quantity : quantity, 
            picked : false
        };
        // console.log(newItem);

        setDesc("");
        setQuantity(1);

        addItem(newItem);
    }
    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your trip ? 😉</h3>
            <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                {
                    Array.from({length : 20}, (_, i) => i + 1 ).map((nbr) => 
                    <option value={nbr} key={nbr}>
                        {nbr}
                    </option>)
                }
            </select>
            <input 
                type="text" 
                value={desc} 
                onChange={(e) => setDesc(e.target.value)} 
                placeholder="Enter what you need ..." />
            <button type='submit'>Add</button>
        </form>
    );
}


export default Form;