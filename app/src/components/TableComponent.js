import React from 'react';

const TableComponent = ({data}) => {
     var dataColumns = data.columns;
    var dataRows = data.rows;

    var tableHeaders = (<thead>
          <tr>
            {dataColumns.map(function(column, index) {
              return <th key={index}>{column}</th>; })}
          </tr>
      </thead>);

    var tableBody = dataRows.map(function(row, index) {
      return (
          <tbody key={index}>
        <tr>
          {dataColumns.map(function(column, index) {
            return <td key={index}>{row[column]}</td>; })}
        </tr>
        </tbody>
      ); });

    // Decorate with Bootstrap CSS
    return (<table className="table table-bordered table-hover" width="100%">
        {tableHeaders}
        {tableBody}
      </table>);
}


export default TableComponent