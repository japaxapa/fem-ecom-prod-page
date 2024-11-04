import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />

      <div className="page__content">
        <div className="product__carousel">
          only image with arrows / image with choices under
        </div>
        <div className="product__container">
          <div className="product__info">
            <div className="product__info--text"></div>
            <div className="product__info--price">
              <div className="current__value"></div>
              <div className="original__value"></div>
            </div>
          </div>
          <div className="product__actions">
            <div className="product__quantity"></div>
            <div className="cart__btn--add"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
