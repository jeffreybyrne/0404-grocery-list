// Make useState accessible
const { useState } = React;

const ListItem = (props) => {

    const updateRgb = ( val ) => {
        handleOnChange(val);
    };

    let category = props.category;
    let [quantity, setQuantity] = useState(props.quantity);
    let item = props.item;

    return (
        <li className={category}>
            <button onClick={ () => (quantity > 0 ? setQuantity(quantity-1) : {})  }>-</button>
            <span>{quantity} {item}</span>
            <button onClick={ () => setQuantity(quantity+1) }>+</button>
        </li>
    );
};

const ShoppingList = (props) => {

    let [list, setList] = useState()

    return (
        <ul id="shoppingList" class="shoppinglist">
            <ListItem category={"meat"} quantity={3} item={"Steaks"}/>
            <ListItem category={"prod"} quantity={4} item={"Apples"}/>
            <ListItem category={"dairy"} quantity={1} item={"Milk (1L, 2%)"}/>
            <ListItem category={"bakery"} quantity={2} item={"Baguettes"}/>
        </ul>
    )
}

const FilterInputLi = (props) => {
    
    let [selectedId, setSelectedId] = useState(0);

    return (
        <section id="filterCategories">
            <ul className="filters">
                <Filter value={"all"} id={0} selectedId={selectedId} onClick={setSelectedId} />
                <Filter value={"meat"} id={1} selectedId={selectedId} onClick={setSelectedId} />
                <Filter value={"prod"} id={2} selectedId={selectedId} onClick={setSelectedId} />
                <Filter value={"dairy"} id={3} selectedId={selectedId} onClick={setSelectedId} />
                <Filter value={"bakery"} id={4} selectedId={selectedId} onClick={setSelectedId} />
            </ul>
            <form id="newCat" class="cat-new">
                <input type="text" name="item" id="itemName" className="form-component inpt" placeholder="New Category"/>
            </form>
        </section>
    )
}

const Filter = (props) => {
    
    const value = props.value;
    const id = props.id;
    const selectedId = props.selectedId;
    const checked = (id === selectedId);

    return (
        <li>
            <input type="radio" name={value} value={value} id={`filter${id}`} checked={checked} onClick={ () => props.onClick(id) } />
            <label for={`filter${id}`}>{value}</label>
        </li>
    )
}

ReactDOM.render(<ShoppingList />, document.getElementById('shoppingList'));
ReactDOM.render(<FilterInputLi />, document.getElementById('filterParent'));
// ReactDOM.render(<FilterInputLi />, document.querySelector('body'))