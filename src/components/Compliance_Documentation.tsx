import { CircleCheck } from "lucide-react";
import Link from "next/link";

export default function Compliance_Documemtation() {
  return (
    <section className="flex w-full flex-col gap-5">
      <div className="flex flex-wrap gap-2">
        <h2 className="text-3xl">Compliance & Documentation</h2>
        <Link href="#" className="text-blue-500 flex items-end hover:scale-105 duration-500">
          See history &rarr;
        </Link>
      </div>
      <div className="flex flex-wrap gap-5 bg-slate-800 p-8 rounded-3xl">
        <div className="flex flex-wrap gap-5">
          <div className="flex gap-2 text-green-400">
            <CircleCheck size={22} />
            <p className="text-slate-50">KYS verification</p>
          </div>
          <div className="flex gap-2 text-green-400">
            <CircleCheck size={22} />
            <p className="text-slate-50">Regulatory approval</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-5">
          <div className="flex gap-2 text-green-400">
            <CircleCheck size={22} />
            <p className="text-slate-50">Required Documentation</p>
          </div>
          <div className="flex gap-2 text-green-400">
            <CircleCheck size={22} />
            <p className="text-slate-50">Financial Verification</p>
          </div>
        </div>
      </div>
    </section>
  );
}
