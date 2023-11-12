import "./App.css";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Benefits from "./components/benefits";

function App() {
  return (
    <>
      <Hero />
      <Benefits />
      <Products />
      <div>
        <hr />
        <div className="container mx-auto flex justify-between">
          <div className="left">
            <p>© 2023 Aab-E-Zamzam. All Rights Reserved.</p>
          </div>
          <div className="right px-10 flex justify-between">
            <div className="left me-10">
              <a href="" className="text-sky-800">
                Terms & Conditions
              </a>
            </div>
            <div className="right">
              <a href="" className="text-sky-800">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
