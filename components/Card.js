import { useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { UserContext } from "../store/user-context";

export default function Card({
  avatar,
  userName,
  applicationName,
  userID,
  userData,
}) {

  const userCtx = useContext(UserContext);

  function clickHandler() {
    userCtx.setUser(userData);
  }

  return (
    <Link href={`/user/${userID}`} passHref>
      <div
        onClick={clickHandler}
        className="bg-white shadow-md p-4 rounded-lg cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-slate-100 duration-300"
      >
        <div className="flex flex-row">
          <Image
            className="rounded-full"
            src={avatar ? avatar : `/avatars/avatar.png`}
            alt="avatar"
            width={avatar ? 50 : 60}
            height={50}
          />
          <h1 className="pl-3 self-center">{userName}</h1>
        </div>

        <div className="mt-4  ">
          <div className="flex flex-row align-middle m-2 ml-5">
            <Image src="/icons/file.svg" alt="file" width={25} height={25} />
            <p>{applicationName}</p>
          </div>

          <div className="flex flex-row align-middle m-2 ml-5">
            <Image src="/icons/id.svg" alt="user-id" width={25} height={25} />
            <p>{userID}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
