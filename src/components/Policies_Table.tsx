import policies from "@/../public/policies.json";
import { ShieldCheck, ShieldUser, Ship } from "lucide-react";

interface Company {
  id: number;
  name: string;
  code: number;
  eff_date: string;
  exp_date: string;
  status: string;
  expiring_tech: string;
  expiring_premium: string;
  renewal_to_tech: string;
  renewal_tech: string;
  renewal_premium: string;
  rate: number | null;
  loss: number | null;
}

export default function Policies_Table() {
  const ButtonStyles =
    "border-2 border-blue-500 py-2 px-8 rounded-full text-blue-500 font-semibold bg-slate-950/20 cursor-pointer duration-500 hover:scale-105";

  const IconStyles = (company: Company) => {
    switch (company.name) {
      case "Marine Cargo":
        return <Ship size={22} />;
      case "General Liability":
        return <ShieldCheck size={22} />;
      case "Workers Comp":
        return <ShieldUser size={22} />;
      case "Umbrella":
        return <ShieldCheck size={22} />;
      default:
        break;
    }
  };

  const CircleStyles = (company: Company) => {
    switch (company.name) {
      case "Marine Cargo":
        return "w-8 h-8 flex items-center justify-center rounded-full bg-blue-500";
      case "General Liability":
        return "w-8 h-8 flex items-center justify-center rounded-full bg-green-400";
      case "Workers Comp":
        return "w-8 h-8 flex items-center justify-center rounded-full bg-indigo-500";
      case "Umbrella":
        return "w-8 h-8 flex items-center justify-center rounded-full bg-red-500";
      default:
        break;
    }
  };

  const TableBackground = (company: Company) => {
    if (company.id % 2 === 0) {
      return "border-b-2 border-t-2 border-slate-400/20";
    }

    return "border-b-2 border-t-2 border-slate-400/20 bg-slate-400/10";
  };

  const LossStyles = (company: Company) => {
    if (company.loss !== null && company.loss < 35) {
      return "py-2 px-4 text-slate-50 bg-green-400 font-semibold rounded-full";
    } else if (company.loss !== null && company.loss < 60) {
      return "py-2 px-4 text-slate-50 bg-yellow-200 text-slate-950 font-semibold rounded-full";
    } else if (company.loss !== null) {
      return "py-2 px-4 text-slate-50 bg-red-700 font-semibold rounded-full";
    } else {
      return "text-slate-50 font-semibold";
    }
  };
  const StatusStyles = (company: Company) => {
    if (company.status === "Active") {
      return "w-4 h-4 bg-green-400 rounded-full";
    }

    return "w-4 h-4 bg-yellow-200 rounded-full";
  };

  const formatMoney = (value: string): number => {
    const multipliers: Record<string, number> = {
      K: 1e3,
      M: 1e6,
      B: 1e9,
    };

    const input = value.trim().replace(/\$/g, "");

    const match = input.match(/^([\d,\.]+)([KMB])?$/i);
    if (!match) return 0;

    // eslint-disable-next-line prefer-const
    let [, numberPart, suffix] = match;

    if (/^\d{4,},\d{3}$/.test(numberPart)) {
      numberPart = numberPart.replace(",", "");
    }

    const base = parseFloat(numberPart.replace(/,/g, ""));
    if (isNaN(base)) return 0;

    const multiplier = multipliers[suffix?.toUpperCase() || ""] || 1;
    return base * multiplier;
  };

  const Calculator = (field: keyof Company): string | number => {
    const total = policies.reduce((acc, el) => {
      const rawValue = el[field];
      if (typeof rawValue !== "string") return acc;

      const numeric = formatMoney(rawValue);
      return acc + numeric;
    }, 0);

    return `$${total.toLocaleString("en-US")}`;
  };
  return (
    <section className="flex w-full flex-col gap-5">
      <h2 className="text-3xl">Policies</h2>
      <div className="flex flex-col gap-5 bg-slate-800 p-8 rounded-3xl">
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-5">
          <input
            type="text"
            className="py-2 px-4 w-xs bg-slate-400/10 rounded-full text-slate-400/50 placeholder:text-slate-400/50"
            placeholder="Search"
          />
          <div className="flex gap-2">
            <button className={ButtonStyles}>Filter</button>
            <button className={ButtonStyles}>Group</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table>
            <thead className="bg-slate-400/10 text-slate-400">
              <tr>
                <td className="px-2">Line</td>
                <td className="px-2">EFF.DATE</td>
                <td className="px-2">EXP.DATE</td>
                <td className="px-2">STATUS</td>
                <td className="px-2">EXPIRING TECH</td>
                <td className="px-2">EXPIRING PREMIUM</td>
                <td className="px-2">RENEWAL TO TECH</td>
                <td className="px-2">RENEWAL TECH</td>
                <td className="px-2">RENEWAL PREMIUM</td>
                <td className="px-2">RATE CHANCE</td>
                <td className="px-2">LOSS RATIO</td>
                <td className="px-2"></td>
              </tr>
            </thead>
            <tbody>
              {policies.map((company: Company) => (
                <tr key={company.id} className={TableBackground(company)}>
                  <td className="px-2 py-2">
                    <div className="flex items-center gap-1">
                      <div className={CircleStyles(company)}>
                        {IconStyles(company)}
                      </div>
                      <p>{company.name}</p>
                    </div>
                    <p className="text-slate-400">{company.code}</p>
                  </td>
                  <td className="px-2">{company.eff_date}</td>
                  <td className="px-2">{company.exp_date}</td>
                  <td className="px-2">
                    <div className="flex gap-2 items-center">
                      <span className={StatusStyles(company)} />
                      <p>{company.status}</p>
                    </div>
                  </td>
                  <td className="px-2">{company.expiring_tech}</td>
                  <td className="px-2">{company.expiring_premium}</td>
                  <td className="px-2">{company.renewal_to_tech}</td>
                  <td className="px-2">{company.renewal_tech}</td>
                  <td className="px-2">{company.renewal_premium}</td>
                  <td className="px-2">
                    <p
                      className={
                        company.rate && company.rate > 5
                          ? "text-red-600"
                          : "text-slate-50"
                      }
                    >
                      {company.rate ? company.rate + "%" : "N/A"}
                    </p>
                  </td>
                  <td className="px-2">
                    <span className={LossStyles(company)}>
                      {company.loss ? company.loss + "%" : "N/A"}
                    </span>
                  </td>
                  <td className="px-2">
                    <div className="rounded-full w-8 h-8 border-2 border-slate-50 text-slate-50 relative">
                      <p className="text-sm leading-none absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 rotate-90">
                        ...
                      </p>
                    </div>
                  </td>
                </tr>
              ))}

              <tr className="border-b-2 border-t-2 border-slate-400/20 py-2">
                <td className="px-2"></td>
                <td className="px-2"></td>
                <td className="px-2"></td>
                <td className="px-2 py-4">TOTAL{`(${policies.length})`}</td>
                <td className="px-2">{Calculator("expiring_tech")}</td>
                <td className="px-2">{Calculator("expiring_premium")}</td>
                <td className="px-2">{Calculator("renewal_to_tech")}</td>
                <td className="px-2">{Calculator("renewal_tech")}</td>
                <td className="px-2">{Calculator("renewal_premium")}</td>
                <td className="px-2">
                  <p className="text-slate-50">6.9%</p>
                </td>
                <td className="px-2">
                  <span className="py-2 px-4 bg-yellow-200 text-slate-950 font-semibold rounded-full">
                    58.3%
                  </span>
                </td>
                <td className="px-2"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
