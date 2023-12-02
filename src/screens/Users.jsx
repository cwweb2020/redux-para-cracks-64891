import useUsers from "../hooks/useUsers";
import Table from "../shared/Table/Table";

const Users = () => {
  const { columns, rows, loading, error } = useUsers();
  return (
    <Table
      error={error}
      columns={columns}
      rows={rows}
      loading={loading}
      tableTitle={"Usuarios"}
    />
  );
};

export default Users;
