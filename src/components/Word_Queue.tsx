import queue from "@/../public/work_queue.json";

interface Client {
  id: number;
  originator: string;
  client: string;
  line: string;
  type: string;
  status: string;
  created: string;
}

export default function Work_Queue() {
  const CellPadding = "px-1";
  const StatusColor = (client: Client) => {
    if (client.status === "New") {
      return "px-2 bg-blue-500 rounded-full mr-2";
    } else if (client.status === "Completed") {
      return "px-2 bg-green-400 rounded-full mr-2";
    } else {
      return "px-2 bg-yellow-500 rounded-full mr-2";
    }
  };
  const TableBackground = (client: Client) => {
    if (client.id % 2 === 0) {
      return "border-b-2 border-t-2 border-slate-400/20";
    }

    return "border-b-2 border-t-2 border-slate-400/20 bg-slate-400/10";
  };
  return (
    <section className="bg-slate-800 p-4 rounded-3xl w-full flex flex-col gap-5">
      <h2 className="text-2xl">Work Queue</h2>
      <div className="flex flex-col md:flex-row gap-2">
        <span className="border-2 border-slate-800 bg-blue-500 py-1 px-4 rounded-full cursor-pointer duration-500 hover:scale-105">
          Assigned to me {"(12)"}
        </span>
        <span className="border-2 border-slate-800 bg-slate-950 py-1 px-4 rounded-full cursor-pointer duration-500 hover:scale-105">
          Pending Review {"(8)"}
        </span>
        <span className="border-2 border-slate-800 bg-slate-950 py-1 px-4 rounded-full cursor-pointer duration-500 hover:scale-105">
          Refferals {"(3)"}
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="text-slate-50">
          <thead className="bg-slate-400/10 text-slate-400">
            <tr>
              <td className="px-2">ORIGINATOR</td>
              <td className={CellPadding}>CLIENT/LINE</td>
              <td className={CellPadding}>TYPE</td>
              <td className={CellPadding}>STATUS</td>
              <td className={CellPadding}>CREATED</td>
              <td className={CellPadding} />
            </tr>
          </thead>
          <tbody>
            {queue.map((client) => (
              <tr key={client.id} className={TableBackground(client)}>
                <td className="px-2 py-2 flex gap-2 items-center">
                  <span className="rounded-full p-2 bg-blue-800/45 text-slate-50">
                    {client.originator
                      .split(" ")
                      .map((name) => (name === "Me" ? name : name.slice(0, 1)))
                      .join("")}
                  </span>
                  {client.originator}
                </td>
                <td className={CellPadding}>
                  <p>{client.client}</p>
                  <p className="text-slate-400">{client.line}</p>
                </td>
                <td className={CellPadding}>{client.type}</td>
                <td className={CellPadding}>
                  <span className={StatusColor(client)} />
                  {client.status}
                </td>
                <td className={CellPadding}>{client.created}</td>
                <td className={CellPadding}>
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
