import { createContext, ReactNode, useContext, useState } from 'react';
import { api } from '../services/api';
interface LocationContextData {
    paradas: Position[];
    position: Position;
    addParada: (newParada: Parada) => void;
    changePosition: (newPosition: Position) => void;
    routesConstructor: (routeId: string) => void;
    loadRotas: boolean;
}

const LocationContext = createContext<LocationContextData>({} as LocationContextData);

type Position = {
    lat: string;
    lng: string;
}
interface Parada {
    position: Position;
}

interface LocationProviderProps {
    children: ReactNode;
}

const initialPosition = { lat: "-4.9708", lng: "-39.0161" };

export function LocationProvider({ children }: LocationProviderProps) {

    const [paradas, setParadas] = useState<Position[]>([]);
    const [position, setPosition] = useState<Position>(initialPosition);
    const [idRota, setIdRota] = useState('');
    const [loadRotas, setLoadRotas] = useState(false);

    function changePosition(newPosition: Position) {
        setPosition(newPosition);

    }

    function addParada(newParada: Parada) {
        const newPosition = {
            lat: newParada.position.lat,
            lng: newParada.position.lng
        };
        setPosition(newPosition);

        const parada = [...paradas, newPosition];
        setParadas(parada);
        
    }

    async function routesConstructor(routeId : string) {
        setIdRota(routeId);

         const response = await api.get(`rotas/${idRota}`);
         
         setParadas(response.data);
         setLoadRotas(!loadRotas);

    }

    return (
        <LocationContext.Provider value={{ paradas, addParada, position, changePosition, routesConstructor, loadRotas }}>
            {children}
        </LocationContext.Provider>
    )
}

export function useLocation(): LocationContextData {
    const context = useContext(LocationContext);
    return context;
}