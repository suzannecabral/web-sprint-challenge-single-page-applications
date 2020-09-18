import * as yup from 'yup'

export default yup.object().shape({
    name: yup.string()
    .required('Name is required')
    .min(2, 'Name must be 2 characters or longer'),
    pizzaSize: yup.string()
        .required('Please select a pizza size')
        .oneOf(['Small','Medium','Large'], 'Please select a pizza size'),
    cheeseTopping:yup.boolean(),
    pepperoniTopping:yup.boolean(),
    mushroomsTopping:yup.boolean(),
    pineappleTopping:yup.boolean(),
    canadianBaconTopping:yup.boolean(),
    jalapenosTopping:yup.boolean(),
    instructions:yup.string(),
})