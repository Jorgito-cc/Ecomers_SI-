import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQty,
  deleteProduct,
} from "../redux/features/cart/cartSlice"
import "./cart.css"; // Asegúrate de crear este archivo CSS

export const Cart = () => {
  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  
  const totalPrice = cartList.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="cart-items">
      <div className="cart-container">
        <div className="cart-content">
          {cartList.length === 0 && (
            <h1 className="no-items">No se añadieron productos al carrito</h1>
          )}
          {cartList.map((item) => {
            const productQty = item.price * item.qty;
            return (
              <div className="cart-list" key={item.id}>
                <div className="image-holder">
                  <img src={item.imgUrl} alt={item.productName} />
                </div>
                <div className="cart-details">
                  <h3>{item.productName}</h3>
                  <h4>
                    ${item.price}.00 * {item.qty}
                    <span>${productQty}.00</span>
                  </h4>
                </div>
                <div className="cart-control">
                  <button
                    className="incCart"
                    onClick={() =>
                      dispatch(addToCart({ product: item, num: 1 }))
                    }
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                  <button
                    className="desCart"
                    onClick={() => dispatch(decreaseQty(item))}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                </div>
                <button
                  className="delete"
                  onClick={() => dispatch(deleteProduct(item))}
                >
                  <ion-icon name="close"></ion-icon>
                </button>
              </div>
            );
          })}
        </div>
        <div className="cart-summary">
          <h2>Carritoo</h2>
          <div className="total-price">
            <h4>Total precio :</h4>
            <h3>${totalPrice}.00</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

