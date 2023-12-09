import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const TableBody = (props) => {
  const navigate = useNavigate();
  return (
    <tbody>
      {props.row.map((fila, index) => (
        <tr key={index}>
          <>
            {Object.values(fila).map((val, index) => (
              <td style={{padding:"5px",textAlign:'center'}} key={index}>{val}</td>
            ))}
            <td style={{padding:"5px"}}>
              <button onClick={() => navigate(`/posts/${fila.id}`)} style={{width:'100%',cursor:'pointer'}}>Ver </button>
            </td>
          </>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
