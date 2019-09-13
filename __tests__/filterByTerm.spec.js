const filterByTerm = require("../filterByTerm");

describe("Filter function", () => {
    // test stuff
    test("it should filter by a search term (link)", () => {
        const input = [
            { id: 1, url: "http://www.url1.dev" },
            { id: 2, url: "http://www.link2.dev" },
            { id: 3, url: "http://www.url3.dev" }
        ];

        const output = [{ id: 2, url: "http://www.link2.dev" }];

        expect(filterByTerm(input, "link")).toEqual(output);
    });

    test("it throw exception empty array", () => {
        expect(() => filterByTerm([], "link")).toThrow();
    });

    test("it throw exception empty searchTerm", () => {
        const input = [
            { id: 1, url: "http://www.url1.dev" },
            { id: 2, url: "http://www.link2.dev" },
            { id: 3, url: "http://www.url3.dev" }
        ];
        expect(() => filterByTerm(input, undefined)).toThrow();
    });
});
