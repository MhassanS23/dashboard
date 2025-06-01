// React
import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

// Components
import Navbar from "../components/Navbar";
import BookingCard from "../components/card/BookingCard";
import BookingTable from "../components/table/BookingTable";

export default function Booking() {
  // State
  const [dataBook, setDataBook] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function
  const getBooking = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `/api/m_dashboard_direksi.php?action=intern_test`
      );
      setDataBook(res.data.dataBooking);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // UseEffect
  useEffect(() => {
    getBooking();
  }, []);

  return (
    <>
      <Navbar />
      {loading ? (
        <p className="text-center text-white h-screen w-full flex justify-center items-center">
          Loading data...
        </p>
      ) : !dataBook || dataBook.length === 0 ? (
        <p className="text-center text-white">Tidak ada data.</p>
      ) : (
        <div className="py-[6rem] px-[2rem]">
          <h1 className="text-2xl font-bold mb-2 bg-[#27391C] text-center rounded-b-full py-4 text-white">
            Data Pemesanan Perumahan
          </h1>
          <h4 className="text-md font-bold mb-2 text-center text-white">
            Menampilkan detail pemesanan rumah lengkap, termasuk data kontak,
            kavling, cabang, harga, dan status dokumen SPR.
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:hidden gap-6">
            {dataBook.map((item, index) => (
              <BookingCard key={item?.id || index} item={item} />
            ))}
          </div>
          <BookingTable data={dataBook} />
        </div>
      )}
    </>
  );
}
