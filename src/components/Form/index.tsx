import { Container, ItemForm } from './styles';

import { FormEvent, useState } from "react";
import { Input } from '../Input';


export function Form() {

    const [paradas, setParadas] = useState([0]);

    function addParada(newParada: number) {
        const parada = [...paradas, newParada];
        setParadas(parada);

    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
    }

    return (
        <Container onSubmit={handleSubmit}>
            <ItemForm>
                <label>Identificador do veiculo</label>
                <span>Veiculo - 16AASD712</span>
            </ItemForm>
            <ItemForm>
                <div>
                    <label>Adicionar parada</label>
                    <button onClick={() => addParada(paradas.length + 1)}>+</button>
                </div>
            </ItemForm>
                {paradas.map(() => (
                    <Input />
                ))}

            {paradas.length !== 1 && <button>
                Criar rota
            </button>}


        </Container>
    )
}