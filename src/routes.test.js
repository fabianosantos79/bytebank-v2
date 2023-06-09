import { screen, render } from "@testing-library/react";
import App from "./paginas/Principal/App";
import { BrowserRouter } from "react-router-dom";

describe("Rotas", () => {
    test("Deve renderizar a saudação na rota principal", () => {
        render(<App />, { wrapper: BrowserRouter });
        const usuario = screen.getByText('Olá, Fabiano :)!');
        expect(usuario).toBeInTheDocument()
    })
})