import { createContext, ReactNode, useState } from 'react';

interface LocationContextData {
    latitude: number;
    longitude: number;
}

const LocationContext = createContext<LocationContextData>({} as LocationContextData);


interface LocationProviderProps {
    children: ReactNode;
}

export function LocationProvider({ children }: LocationProviderProps) {

    const [localizacaoPartida, setLocalizacaoPartida] = useState();
    const [localizacaoDestino, setLocalizacaoDestino] = useState();


    return (
        <h1>oi</h1>
    )
}