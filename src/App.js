import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavbarComponent from "./components/NavBar";

function App() {
  return (
    <main className="flex flex-col h-screen bg-slate-200">
      <NavbarComponent />
      <ItemListContainer />
      <ItemDetailContainer />
    </main>
  );
}

export default App;
