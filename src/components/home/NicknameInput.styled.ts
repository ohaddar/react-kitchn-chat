import kitchn from "kitchn";

export const StyledInputContainer = kitchn.div<{
  width?: string;
}>`
      display: flex;
      flex-direction: row;
      align-items: baseline;
      justify-content: center;
      width: ${(props) => props.width || "auto"};
      margin:auto;
    `;

export const StyledLabel = kitchn.label`
      margin-right: 1rem;
      font-size: 1.2rem;
    `;

export const StyledInput = kitchn.input`
      padding: 0 10px;
      height: 40px;
      font-size: inherit;
      border: 1px solid var(--kc-colors-layout-dark, rgb(34, 34, 36));
      font: inherit;
      width: auto;
      display: inline-flex;
      line-height: normal;
      outline: none;
      transition: border-color 0.2s ease-in-out;
      border-radius: 8px;
      color: var(--kc-colors-text-lightest, rgb(255, 255, 255));
      background-color: var(--kc-colors-layout-darkest, rgb(17, 17, 17));
    `;
