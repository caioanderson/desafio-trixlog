import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Register } from '../../pages/Register';

const mockedUsedNavigation = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockedUsedNavigation,
}));

jest.mock('react-router-dom')


describe('Register page', () => {
    it('renderizar corretamente', () => {
        render(<Register />)

        expect(screen.getByText('Identificador do veiculo')).toBeInTheDocument();
        expect(screen.getByText('Senha')).toBeInTheDocument();
        expect(screen.getByText('Confirmar senha')).toBeInTheDocument();

    });

    it('Clique de botões para navegação', () => {
        render(<Register />)

        expect(screen.getByText('Voltar')).toBeInTheDocument();
        expect(screen.getByText('Cadastrar')).toBeInTheDocument();
    })
})