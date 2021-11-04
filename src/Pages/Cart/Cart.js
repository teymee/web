import React from "react";
import pepsi from "../../assets/pepsi.png";
import "./Cart.css";

function Cart() {
  return (
    <>
      <div className="md:container md:mx-auto px-20 cart-body ">
        <div className="cart-nav">
          <h5>
            Home {">"} <span>Cart </span>
          </h5>
        </div>

        <div className="cart">
          <div className="cart-header sm:py-5  ">
            <h5 className="Heading text-sm pl-20 pt-2">PRODUCT</h5>
            <h5 className="Heading text-sm text-center">QUANTITY</h5>
            <h5 className="Heading text-sm pr-20">PRICE</h5>
          </div>

          <div className="cart-Items">
            <div className="cart-details p-2">
              <div className="cart-product pr-10">
                <div>
                  <img src={pepsi} alt="product" />
                </div>
                <div className="title flex items-center px-6">
                  <p className="">Apple Juice</p>
                </div>
              </div>

              <div className="cart-quantity px-10">
                <button>
                  {" "}
                  <span> + </span>{" "}
                </button>
                <input type="number" defaultValue="1" min="1" max="5" required/>
                <button>
                  {" "}
                  <span> - </span>{" "}
                </button>
              </div>

              <div className="cart-prices px-10">
                <p>N1,00000000000</p>
              </div>
            </div>
          </div>

          {/* Cart item 2 */}

          <div className="cart-Items">
            <div className="cart-details p-2">
              <div className="cart-product pr-10">
                <div>
                  <img src={pepsi} alt="product" />
                </div>
                <div className="title flex items-center px-6">
                  <p className="">Apple Juice</p>
                </div>
              </div>

              <div className="cart-quantity px-10">
                <button>
                  {" "}
                  <span> + </span>{" "}
                </button>
                <input value="1" min="1" max="5" />
                <button>
                  {" "}
                  <span> - </span>{" "}
                </button>
              </div>

              <div className="cart-prices px-10">
                <p>N1,00000000000</p>
              </div>
            </div>
          </div>

          {/* PROCEED TO CHECKOUT */}
          <div className="cart-finalButton flex">
            <button className="cart-checkout">Proceed to Checkout</button>
            <button className="cart-continue ml-5">Continue Shopping</button>
            <div className="cart-total ">
              <h5>
                Total: <span className="pl-3">N3000</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
