import "./App.css";
import RenderImage from "./RenderImage";
import cart from "./images/icon-cart.svg";

function App() {
  return (
    <>
      <div className="container">
        <div className="image-container">
          <RenderImage className="image" />
        </div>
        <div className="bottom">
          <p className="subheading">Perfume </p>
          <p className="heading">Gabrielle Essence Eau De Parfum</p>{" "}
          <p className="text">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="price">
            <p className="price-main">$149.99</p>{" "}
            <p className="price-sub">$169.99</p>
          </div>
          <button className="button">
            <img src={cart} alt="cart" />
            Add to Cart
          </button>
        </div>
      </div>
      <div class="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.josiahparkhill.dev/"
          target="_blank"
          rel="noreferrer"
        >
          Josiah Parkhill
        </a>
        .
      </div>
    </>
  );
}

export default App;
