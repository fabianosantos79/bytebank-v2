import { screen, render } from "@testing-library/react";
import App from "./paginas/Principal/App";
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";
import Cartoes from "./componentes/Cartoes/index"
import AppRoutes from "./routes"

describe("Rotas", () => {
    test("Deve renderizar a saudação na rota principal", () => {
        render(<App />, { wrapper: BrowserRouter });
        const usuario = screen.getByText('Olá, Fabiano :)!');
        expect(usuario).toBeInTheDocument()
    });

    test("Should render the Cards route", () => {
        const rota = "/cartoes";

        render(<MemoryRouter initialEntries={[rota]}>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="cartoes" element={<Cartoes />} />
                </Route>
            </Routes>
        </MemoryRouter>
        );

        const meusCartoes = screen.getByText('Meus cartões');
        expect(meusCartoes).toHaveTextContent('Meus cartões');
    });

    test("Deve rendereizar a localização da rota atual", () => {
        const rota = '/cartoes';

        render(<MemoryRouter initialEntries={[rota]}>
            <App />
        </MemoryRouter>
        );

        const localizacaoAtual = screen.getByTestId('local');
        expect(localizacaoAtual).toHaveTextContent(rota)
    });

    test("Deve rendereizar a página de Erro - 404", () => {
        const rota = '/bla';

        render(<MemoryRouter initialEntries={[rota]}>
            <AppRoutes />
        </MemoryRouter>
        );

        const paginaErro = screen.getByTestId("pagina-404");
        expect(paginaErro).toContainHTML('<h1>Ops! Não encontramos a página</h1>');
    })
})