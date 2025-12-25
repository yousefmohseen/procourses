import { useState } from "react"
import coursesData from "../data/coursesData"
import CourseCard from "../components/CourseCard"
import Pagination from "../components/Pagination"

const COURSES_PER_PAGE = 6

const Courses = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(
    coursesData.length / COURSES_PER_PAGE
  )

  const startIndex = (currentPage - 1) * COURSES_PER_PAGE
  const endIndex = startIndex + COURSES_PER_PAGE

  const currentCourses = coursesData.slice(
    startIndex,
    endIndex
  )

  return (
    <section className="px-6 md:px-16 py-20">
      
      <h2 className="text-3xl font-bold mb-10">
        Our Courses
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {currentCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

    </section>
  )
}

export default Courses
