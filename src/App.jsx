import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/procourses/" element={<Navigate to="/procourses/home" replace />} />
        <Route path="/procourses/home" element={<Home />} />
        <Route path="/procourses/courses" element={<Courses />} />
        <Route path="/procourses/courses/:id" element={<CourseDetails />} />
        <Route path="/procourses/cart" element={<Cart />} />
        <Route path="/procourses/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
