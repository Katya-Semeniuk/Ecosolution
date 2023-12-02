import { Form } from "./UserForm.styled";

const UserForm = () => {
  return (
    <Form>
      <label htmlFor="">Full name:</label>
      <input type="text" required />

      <label htmlFor="">E-mail:</label>
      <input type="mail" required />

      <label htmlFor="">Phone:</label>
      <input type="tel" required />

      <label htmlFor="">Message:</label>
      <input type="text" />
      <button type="submit">Send</button>
    </Form>
  );
};

export default UserForm;
