import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Drawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hidden md:block bg-white font-bold text-[#1ac765] rounded-md py-[0.5rem] px-[1rem] cursor-pointer"
      >
        Menu Dashbooard
      </button>

      <button
        onClick={() => setOpen(true)}
        className="md:hidden text-white rounded-md py-[0.5rem] px-[1rem] cursor-pointer"
      >
        <GiHamburgerMenu aria-hidden="true" className="size-6" />
      </button>

      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
        />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <DialogPanel
                transition
                className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
              >
                <TransitionChild>
                  <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="cursor-pointer relative rounded-md text-gray-300 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden"
                    >
                      <span className="absolute -inset-2.5" />
                      <span className="sr-only">Close panel</span>
                      <IoMdClose aria-hidden="true" className="size-6" />
                    </button>
                  </div>
                </TransitionChild>
                <div className="flex h-full flex-col items-center overflow-y-scroll bg-white py-6 shadow-xl">
                  <div className="px-4 sm:px-6">
                    <DialogTitle className="text-base text-center bg-[#27391C] rounded-b-full  font-semibold text-white px-[4rem] py-[0.5rem]">
                      Menu Dashboard
                    </DialogTitle>
                  </div>
                  <div className="relative mt-6 flex flex-col items-center gap-2 font-bold px-4 sm:px-6 text-[#27391C]">
                    <a href={"/"}>Dashboard</a>
                    <a href={"/booking"}>Data Booking</a>
                    <a href={"/akad"}>Data Akad</a>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
