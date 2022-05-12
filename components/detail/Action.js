export default function Action() {
  return (
    <div className="flex justify-center py-8 space-x-8">
      <button className="border border-red-500 text-red-600 font-bold px-20 py-2 rounded-lg shadow-md cursor-pointer hover:bg-red-500 hover:text-white transition duration-200">Reject</button>
      <button className="border border-green-500 text-green-600 font-bold px-20 py-2 rounded-lg shadow-md cursor-pointer hover:bg-green-500 hover:text-white transition duration-200">Accept</button>
    </div>
  );
}
