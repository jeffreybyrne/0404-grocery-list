// Make useState accessible
const { useState } = React;

const ListItem = (props) => {

    const updateRgb = ( val ) => {
        handleOnChange(val);
    };

    let category = props.category;
    let quantity = props.quantity;
    let item = props.item;

    return (
        <li className={category}>
            <button>-</button>
            <span>{quantity} {item}</span>
            <button>+</button>
        </li>
    );
};

const ShoppingList = (props) => {
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
    
    return (
        <ul class="filters">
            <Filter value={"all"} id={0} checked={true}/>
            <Filter value={"meat"} id={1} />
            <Filter value={"prod"} id={2} />
            <Filter value={"dairy"} id={3} />
            <Filter value={"bakery"} id={4} />
        </ul>
    )
}

const Filter = (props) => {
    
    const value = props.value;
    const id = props.id;
    const checked = props.checked;

    return (
        <li>
            <input type="radio" name="{category}" value="{category}" id="filter{id}" defaultChecked={checked}/>
            <label for="filter{id}">{value}</label>
        </li>
    )
}

ReactDOM.render(<ShoppingList />, document.getElementById('shoppingList'))
ReactDOM.render(<FilterInputLi />, document.getElementById('filterCategories'))