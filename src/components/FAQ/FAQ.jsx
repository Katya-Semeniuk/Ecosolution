import { Container, Title } from "./FAQ.styled";

import Questions from "./Questions";

const FAQuestions = () => {
  return (
    <Container>
      <Title>Frequently Asked Questions</Title>
      <Questions />
      <div>Didn t find the answer to your question?</div>
      <button>Contact us</button>
    </Container>
  );
};
export default FAQuestions;
