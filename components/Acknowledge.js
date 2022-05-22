import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useRouter } from "next/router";

import { setTrack } from "../util/applications";

export default function Acknowledge({ uid, schemeName }) {
  const router = useRouter();

  let [isOpenReject, setIsOpenReject] = useState(false);
  let [isOpenApprove, setIsOpenApprove] = useState(false);
  const [remark, setRemark] = useState("");

  function closeModalReject() {
    setIsOpenReject(false);

    const track = { trackStatus: "Rejected", remark: remark };

    setTrack(uid, schemeName, track);

    router.push("/");
  }

  function openModalReject() {
    setIsOpenReject(true);
  }

  function closeModalApprove() {
    setIsOpenApprove(false);
    console.log(String(uid) + schemeName.replaceAll(" ",""));
    const referenceID = String(uid) + schemeName.replaceAll(" ","")

    const track = { trackStatus: "Approved", refID: referenceID };
    setTrack(uid, schemeName, track);

    router.push("/");
  }

  function openModalApprove() {
    setIsOpenApprove(true);
  }

  function inputHandler(e) {
    setRemark(e.target.value);
  }

  return (
    <div>
      <div className="flex justify-center py-8 space-x-8">
        <button
          type="button"
          onClick={openModalReject}
          className="border border-red-500 text-red-600 font-bold px-20 py-2 rounded-lg shadow-md cursor-pointer hover:bg-red-500 hover:text-white transition duration-200"
        >
          Reject
        </button>
        <button
          type="button"
          onClick={openModalApprove}
          className="border border-green-500 text-green-600 font-bold px-20 py-2 rounded-lg shadow-md cursor-pointer hover:bg-green-500 hover:text-white transition duration-200"
        >
          Approve
        </button>
      </div>

      <Transition appear show={isOpenReject} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalReject}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  as="div"
                  className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                >
                  <Dialog.Title
                    as="h3"
                    className="text-lg text-center font-medium leading-6 text-gray-900"
                  >
                    Reject Application!
                  </Dialog.Title>

                  <div className="mt-2 text-center">
                    <p className="text-sm text-gray-500">Enter Remark</p>
                  </div>

                  <div className="text-center">
                    <input
                      className="border-b-2 border-slate-200 focus:outline-none"
                      type="text"
                      onChange={inputHandler}
                    />
                  </div>

                  <div className="mt-4 text-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModalReject}
                    >
                      Send
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Transition appear show={isOpenApprove} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalApprove}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  as="div"
                  className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                >
                  <Dialog.Title
                    as="h3"
                    className="text-lg text-center font-medium leading-6 text-gray-900"
                  >
                    Approve Application!
                  </Dialog.Title>

                  <div className="mt-2 text-center">
                    <p className="text-sm text-gray-500">
                      Application status will be shared with the user
                    </p>
                  </div>

                  <div className="mt-4 text-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModalApprove}
                    >
                      Yes
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
