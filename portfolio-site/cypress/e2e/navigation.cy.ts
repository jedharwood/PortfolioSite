const openNavMenuLocaleEn = (): void => {
    cy.get('button[aria-label="Open main menu"]').click();
    cy.get('#burger-menu').within(() => {
        cy.contains('a', /^Home$/).should('be.visible');
        cy.contains('a', /^Work History$/).should('be.visible');
        cy.contains('a', /^Projects$/).should('be.visible');
        cy.contains('a', /^Contact$/).should('be.visible');
    });
};

const visitHomePageLocaleEn = (): void => {
    cy.visit('http://localhost:3000');
    // cy.location('pathname').should('eq', '/en');
    cy.url().should('equal', 'http://localhost:3000/en');
};

const findAndClickNavLink = (navLink: string) => {
    cy.get('#burger-menu')
            .find(`a[href*="/${navLink}"]`)
            .should('be.visible')
            .click();

    // cy.location('pathname').should('eq', '/en/contact');
    cy.url().should('equal', `http://localhost:3000/${navLink}`);
}

describe('Navigation', () => {
    it('should navigate to Home page defaulted to locale en', () => {
        visitHomePageLocaleEn();
    });

    it('should navigate to Work History Page', () => {
        visitHomePageLocaleEn();
        openNavMenuLocaleEn();
        findAndClickNavLink('en/work-history')
    });

    it('should navigate to Projects Page', () => {
        visitHomePageLocaleEn();
        openNavMenuLocaleEn();
        findAndClickNavLink('en/projects');
    });

    it('should navigate to Contact Page', () => {
        visitHomePageLocaleEn();
        openNavMenuLocaleEn();
        findAndClickNavLink('en/contact');
    });
});
