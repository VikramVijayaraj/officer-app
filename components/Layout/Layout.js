import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />

      <div className="max-w-6xl m-auto mt-8">{children}</div>
    </div>
  );
}
