///   <reference types="cypress" />
import { And, Then, When, } from "@badeball/cypress-cucumber-preprocessor";

When ("I visit the Main Page", ()=> {
    cy.visit("/"); 
});

Then ("I should see {string} types of modes",(length:string) => {
    cy.get("h2").should("have.length",length);
});

And ("I click on Offline Multiplayer", () => {
    cy.get("div").eq(1).should("be.visible");
    cy.get("a").find('img[src="./o_m.PNG"]').click();
});
    
Then ("I should go to particular mode", () => {
    cy.url().should("contains", "index.html");
});

Then("I should see the first move is for X", () => {
    cy.get("#board").should("be.visible");
    cy.get(".x").click();
});

Then("after the first move, only O can be clicked", () => {
    cy.get(".cell").eq(5).click();
    cy.get(".circle").should("be.visible");
});

Then("I should be able to click on any cell", () => {
    cy.get("div").should("be.visible");
    cy.get(".x").click();
});

And("I should not be able to click on an already marked cell again", () => {
    cy.get(".cell").eq(0).click();
    cy.get(".cell").eq(0).should("not.be.enabled");

});

Then("I should see both X and O are visible in the UI once they are marked", () => {
    cy.get(".cell").eq(4).click();
    cy.get(".cell").eq(6).click();
    cy.get(".cell").eq(6).should("be.visible");
    cy.get(".cell").eq(4).should("be.visible")
});

Then("I should see that the first game is tied", ()=> {
    cy.get(".cell").eq(0).click();
    cy.get(".cell").eq(1).click();
    cy.get(".cell").eq(2).click();
    cy.get(".cell").eq(3).click();
    cy.get(".cell").eq(4).click();
    cy.get(".cell").eq(6).click();
    cy.get(".cell").eq(5).click();
    cy.get(".cell").eq(8).click();
    cy.get(".cell").eq(7).click();
    cy.get("div").eq(11).should("be.visible");
});

And("I should see that the second is won by X", ()=> {
    cy.get("#restartButton").click();
    cy.get(".cell").eq(0).click();
    cy.get(".cell").eq(1).click();
    cy.get(".cell").eq(2).click();
    cy.get(".cell").eq(3).click();
    cy.get(".cell").eq(4).click();
    cy.get(".cell").eq(5).click();
    cy.get(".cell").eq(6).click();
    cy.get("div").eq(11).should("be.visible");
});

And("I should see that the last is won by O", () => {
    cy.get("#restartButton").click();
    cy.get(".cell").eq(0).click();
    cy.get(".cell").eq(1).click();
    cy.get(".cell").eq(2).click();
    cy.get(".cell").eq(4).click();
    cy.get(".cell").eq(5).click();
    cy.get(".cell").eq(7).click();
    cy.get("div").eq(11).should("be.visible");
});

Then("I should see the 'Restart' game once the game is over", () => {
    cy.get(".cell").eq(0).click();
    cy.get(".cell").eq(1).click();
    cy.get(".cell").eq(3).click();
    cy.get(".cell").eq(2).click();
    cy.get(".cell").eq(6).click();
    cy.get('#restartButton').should('be.visible');
});