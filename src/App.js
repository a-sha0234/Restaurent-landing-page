import Navbar from "./components/Navbar";
import Home from "./components/Home";
import dishes from "./dishesData";
import SignatureDishes from "./components/SigntureDishes";
import OpeningHours from "./components/OpeningHours";
import ContactForm from "./components/ContactForm";
import "../src/scss/main.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />

      {dishes.map((dish) => {
        return <SignatureDishes dish={dish} />;
      })}
      <OpeningHours />
      <ContactForm />
    </div>
  );
}

export default App;
