import { FormRotas, ItemForm, Container, SideBar } from './styles';

import { FormEvent, useState } from "react";
import { Input } from '../Input';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../services/api';
import { useLocation } from '../../hooks/useLocation';


export function Form() {

    const [countParadas, setCountParadas] = useState([0]);
    const [nameRoute, setNameRoute] = useState('');

    const { idVeiculo, Logout } = useAuth();
    const { paradas, routesConstructor } = useLocation();

    function addParada(newParada: number) {
        const parada = [...countParadas, newParada];
        setCountParadas(parada);

    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        const now = new Date();
        try {
            await api.post('/rotas/salvar',
                {
                    name: nameRoute,
                    stop: paradas,
                    routeDate: now.toISOString(),
                    user: {
                        idVeiculo: idVeiculo
                    }
                },

            ).then(response => {
                const { data } = response;
                routesConstructor(data)
            });

        } catch (error) {
            console.log(error);
        }

     
    }

    function logOut(){
        Logout();
    }

    return (
        <>
            <Container>
                <div className='header'>
                    <label>Adicionar parada</label>
                    <button
                        onClick={() => addParada(countParadas.length + 1)}>+</button>
                </div>

                <FormRotas onSubmit={handleSubmit}>
                    <ItemForm>
                        <span>Nome da rota</span>
                        <input type="text" placeholder='Digite o nome da rota'
                            onChange={e => setNameRoute(e.target.value)} value={nameRoute} />
                    </ItemForm>
                    {countParadas.length > 0 && countParadas.map((item, index) => <Input key={index} />)}

                    {countParadas.length !== 1 && <button>
                        Criar rota
                    </button>}


                </FormRotas>
            </Container>

            <SideBar>
                <div>
                    <span>Veiculo</span>
                    <span>{idVeiculo}</span>
                </div>
                <a href='/' onClick={logOut}>Deslogar</a>
            </SideBar>

        </>
    )
}