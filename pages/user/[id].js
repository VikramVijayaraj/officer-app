import { useContext } from "react";
import SchemesList from "../../components/detail/SchemesList";
import UserInfo from "../../components/detail/UserInfo";

import { UserContext } from "../../store/user-context";

export default function UserDetailPage() {
  const userCtx = useContext(UserContext);
  const userData = userCtx.user;

  return (
    <div className="flex mt-14">
      <UserInfo user={userData} />
      <SchemesList user={userData} />
    </div>
  );
}
