// Utils
import { formatRupiah } from "../../utils/formatRupiah";

export default function AkadCard({ item }) {
  return (
    <div className="bg-white rounded-xl shadow-md flex flex-col gap-2 hover:shadow-lg transition-shadow">
      <div className="bg-[#1F7D53] text-white text-md w-full flex items-center justify-center rounded-xl py-2">
        Akad Data
      </div>

      <div className="flex flex-col justify-center items-center ">
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="text-lg font-semibold text-[#1F7D53]">
            {item?.spv_akad || "Not found"}
          </h2>
          <p className="font-bold text-black text-sm">{item?.code || "-"}</p>
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-500">{item?.tanggal_akad || "-"}</p>
            <p className="font-bold text-md text-black">|</p>
            <p className="text-sm text-gray-500">{item?.id_spr || "-"}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-2 gap-y-3 text-center text-sm text-gray-700 px-[1rem] mb-[1rem]">
        <div className="flex flex-col items-center ">
          <p className="font-bold">Perumahan</p>
          <p className="font-normal text-sm">{item?.perumahan || "-"}</p>
        </div>
        <div className="flex flex-col items-center ">
          <p className="font-bold">Kavling</p>
          <p className="font-normal text-sm">{item?.kavling || "-"}</p>
        </div>
        <div className="flex flex-col items-center ">
          <p className="font-bold">Akad</p>
          <p className="font-normal text-sm">
            {item.realisasi_akad ? formatRupiah(item.realisasi_akad) : "-"}
          </p>
        </div>
        <div className="flex flex-col items-center ">
          <p className="font-bold">Cabang</p>
          <p className="font-normal text-sm">{item?.cabang || "-"}</p>
        </div>
      </div>
    </div>
  );
}
