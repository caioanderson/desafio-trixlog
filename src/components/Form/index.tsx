import { FormRotas, ItemForm, Container, SideBar } from './styles';

import { FormEvent, useState } from "react";
import { Input } from '../Input';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../services/api';
import { useLocation } from '../../hooks/useLocation';


export function Form() {

    const [countParadas, setCountParadas] = useState([0]);
    const [nameRoute, setNameRoute] = useState('');

    const { idVeiculo } = useAuth();
    const { paradas, routesConstructor } = useLocation();

    function addParada(newParada: number) {
        const parada = [...countParadas, newParada];
        setCountParadas(parada);

    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        const now = new Date();
        const response = await api.post('/rotas/salvar',
            {
                name: nameRoute,
                stop: paradas,
                routeDate: now.toISOString(),
                user: {
                    idVeiculo
                }
            });

        routesConstructor(response.data);
    }

    return (
        <>
            <Container>
                <div className='header'>
                    <label>Adicionar parada</label>
                    <button onClick={() => addParada(countParadas.length + 1)}>+</button>
                </div>

                <FormRotas onSubmit={handleSubmit}>
                    <ItemForm>
                        <span>Nome da rota</span>
                        <input type="text"
                            onChange={e => setNameRoute(e.target.value)} value={nameRoute} />
                    </ItemForm>
                    {countParadas.length > 0 && countParadas.map((item, index) => <Input key={index} />)}

                    {countParadas.length !== 1 && <button>
                        Criar rota
                    </button>}


                </FormRotas>
            </Container>

            <SideBar>
                <span>Veiculo</span>
                <span>{idVeiculo}</span>
            </SideBar>

        </>
    )
}