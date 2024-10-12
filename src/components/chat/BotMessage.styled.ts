import kitchn, { useBreakpoint } from "kitchn";

interface BotMessageContainerPropos {
  width: string;
}

const BotMessageContainer = kitchn.div<BotMessageContainerPropos>`
width:${(props) => props.width};
padding:10px;
align-self:start;
line-height:1.6rem;
color:#e0e0e0;
text-wrap: wrap !important;
code {
    white-space: pre-wrap;
    word-wrap: break-word;
  }
`;

export default BotMessageContainer;
