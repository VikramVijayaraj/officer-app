import { Tab } from "@headlessui/react";
import Image from "next/image";
import Acknowledge from "../Acknowledge";
import Action from "./Action";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SchemeDetail({ scheme, user, docs }) {
  const userData = user;
  let docsInfo = [];

  for (const key in userData) {
    if (key === "applied" || key === "documents" || key === "avatar") {
      delete userData.applied;
      delete userData.documents;
      delete userData.avatar;
    }
  }

  for (const key in docs) {
    docsInfo.push(docs[key]);
  }

  const tabList = {
    "Scheme Detail": scheme,
    "User Detail": user,
  };

  return (
    <div className="w-full mx-6 sm:px-0">
      <div className="w-full mx-6 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-400 p-1">
            {Object.keys(tabList).map((tab, index) => (
              <Tab
                key={index}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                {tab}
              </Tab>
            ))}
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              Documents
            </Tab>
          </Tab.List>

          <Tab.Panels className="mt-2">
            {Object.values(tabList).map((details, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "rounded-xl bg-white p-3",
                  "ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2"
                )}
              >
                <ul>
                  {Object.keys(details).map((item, index) => (
                    <li
                      key={index}
                      className="relative rounded-md p-3 hover:bg-gray-100"
                    >
                      <h3 className="text-sm font-normal leading-5 uppercase tracking-widest">
                        {item}
                      </h3>

                      <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                        <li className="text-lg font-medium">{details[item]}</li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
            <Tab.Panel
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2"
              )}
            >
              <ul>
                {docsInfo.map((doc, index) => (
                  <div className="my-4" key={index}>
                    <a href={`${doc.url}`} target="_blank" rel="noreferrer">
                      <div className="flex flex-row shadow-md rounded-md p-4 hover:bg-slate-50">
                        <Image
                          src="/icons/doc-icon.png"
                          alt="doc"
                          width={50}
                          height={50}
                        />
                        <div className="ml-2">
                          <li>{doc.name}</li>
                          <li>{doc.type}</li>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </ul>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>

      {/* <Action /> */}  
      <Acknowledge uid={userData.uid} schemeName={scheme.sname} />
    </div>
  );
}
