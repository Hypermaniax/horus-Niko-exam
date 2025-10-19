import { X } from "lucide-react";
import PopUpLayout from "../../../app/layout/PopUpLayout";
import type { CardPropsUpdate, TableResult } from "../types";
import Input from "../../../components/Input";
import { useState } from "react";

const CardEdit = ({
  handleClose,
  DataUpdate,
  handleUpdate,
}: CardPropsUpdate) => {
  const [editData, setEditData] = useState<TableResult>(DataUpdate);

  return (
    <PopUpLayout>
      <div className="bg-white rounded-lg shadow-2xl p-6 w-full space-y-5 max-w-md">
        <div className="flex relative justify-between">
          <h1 className="font-bold text-black">Edit Pengguna</h1>
          <X onClick={handleClose} />
        </div>
        <div className="space-y-3">
          <div>
            <p>Nama Lengkap</p>
            <Input
              value={editData.nama}
              onChange={(e) =>
                setEditData({ ...editData, nama: e.target.value })
              }
            />
          </div>
          <div>
            <p>Email</p>
            <Input
              value={editData.email}
              onChange={(e) =>
                setEditData({ ...editData, email: e.target.value })
              }
            />
          </div>
          <div>
            <p>Username</p>
            <Input
              value={editData.username}
              onChange={(e) =>
                setEditData({ ...editData, username: e.target.value })
              }
            />
          </div>
        </div>
        <div className="flex gap-5">
          <button
            onClick={() => {
              handleUpdate(editData);
              handleClose();
            }}
            className="w-full bg-blue-500 py-2 font-bold rounded text-white hover:bg-blue-600"
          >
            Simpan
          </button>
          <button
            onClick={handleClose}
            className="w-full bg-gray-400 py-2 font-bold rounded text-white hover:bg-gray-500"
          >
            Batal
          </button>
        </div>
      </div>
    </PopUpLayout>
  );
};

export default CardEdit;
