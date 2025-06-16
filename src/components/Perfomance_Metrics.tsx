import Link from "next/link";

export default function Perfomance_Metrics() {
  return (
    <section className="flex flex-col gap-5">
      <h2 className="text-3xl">Perfomance Metrics</h2>
      <div className="flex flex-col sm:flex-row sm:flex-wrap xl:flex-nowrap gap-5">
        <article className="flex bg-slate-800 xl:max-w-2/9 sm:max-w-[48%] py-4 px-8 rounded-3xl">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col py-5 gap-5">
              <div className="flex gap-4 items-center">
                <h3 className="text-2xl">Winnability</h3>
                <div className="flex gap-1">
                  <span className="w-3 h-3 bg-blue-800 rounded-full" />
                  <span className="w-3 h-3 bg-blue-800 rounded-full" />
                  <span className="w-3 h-3 bg-blue-800 rounded-full" />
                  <span className="w-3 h-3 bg-blue-800 rounded-full" />
                </div>
              </div>
              <p className="text-5xl">Very Strong</p>
            </div>
            <Link href="#" className="text-blue-500">
              See all factors &rarr;
            </Link>
          </div>
        </article>
        <article className="flex bg-slate-800 xl:max-w-2/9 sm:max-w-[48%] py-4 px-8 rounded-3xl">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col py-5 gap-5">
              <h3 className="text-2xl">Loss Ratio</h3>
              <div className="flex gap-2">
                <p className="text-5xl">25%</p>
                <p className="text-slate-400 text-2xl flex items-end">
                  vs 42% target
                </p>
              </div>
            </div>
            <Link href="#" className="text-blue-500">
              View history &rarr;
            </Link>
          </div>
        </article>
        <article className="flex bg-slate-800 xl:max-w-2/9 sm:max-w-[48%] py-4 px-8 rounded-3xl">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col py-5 gap-5">
              <h3 className="text-2xl">Premium Growth</h3>
              <div className="flex flex-wrap gap-2">
                <p className="text-5xl">12.4%</p>
                <p className="text-slate-400 text-2xl flex items-end">
                  YoY increase $123M vs $150M Target
                </p>
              </div>
            </div>
            <Link href="#" className="text-blue-500">
              View trend &rarr;
            </Link>
          </div>
        </article>
        <article className="flex xl:w-1/3 h-fit bg-slate-800 sm:max-w-[48%] py-4 px-8 rounded-3xl">
          <div className="flex flex-col py-5 gap-5 w-full">
            <h3 className="text-2xl">Exposure Distribution</h3>
            <div className="flex w-full gap-2 items-center relative">
              <div className="absolute h-6 w-[35%] rounded-r-full bg-gradient-to-r from-slate-800 to-blue-500"></div>
              <div className="w-full h-6 bg-slate-400/15 rounded-r-full"></div>
              <p className="w-full flex text-slate-50">Marine Cargo: 71.4%</p>
            </div>
            <div className="flex w-full gap-2 items-center relative">
              <div className="absolute h-6 w-[30%] rounded-r-full bg-gradient-to-r from-slate-800 to-blue-500"></div>
              <div className="w-full h-6 bg-slate-400/15 rounded-r-full"></div>
              <p className="w-full flex text-slate-50">
                General Liability: 20%
              </p>
            </div>
            <div className="flex w-full gap-2 items-center relative">
              <div className="absolute h-6 w-[25%] rounded-r-full bg-gradient-to-r from-slate-800 to-blue-500"></div>
              <div className="w-full h-6 bg-slate-400/15 rounded-r-full"></div>
              <p className="w-full flex text-slate-50">Workers Comp: 8.6%</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
