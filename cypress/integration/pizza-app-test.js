//-------------------------------------
//Sanity 1: Cypress is working
//-------------------------------------

//arrange
describe('Sanity check',()=>{
    //act
    it('Make sure cypress is working',()=>{
        //assert
        expect(true).to.equal(true)
    })
})
// [x] successful 

//-------------------------------------
//Sanity 2: Cypress can access the site
//-------------------------------------
//arange
describe('Visit the page',()=>{
    //act
    it('visit the url',()=>{
        //assert
        cy.visit('http://localhost:3000/pizza')
    })
})
// [x] successful 

//-------------------------------------
//MVP 1: you can add text to the text box
//-------------------------------------

//arrange
describe('Add text to the text box',()=>{

    //act
    it('Finds a text box named "name"',()=>{
        //assert
        cy.get('input[name=name]').should('be.visible')
    })

    //act
    it('does not find a radio button',()=>{
        //assert
        cy.get('input[type=radio]').should('not.be.visible')
    })

    //act
    it('types text into the input',()=>{
        //assert
        cy.get('input[name=name]')
            .type('Cypress Bot')
            .should('have.value','Cypress Bot')
    })

})

// [x] successful (1:48pm)

//-------------------------------------
//MVP 2: you can select multiple toppings
//-------------------------------------

//arrange
describe('Add multiple toppings to the order',()=>{
    //act
    it('finds a checkbox on the page',()=>{
        //assert
        cy.get('input[type=checkbox]').should('be.visible')
    })

    //act
    it('checks 3 boxes',()=>{
        //assert
        cy.get('input[name=cheese]')
            .click()
            .should('be.checked')
        cy.get('input[name=pepperoni]')
        .click()
        .should('be.checked')
    cy.get('input[name=mushrooms]')
        .click()
        .should('be.checked')
    })
})

// [x] successful (1:59pm)

//-------------------------------------
//MVP 3: you can submit the form
//(after selecting all required elements)
//-------------------------------------

describe('Select required fields and submit the form',()=>{
    it('Sees an "add to order" button',()=>{
        cy.contains('Add to Order')
    })
    it("Order button is disabled before filling all fields", ()=>{
        cy.contains('Add to Order')
            .should('be.disabled')
    })
    it('selects a pizza size',()=>{
        cy.get('select[name=pizzaSize]')
            .select('Small')
    })
    it('submits the form',()=>{
        cy.contains('Add to Order')
        .click()
    })
})
// [x] successful (2:10pm)