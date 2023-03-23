import "./App.css";
import Faq from "./component/Faq.jsx";

function App() {
  return (
    <div id="App">
      <header>
        <h1>FAQ Accordion</h1>
        <p className="mylink">My portofolio : <a href="https://rajesh7rj.github.io/My-portofolio-site/" target="_blank" rel="noreferrer">My portofolio site</a></p>
      </header>

      <Faq />
    </div>
  );
}

export default App;
