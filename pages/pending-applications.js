import { useContext, useEffect, useState } from "react";

import Card from "../components/Card";
import Header from "../components/Header";
import { UserContext } from "../store/user-context";
import { fetchApplications } from "../util/applications";

export default function PendingApplicationsPage() {
  const userCtx = useContext(UserContext);

  const [usersList, setUsersList] = useState([]);
  const [applicationsList, setApplicationsList] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const users = await fetchApplications();
      setUsersList(users);
    }

    getUsers();
  }, []);

  return (
    <>
      <Header
        title="Pending"
        subtitle="Applications that are pending to be approved"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-4 mt-10">
        {usersList.map((user, index) => (
          <div key={index}>
            <Card
              avatar={user.avatar ? user.avatar.url : user.pwd}
              userName={user.firstName}
              applicationName={user.age}
              userID={user.uid}
              userData={user}
            />
          </div>
        ))}
      </div>
    </>
  );
}
