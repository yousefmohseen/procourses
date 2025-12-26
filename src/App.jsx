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
        <Route path="/procourse/" element={<Navigate to="/procourse/home" replace />} />
        <Route path="/procourse/home" element={<Home />} />
        <Route path="/procourse/courses" element={<Courses />} />
        <Route path="/procourse/courses/:id" element={<CourseDetails />} />
        <Route path="/procourse/cart" element={<Cart />} />
        <Route path="/procourse/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
