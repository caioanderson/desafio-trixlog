import styled from 'styled-components';

export const Container = styled.div`
    background: #fff;
    color: #fff;

    z-index:1;
    position: absolute;

    top: 100px;
    left: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 2rem;
    padding-left: 30px;
    padding-right: 30px;

    .header{
        margin-top: 2rem;
        width: 80%;
        display: flex;
        align-items: center;
        justify-content:space-between;

        label{
            color: var(--violet-500);
            font-size: 1.5rem;
        }

        button{
        width: 17%;
        color: var(--white);
        background: var(--violet-500);
        font-weight: bold;
        font-size: 2rem;
        height: 3rem;
        border: 0;
        border-radius: 5rem;

        transition: filter .2s;

        button:hover{
            filter: brightness(0.8);
        }
    }
    }

`

export const FormRotas = styled.form`

    /* width: 500px; */
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    span{
        color: #000;
    }

    button{
        margin-top: 3rem;
        margin-bottom: 3rem;
        width: 80%;

        background: var(--violet-500);
        color: #fff;
        font-weight: bold;
        font-size: 1.3rem;
        height: 3rem;
        border: 0;
        border-radius: 3rem;

        transition: filter .2s;

    }

    button:hover{
        filter: brightness(0.8);
    }

`

export const ItemForm = styled.div`

    /* margin-left: 3rem; */
    margin-top: 1rem;
    margin-bottom: 1rem;

    display: flex;
    align-items: center;
    flex-direction: column;

    span{
        color: var(--violet-500);
        font-size: 1rem;
        margin-bottom: .5rem;
    }

    input{
        border: .5px solid var(--violet-500);
        padding: .7rem;
        border-radius: 2rem;
        width: 100%;
        text-align: center;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;

        button{
        width: 12%;
        margin-top: 3rem;

        background: var(--violet-500);
        font-weight: bold;
        font-size: 2rem;
        height: 3rem;
        border: 0;
        border-radius: 5rem;

        transition: filter .2s;

        button:hover{
            filter: brightness(0.8);
        }
    }


    label{ 
        color: var(--violet-500);
        font-size: 1.5rem;
        margin-bottom: 1.2rem;
    }
    
}
`;

export const SideBar = styled.div`

    background: var(--violet-500);

    position: absolute;

    z-index:1;
    bottom: 50px;
    left: 30px;

    width: 100px;
    border-radius: .5rem;

    height: 150px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    a{
        border: 0;
        background: none;
        color: #FF5151;
    }

    span{
        color: var(--white);
    }

    span + span{
        font-weight: bold;
    }


`