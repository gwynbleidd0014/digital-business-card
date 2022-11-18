import "./App.css";
import CardBody from "./components/CardBody";
import CardProfile from "./components/CardProfile";
import CardFooter from "./components/CardFooter";

function App() {
  return (
    <div className="App">
      <CardProfile />
      <CardBody />
      <CardFooter />
    </div>
  );
}

export default App;
