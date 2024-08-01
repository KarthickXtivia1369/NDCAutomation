import Create_supplier from '../pageObjects/SuppliersPage'
describe('Create_supplier ', function () {
    
    const cs = new Create_supplier()
    //Cypress.Cookies.preserveOnce('session_id', 'remember_token')
    //Cypress.Cookies.preserveOnce('session_id', 'remember_token')
    beforeEach(()=>{
        cy.visit('https://ndchomecare-play.epicordistribution.com/prophet21/#/login');
        cy.wait(50000);
        cy.login("KARTHIK.KANITHI","KkanNDC06!");

    })

    it('Create supplier', () => {
        cy.wait(10000);
        cs.P21Title().should('be.visible').and('contain.text', 'Home Portal');


        
    })
        
    
})