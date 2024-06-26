import './Pagination.scss'

const Pagination = ({ totalFlights, flightsPerPage, paginate, currentPage, nextPage, prevPage }) => {
  const pageNumbers = [];

  const numPages = Math.ceil(totalFlights / flightsPerPage);
  if (totalFlights > 0) {
    for (let i = 1; i <= numPages; i++) {
        if (i <=5  || i >= numPages - 5 || Math.abs(currentPage - i) <= 0)
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
          <li key={number} className={`pagination__page-item ${currentPage === number ? `active-pag` : ``}`}>
            <a href="javascript:void(0)" onClick={() => paginate(number)} className="pagination__page-link">
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
