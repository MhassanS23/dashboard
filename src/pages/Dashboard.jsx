// React
import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

// Components
import Navbar from "../components/Navbar";
import BookingTarget from "../components/chart/BookingTarget";

export default function Dashboard() {
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
      setDataBook(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  // UseEffect
  useEffect(() => {
    getBooking();
  }, []);

  // Gabungan Data
  const mergedData =
    dataBook?.dataTarget?.map((targetItem) => {
      const bookingItem = dataBook.dataTargetBooking.find(
        (b) =>
          b.cabang === targetItem.cabang && b.perumahan === targetItem.perumahan
      );

      return {
        cabang: targetItem.cabang,
        perumahan: targetItem.perumahan,
        Target: targetItem,
        Booking: bookingItem,
      };
    }) || [];

  return (
    <>
      <Navbar />

      {loading ? (
        <div className="text-center text-white h-screen w-full flex justify-center items-center">
          Loading data...
        </div>
      ) : !dataBook || mergedData.length === 0 ? (
        <div className="text-center text-white mt-20">Tidak ada data.</div>
      ) : (
        <div className="py-[6rem] px-[2rem]">
          <h1 className="text-2xl font-bold mb-2 bg-[#27391C] text-center rounded-b-full py-4 text-white">
            Statistik Data Target dan Target Booking
          </h1>
          <h4 className="text-md font-bold mb-2 text-center text-white">
            Data per bulan untuk perumahan setiap cabang
          </h4>
          {mergedData.map((item, index) => (
            <BookingTarget key={item?.id || index} data={item} />
          ))}
        </div>
      )}
    </>
  );
}
