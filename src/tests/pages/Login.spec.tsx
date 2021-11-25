import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Login } from '../../pages/Login';

const mockedUsedNavigation = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockedUsedNavigation,
}));

jest.mock('react-router-dom')


describe('Login page', () => {
    it('renderizar corretamente', () => {
        render(<Login />)

        expect(screen.getByText('Identificador do veiculo')).toBeInTheDocument();
        expect(screen.getByText('Senha')).toBeInTheDocument();

    });

    it('Clique de botões para navegação', () => {


        render(<Login />)

        expect(screen.getByText('Registrar')).toBeInTheDocument();
        let buttonLogin = screen.getAllByText('Login')[1] as HTMLButtonElement;
        expect(buttonLogin.type).toContain('submit');
        
    })
})