import kitchn from "kitchn";
import React from "react";
import {
  StyledInput,
  StyledInputContainer,
  StyledLabel,
} from "./NicknameInput.styled";

interface NicknameInputProps {
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  marginLeft?: string;
  width?: string;
  value?: string;
}

const NicknameInput: React.FC<NicknameInputProps> = ({
  label,
  placeholder,
  onChange,
  width,
  value,
}) => {
  return (
    <StyledInputContainer width={width}>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </StyledInputContainer>
  );
};

export default NicknameInput;
