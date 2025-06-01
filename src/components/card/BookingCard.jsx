// Assets
import avatar from "../../assets/avatar.png";
// Icons
import { FaDownload } from "react-icons/fa";
// Utils
import { formatRupiah } from "../../utils/formatRupiah";

export default function BookingCard({ item }) {
  const API_URL = import.meta.env.VITE_API_URL;

  return (
    <div className="bg-white rounded-xl shadow-md flex flex-col gap-2 hover:shadow-lg transition-shadow">
      <div className="bg-[#1F7D53] text-white text-md w-full flex items-center justify-center rounded-xl py-2">
        Booking Data
      </div>

      <div className="flex flex-col justify-center items-center ">
        <img
          src={
            item?.avatardirectory
              ? `${API_URL}/${item.avatardirectory}`
              : avatar
          }
          alt="Avatar"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="text-lg font-semibold text-[#1F7D53]">
            {item?.fullname || "Not found"}
          </h2>
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-500">
              {item?.pekerjaan || "null job"}
            </p>
            <p className="font-bold text-md text-black">|</p>
            <p className="text-sm text-gray-500">
              {item?.phone_number || "+62 -"}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-x-2 gap-y-3 text-center text-sm text-gray-700 px-[1rem]">
        <div className="flex flex-col items-center ">
          <p className="font-bold">Kode</p>
          <p className="font-normal text-sm">{item?.code || "-"}</p>
        </div>
        <div className="flex flex-col items-center ">
          <p className="font-bold">Perumahan</p>
          <p className="font-normal text-sm">{item?.perumahan || "-"}</p>
        </div>
        <div className="flex flex-col items-center ">
          <p className="font-bold">Kavling</p>
          <p className="font-normal text-sm">{item?.kavling || "-"}</p>
        </div>
        <div className="flex flex-col items-center ">
          <p className="font-bold">Harga</p>
          <p className="font-normal text-sm">
            {item?.harga_perumahan ? formatRupiah(item.harga_perumahan) : "-"}
          </p>
        </div>
        <div className="flex flex-col items-center ">
          <p className="font-bold">DP</p>
          <p className="font-normal text-sm">
            {item?.jumlah_dp ? formatRupiah(item.jumlah_dp) : "-"}
          </p>
        </div>
        <div className="flex flex-col items-center ">
          <p className="font-bold">UTJ</p>
          <p className="font-normal text-sm">
            {item?.utj ? formatRupiah(item.utj) : "-"}
          </p>
        </div>
        <div className="flex flex-col items-center ">
          <p className="font-bold">Akad</p>
          <p className="font-normal text-sm">{item?.SPV_Proses_Akad || "-"}</p>
        </div>
        <div className="flex flex-col items-center ">
          <p className="font-bold">Cabang</p>
          <p className="font-normal text-sm">{item?.cabang || "-"}</p>
        </div>
        <div className="flex flex-col items-center ">
          <p className="font-bold">Asal Lead</p>
          <p className="font-normal text-sm">{item?.asallead || "-"}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <h2 className="text-lg font-semibold text-[#1F7D53] underline">
          Tanggal Booking
        </h2>
        <div className="grid grid-cols-3 gap-x-2 gap-y-1 text-sm text-gray-700 px-[1rem]">
          <div className="flex flex-col items-center ">
            <p className="font-bold">Tanggal Booking</p>
            <p className="font-normal text-sm">
              {item?.tanggal_booking || "-"}
            </p>
          </div>
          <div className="flex flex-col items-center ">
            <p className="font-bold">Tanggal UTJ</p>
            <p className="font-normal text-sm">{item?.tanggal_utj || "-"}</p>
          </div>
          <div className="flex flex-col items-center ">
            <p className="font-bold">Tanggal Berkas</p>
            <p className="font-normal text-sm">{item?.tanggal_berkas || "-"}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <h2 className="text-lg font-semibold text-[#1F7D53] underline">
          Status
        </h2>
        <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-sm text-gray-700 px-[1rem]">
          <div className="flex flex-col items-center ">
            <p className="font-bold">Status Berkas</p>
            <p className="bg-green-200 text-green-800 text-center py-1 px-3 rounded-full text-xs font-semibold">
              {item?.proses_berkas || "null"}
            </p>
          </div>
          <div className="flex flex-col items-center ">
            <p className="font-bold">Status SPR</p>
            <p className="font-normal text-sm">
              {item?.status_aktif_spr === 1 ? (
                <span className="bg-green-200 text-green-800 py-1 px-3 rounded-full text-xs font-semibold">
                  Aktif
                </span>
              ) : (
                <span className="bg-red-200 text-red-800 py-1 px-3 rounded-full text-xs font-semibold">
                  Tidak Aktif
                </span>
              )}
            </p>
          </div>
        </div>
        <a
          href={item?.berkas_utj}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-200 text-green-800 py-1 px-3 w-full rounded-xl text-md mt-[1rem] font-semibold flex items-center justify-center gap-1 cursor-pointer"
        >
          <span>
            <FaDownload aria-hidden="true" className="size-3" />
          </span>
          Download
        </a>
      </div>
    </div>
  );
}
