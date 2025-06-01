import React, { useState } from "react";
import { formatRupiah } from "../../utils/formatRupiah";
import { FaDownload } from "react-icons/fa";
import { formatNama } from "../../utils/formatNama";

export default function BookingTable({ data }) {
  return (
    <div className="w-full hidden xl:block overflow-x-auto">
      <table className="min-w-max w-full table-auto border border-white rounded-md overflow-hidden">
        <thead className="bg-[#1F7D53] text-white">
          <tr>
            <th className="p-2 border w-42 truncate">Kode</th>
            <th className="p-2 border w-42 truncate">Nama</th>
            <th className="p-2 border">No Telp</th>
            <th className="p-2 border">Perumahan</th>
            <th className="p-2 border">Kavling</th>
            <th className="p-2 border">Cabang</th>
            <th className="p-2 border">DP</th>
            <th className="p-2 border">Harga</th>
            <th className="p-2 border">UTJ</th>
            <th className="p-2 border">Tanggal Booking</th>
            <th className="p-2 border">Tanggal Berkas</th>
            <th className="p-2 border">Tanggal UTJ</th>
            <th className="p-2 border">Asal Lead</th>
            <th className="p-2 border">Akad</th>
            <th className="p-2 border">Status SPR</th>
            <th className="p-2 border">Status Berkas</th>
            <th className="p-2 border">Berkas UTJ</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr className="bg-[#7FB77E] text-white" key={item?.id || index}>
              <td className="p-2 border">{item?.code || "-"}</td>
              <td className="p-2 border">
                {item.fullname ? formatNama(item.fullname) : "-"}
              </td>
              <td className="p-2 border">{item?.phone_number || "-"}</td>
              <td className="p-2 border">{item?.perumahan || "-"}</td>
              <td className="p-2 border">{item?.kavling || "-"}</td>
              <td className="p-2 border">{item?.cabang || "-"}</td>
              <td className="p-2 border">
                {item.jumlah_dp ? formatRupiah(item.jumlah_dp) : "-"}
              </td>
              <td className="p-2 border">
                {item.harga_perumahan
                  ? formatRupiah(item.harga_perumahan)
                  : "-"}
              </td>
              <td className="p-2 border">
                {item.utj ? formatRupiah(item.utj) : "-"}
              </td>
              <td className="p-2 border">{item?.tanggal_booking || "-"}</td>
              <td className="p-2 border">{item?.tanggal_berkas || "-"}</td>
              <td className="p-2 border">{item?.tanggal_utj || "-"}</td>
              <td className="p-2 border">{item?.asallead || "-"}</td>
              <td className="p-2 border">{item?.SPV_Proses_Akad || "-"}</td>
              <td className="p-2 border">{item?.proses_berkas || "-"}</td>
              <td className="p-2 border text-center">
                {item?.status_aktif_spr === 1 ? (
                  <span className="bg-green-200 text-green-800 py-1 px-3 rounded-full text-xs font-semibold">
                    Aktif
                  </span>
                ) : (
                  <span className="bg-red-200 text-red-800 py-1 px-3 rounded-full text-xs font-semibold">
                    Tidak Aktif
                  </span>
                )}
              </td>
              <td className="p-2 border">
                <a
                  href={item?.berkas_utj}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-200 text-green-800 py-1 px-3 rounded-full text-xs font-semibold flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>
                    <FaDownload aria-hidden="true" className="size-3" />
                  </span>
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
