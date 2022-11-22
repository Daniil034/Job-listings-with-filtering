import HeaderStyled from "./ui/HeaderStyled";
import ContainerStyled from "./ui/ContainerStyled";
import { StoreArea } from "./components/StoreContext";
import Jobs from "./components/Jobs";
import Filter from "./components/Filter";
import "./ui/global.css";

function App() {
  return (
    <div className="App">
      <HeaderStyled />
      <StoreArea>
        <ContainerStyled>
          <Filter />
          <Jobs />
        </ContainerStyled>
      </StoreArea>
    </div>
  );
}

export default App;
