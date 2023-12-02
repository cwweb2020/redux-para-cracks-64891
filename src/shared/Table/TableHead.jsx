/* eslint-disable react/prop-types */
const TableHead = (props) => {
  return (
    <thead>
      <tr>
        <th colSpan={8}>
            <h1>{props.tableTitle}</h1>
        </th>
      </tr>
      <tr>
        {props.columns.map((col, index) => (
          <th key={index}>{col}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
