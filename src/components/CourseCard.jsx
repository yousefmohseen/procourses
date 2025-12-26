import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

const CourseCard = ({ course }) => {
  const { cart, addToCart } = useContext(CartContext);
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [added, setAdded] = useState(false);
  const isInCart = cart.some(item => item.id === course.id);

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      navigate("/procourse/login");
      return;
    }
    addToCart(course);
    setAdded(true);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold mb-2">
          {course.title}
        </h3>

        <p className="text-gray-600 mb-4">
          {course.shortDescription}
        </p>

        <p className="text-sm text-gray-500">
          Level: {course.level}
        </p>

        <p className="text-sm text-gray-500">
          Price: ${course.price}
        </p>
      </div>

      <div className="flex gap-3 mt-6">
        <Link
          to={`/procourse/courses/${course.id}`}
          className="flex-1 text-center py-2 rounded-xl border border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white transition"
        >
          View Details
        </Link>

        <button
          disabled={isInCart}
          onClick={handleAddToCart}
          className={`flex-1 py-2 rounded-xl transition
            ${
              isInCart
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-700 to-indigo-500 text-white cursor-pointer hover:opacity-90"
            }
          `}
        >
          {isInCart ? "Added" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
