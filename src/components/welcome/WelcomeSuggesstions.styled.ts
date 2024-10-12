import kitchn from "kitchn";

interface ContainerProps {
  width: string;
}

const WelcomeContainer = kitchn.div<ContainerProps>`
    display:grid;
    width:${(props) => props.width};
    margin:auto;
    grid-template-Columns: repeat(2, 1fr);
    justify-items:center;
   
`;
export default WelcomeContainer;
