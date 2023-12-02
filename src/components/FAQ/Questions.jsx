import { useState } from "react";
import { Item, IconBtnPlus, IconBtnMinus } from "./Questions.styled";

const Questions = () => {
  const [isInfoOpened, setIsInfoOpened] = useState(false);
  return (
    <ul>
      <Item>
        <IconBtnMinus />

        <h4>
          How do wind turbines and solar panels work together in a renewable
          energy system?
        </h4>

        <p>
          Wind turbines and solar panels generate electricity through different
          mechanisms. Wind turbines harness the kinetic energy of the wind to
          turn blades, which then drive a generator. Solar panels convert
          sunlight into electricity through the photovoltaic effect. When
          integrated into a renewable energy system, these technologies
          complement each other by providing a continuous and reliable power
          supply. Wind power is often more abundant during certain times, while
          solar power is consistent during daylight hours, resulting in a more
          stable overall energy output.
        </p>
      </Item>
      <Item>
        <IconBtnPlus />
        <div>
          <h4>
            What sets EcoSolution's renewable energy solutions apart from others
            on the market?
          </h4>
        </div>
      </Item>
      <Item>
        <IconBtnPlus />
        <h4>
          How can businesses and communities benefit from integrating renewable
          energy solutions from EcoSolution?
        </h4>
      </Item>
      <Item>
        <IconBtnPlus />
        <h4>
          What measures does EcoSolution take to ensure the environmental
          sustainability of its products?
        </h4>
      </Item>
      <Item>
        <IconBtnPlus />
        <h4>
          How does EcoSolution engage with local communities and support a just
          transition to renewable energy?
        </h4>
      </Item>
    </ul>
  );
};

export default Questions;
