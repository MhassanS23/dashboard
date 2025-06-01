import React, { useState } from "react";
import { formatRupiah } from "../../utils/formatRupiah";

export default function AkadTable({ data }) {
  return (
    <div className="w-full hidden xl:block overflow-x-auto">
      <table className="min-w-max w-full table-auto border border-white rounded-md overflow-hidden">
        <thead className="bg-[#1F7D53] text-white">
          <tr>
            <th className="p-2 border w-42 truncate">Kode</th>
            <th className="p-2 border">Id SPR</th>
            <th className="p-2 border w-42 truncate">Nama</th>
            <th className="p-2 border">Perumahan</th>
            <th className="p-2 border">Kavling</th>
            <th className="p-2 border">Cabang</th>
            <th className="p-2 border">Realisasi Akad</th>
            <th className="p-2 border">Tanggal Akad</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr className="bg-[#7FB77E] text-white" key={item?.id || index}>
              <td className="p-2 border">{item?.code || "-"}</td>
              <td className="p-2 border">{item?.id_spr || "-"}</td>
              <td className="p-2 border">{item?.spv_akad || "-"}</td>
              <td className="p-2 border">{item?.perumahan || "-"}</td>
              <td className="p-2 border">{item?.kavling || "-"}</td>
              <td className="p-2 border">{item?.cabang || "-"}</td>
              <td className="p-2 border">
                {item?.realisasi_akad ? formatRupiah(item.realisasi_akad) : "-"}
              </td>
              <td className="p-2 border">{item?.tanggal_akad || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
