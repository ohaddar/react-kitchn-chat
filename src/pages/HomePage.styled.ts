import kitchn from "kitchn";

export const HomeContainer = kitchn.div`
 display: flex;
        height: 100vh;
        width: auto;
        padding: 26%;
        flex-direction: column;
        align-items: baseline;
        justify-content: center;
`;

export const HomeSubContainer = kitchn.div`
   display: grid;
          margin: 20px auto;
          grid-template-columns: repeat(3, 1fr);
          grid-column-gap: 15px;
          grid-row-gap: 15px;
          justify-items: center;
`;
