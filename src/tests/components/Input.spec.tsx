import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from '../../components/Input';

const setup = () => {
    const utils = render(<Input />)
    const input = utils.getByLabelText('cost-input')
    return {
      input,
      ...utils,
    }
  }
  

describe('Input component', () => {
    it('renderizar corretamente', () => {
        render(<Input />)
        expect(screen.getByText('Digite o ponto de parada...')).toBeInTheDocument();
    });

    it('mudar value input', () => {
        const { input } = setup(); 
        fireEvent.change(input, {target: {value: 'Quixada, Ce'}})
        expect(input.value).toBe('Quixada, Ce');
    })
})