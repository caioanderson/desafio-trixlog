import styled from 'styled-components';

export const Container = styled.form`
    background: #fff;
    color: #fff;

    z-index:0;

    max-width: 600px;
    margin: 200px 80px;
    padding: 20px;

    border-radius: 2rem;

    span{
        color: #000;
    }

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

        transition: filter .2s;

    }

    button:hover{
        filter: brightness(0.8);
    }

`

export const ItemForm = styled.div`

    margin-left: 3rem;
    margin-top: 3rem;

    display: flex;
    flex-direction: column;

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;

        button{
        width: 12%;

        background: #00673D;
        color: #fff;
        font-weight: bold;
        font-size: 2rem;
        height: 3rem;
        border-radius: 5rem;

        transition: filter .2s;

        button:hover{
            filter: brightness(0.8);
        }
    }


    label{ 
        color: #00673D;
        font-size: 1.5rem;
        margin-bottom: 1.2rem;
    }
}
`;