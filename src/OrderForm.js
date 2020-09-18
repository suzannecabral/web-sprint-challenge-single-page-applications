import React from 'react'

export default function OrderForm(props){
    const { 
        // formValues, 
        change,
        // orders,
        submit,
        disabled,
        formErrors
    }=props
    // console.log("Order form button disabled:", disabled)
    // console.log("Order form values:", formValues)
    // console.log("Order form change fn:", change)
    

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


    const onSubmit = evt => {

        //don't refresh the page on submit
        // (click or enter key)
        //this goes on the form element
        evt.preventDefault()

        //then use the submit function in AppJS
        submit()
    }

    const toppings={
        cheese:false,
        pepperoni:false,
        mushrooms:false,
        pineapple:false,
        canadianBacon:false,
        jalapenos:false,
    }


    return(
        <div >
            <h2>Build your pizza:</h2>
            <form id="orderForm" onSubmit={onSubmit}>
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
                    <select 
                        name="pizzaSize"
                        onChange={onChange}
                        >
                        <option></option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                </label>
                <div className="checklist">
                <h3>Pick your Toppings:</h3>

                    <fieldset name="toppings">

                        <label htmlFor="cheese">
                            Cheese
                            <input 
                                type="checkbox" 
                                name="cheese"
                                onChange={onChange}
                                />
                        </label>
                        <label htmlFor="pepperoni">
                            Pepperoni
                            <input 
                                type="checkbox" 
                                name="pepperoni"
                                onChange={onChange}
                                />
                        </label>
                        <label htmlFor="mushrooms">
                            Mushrooms
                            <input 
                                type="checkbox" 
                                name="mushrooms"
                                onChange={onChange}
                                />
                        </label>
                        <label htmlFor="pineapple">
                            Pineapple
                            <input 
                                type="checkbox" 
                                name="pineapple"
                                onChange={onChange}
                                />
                        </label>
                        <label htmlFor="canadianBacon">
                            Canadian Bacon
                            <input 
                                type="checkbox" 
                                name="canadianBacon"
                                onChange={onChange}
                                />
                        </label>
                        <label htmlFor="jalapenos">
                            Jalapenos
                            <input 
                                type="checkbox" 
                                name="jalapenos"
                                onChange={onChange}
                                />
                        </label>

                    </fieldset>

                </div>
                <label htmlFor="instructions">
                    Additional Instructions:
                    <input 
                        name="instructions" 
                        type="text" 
                        onChange={onChange}
                        />
                </label>
                <button disabled={disabled}>Add to Order</button>
                <div id="errorFrame">
                    <p>{formErrors.name}</p>
                    <p>{formErrors.size}</p>
                </div>
            </form>
        </div>
    )

}