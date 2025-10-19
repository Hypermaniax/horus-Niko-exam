import { Edit, Search, Trash } from "lucide-react";
import { useState } from "react";
import CardDelete from "./CadDelete";
import CardEdit from "./CardEdit";
import type { DataDelete, DataUpdate } from "../types";
import Input from "./Input";
import useTable from "../hooks/useTable";

const Table = () => {
  const { filterData, setSearch, handleDelete, handleUpdate } = useTable();
  const [query, setQuery] = useState<string>("");
  const [showDelete, setShowDelete] = useState<DataDelete>({
    show: false,
    nama: "",
    id: null,
  });
  const [showUpdate, setShowUpdate] = useState<DataUpdate>({
    show: false,
    data: {
      username: "",
      nama: "",
      email: "",
      id: null,
    },
  });

  const handleCloseDelete = () =>
    setShowDelete({ show: false, nama: "", id: null });
  const handleCloseUpdate = () =>
    setShowUpdate({
      show: false,
      data: {
        username: "",
        nama: "",
        email: "",
        id: null,
      },
    });

  const handleSearch = () => {
    setSearch(query);
  };

  return (
    <>
      <div className="flex w-full max-w-xl gap-5">
        <Input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          placeHolder="Cari Pengguna..."
        />
        <button
          onClick={() => handleSearch()}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition font-medium flex items-center gap-2"
        >
          <Search />
          cari
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-bold text-gray-700">
                Id
              </th>
              <th className="text-left py-3 px-4 font-bold text-gray-700">
                Username
              </th>
              <th className="text-left py-3 px-4 font-bold text-gray-700">
                Nama Lengkap
              </th>
              <th className="text-left py-3 px-4 font-bold text-gray-700">
                Email
              </th>
              <th className="text-left py-3 px-4 font-bold text-gray-700">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {filterData?.map((user, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">{user.username}</td>
                <td className="py-3 px-4">{user.nama}</td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        setShowUpdate({
                          show: true,
                          data: {
                            username: user.username,
                            nama: user.nama,
                            email: user.email,
                            id: user.id,
                          },
                        })
                      }
                      className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                    >
                      <Edit />
                    </button>
                    <button
                      onClick={() =>
                        setShowDelete({
                          show: true,
                          nama: user.nama,
                          id: user.id,
                        })
                      }
                      className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
                    >
                      <Trash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {showDelete?.show && (
          <CardDelete
            handleClose={handleCloseDelete}
            handleDelete={() => handleDelete(showDelete.id)}
            nama={showDelete.nama}
          />
        )}
        {showUpdate.show && (
          <CardEdit
            handleUpdate={handleUpdate}
            DataUpdate={showUpdate.data}
            handleClose={handleCloseUpdate}
          />
        )}
        {filterData.length === 0 && (
          <h1 className="text-center py-5 text-gray-500">
            Tidak ada pengguna yang ditemukan
          </h1>
        )}
      </div>
    </>
  );
};

export default Table;
