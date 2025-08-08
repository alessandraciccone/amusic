import "./App.css";
import Explorer from "./Components/Explorer";
import FetchCard from "./Components/FetchCard";
import MyCard from "./Components/MyCard";
import MyNavbar from "./Components/MyNavbar";
import OtherCard from "./Components/OtherCard";
import MyFooter from "./Components/MyFooter";
function App() {
  return (
    <>
      <MyNavbar />
      <MyCard />
      <OtherCard />
      <FetchCard />
      <Explorer />
      <MyFooter />
    </>
  );
}

export default App;
