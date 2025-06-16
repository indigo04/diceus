export default function Portfolio_Goals() {
  return (
    <section className="bg-slate-800 p-4 rounded-3xl flex flex-col gap-2 max-w-xs sm:w-xs  relative">
      <h2 className="text-2xl">Portfolio goals</h2>
      <div className="flex flex-col gap-2 text-slate-400 text-xs">
        <h3>PORTFOLIO LOSS RATIO TARGET</h3>
        <div className="flex flex-wrap w-full">
          <p className="text-slate-400 flex w-full pb-3 ml-[43%]">TG:55%</p>
          <div className="bg-green-400 h-8 w-[40%] rounded-l-full relative">
            <p className="absolute text-slate-50 left-3/4 top-1/4 font-bold">
              48.2%
            </p>
            <span className="absolute left-3/4 top-3/5  border-t-transparent border-l-transparent border-r-transparent border-b-green-400 border-[12px]" />
          </div>
          <div className="bg-yellow-200 w-[20%] relative">
            <span className="absolute left-1/4 -top-2/5  border-b-transparent border-l-transparent border-r-transparent border-t-blue-500 border-[12px]" />
          </div>
          <div className="bg-red-600 w-[40%] rounded-r-full"></div>
          <p className="text-green-400 flex w-full pt-3 ml-[20%]">
            {"-6.8% (GOOD)"}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-slate-400 text-xs">
        <h3>RENEWAL RETENTION</h3>
        <div className="flex flex-wrap w-full">
          <p className="text-slate-400 flex w-full pb-1 ml-[47%]">TG:85-90%</p>
          <div className="bg-red-600 h-8 w-[15%] rounded-l-full"></div>
          <div className="bg-yellow-200 w-[35%] relative"></div>
          <div className="bg-green-400 w-[15%] relative">
            <span className="absolute left-1/5 top-3/5  border-t-transparent border-l-transparent border-r-transparent border-b-green-400 border-[12px]" />
            <p className="absolute text-slate-50 left-1/4 top-1/4 font-bold">
              88%
            </p>
          </div>
          <div className="bg-yellow-200 w-[35%] rounded-r-full"></div>
          <p className="text-green-400 flex w-full py-3 ml-[45%]">ON TARGET</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-slate-400 text-xs">NEW BUSINESS TARGET</h3>
        <div className="flex w-full gap-2 items-center relative">
          <div className="absolute h-8 w-[40%] rounded-r-full bg-gradient-to-r from-slate-800 to-blue-500">
            <p className="absolute left-3/5 top-1/5 text-slate-50 font-bold text-[14px]">
              $8.1M
            </p>
          </div>
          <div className="w-full h-8 bg-slate-400/15 rounded-r-full"></div>
          <p className="text-center text-slate-50 font-bold text-xl">$12M</p>
          <p className="absolute left-3/10 -bottom-1/2 pt-1 text-slate-400/50 text-xs">
            67%
          </p>
        </div>
      </div>
      <div className="flex flex-col py-5 gap-2">
        <h3 className="text-slate-400 text-xs">ANNUAL GWP TARGET</h3>
        <div className="flex w-full gap-2 items-center relative">
          <div className="absolute h-8 w-[40%] rounded-r-full bg-gradient-to-r from-slate-800 to-blue-500">
            <p className="absolute left-1/2 top-1/5 text-slate-50 font-bold text-[14px]">
              $28.4M
            </p>
          </div>
          <div className="w-full h-8 bg-slate-400/15 rounded-r-full"></div>
          <p className="text-center text-slate-50 font-bold text-xl">$42M</p>
          <p className="absolute left-3/10 -bottom-1/2 pt-1 text-slate-400/50 text-xs">
            68%
          </p>
        </div>
      </div>
    </section>
  );
}
