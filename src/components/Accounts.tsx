import accounts from "@/../public/accounts.json";

interface Account {
  id: number;
  name: string;
  type: string;
  line: string;
  broker: string;
  date: string;
  premium: string;
  rated_premium: string;
  loss_ratio: number;
  appetite: string;
  status: string;
  triage: number;
  winnability: string;
}

export default function Accounts() {
  const CellPadding = "px-1";
  const ButtonStyles =
    "border-2 border-blue-500 py-2 px-8 rounded-full text-blue-500 font-semibold bg-slate-950/20 cursor-pointer duration-500 hover:scale-105";

  const TableBackground = (account: Account) => {
    if (account.id % 2 === 0) {
      return "border-b-2 border-t-2 border-slate-400/20";
    }

    return "border-b-2 border-t-2 border-slate-400/20 bg-slate-400/10";
  };

  const LossStyles = (account: Account) => {
    if (account.loss_ratio < 35) {
      return "py-2 px-4 text-slate-50 bg-green-400 font-semibold rounded-full";
    } else if (account.loss_ratio < 60) {
      return "py-2 px-4 text-slate-50 bg-yellow-200 text-slate-950 font-semibold rounded-full";
    } else {
      return "py-2 px-4 text-slate-50 bg-red-700 font-semibold rounded-full";
    }
  };
  const StatusStyles = (account: Account) => {
    if (account.status === "Active") {
      return "w-4 h-4 bg-green-400 rounded-full";
    }

    return "w-4 h-4 bg-blue-800 rounded-full";
  };
  return (
    <section className="flex flex-col gap-5 bg-slate-800 p-5 rounded-3xl">
      <div className="flex flex-col md:flex-row gap-5 items-center">
        <h2 className="text-2xl whitespace-nowrap">My Accounts</h2>
        <input
          type="text"
          className="py-2 px-4 max-w-xs md:w-xs bg-slate-400/10 rounded-full text-slate-400/50 placeholder:text-slate-400/50"
          placeholder="Search"
        />
        <div className="flex flex-wrap gap-2">
          <button className={ButtonStyles}>Filter</button>
          <button className={ButtonStyles}>Sort</button>
          <button className={ButtonStyles}>Group</button>
          <button className="bg-blue-500 text-slate-50 font-semibold py-2 px-8 rounded-full cursor-pointer duration-500 hover:scale-105">
            + New
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table>
          <thead className="bg-slate-400/10 text-slate-400">
            <tr>
              <td className="px-2">ACCOUNT NAME/TYPE</td>
              <td className={CellPadding}>LINE</td>
              <td className={CellPadding}>BROKER</td>
              <td className={CellPadding}>RENEWAL DATE</td>
              <td className={CellPadding}>PREMIUM</td>
              <td className="px-1 text-center">RATED PREMIUM</td>
              <td className={CellPadding}>LOSS RATIO</td>
              <td className={CellPadding}>APPETITE</td>
              <td className={CellPadding}>STATUS</td>
              <td className={CellPadding}>TRIAGE</td>
              <td className={CellPadding}>WINNABILITY</td>
              <td className={CellPadding} />
            </tr>
          </thead>
          <tbody>
            {accounts.map((account) => (
              <tr key={account.id} className={TableBackground(account)}>
                <td className="px-2 py-2">
                  <p>{account.name}</p>
                  <p className="text-slate-400">{account.type}</p>
                </td>
                <td className={CellPadding}>{account.line}</td>
                <td className={CellPadding}>{account.broker}</td>
                <td className={CellPadding}>{account.date}</td>
                <td className="text-center text-blue-500 font-semibold px-1">
                  {account.premium}
                </td>
                <td className="px-1 text-center ">{account.rated_premium}</td>
                <td className={CellPadding}>
                  <span className={LossStyles(account)}>
                    {account.loss_ratio}%
                  </span>
                </td>
                <td className={CellPadding}>
                  <span className="rounded-full bg-blue-800/50 flex w-full py-1 px-4 justify-center items-center">
                    {account.appetite}
                  </span>
                </td>
                <td className={CellPadding}>
                  <div className="flex gap-2 items-center">
                    <span className={StatusStyles(account)} />
                    <p>{account.status}</p>
                  </div>
                </td>
                <td className={CellPadding}>
                  <span className="border-blue-500 border-2 py-2 px-4 rounded-full text-blue-500">
                    {account.triage}
                  </span>
                </td>
                <td className={CellPadding}>
                  <div className="flex gap-2 items-center border-2 border-blue-500 rounded-full p-2">
                    <div className="flex gap-1">
                      <span className="w-4 h-4 rounded-full bg-blue-500" />
                      <span className="w-4 h-4 rounded-full bg-blue-500" />
                      <span className="w-4 h-4 rounded-full bg-blue-500" />
                      <span className="w-4 h-4 rounded-full bg-blue-500" />
                    </div>
                    <p className="text-blue-500 whitespace-nowrap">
                      {account.winnability}
                    </p>
                  </div>
                </td>
                <td className="px-1 relative">
                  <div className="rounded-full w-8 h-8 border-2 border-slate-50 text-slate-50 relative">
                    <p className="text-sm leading-none absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 rotate-90">
                      ...
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
