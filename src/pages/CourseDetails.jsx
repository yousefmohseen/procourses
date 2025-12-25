import { useNavigate, useParams } from "react-router-dom";
import coursesData from "../data/coursesData";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";


const CourseDetails = () => {
  const { addToCart } = useContext(CartContext);
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      navigate("/procourses/login");
      return;
    }
    addToCart(course);
  };

  const { id } = useParams()

  const course = coursesData.find(
    (item) => item.id === Number(id)
  )

  if (!course) {
    return (
      <div className="px-6 md:px-16 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Course Not Found
        </h2>
        <p className="text-gray-600">
          The course you are looking for does not exist.
        </p>
      </div>
    )
  }

  return (
    <section className="px-6 md:px-16 py-20 max-w-4xl mx-auto">

      <h1 className="text-4xl font-bold mb-6">
        {course.title}
      </h1>

      <p className="text-gray-600 mb-8 leading-relaxed">
        {course.fullDescription}
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <Detail label="Lessons" value={course.lessonsCount} />
        <Detail label="Level" value={course.level} />
        <Detail label="Duration" value={course.duration} />
        <Detail label="Instructor" value={course.instructor} />
        <Detail label="Language" value={course.language} />
        <Detail label="Schedule" value={`${course.days.join(", ")} | ${course.time}`} />
      </div>

      <div className="flex items-center justify-between">
        <span className="text-2xl font-semibold">
          ${course.price}
        </span>

        <button
          onClick={handleAddToCart}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-700 to-indigo-500 text-white hover:opacity-90 transition cursor-pointer"
        >
          Add to Cart
        </button>
      </div>

    </section>
  )
}

const Detail = ({ label, value }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-xl">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  )
}

export default CourseDetails
