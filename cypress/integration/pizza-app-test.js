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

    it('does not find a radio button',()=>{
        cy.get('input[type=radio]').should('not.be.visible')
    })

    it('types text into the input',()=>{
        cy.get('input[name=name]')
            .type('Cypress Bot')
            .should('have.value','Cypress Bot')
    })

})

// [x] successful (1:48pm)

//-------------------------------------
//MVP 2: you can add text to the text box
//-------------------------------------