import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;

    display: flex;

`

export const SectionRegister = styled.section`
    height: 100vh;
    width: 70vw;
    background: var(--violet-500);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    header{

        margin-bottom: 4.063rem;

        span{
            color: var(--white);
            font-size:1.125rem;
            font-weight: bold;
            margin-right: .688rem; //11px

        }
        span + span{
            color: var(--violet-50); 
            font-size: .75rem; 
            font-weight: 400;
        }
    }

    .form{
        background: var(--white);
        width: 425px;
        height:489px;
        border-radius: 20px;

        padding: 30px;

        form{
            padding-top: 3rem;
            div{
                display: flex;
                flex-direction: column;
                margin-bottom: 1rem;

                label{
                    color: var(--violet-500);
                    font-weight: bold;
                    margin-bottom: 1rem;
                }

                input{
                    border: .5px solid var(--violet-500);
                    padding: 10px;
                    border-radius: 20px

                }
            }

            .footer{
                margin-top: 2rem;

                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;

                button{
                    border: 0;
                    background: none;
                    color: var(--violet-500);

                }


               button + button{
                    border: 0;
                    background-color: var(--violet-500);
                    color: var(--white);
                    border-radius: 8px;
                    height: 3rem;
                    width: 8rem;
                }

                
            }
        }
    }


`

export const SectionMap = styled.section`
    height: 100vh;
    width: 30vw;
    background: var(--blue-violet);

    display: flex;
    align-items: center;
    justify-content: center;

`
