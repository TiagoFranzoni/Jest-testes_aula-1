const greeting = require("./greeting");

describe('Greeting Function Tests', () => {

    test("Deve Retornar mensagem corretamente", () => {
        const result = greeting("Tiago");
        expect(result).toBe("Hello Tiago");
    });
    // test('Deve retornar a saudação correta para um nome', () => {
    //     expect(greeting('Tiago')).toBe('Hello Tiago');
    // });


    test("Não deve pertmitir string vazia", () => {
        const expression = () => greeting("");
        expect(expression).toThrow("Name is required");
    });
    // test('Não deve permitir string vazia', () => {
    //     expect(() => greeting('')).toThrowError('Name is required');
    // });


    test("Não deve permitir tipo undefined", () => {
        const expression = () => greeting(undefined);
        expect(expression).toThrow("Name is not undefined");
    });
    // test('Não deve permitir tipo undefined', () => {
    //     expect(() => greeting(undefined)).toThrow('Name is not undefined');
    //   });

});
