import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin: 2rem auto 1rem auto;
  max-width: 350px;

  button {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  input {
    flex-grow: 1;
    padding-left: 7px;

    border: none;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;

    font-size: 1rem;
    box-shadow: 0.125em 0.125em #a2a2a2;
    outline: none;
  }
`;
