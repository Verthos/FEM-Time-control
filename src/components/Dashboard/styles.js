import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background: var(--Very-dark-blue);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  grid-gap: 2rem;


  li {
    cursor: pointer;
  }

  .Work {
    background: var(--light-red-work);
  }
  .Play {
    background: var(--soft-blue);
  }
  .Social {
    background: var(--violet);
  }
  .Exercise {
    background: var(--lime-green);
  }
  .Selfcare {
    background: var(--soft-orange);
  }
  .Study {
    background: var(--light-red-study);
  }

  @media (min-width: 380px) {
    display: grid;
    grid-template-columns: 25rem 20rem 20rem 20rem;
    grid-template-rows: 20rem 20rem;
    justify-content: space-between;
    padding: 10rem 15rem;
  }
`;

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

  @media (min-width: 380px) {
    grid-row-start: 1;
    grid-row-end: 3;
    height: 100%;
    width: 100%;
  }

  ul {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    color: var(--Desaturated-blue);
    transition: all 0.2s;

    li{
        &:hover{
        color: white;
    };

    }

    @media (min-width: 380px) {
      flex-direction: column;
      width: 100%;
      height: 8rem;
      align-items: flex-start;
      justify-content: space-between;
    }

    .active {
      color: white;
    }
  }

  .userInfo {
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

    section {
      width: 50%;
      display: flex;
      flex-direction: column;

      @media (min-width: 380px) {
        position: absolute;
        width: 100%;
        left: 2rem;
        bottom: 6rem;
        span {
          font-size: 4rem;
          line-height: 4rem;
        }
      }
    }

    img {
      width: 5rem;
      border: 2px solid white;
      border-radius: 50%;

      @media (min-width: 380px) {
        flex-direction: column;
        position: absolute;
        top: 2rem;
        left: 2rem;
      }
    }

    @media (min-width: 380px) {
      flex-direction: column;
    }
  }
`;

export const Card = styled.section`
  position: relative;
  background: var(--light-red);
  width: 80%;
  height: 20vh;
  border-radius: 1.5rem;

  img {
    position: absolute;
    top: 0.1rem;
    right: 1.3rem;
    width: 4rem;
  }

  @media (min-width: 380px) {
    height: 100%;
    width: 100%;
  }

  .options {
    position: absolute;
    width: 100%;
    
    cursor: pointer;

    img {
      position: absolute;
      width: 1.5rem;
      right: 2rem;
      top: 2rem;
    }
  }

  .content {
    position: absolute;
    display: flex;
    bottom: 0;
    width: 100%;
    height: 75%;
    border-radius: 1.2rem;
    background: var(--Dark-blue);
    transition: all 0.3s;

    &:hover{
        filter: brightness(180%);
    };

    @media (min-width: 380px) {
      height: 85%;
      flex-direction: column;
    }

    section {
      display: flex;
      position: relative;
      width: 100%;
      height: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
      text-align: left;

      h1 {
        width: 100%;
        margin-left: 5rem;
        font-size: 18px;
        font-weight: 400;

        @media (min-width: 380px) {
          margin-left: 0;
          line-height: 5rem;
        }
      }
      h2 {
        width: 100%;
        margin-left: 50%;
        font-size: 2rem;
        font-weight: 300;
        @media (min-width: 380px) {
          margin-left: 0;
          font-size: 4rem;
        }
      }
      h3 {
        width: 100%;
        color: var(--Desaturated-blue);
        font-weight: 400;


        @media (min-width: 380px) {
          height: 100%;
          padding-top: 1rem;
          margin-left: 0;
          display: flex;
          top: 0;
        }
      }

      @media (min-width: 380px) {
        padding-left: 3rem;
      }
    }
  }
`;
