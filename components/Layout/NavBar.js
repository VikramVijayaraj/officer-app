import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav className="bg-white shadow-md">
      <ul className="flex flex-row justify-center space-x-16 p-4">
        <li className={"p-2 flex align-middle border-b-2 border-purple-500"}>
          <Link href="/pending-applications">Home</Link>
        </li>
        {/* <li
          className={
            router.pathname == "/approved-applications"
              ? "p-2 flex align-middle border-b-2 border-purple-500"
              : "p-2 flex align-middle"
          }
        >
          <Image
            src="/icons/check-icon.svg"
            alt="timer"
            height={20}
            width={20}
          />
          <Link href="/approved-applications">Approved</Link>
        </li> */}
      </ul>
    </nav>
  );
}
