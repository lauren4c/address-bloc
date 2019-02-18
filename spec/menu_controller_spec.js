const MenuController = require('../controllers/MenuController');

describe("MenuController", () => {
    beforeEach(() => {
        this.menu = new MenuController();
    });
    describe("#getContactCount()", () => {

        
        it("should return 0 when there is are 0 contacts in the book", () => {
            expect(this.menu.getContactCount()).toBe(0);
        });
            
            it("should return 1 when there is exactly 1 contact in the book", () => {
            this.menu.contacts.push("Steve");
            expect(this.menu.getContactCount()).toBe(1);
    });
});

    describe("#remindMe()", () => {
        it("Should return a string containing the text Learning is a life-long pursuit.", () => {
            expect(this.menu.remindMe()).toBe('Learning is a life-long pursuit.');
        })
    })
});