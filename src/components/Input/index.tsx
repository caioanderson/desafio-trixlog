import { useLocation } from '../../hooks/useLocation';
import AsyncSelect from "react-select/async";
import { useEffect, useState } from "react";
import { fetchLocalMapBox } from '../../services/apiMapBox';

import { ItemInput } from './styles';
interface InputProps {
    name: string;
}

export function Input({ name }: InputProps) {

    const { addParada, changePosition } = useLocation();

    const [address, setAddress] = useState<{
        label: string;
        value: string;
    } | null>(null);

    function handleChangeSelect(event: any) {
        console.log("changed", event);
        setAddress({ label: event.place, value: event.place });

        const position = {
            lat: event.coords[1],
            lng: event.coords[0],
        }

        // changePosition(position);

        addParada({ name, position });
    }

    //Carregando a localidade com MapBox
    async function loadOptionsAddress(inputValue: any, callback: any) {
        if (inputValue.length < 5) return;
        let items: any = [];
        const response = await fetchLocalMapBox(inputValue);
        response.features.map((item: any) => {
            items.push({
                label: item.place_name,
                value: item.place_name,
                coords: item.center,
                place: item.place_name
            });
        });

        callback(items);
    }

    return (
        <ItemInput>
            <AsyncSelect
                placeholder="Digite o ponto de parada..."
                classNamePrefix="filter"
                cacheOptions
                loadOptions={loadOptionsAddress}
                onChange={handleChangeSelect}
                value={address}
            />
        </ItemInput>
    )
}