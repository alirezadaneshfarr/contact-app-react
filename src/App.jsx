import Contacts from "./components/Contacts";
import Header from "./components/Header";
import "./index.css";

function App() {
  return (
    <>
      <div className="container mx-auto max-w-[1000px] max-h-[100vh] p-3">
        <Header />
        <Contacts />
      </div>
    </>
  );
}

export default App;
