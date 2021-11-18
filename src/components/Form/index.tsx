import AsyncSelect from "react-select/async";
import { Container, ItemForm } from './styles';

import { fetchLocalMapBox } from '../../apiMapBox';
import { useState } from "react";

type Position = {
    longitude : number;
    latitude: number;
}

export function Form() {

    const [position, setPosition] = useState<Position | null>(null);


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
    }



    return (
        <Container>
            <ItemForm>
                <label>Ponto de partida</label>
                <AsyncSelect
                    placeholder="Digite o ponto de partida..."
                    classNamePrefix="filter"
                    cacheOptions
                    loadOptions={loadOptionsAddress}
                    onChange={handleChangeSelect}
                    // value={ }
                />
            </ItemForm>
            <ItemForm>
                <label>Ponto de chegada</label>
                <AsyncSelect
                    placeholder="Digite o ponto de chegada..."
                    classNamePrefix="filter"
                    cacheOptions
                    loadOptions={loadOptionsAddress}
                // onChange={}
                // value={}
                />
            </ItemForm>

            <button>
                Criar rota
            </button>

        </Container>
    )
}