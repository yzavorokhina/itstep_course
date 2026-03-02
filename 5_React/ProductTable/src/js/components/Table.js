import Table from 'react-bootstrap/Table';


function StripedRowExample() {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>count</th>
          <th>price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Potato</td>
          <td>5</td>
          <td>15</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Meat</td>
          <td>2</td>
          <td>34</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Bread</td>
          <td>2</td>
          <td>54</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default StripedRowExample;
