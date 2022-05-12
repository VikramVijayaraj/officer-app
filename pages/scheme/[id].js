import { useContext } from "react";
import SchemeDetail from "../../components/detail/SchemeDetail";

import UserInfo from "../../components/detail/UserInfo";
import { SchemeContext } from "../../store/scheme-context";
import { UserContext } from "../../store/user-context";

export default function SchemeDetailPage() {
  const userCtx = useContext(UserContext);
  const schemeCtx = useContext(SchemeContext);

  const userData = userCtx.user;
  const schemeData = schemeCtx.scheme;
  let documents;

  for (const key in userData) {
    if (key === "documents") {
      console.log(key);
      documents = userData[key];
    }
  }

  return (
    <div className="flex mt-14">
      <UserInfo user={userCtx.user} />
      <SchemeDetail scheme={schemeData} user={userData} docs={documents} />
    </div>
  );
}
