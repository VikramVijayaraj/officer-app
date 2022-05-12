import Image from "next/image";

export default function UserInfo({ user }) {
  return (
    <div className="p-6 w-1/4">
      <div className="pb-8 text-center">
        <Image
          className="rounded-full"
          src={user.avatar ? user.avatar.url : "/avatars/avatar.png"}
          alt="user-image"
          width={100}
          height={100}
        />
      </div>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <h1 className="font-bold mt-3">Applicant's name</h1>
      <p>
        {user.firstName} {user.lastName}
      </p>

      <h1 className="font-bold mt-3">ID</h1>
      <p>{user.uid}</p>

      <h1 className="font-bold mt-3">Email ID</h1>
      <p>{user.email}</p>

      <h1 className="font-bold mt-3">Gender</h1>
      <p>{user.gender}</p>

      <h1 className="font-bold mt-3">Age</h1>
      <p>{user.age}</p>
    </div>
  );
}
