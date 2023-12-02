import {
  Container,
  Title,
  Description,
  Item,
  IconCircle,
  IconGlobal,
  IconCharge,
  IconRanking,
  Wrap,
  SubTitle,
  ItemDescription,
  CardSet,
} from "./About.styled";

const About = () => {
  return (
    <Container>
      <Title>Main values of our company</Title>
      <Description>
        EcoSolution envisions a world where sustainable energy solutions power a
        brighter and cleaner future for all. We aspire to be at the forefront of
        the global shift towards renewable energy, leading the way in innovative
        technologies that harness the power of nature to meet the worlds energy
        needs.
      </Description>
      <CardSet>
        <Item>
          <Wrap>
            <IconCircle />
            <SubTitle>Openness</SubTitle>
          </Wrap>

          <ItemDescription>
            to the world, people, new ideas and projects
          </ItemDescription>
        </Item>

        <Item>
          <Wrap>
            <IconGlobal />
            <SubTitle>Responsibility</SubTitle>
          </Wrap>

          <ItemDescription>
            we are aware that the results of our work have an impact on our
            lives and the lives of future generations
          </ItemDescription>
        </Item>
        <Item>
          <Wrap>
            <IconCharge />
            <SubTitle>Innovation</SubTitle>
          </Wrap>

          <ItemDescription>
            we use the latest technology to implement non-standard solutions
          </ItemDescription>
        </Item>
        <Item>
          <Wrap>
            <IconRanking />
            <SubTitle>Quality</SubTitle>
          </Wrap>

          <ItemDescription>
            we do not strive to be the first among others, but we want to be the
            best in our business
          </ItemDescription>
        </Item>
      </CardSet>
    </Container>
  );
};

export default About;
