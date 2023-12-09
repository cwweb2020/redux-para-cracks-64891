/* eslint-disable react/prop-types */
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const Table = (props) => {
  const { columns, rows, loading, tableTitle, error } = props;

  if (error) {
    return <h1>Oops algo salio mal !</h1>;
  }

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  return (
    <div style={{display:'flex',justifyContent:'center'}}>
      <table>
        <TableHead columns={columns} tableTitle={tableTitle} />
        <TableBody row={rows} />
      </table>
    </div>
  );
};

export default Table;
