export default function Header() {
  return (
    <header className="py-5 border-b-2 border-slate-800">
      <div className="container flex flex-col gap-5 md:flex-row justify-between items-center mx-auto px-5 ">
        <h1 className="text-3xl">
          Hi Arthur, welcome! You have 12 open tasks.
        </h1>
        <div className="flex gap-2">
          <input
            type="text"
            className="py-2 px-4 max-w-xs bg-slate-800 rounded-full text-slate-400/50 placeholder:text-slate-400/50"
            placeholder="Search"
          />
          <span className="rounded-full p-2 bg-blue-800/50">AR</span>
        </div>
      </div>
    </header>
  );
}
