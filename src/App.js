import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavbarComponent from "./components/NavBar";

function App() {
  return (
    <main className="flex flex-col h-screen bg-slate-200">
      <NavbarComponent />
      <ItemListContainer />
    </main>
  );
}

export default App;
