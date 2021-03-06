import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface AuthContextData {
    idVeiculo: string;
    changeIdVeiculo: (id: string) => void;
    signed: string;
    Logout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
    children: ReactNode;
}


export function AuthProvider({ children }: AuthProviderProps) {

    const [idVeiculo, setIdVeiculo] = useState('');
    const [signed, setSigned] = useState('');

    function changeIdVeiculo(id: string) {
        setIdVeiculo(id);
    }

    function Logout(){
        localStorage.removeItem("@AuthContx:id");
    }

    useEffect(() => {
         function loadStorage() {
            const storageUser = localStorage.getItem('@AuthContx:id');
 
             if(storageUser){
                setSigned(JSON.parse(storageUser));
                setIdVeiculo(signed);
             }
         }
 
         loadStorage();
    })

    

    return (
        <AuthContext.Provider value={{ idVeiculo, changeIdVeiculo, signed, Logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(): AuthContextData {
    const context = useContext(AuthContext);
    return context;
}