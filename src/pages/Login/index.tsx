import { useNavigate } from 'react-router-dom';

import { Container, SectionLogin, SectionMap } from './styles';

import map from '../../assets/map.png';
import { FormEvent, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../services/api';

export function Login() {

    const navigate = useNavigate();

    const { changeIdVeiculo } = useAuth();

    const [idVeiculoLogin, setIdVeiculoLogin] = useState('');
    const [password, setPassword] = useState('');

    async function Login(event: FormEvent) {
        event.preventDefault();

        if (idVeiculoLogin === '' || password === '') {
            alert('Preencha todos os campos');
            return;
        } else {
            const user = { idVeiculoLogin, password };

            await api.post(`login/${idVeiculoLogin}`, user)
                .then(response => {
                    setIdVeiculoLogin(response.data)
                    changeIdVeiculo(idVeiculoLogin);
                    localStorage.setItem("@AuthContx:id", JSON.stringify(idVeiculoLogin));
                    navigate('/');
                });

        }

    }


    return (
        <Container>
            <SectionLogin>
                <header>
                    <span>Desafio trixlog</span>
                    <span>Login</span>
                </header>

                <div className='form' onSubmit={Login}>
                    <form action="">
                        <div>
                            <label>Identificador do veiculo</label>
                            <input type="text"
                                onChange={value => setIdVeiculoLogin(value.target.value)} value={idVeiculoLogin} />
                        </div>
                        <div>
                            <label>Senha</label>
                            <input type="password"
                                onChange={value => setPassword(value.target.value)} value={password} />
                        </div>

                        <div className='footer'>
                            <button type="submit">Login</button>
                        </div>
                    </form>
                    <div className='registrar'>
                        <button onClick={() => navigate('/create')}>Registrar</button>
                    </div>
                </div>

            </SectionLogin>
            <SectionMap>
                <img src={map} alt='ilustra????o de um mapa' />
            </SectionMap>
        </Container>
    )
}