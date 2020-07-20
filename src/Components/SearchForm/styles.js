import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin: 2rem auto 1rem auto;
  max-width: 350px;
  > * {
    font-size: 1rem;
  }

  > :first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  > :last-child {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  }
  input {
    flex-grow: 1;
    padding-left: 7px;

    border: none;

    box-shadow: 0.125em 0.125em #a2a2a2;
    outline: none;
  }
`;

export const Select = styled.select`
  text-align: center;
  border: none;
  background-color: #fff;
  box-shadow: 0.125em 0.125em #a2a2a2;
`;
