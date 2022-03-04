/// <reference types= "cypress" />

const payloadChangeBook = require ('../payloads/change-book.js')

function changeBook(idBook) {
    return cy.request({
        method: 'PUT',
        url: 'Books/${idBook}',
        headers: {
            'Context-type': 'application/json',
        },
        failOnStatusCode: false,
        body: payloadChangeBook
    })
}

export {allBooks};