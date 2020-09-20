import * as yup from 'yup'

export default yup.object().shape({
    name: yup.string()
    .required('Name is required')
    .min(2, 'Name must be 2 characters or longer'),
    pizzaSize: yup.string()
        .required('Please select a pizza size')
        .oneOf(['Small','Medium','Large'], 'Please select a pizza size'),
    // toppings: yup.boolean()
    //     .required('Please choose at least one topping'),
    cheese:yup.boolean(),
    pepperoni:yup.boolean(),
    mushrooms:yup.boolean(),
    pineapple:yup.boolean(),
    canadianBacon:yup.boolean(),
    jalapenos:yup.boolean(),
    instructions:yup.string(),
})