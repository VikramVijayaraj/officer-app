export default function Header({ title, subtitle }) {
  return (
    <div>
      <h1 className="text-4xl">{title}</h1>
      <p className="font-normal mt-2">{subtitle}</p>
    </div>
  );
}
