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

    span{ 
        color: #00673D;
        font-size: 1.5rem;
    }

    input{
        background: #F5F8FA;
        border: 1px solid #00673D;
        margin-top: 1rem;
        padding: 1rem;
        border-radius: 2rem;
        font: 1.2rem;
    }

`