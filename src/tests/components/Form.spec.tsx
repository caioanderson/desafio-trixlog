import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Form } from '../../components/Form';

describe('Form component', () => {
    it('renderizar corretamente', () => {
        render(<Form />)
        expect(screen.getByText('Nome da rota')).toBeInTheDocument();
        expect(screen.getByText('Veiculo')).toBeInTheDocument();

    });
})