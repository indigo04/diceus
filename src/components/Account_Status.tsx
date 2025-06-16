import { CircleCheck } from "lucide-react";

export default function Account_Status() {
  return (
    <section className="flex w-full flex-col gap-5">
      <h2 className="text-3xl">Account Status</h2>
      <div className="flex flex-wrap xl:flex-nowrap gap-10 bg-slate-800 p-8 rounded-3xl">
        <div className="flex flex-col relative items-center text-green-400 gap-2">
          <CircleCheck size={36} />
          <p className="text-2xl text-slate-50">Submitted</p>
          <span className="border-dashed border-2 w-[85%] absolute top-1/4 left-[68%]" />
        </div>
        <div className="flex flex-col relative items-center text-green-400 gap-2">
          <CircleCheck size={36} />
          <p className="text-2xl text-slate-50">Review</p>
          <span className="border-dashed border-2 w-[90%] absolute top-1/4 left-[75%]" />
        </div>
        <div className="flex flex-col relative items-center text-green-400 gap-2">
          <CircleCheck size={36} />
          <p className="text-2xl text-slate-50">Quote</p>
          <span className="border-dashed border-2 w-[85%] absolute top-1/4 left-[80%]" />
        </div>
        <div className="flex flex-col relative items-center text-green-400 gap-2">
          <CircleCheck size={36} />
          <p className="text-2xl text-slate-50">Bind</p>
          <span className="border-dashed border-2 w-[110%] absolute top-1/4 left-[90%]" />
        </div>
        <div className="flex flex-col relative items-center text-green-400 gap-2">
          <CircleCheck size={36} />
          <p className="text-2xl text-slate-50">Issue</p>
          <span className="border-dashed border-2 w-[108%] absolute text-slate-400 top-1/4 left-[88%]" />
        </div>
        <div className="flex flex-col items-center relative text-slate-400 gap-2">
          <CircleCheck size={36} />
          <p className="text-2xl text-slate-50">Renew</p>
        </div>
      </div>
    </section>
  );
}
