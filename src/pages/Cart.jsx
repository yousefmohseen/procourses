import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (sum, course) => sum + course.price,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="px-6 md:px-16 py-20 text-center">
        <h2 className="text-2xl font-bold mb-2">
          Your cart is empty
        </h2>
        <p className="text-gray-600">
          Add some courses to get started.
        </p>
      </div>
    );
  }

  return (
    <section className="px-6 md:px-16 py-20 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">
        Shopping Cart
      </h2>

      <div className="space-y-4 mb-8">
        {cart.map((course) => (
          <div
            key={course.id}
            className="flex justify-between items-center bg-white p-4 rounded-xl shadow"
          >
            <div>
              <h3 className="font-semibold">
                {course.title}
              </h3>
              <p className="text-gray-600">
                ${course.price}
              </p>
            </div>

            <button
              onClick={() => removeFromCart(course.id)}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center font-semibold text-lg">
        <span>Total Courses: {cart.length}</span>
        <span>Total Price: ${totalPrice}</span>
      </div>
    </section>
  );
};

export default Cart;
