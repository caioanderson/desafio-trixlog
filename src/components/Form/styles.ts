import styled from 'styled-components';

export const Container = styled.form`
    background: #fff;
    color: #fff;

    z-index:0;

    max-width: 600px;
    margin: 200px 80px;
    padding: 20px;

    border-radius: 2rem;

    button{
        margin: 0 3rem;
        margin-bottom: 1rem;
        width: 80%;

        background: #00673D;
        color: #fff;
        font-weight: bold;
        font-size: 1.3rem;
        height: 3rem;
        border-radius: 3rem;

    }

`

export const ItemForm = styled.div`

    margin: 3rem;

    display: flex;
    flex-direction: column;

    label{ 
        color: #00673D;
        font-size: 1.5rem;
        margin-bottom: 1.2rem;
    }

    .filter__option {
        background: #f5f8fa !important;
        color: #5c8599 !important;
    }

    .filter__option--is-focused {
    background: #d3e2e5 !important;
    color: #010101 !important;
}

`