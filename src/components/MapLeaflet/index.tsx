import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import { useLocation } from '../../hooks/useLocation';
import { MapContainer, Marker, TileLayer, } from 'react-leaflet';

import { Container } from './styles';

import RoutingMachine from '../RoutineMachine';

import location from '../../assets/location.svg';

const mapPinIcon = L.icon({
    iconUrl: location,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
})


export function MapLeaflet() {

    const { position, paradas, loadRotas } = useLocation();
    // console.log("🚀 ~ file: index.tsx ~ line 29 ~ MapLeaflet ~ paradas", paradas)

    // function waypoints(){
    //     let auxRotas: any = [];
    //     let coords: any = [];
    //     paradas.map((item) => {
    //         const rotas = [item.lat, item.lng];
    //         auxRotas = [[...coords], rotas];
    //         coords = [item.lat, item.lng];
    //     })
    //     return auxRotas;
    // }

    return (
        <Container>
            <MapContainer
                style={{ height: '100%', width: '100%' }}
                center={[Number(position.lat), Number(position.lng)]}
                zoom={8}
                scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {paradas.map((item, index) => (
                    <Marker
                        icon={mapPinIcon}
                        position={[Number(item.lat), Number(item.lng)]}
                        key={index}>
                            {loadRotas && <RoutingMachine item={paradas}/>}

                    </Marker>
                ))}
            </MapContainer>
        </Container>
    );
}