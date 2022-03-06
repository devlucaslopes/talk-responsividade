import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Menu } from "./components/Menu";
import { BurguerList } from "./components/BurguerList";

function App() {
  return (
    <>
      <Header />

      <Hero />

      <Menu>
        <BurguerList />
      </Menu>
    </>
  );
}

export default App;
