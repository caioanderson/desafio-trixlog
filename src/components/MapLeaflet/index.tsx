import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import { Container } from './styles';

import location from '../../assets/location.svg';


const mapPinIcon = Leaflet.icon({
    iconUrl: location,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
})

export function MapLeaflet() {
    return (
        <Container>
            <MapContainer
                style={{ height: '100vh', position: 'relative' }}
                center={[-3.71839, -38.5434]}
                zoom={18}
                scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </Container>
    );
}