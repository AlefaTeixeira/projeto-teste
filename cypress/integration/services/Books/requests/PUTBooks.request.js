/// <reference types= "cypress" />

function changeBook(idBook) {
    return cy.request({
        method: 'PUT',
        url: 'Books/${idBook}',
        failOnStatusCode: false,
        body: payloadAddBook
    })
}
export {allBooks};