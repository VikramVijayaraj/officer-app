import { Tab } from "@headlessui/react";
import { useState } from "react";
import Action from "./Action";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SchemeDetail({ scheme, user, docs }) {
  console.log(docs);
  const userData = user;
  // const [docsInfo, setDocsInfo] = useState({});
  let docsInfo = [];

  for (const key in userData) {
    if (key === "applied" || key === "documents" || key === "avatar") {
      delete userData.applied;
      delete userData.documents;
      delete userData.avatar;
    }
  }

  for (const key in docs) {
    // setDocsInfo({...docs[key]})
    docsInfo.push(docs[key]);
  }

  console.log(docsInfo);

  const tabList = {
    "Scheme Detail": scheme,
    "User Detail": user,
    Documents: docsInfo,
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
          </Tab.List>

          <Tab.Panels className="mt-2">
            {Object.values(tabList).map((details, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "rounded-xl bg-white p-3",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                <ul>
                  {Object.keys(details).map((item, index) => (
                    <li
                      key={index}
                      className="relative rounded-md p-3 hover:bg-gray-100"
                    >
                      {console.log(item)}
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
          </Tab.Panels>
        </Tab.Group>
      </div>
      <Action />
    </div>
  );
}

// console.log(scheme);
// return (
// <div className="w-full m-4">
//   <ul className="bg-white rounded-xl shadow-md p-4">
//     <h1 className="m-2 text-2xl mb-8 font-light tracking-widest">Scheme Detail</h1>
//     {Object.keys(scheme).map((item, index) => (
//       <div key={index} className="m-2 mb-4">
//         <li className="uppercase font-semibold tracking-widest">{item}</li>
//         <li>{scheme[item]}</li>
//       </div>
//     ))}
//   </ul>
// </div>
// );
// }
