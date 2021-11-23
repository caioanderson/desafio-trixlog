import { useNavigate } from 'react-router-dom';

import { Container, SectionRegister, SectionMap } from './styles';

import map from '../../assets/map.png';
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/useAuth';

export function Register() {

    const navigate = useNavigate();

    const { changeIdVeiculo } = useAuth();

    const [idVeiculo, setIdVeiculo] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    async function createUser(event: FormEvent) {
        event.preventDefault();
        if (password !== passwordConfirm) {
            alert('As senhas não conferem');
            setPassword('');
            setPasswordConfirm('');
        } else {

            const user = {
                idVeiculo,
                password
            }

            const response = await api.post('users', user);
            console.log(response);
            changeIdVeiculo(response.data.idVeiculo);
            navigate('/');

        }
    }

    return (
        <Container>
            <SectionRegister>
                <header>
                    <span>Desafio trixlog</span>
                    <span>Registrar</span>
                </header>

                <div className='form'>
                    <form onSubmit={createUser}>
                        <div>
                            <label>Identificador do veiculo</label>
                            <input type="text"
                                onChange={value => setIdVeiculo(value.target.value)} value={idVeiculo} />
                        </div>
                        <div>
                            <label>Senha</label>
                            <input type="password"
                                onChange={value => setPassword(value.target.value)} value={password} />
                        </div>
                        <div>
                            <label>Confirmar senha</label>
                            <input type="password"
                                onChange={value => setPasswordConfirm(value.target.value)} value={passwordConfirm} />
                        </div>

                        <div className='footer'>
                            <button onClick={() => navigate('/')}>Voltar</button>
                            <button type="submit">Cadastrar</button>
                        </div>
                    </form>
                </div>

            </SectionRegister>
            <SectionMap>
                <img src={map} alt='ilustração de um mapa' />
            </SectionMap>
        </Container>
    )
}