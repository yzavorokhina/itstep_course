import Pagination from 'react-bootstrap/Pagination';

function AdvancedExample({ itemsOnPage, products, currentPage, setCurrentPage }) {

    let id = 1;
    let totalNumberOfPages = 1;

    const renderPageNumbers = () => {
        console.log({ currentPage});

        totalNumberOfPages = Math.ceil(products.length / itemsOnPage);
        const pageNumbers = Array.from(
            { length: totalNumberOfPages },
            (_, index) => index + 1
        );
        return pageNumbers;
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

  return (
    <Pagination>
      <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
      <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
      {renderPageNumbers().map((pageNumber, index) => (
        <Pagination.Item key={index} onClick={() => handlePageChange(pageNumber)} active={currentPage === pageNumber}>{pageNumber}</Pagination.Item>
      ))}
      <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalNumberOfPages} />
      <Pagination.Last onClick={() => handlePageChange(totalNumberOfPages)} disabled={currentPage === totalNumberOfPages} />
    </Pagination>
  );
}

export default AdvancedExample;