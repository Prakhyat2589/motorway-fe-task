import styled from "styled-components";

const Form = styled.form`
  max-width: 700px;
  margin: 0 auto 50px auto;
  width: 100%;
`;

const FormField = styled.div``;

const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
`;

const Label = styled.label`
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
  color: #000;
  font-size: 18px;
  font-weight: 500;
`;

const Button = styled.button`
  background: #ec5990;
  color: #fff;
  width: 100%;
  text-transform: uppercase;
  border: none;
  margin-top: 40px;
  padding: 20px;
  font-size: 16px;
  letter-spacing: 10px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #bf1650;
  }
`;

const Para = styled.p`
  color: #ff0000;
  &:before {
    display: inline;
    content: "⚠ ";
  }
`;

const Success = styled.div`
  color: green;
  font-weight: 500;
`;

const NavButton = styled(Button)`
  background: blue;
  max-width: 100px;
  text-transform: capitalize;
  padding: 5px;
  letter-spacing: 0;
`;

export { Form, FormField, Input, Label, Button, Para, Success, NavButton };
