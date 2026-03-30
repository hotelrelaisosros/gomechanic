import { Trash2, ShoppingCart, ChevronLeft, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart as removeFromCartAction, updateQuantity as updateQuantityAction } from "../redux/slices/cartSlice";
// @ts-ignore
import Navigation from "../components/layout/Navigation";
// @ts-ignore
import Footer from "../components/layout/Footer";
import type { RootState } from "../redux/store";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const updateQuantity = (cartItemId: number, quantity: number) => {
    if (quantity <= 0) {
      dispatch(removeFromCartAction(cartItemId));
      return;
    }
    dispatch(updateQuantityAction({ cartItemId, quantity }));
  };

  const removeItem = (cartItemId: number) => {
    dispatch(removeFromCartAction(cartItemId));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total: number, item: any) => total + item.price * item.quantity, 0);
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center gap-2 mb-6">
            <Link to="/" className="text-gray-500 hover:text-red-600">
              Home
            </Link>
            <span className="text-gray-300">/</span>
            <Link to="/services" className="text-gray-500 hover:text-red-600">
              Services
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-bold">Cart</span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <div className="bg-white rounded-xl shadow-lg p-12 text-center">
              <ShoppingCart size={64} className="mx-auto text-gray-300 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">Add services to get started</p>
              <Link
                to="/services"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-lg transition-colors"
              >
                <ChevronLeft className="inline mr-2" size={18} />
                Back to Services
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  {cartItems.map((item: any) => (
                    <div
                      key={item.cartItemId}
                      className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                          <p className="text-sm text-gray-600">{item.category}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.cartItemId)}
                          className="text-red-600 hover:bg-red-50 p-2 rounded transition-colors"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>

                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Warranty: {item.warranty}</p>
                          <p className="text-sm text-gray-600">Time: {item.hoursTaken}</p>
                        </div>

                        <div className="text-right">
                          <p className="text-2xl font-bold text-gray-900">₹{item.price}</p>

                          <div className="flex items-center gap-2 mt-3 bg-gray-50 rounded-lg p-1 w-fit ml-auto">
                            <button
                              onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                              className="p-1 hover:bg-gray-200 rounded transition-colors"
                            >
                              <Minus size={16} className="text-gray-600" />
                            </button>
                            <span className="w-8 text-center font-bold text-gray-900">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                              className="p-1 hover:bg-gray-200 rounded transition-colors"
                            >
                              <Plus size={16} className="text-gray-600" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6 border border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

                  <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                    <div className="flex justify-between text-gray-600">
                      <span>Items ({cartItems.length})</span>
                      <span>₹{calculateTotal()}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Delivery</span>
                      <span className="text-green-600 font-semibold">Free</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Tax</span>
                      <span>₹0</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-6">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-3xl font-bold text-red-600">₹{calculateTotal()}</span>
                  </div>

                  <Link
                    to="/checkout"
                    className="w-full block text-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-colors mb-3"
                  >
                    Proceed to Checkout
                  </Link>

                  <Link
                    to="/services"
                    className="w-full block text-center bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3 rounded-lg transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
