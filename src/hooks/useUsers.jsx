import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../apis/users";

const useUsers = () => {
  const { columns, rows, loading, error } = useSelector((store) => store.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { columns, rows, loading, error };
};

export default useUsers;
