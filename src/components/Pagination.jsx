const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center gap-3">
      {Array.from({ length: totalPages }).map((_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-4 py-2 rounded-lg border transition
              ${
                currentPage === page
                  ? "bg-purple-700 text-white border-purple-700"
                  : "border-gray-300 text-gray-600 hover:bg-gray-100"
              }
            `}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
