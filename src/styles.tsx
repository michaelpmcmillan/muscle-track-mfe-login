import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormGroup from "react-bootstrap/FormGroup";

export const FORM = styled(Form)`
  width: 70%;
  max-width: 25rem;
  margin: auto;
  margin-top: 1rem;
`;

export const FORM_GROUP = styled(FormGroup)`
  display: flex;
  flex-direction: column;
`;

export const SEPARATOR = styled.div`
  width: 80%;
  height: 2px;
  background-color: #6c757d;
  opacity: 0.2;
  margin: 1rem;
  align-self: center;
`;

export const BUTTON = styled(Button)`
  margin-top: 0.5rem;
`;
