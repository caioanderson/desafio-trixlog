import { Container, ItemForm } from './styles';

export function Form() {
    return (
        <Container>
            <ItemForm>
                <span>Ponto de partida</span>
                <input
                    placeholder="Digite seu ponto de partida"
                    type="text" />
            </ItemForm>
            <ItemForm>
                <span>Ponto de chegada</span>
                <input
                    placeholder="Digite seu ponto de chegada"
                    type="text" />
            </ItemForm>

            <button>
                Criar rota
            </button>

        </Container>
    )
}