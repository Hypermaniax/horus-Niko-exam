import { X } from "lucide-react";
import PopUpLayout from "../../../app/layout/PopUpLayout";
import type { CardPropsDelete } from "../types";

const CardDelete = ({ handleClose, nama, handleDelete }: CardPropsDelete) => {
  return (
    <PopUpLayout>
      <div className="bg-white rounded-lg shadow-2xl p-6 w-full space-y-5 max-w-md">
        <div className="flex relative justify-between">
          <h1 className="font-bold text-black">Hapus Pengguna</h1>
          <X onClick={handleClose} />
        </div>
        <p>
          Apakah Anda yakin ingin menghapus pengguna{" "}
          <span className="font-bold uppercase">{nama}</span> ? Tindakan ini
          tidak dapat dibatalkan.
        </p>
        <div className="flex gap-5">
          <button
            onClick={() => {
              handleClose();
              handleDelete();
            }}
            className="w-full bg-red-500 hover:bg-red-600 py-2 rounded text-white font-bold"
          >
            Hapus
          </button>
          <button
            onClick={handleClose}
            className="w-full bg-gray-400 py-2 rounded text-white font-bold hover:bg-gray-500"
          >
            Batal
          </button>
        </div>
      </div>
    </PopUpLayout>
  );
};

export default CardDelete;
