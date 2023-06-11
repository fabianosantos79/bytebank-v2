import { screen, render } from '@testing-library/react'
import App from './App'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'

describe('Componente <App />', () => {
    test('Deve permitir uma transação em Extrato', () => {
        render(<App />, { wrapper: BrowserRouter })

        const select = screen.getByRole('combobox')
        const campoValor = screen.getByPlaceholderText('Digite um valor')
        const botao = screen.getByRole('button')

        userEvent.selectOptions(select, ['Depósito'])
        userEvent.type(campoValor, '100')
        userEvent.click(botao)

        const novaTransacao = screen.getByTestId('lista-transacoes')
        const itemExtrato = screen.getByRole('listitem')

        expect(novaTransacao).toContainElement(itemExtrato)
    })
})