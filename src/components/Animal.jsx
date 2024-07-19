import { dogData } from "../utils/constants";

function Animal({ selectedAnimal }) {
  const animal = dogData.find((item) => {
    return item.name == selectedAnimal;
  });
  if (animal) {
    return <img src={animal.image} alt={animal.name} />;
  }
  return <img src={dogData[0].image} alt="default dog image" >;
}

export default Animal;
