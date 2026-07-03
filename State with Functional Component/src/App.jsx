import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import CounterApp from "./Components/CounterApp";

function App() {
  let user = "Kesavan";

  return (
    <div className="App ">
      <Header user={user} />
      <Content />
      <CounterApp />
      <Footer user="Murugesan" />
    </div>
  );
}

export default App;
