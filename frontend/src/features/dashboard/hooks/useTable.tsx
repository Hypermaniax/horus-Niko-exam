import { useEffect, useMemo, useState } from "react";
import type { TableResult } from "../types";
import { deleteById, getAll, updateById } from "../service";
import axios from "axios";
import { toast } from "react-toastify";

const useTable = () => {
  const [tableData, setTableData] = useState<TableResult[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await getAll();
      setTableData(res);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const msg = error.response?.data?.message || "Login failed FE";
        toast.error(msg);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number | null) => {
    try {
      setLoading(true);
      const res = await deleteById(id);
      toast.success(res);
      fetchData();
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const msg = error.response?.data?.message || "Login failed FE";
        toast.error(msg);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (data: TableResult) => {
    try {
      setLoading(true)
      const res = await updateById(data);
      toast.success(res);
      console.log('123123')
      fetchData();
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const msg = error.response?.data?.message || "Login failed FE";
        toast.error(msg);
      }
    } finally {
      setLoading(false);
    }
  };

  const filterData = useMemo(() => {
    return tableData?.filter(
      (user) =>
        user.username.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()) ||
        user.nama.toLowerCase().includes(search.toLowerCase())
    );
  }, [tableData, search]);

  useEffect(() => {
    fetchData();
  }, []);

  return { filterData, loading, setSearch, handleDelete, handleUpdate };
};

export default useTable;
