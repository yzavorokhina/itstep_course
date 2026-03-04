import Table from 'react-bootstrap/Table';


function StripedRowExample({ products, currentPage, itemsOnPage, deleteProduct }) {

  const renderTable = () => {
    const startIdx = (currentPage - 1) * itemsOnPage;
    const endIdx = startIdx + itemsOnPage;
    const paginatedData = products.slice(startIdx, endIdx);

    console.log({ startIdx, endIdx, currentPage, itemsOnPage });

    return paginatedData;
  }

  return (
    <Table striped>
      <thead>
        <tr >
          <th style={{ color: '#007bff', textAlign: 'center'}}>id</th>
          <th style={{ color: '#007bff', textAlign: 'center'}}>Name</th>
          <th style={{ color: '#007bff', textAlign: 'center'}}>Price</th>
          <th style={{ color: '#007bff', textAlign: 'center'}}>Count</th>
          <th style={{ color: 'red', textAlign: 'center'}}>X</th>
        </tr>
      </thead>
      <tbody>
        {renderTable().map(product => (
          <tr key={product.id}>
            <td style={{textAlign: 'center'}}>{product.id}</td>
            <td style={{textAlign: 'center'}}>{product.name}</td>
            <td style={{textAlign: 'center'}}>{product.price}</td>
            <td style={{textAlign: 'center'}}>{product.count}</td>
            <td>
              <button
                onClick={() => deleteProduct(product.id)}
                style={{
                  display: 'flex',
                  flexDirection: "row",
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '4px',
                  backgroundColor: 'rgb(235, 235, 235)',
                  color: 'red',
                  border: '1px solid red',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default StripedRowExample;
