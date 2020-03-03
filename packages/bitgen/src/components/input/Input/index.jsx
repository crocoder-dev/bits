import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  font-size: 14px;
  line-height: 1.5;
  color: #24292e;
  background-color: #fff;
  font-weight: 600;
`;

const StyledInput = styled.input`
    width: 440px;
    margin-right: 5px;
    background-color: #fafbfc;
    padding: 6px 8px;
    font-size: 14px;
    line-height: 18px;
    color: #24292e;
    vertical-align: middle;
    background-repeat: no-repeat;
    background-position: right 8px center;
    border: 1px solid #d1d5da;
    border-radius: 3px;
    outline: none;
    box-shadow: inset 0 1px 2px rgba(27,31,35,.075);
    font-size: 14px;

    :focus {
      background-color: #fff;
      border-color: #2188ff;
      outline: none;
      box-shadow: inset 0 1px 2px rgba(27,31,35,.075), 0 0 0 0.2em rgba(3,102,214,.3);
    }
`;

const StyledDT = styled.dt`
  margin: 0 0 6px;
  box-sizing: border-box;
`;

const StyledDL = styled.dl`
  margin: 15px 0;
  box-sizing: border-box;
`;


const InputField = ({
  id, label, inputType, onChange, placeholder, value,
}) => (
  <StyledDL>
    <StyledDT>
      <StyledLabel for={id}>{label}</StyledLabel>
    </StyledDT>
    <dd>
      <StyledInput
        value={value}
        placeholder={placeholder}
        id={id}
        type={inputType}
        onChange={onChange}
      />
    </dd>
  </StyledDL>
);

export default InputField;
