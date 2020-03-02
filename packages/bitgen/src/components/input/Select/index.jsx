  import React from 'react';
  import styled from 'styled-components';

  const StyledSelect = styled.select`
    display: inline-block;
    max-width: 100%;
    height: 34px;
    padding-right: 24px;
    background-color: #fff;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAMAAACzvE1FAAAADFBMVEUzMzMzMzMzMzMzMzMKAG/3AAAAA3RSTlMAf4C/aSLHAAAAPElEQVR42q3NMQ4AIAgEQTn//2cLdRKppSGzBYwzVXvznNWs8C58CiussPJj8h6NwgorrKRdTvuV9v16Afn0AYFOB7aYAAAAAElFTkSuQmCC");
    background-repeat: no-repeat;
    background-position: right 8px center;
    background-size: 8px 10px;
    appearance: none;
    font-size: 14px;
    padding-left: 6px;
    line-height: 20px;
    color: #24292e;
    vertical-align: middle;
    border: 1px solid #d1d5da;
    border-radius: 3px;
    outline: none;
    box-shadow: inset 0 1px 2px rgba(27,31,35,.075);

  :focus {
    background-color: #fff;
    border-color: #2188ff;
    outline: none;
    box-shadow: inset 0 1px 2px rgba(27,31,35,.075), 0 0 0 0.2em rgba(3,102,214,.3);
  }
  `;

  const StyledLabel = styled.label`
  font-size: 14px;
  line-height: 1.5;
  color: #24292e;
  background-color: #fff;
  font-weight: 600;
  `;

  const StyledDT = styled.dt`
    margin: 0 0 6px;
    box-sizing: border-box;
  `;

  const StyledDL = styled.dl`
    margin: 15px 0;
    box-sizing: border-box;
  `;


  const SelectField = ({ id, label, onChange, value, options }) => {
    return (
      <StyledDL>
        <StyledDT>
          <StyledLabel for={id}>{label}</StyledLabel>
        </StyledDT>
        <dd>
          <StyledSelect value={value} id={id} onChange={onChange}>
            {options.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </StyledSelect>
        </dd>
      </StyledDL>
    );

  }

  export { SelectField };
