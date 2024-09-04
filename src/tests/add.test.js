const add = (a, b) => a + b;
const generateGreeting = (name = 'anon') => `Hello ${name}!`;


test("create a greeting", () => {
    expect(generateGreeting()).toBe("Hello anon!")
})


test('add 2 numbers', () => {
    expect(add(2, 3)).toBe(5)
});

