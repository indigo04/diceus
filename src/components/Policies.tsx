import { Building2, ShieldCheck, ShieldUser, Ship, Umbrella } from "lucide-react";

export default function Policies() {
  return (
    <section className="flex flex-col gap-5">
      <h2 className="text-3xl">Policies</h2>
      <div className="flex flex-wrap xl:flex-nowrap gap-5 bg-slate-800 py-4 px-4 xl:px-0 xl:pl-8 rounded-3xl">
        <article className="flex flex-col sm:max-w-[48%] w-full max-w-xs bg-slate-400/10 px-4 py-8 rounded-3xl">
            <div className="flex items-center gap-2 text-blue-500">
                <Ship size={36}/>
                <h3 className="text-2xl text-slate-50">Marine Cargo</h3>
            </div>
            <p className="text-slate-400">Premium: $625,000</p>
            <p className="text-slate-400">Eff.Date: 6/30/2026</p>
        </article>
        <article className="flex flex-col sm:max-w-[48%]  w-full max-w-xs bg-slate-400/10 px-4 py-8 rounded-3xl">
            <div className="flex items-center gap-2 text-green-500">
                <ShieldCheck size={36}/>
                <h3 className="text-2xl text-slate-50">General Liability</h3>
            </div>
            <p className="text-slate-400">Premium: $175,000</p>
            <p className="text-slate-400">Eff.Date: 6/30/2026</p>
        </article>
        <article className="flex flex-col sm:max-w-[48%]  w-full max-w-xs bg-slate-400/10 px-4 py-8 rounded-3xl">
            <div className="flex items-center gap-2 text-indigo-500">
                <ShieldUser size={36}/>
                <h3 className="text-2xl text-slate-50">Workers Comp</h3>
            </div>
            <p className="text-slate-400">Premium: $75,000</p>
            <p className="text-slate-400">Eff.Date: ---</p>
        </article>
        <article className="flex flex-col sm:max-w-[48%]  w-full max-w-xs bg-slate-400/10 px-4 py-8 rounded-3xl">
            <div className="flex items-center gap-2 text-yellow-200">
                <Building2 size={36}/>
                <h3 className="text-2xl text-slate-50">Prorerty</h3>
            </div>
            <p className="text-slate-400">Premium: $64,829,83</p>
            <p className="text-slate-400">Eff.Date: ---</p>
        </article>
        <article className="flex flex-col sm:max-w-[48%]  w-full xl:min-w-1/6 max-w-xs bg-slate-400/10 px-4 py-8 rounded-3xl xl:rounded-r-none">
            <div className="flex items-center gap-2 text-red-600">
                <Umbrella size={36}/>
                <h3 className="text-2xl text-slate-50">Umbrella</h3>
            </div>
            <p className="text-slate-400">Premium: $275,000</p>
            <p className="text-slate-400">Eff.Date: 13/03/2026</p>
        </article>
      </div>
    </section>
  );
}
