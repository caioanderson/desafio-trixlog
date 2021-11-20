import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import location from '../assets/location.svg';

const mapPinIcon = L.icon({
    iconUrl: location,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
})


const createRoutineMachineLayer = () => {

    const instance = L.Routing.control({
        waypoints: [
            L.latLng(-4.97813, -39.0188),
            L.latLng(-3.71839, -38.5434),
        ],
        lineOptions: {
            styles: [{ color: "#6FA1EC", weight: 5 }]
        },
        show: false,
        addWaypoints: false,
        routeWhileDragging: false,
        draggableWaypoints: false,
        fitSelectedRoutes: false,
        showAlternatives: false,
        createMarker: function (i, wp, nWps) {
            if (i === 0 || i === nWps - 1) {
                return L.marker(wp.latLng, {
                    icon: mapPinIcon
                });
            } else {
                return L.marker(wp.latLng, {
                    icon: mapPinIcon
                });
            }
        }

    });

    return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
