import spacing, { SpacingKeys, SpacingValues } from './mixins/spacing';
import styled from 'styled-components';

type FormProps = {
  [x in SpacingKeys]?: string | SpacingValues;
};

const Form = styled.form<FormProps>`
  display: flex;

  ${spacing};
`;

const FormInput = styled.input`
  background-color: var(--bg-color);
  border-radius: 0.5rem;
  border: 2px solid var(--form__input__border-color);
  color: var(--font-color);
  font-size: 1.25rem;
  line-height: 2rem;
  padding-left: 1rem;
  width: 100%;
  transition: border-color 0.15s;

  :focus {
    border-color: var(--form__input--focus__border-color);
    outline: none;
  }
`;

const FormButton = styled.button`
  background-color: var(--form__button__bg-color, #e0e0e0);
  border-radius: 0.5rem;
  border-style: solid;
  border-width: 0;
  font-family: inherit;
  font-size: inherit;
  padding: 0.5rem 1rem;
  transition: background-color 0.15s;

  :focus,
  :hover {
    background-color: var(--form__button--hover__bg-color, #bdbdbd);
    cursor: pointer;
    outline: none;
  }

  :active {
    background-color: var(--form__button--active__bg-color, #9e9e9e);
  }
`;

export { Form, FormButton, FormInput };
