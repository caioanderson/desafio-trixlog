import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

type Coordenadas = {
    lat: string;
    lng: string;
}

const createRoutineMachineLayer = ({ ...props }) => {

    const instance = L.Routing.control({
        waypoints: props.item.map((item: Coordenadas) => L.latLng(Number(item.lat), Number(item.lng))),
        routeWhileDragging: true,
        show: false,
        addWaypoints: false,
        showAlternatives: false,
        lineOptions: {
            extendToWaypoints: false,
            addWaypoints: false,
            missingRouteTolerance: 0,
            styles: [
                { color: "#6FA1EC", weight: 5, opacity: 0.6 }
            ]
        },
        
    });

    return instance;

}
const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;