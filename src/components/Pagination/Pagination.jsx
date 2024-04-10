import './Pagination.scss'

const Pagination = ({ totalFlights, flightsPerPage, paginate, currentPage, nextPage, prevPage }) => {
  const pageNumbers = [];
  console.log(totalFlights);
  console.log(flightsPerPage);

  if (totalFlights > 0) {
    for (let i = 1; i <= Math.ceil(totalFlights / flightsPerPage); i++) {
      pageNumbers.push(i);
    }
  }

  console.log(pageNumbers);




  return (
    <nav>
      <ul className={`pagination ${totalFlights === 0 ? `hidden` : ``}`}>
        <li className="pagination__page-item nav">
            <a href="#" className="pagination__page-link" onClick={prevPage}>
                Prev
            </a>
        </li>
        {pageNumbers.map((number) => {
            return (
          <li key={number} className={`pagination__page-item ${currentPage === number ? `active` : ``}`}>
            <a href="#"onClick={() => paginate(number)} className="pagination__page-link">
              {number}
            </a>
          </li>
        );
        })}
        <li className="pagination__page-item nav nav-next">
            <a href="#" className="pagination__page-link" onClick={nextPage}>
                Next
            </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
