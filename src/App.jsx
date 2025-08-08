import "./App.css";
import Explorer from "./Components/Explorer";
import FetchCard from "./Components/FetchCard";
import MyCard from "./Components/MyCard";
import MyNavbar from "./Components/MyNavbar";
import OtherCard from "./Components/OtherCard";
import MyFooter from "./Components/MyFooter";
function App() {
  return (
    <div className="app-layout">
      <MyNavbar />
      <main className="main-content">
        <MyCard />
        <OtherCard />
        <FetchCard />
        <Explorer />
        <MyFooter />
      </main>
    </div>
  );
}

export default App;
