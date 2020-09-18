import React from 'react'

export default function OrderForm(props){
    return(
        <div id="orderForm">
            <h2>Build your pizza:</h2>
            <form>
                <label htmlFor="name">
                    Name:
                    <input type="text" name="name"/>
                </label>
                <label htmlFor="pizzaSize">
                    Pizza Size:
                    <select>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                </label>
                <div className="checklist">
                <h3>Pick your Toppings:</h3>
                    <label htmlFor="cheeseTopping">
                        Cheese
                        <input type="checkbox" name="cheeseTopping"/>
                    </label>
                    <label htmlFor="pepperoniTopping">
                        Pepperoni
                        <input type="checkbox" name="pepperoniTopping"/>
                    </label>
                    <label htmlFor="mushroomsTopping">
                        Mushrooms
                        <input type="checkbox" name="mushroomsTopping"/>
                    </label>
                    <label htmlFor="pineappleTopping">
                        Pineapple
                        <input type="checkbox" name="pineappleTopping"/>
                    </label>
                    <label htmlFor="canadianBaconTopping">
                        Canadian Bacon
                        <input type="checkbox" name="canadianBaconTopping"/>
                    </label>
                    <label htmlFor="jalapenosTopping">
                        Jalapenos
                        <input type="checkbox" name="jalapenosTopping"/>
                    </label>
                </div>
                <label htmlFor="instructions">
                    Additional Instructions:
                    <input name="instructions" type="text" />
                </label>
                <button>Add to Order</button>
            </form>
        </div>
    )

}