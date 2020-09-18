import React from 'react'

export default function OrderForm(props){
    const { formValues, change }=props
    console.log("Order form values:", formValues)
    console.log("Order form change fn:", change)

    //-----------------------------------//
    //          Event Handlers           //
    //-----------------------------------//

    const onChange = (evt) => {

        //destructures event object properties
        const { name, value, type, checked } = evt.target

        //handles checkboxes
        const valueToUse = type === 'checkbox' ? checked : value

        //calls back to the state changing function in app.js
        // needs to be passed in as a prop
        // the event listener function, NOT the actual state function
        change (name, valueToUse)
    }


    return(
        <div id="orderForm">
            <h2>Build your pizza:</h2>
            <form>
                <label htmlFor="name">
                    Your Name:
                    <input 
                        type="text" 
                        name="name"
                        onChange={onChange}
                        />
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