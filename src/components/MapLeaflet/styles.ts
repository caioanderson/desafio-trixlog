import styled from 'styled-components';

export const Container = styled.div`

    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;

    width: 100%;
    height: 100%;

    overflow: hidden;

    .leaflet-bar{
        width: 20% !important;
        padding: 1rem;
        
        h2{
            color: var(--violet-500);
            font-size: .9rem;
            text-overflow: ellipsis !important;
            overflow: hidden !important;
            white-space: nowrap !important;
 
        }
    }

    
`