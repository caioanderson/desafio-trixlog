import styled from 'styled-components';

export const Container = styled.div`

    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;

    width: 100%;
    height: 100%;

    overflow: hidden;

    .leaflet-routing-alt{
        display: none;
    }

    
    /* img.leaflet-marker-icon {
        display: none;
    }

    img.leaflet-zoom-animated {
        display: none;
    }

    img.leaflet-interative {
        display: none;
    } */
`