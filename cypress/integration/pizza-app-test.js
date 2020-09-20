//arrange
describe('Sanity check',()=>{
    //act
    it('Make sure cypress is working',()=>{
        //assert
        expect(true).to.equal(true)
    })
})
// [x] successful 

//arange
describe('Visit the page',()=>{
    //act
    it('visit the url',()=>{
        //assert
        cy.visit('http://localhost:3000/pizza')
    })
})
// [x] successful 

