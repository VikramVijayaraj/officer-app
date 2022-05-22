import { useContext } from "react";
import Link from "next/link";

import { SchemeContext } from "../../store/scheme-context";

export default function SchemesList({ user }) {
  const schemeCtx = useContext(SchemeContext);

  function clickHandler(data) {
    schemeCtx.setScheme(data);
  }

  return (
    <div className="w-full">
      <ul>
        {user.applied &&
          Object.keys(user.applied).map((item, index) => (
            <Link
              href={`/scheme/${user.applied[item].sname}`}
              key={index}
              passHref
            >
              <div
                className="flex justify-between m-2 mx-20 bg-white rounded-lg
                shadow-md p-8 cursor-pointer transition ease-in-out delay-150
                hover:translate-x-1 hover:bg-slate-100 duration-300"
                onClick={clickHandler.bind(this, user.applied[item])}
              >
                <div>
                  <li className="">{user.applied[item].sname}</li>
                  <li className="font-light">{user.applied[item].seligible}</li>
                </div>
                <p className="self-center text-2xl font-normal">{">"}</p>
              </div>
            </Link>
          ))}
      </ul>
    </div>
  );
}
