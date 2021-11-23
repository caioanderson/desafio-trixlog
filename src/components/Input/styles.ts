import styled from 'styled-components';

export const ItemInput = styled.div`
    margin-bottom: 1rem;
   

    .filter__control {
        white-space: nowrap !important;;
        width: 350px !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;

    }

    .filter__control:hover {
        overflow: visible !important;
    }

    .filter__option {
        background: #f5f8fa !important;
        color: #5c8599 !important;
        
    }

    .filter__option--is-focused {
        background: #d3e2e5 !important;
        color: #010101 !important;
    }
`;