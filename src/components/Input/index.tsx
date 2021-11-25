import { useLocation } from '../../hooks/useLocation';
import AsyncSelect from "react-select/async";
import { fetchLocalMapBox } from '../../services/apiMapBox';

import { ItemInput } from './styles';
import { useState } from 'react';
interface NameLocation {
    label: string;
    value: string;
}

export function Input() {

    const { addParada } = useLocation();

    const [address, setAddress] = useState<NameLocation>();
    const [disabledOption, setDisabledOption] = useState(false);

    function handleChangeSelect(event: any) {
        setAddress({ label: event.place, value: event.place });
        const position = {
            lat: event.coords[1],
            lng: event.coords[0],

        }
        setDisabledOption(!disabledOption)
        addParada({position});
    }

    //Carregando a localidade com MapBox
    async function loadOptionsAddress(inputValue: any, callback: any) {
        if (inputValue.length < 5) return;
        let items: any = [];
        const response = await fetchLocalMapBox(inputValue);
        // eslint-disable-next-line array-callback-return
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
                isDisabled={disabledOption}
                aria-label="cost-input"
            />
        </ItemInput>
    )
}