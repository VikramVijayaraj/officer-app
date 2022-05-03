import { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import { fetchApplications } from "../util/applications";

export default function PendingApplicationsPage() {
  const [usersList, setUsersList] = useState([]);
  const [applicationsList, setApplicationsList] = useState([]);
  // const applicationsArr = [];

  useEffect(() => {
    async function getUsers() {
      const users = await fetchApplications();
      setUsersList(users);
    }

    getUsers();
  }, []);

  // console.log(usersList);

  return (
    <>
      <Header
        title="Pending"
        subtitle="Applications that are pending to be approved"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mt-10">
        {usersList.map((user, index) => (
          <div key={index}>
          {/* {console.log(user.avatar ? user.avatar.url : user.gender)} */}
            <Card
              avatar={user.avatar ? user.avatar.url : user.pwd}
              userName={user.firstName}
              applicationName={user.age}
              userID={user.uid}
            />
          </div>
        ))}

        {/* return (
              <div key={index}>
                <Card
                  avatar={user.lastName}
                  userName={user.firstName}
                  applicationName={user.age}
                  userID={user.uid}
                />
              </div>
            ); */}

        {/* <div key={index}>
            <Card
              avatar={item.lastName}
              userName={item.firstName}
              applicationName={item.age}
              userID={item.uid}
            />
          </div> */}

        {/* <Card
          avatar="avatar"
          userName="Vikram Vijayaraj"
          applicationName="Distribution of maize seeds"
          userID={123456}
        />
        <Card
          avatar="avatar"
          userName="Vikram Vijayaraj"
          applicationName="Distribution of maize seeds"
          userID={123456}
        />
        <Card
          avatar="avatar"
          userName="Vikram Vijayaraj"
          applicationName="Distribution of maize seeds"
          userID={123456}
        />
        <Card
          avatar="avatar"
          userName="Vikram Vijayaraj"
          applicationName="Distribution of maize seeds"
          userID={123456}
        /> */}
      </div>
    </>
  );
}
