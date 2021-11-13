import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    background: var(--Very-dark-blue);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
    grid-gap: 2rem;

    li{
        cursor: pointer;
    }
    
    .Work{
        background: var(--light-red-work);
    }
    .Play{
        background: var(--soft-blue);
    }
    .Social{
        background: var(--violet);
    }
    .Exercise{
        background: var(--lime-green);
    }
    .Selfcare{
        background: var(--soft-orange);
    }
    .Study{
        background: var(--light-red-study);
    }
`

export const Menu = styled.div`
    position: relative;
    display: flex;
    width: 80%;
    height: 25vh;
    background: var(--Dark-blue);
    border-radius: 1.5rem;
    align-items: end;
    font-size: 1.4rem;
    padding: 0 2rem;
    padding-bottom: 2vh;
    color: white;


    ul{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        list-style: none;
        color: var(--Desaturated-blue);

        .active{
            color: white
        }
    }

    .userInfo{
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: space-around;
        top: 0;
        left: 0;
        width: 100%;
        height: 70%;
        border-radius: 1.5rem;
        padding: 1rem;
        padding-left: 2rem;
        background: var(--blue);

        section{
            width: 50%;
            display: flex;
            flex-direction: column;
        }

        img{
            width: 5rem;
            border: 2px solid white;
            border-radius: 50%;
        }
    }
`


export const Card = styled.section`
    position: relative;
    background: var(--light-red);
    width: 80%;
    height: 20vh;
    border-radius: 1.5rem;

    img{
        position: absolute;
        top: 0.1rem;
        right: 1.3rem;
        width: 4rem;

    }

    .content{
        position: absolute;
        display: flex;
        bottom: 0;
        width: 100%;
        height: 75%;
        border-radius: 1.2rem;
        background: var(--Dark-blue);

        section{
            display: flex;
            position: relative;
            width: 50%;
            height: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: white;
            text-align: left;

           

            h1{
                width: 100%;
                margin-left: 50%;
            }
            h2{
                width: 100%;
                margin-left: 50%;
                font-size: 2rem;
                font-weight: lighter;
            }
            h3{
                width: 100%;
                color: var(--Desaturated-blue)
            }


            .options{
                position: relative;
                height: 1rem;
                width: 100%;

                img{
                    position: absolute;
                    width: 1.5rem;
                    right: 2rem;
                    top: 0;
                    &:hover{
                        filter: brightness(120);
                    }
                    
                }
            }
        }
    }

    




`
