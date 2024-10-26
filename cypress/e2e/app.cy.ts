import emailjs from '@emailjs/browser';

describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.stub(emailjs, 'send').returns({ status: 200 }); // Mock successful emailjs response
  });

  it('should open and close mobile menu', () => {
    cy.viewport('iphone-6');

    // Find a link with an href attribute containing "about" and click it
    cy.get('button[aria-label="Open menu"]').click();
    cy.get('a[href*="about"]').first().should('be.visible');
    cy.get('a[href*="blog"]').first().should('be.visible');
    cy.get('a[href*="contact"]').first().should('be.visible');

    cy.get('button[aria-label="Close menu"]').click();
    cy.get('a[href*="about"]').first().should('not.be.visible');
  });

  it('should navigate to the about me page', () => {
    // Find a link with an href attribute containing "about" and click it
    cy.get('ul[aria-label="desktop-nav"] a[href*="about"]').click();

    // The new url should include "/about"
    cy.url().should('include', '/about');

    // The new page should contain an h1 with "About"
    cy.get('h1').contains('me.');
  });

  describe('Contact Page', () => {
    it('should navigate to the contact page', () => {
      // Find a link with an href attribute containing "about" and click it
      cy.get('ul[aria-label="desktop-nav"] a[href*="contact"]').click();

      // The new url should include "/about"
      cy.url().should('include', '/contact');

      // The new page should contain an h1 with "About"
      cy.get('h1').contains(/have a project/i);
    });

    xit('should successfully submit the form when valid data is entered', () => {
      cy.get('ul[aria-label="desktop-nav"] a[href*="contact"]').click();
      //fill form
      cy.get('#name').type('John Doe');
      cy.get('#email').type('johndoe@example.com');
      cy.get('#message').type('This is a test message.');

      cy.get('form').submit();
      //success message
      cy.contains(/thank you for your message/i);
      //reset form
      cy.get('#name').should('have.value', '');
      cy.get('#email').should('have.value', '');
      cy.get('#message').should('have.value', '');
    });
  });

  it('should navigate to the blog page', () => {
    // Find a link with an href attribute containing "about" and click it
    cy.get('ul[aria-label="desktop-nav"] a[href*="blog"]').click();

    // The new url should include "/about"
    cy.url().should('include', '/blog');

    // The new page should contain an h1 with "About"
    cy.get('h2').contains('blog.');
  });

  it('should display projects and animate them', () => {
    // Scroll to the projects container using aria-label
    cy.get('ul[aria-label="Projects"]').scrollIntoView().should('be.visible');

    // Get all project items
    cy.get('ul[aria-label="Projects"] li').then(($items) => {
      // Loop through each project item
      $items.each((index, item) => {
        // Scroll to the item and check if it's visible
        cy.wrap(item).scrollIntoView({ easing: 'linear' }).should('be.visible'); // Ensure the item is scrolled into view
      });
    });
  });

  it('should display the footer', () => {
    cy.get('footer').should('be.visible');
  });
});
