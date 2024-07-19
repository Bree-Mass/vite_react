import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Animal from "./Animal";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Animal selectedAnimal="shihpoo" />
      <Animal selectedAnimal="maltese" />
      <Animal selectedAnimal="cavie" />
      <Animal selectedAnimal="labrador" />
    </>
  );
}

export default App;
