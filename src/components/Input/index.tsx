import AsyncSelect from "react-select/async";
import { useState } from "react";
import { fetchLocalMapBox } from '../../apiMapBox';

import { ItemInput } from './styles';

type Position = {
    longitude: number;
    latitude: number;
}

export function Input() {

    const [position, setPosition] = useState<Position | null>();

    const [address, setAddress] = useState<{
        label: string;
        value: string;
    } | null>();

    const [location, setLocation] = useState<{
        lng: number;
        lat: number;
    } | null>();

    //Carregando a localidade com MapBox
    async function loadOptionsAddress(inputValue: any, callback: any) {
        if (inputValue.length < 5) return;
        let places: any = [];
        const response = await fetchLocalMapBox(inputValue);
        response.features.map((item: any) => {
            places.push({
                label: item.place_name,
                value: item.place_name,
                coords: item.center,
                place: item.place_name
            });
        });
        callback(places);
    }

    function handleChangeSelect(event: any) {
        console.log("changed", event);
        setPosition({
            longitude: event.coords[0],
            latitude: event.coords[1],
        });
        console.log(position);

        setAddress({
            label: event.label,
            value: event.value,
        });

        console.log(address);

        setLocation({
            lng: event.coords[0],
            lat: event.coords[1],
        });
        console.log(location);

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