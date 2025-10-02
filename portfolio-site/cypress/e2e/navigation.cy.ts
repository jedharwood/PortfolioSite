export const locales = {
    en: 'en',
    ja: 'ja',
} as const;

export type Locale = keyof typeof locales;

const openNavMenuWithLocale = (locale: Locale): void => {
    cy.get('button[aria-label="Open main menu"]').click();
    cy.get('#burger-menu').within(() => {
        cy.contains(`a[href*="/${locale}"]`, /^Home$/).should('be.visible');
        cy.contains(
            `a[href*="/${locale}/work-history"]`,
            /^Work History$/,
        ).should('be.visible');
        cy.contains(`a[href*="/${locale}/projects"]`, /^Projects$/).should(
            'be.visible',
        );
        cy.contains(`a[href*="/${locale}/contact"]`, /^Contact$/).should(
            'be.visible',
        );
    });
};

const visitHomePageWithLocale = (locale: Locale): void => {
    cy.visit('http://localhost:3000');

    cy.get('h1').contains('Jed Harwood');
    cy.url().should('equal', `http://localhost:3000/${locale}`);
    cy.get('#burger-menu')
        .find(`a[href*="/${locale}"]`)
        .should('have.css', 'text-decoration-line', 'underline');
};

const findAndClickNavLink = (
    locale: Locale,
    path: string,
    expectedTextContent: string,
) => {
    cy.get('#burger-menu')
        .find(`a[href*="/${locale}/${path}"]`)
        .should('be.visible')
        .click();

    cy.get('h1').contains(expectedTextContent);
    cy.url().should('equal', `http://localhost:3000/${locale}/${path}`);
    cy.get('#burger-menu')
        .find(`a[href*="/${locale}/${path}"]`)
        .should('have.css', 'text-decoration-line', 'underline');
};

describe('Navigation', () => {
    beforeEach(() => {
        cy.clearCookies();
    });

    it('should navigate to Home page defaulted to locale en', () => {
        visitHomePageWithLocale(locales.en);
    });

    it('should navigate to Work History Page', () => {
        visitHomePageWithLocale(locales.en);
        openNavMenuWithLocale(locales.en);
        findAndClickNavLink(locales.en, 'work-history', 'Work History');
    });

    it('should navigate to Projects Page', () => {
        visitHomePageWithLocale(locales.en);
        openNavMenuWithLocale(locales.en);
        findAndClickNavLink(locales.en, 'projects', 'Projects');
    });

    it('should navigate to Contact Page', () => {
        visitHomePageWithLocale(locales.en);
        openNavMenuWithLocale(locales.en);
        findAndClickNavLink(locales.en, 'contact', 'Email me');
    });

    describe('when locale is ja', () => {
        beforeEach(() => {
            cy.setCookie('NEXT_LOCALE', locales.ja);
        });

        it('should navigate to Home page defaulted to locale ja', () => {
            visitHomePageWithLocale(locales.ja);
        });

        it('should navigate to Work History Page', () => {
            visitHomePageWithLocale(locales.ja);
            openNavMenuWithLocale(locales.ja);
            findAndClickNavLink(locales.ja, 'work-history', 'Work History');
        });

        it('should navigate to Projects Page', () => {
            visitHomePageWithLocale(locales.ja);
            openNavMenuWithLocale(locales.ja);
            findAndClickNavLink(locales.ja, 'projects', 'Projects');
        });

        it('should navigate to Contact Page', () => {
            visitHomePageWithLocale(locales.ja);
            openNavMenuWithLocale(locales.ja);
            findAndClickNavLink(locales.ja, 'contact', 'Email me');
        });
    });
});
