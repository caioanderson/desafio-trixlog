import 'leaflet/dist/leaflet.css';
import { useLocation } from '../../hooks/useLocation';
import { MapContainer, TileLayer, Marker, Popup, Polyline, Polygon } from 'react-leaflet';
import Leaflet from 'leaflet';

import { Container } from './styles';

import location from '../../assets/location.svg';

const limeOptions = { color: 'lime' }

const mapPinIcon = Leaflet.icon({
    iconUrl: location,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
})

export function MapLeaflet() {

    const { paradas, position, polyne } = useLocation();

    return (
        <Container>
            <MapContainer
                style={{ height: '100%', width: '100%' }}
                center={[position.lat, position.lng]}
                zoom={15}
                scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {paradas.length >= 2 && <Polygon pathOptions={limeOptions} positions={polyne} />}

                {paradas.map((item, index) => (
                    <Marker
                        icon={mapPinIcon}
                        position={[item.position.lat, item.position.lng]}
                        key={index}>
                        <Popup>
                            {item.name}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </Container>
    );
}