/* eslint-disable react/prop-types */
const TableBody = (props) => {
  return (
    <tbody>
      {props.row.map((fila, index) => (
        <tr key={index}>
          {Object.values(fila).map((val, index) => (
            <td key={index}>{val}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
