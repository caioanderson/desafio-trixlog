import { createContext, ReactNode, useContext, useState } from 'react';
interface LocationContextData {
    paradas: Parada[];
    position: Position;
    addParada: (newParada: Parada) => void;
    changePosition: (newPosition: Position) => void;
    polyne : [];
}

const LocationContext = createContext<LocationContextData>({} as LocationContextData);

type Position = {
    lat: number;
    lng: number;
}
interface Parada {
    name: string;
    position: Position;
}

interface LocationProviderProps {
    children: ReactNode;
}

const initialPosition = { lat: -4.9708, lng: -39.0161 };

export function LocationProvider({ children }: LocationProviderProps) {

    const [paradas, setParadas] = useState<Parada[]>([]);
    const [position, setPosition] = useState<Position>(initialPosition);

    function changePosition(newPosition: Position) {
        console.log("🚀 ~ file: useLocation.tsx ~ line 32 ~ changePosition ~ newPosition", newPosition)
        setPosition(newPosition);

    }

    function addParada(newParada: Parada) {
        setPosition(newParada.position);
        const parada = [...paradas, newParada];
        setParadas(parada);
    }

    function routesConstructor() {
        let polyne: any = [];
        let listCoords: any = [];
        paradas.map((item) => {
            const coords = [item.position.lat, item.position.lng];
            listCoords = [[...polyne], coords];
            polyne = [item.position.lat, item.position.lng];
        })
        
        return listCoords;
    }

    const polyne = routesConstructor();


    return (
        <LocationContext.Provider value={{ paradas, addParada, position, changePosition, polyne }}>
            {children}
        </LocationContext.Provider>
    )
}

export function useLocation(): LocationContextData {
    const context = useContext(LocationContext);
    return context;
}