import Image from "next/image";
import Link from "next/link";

export default function Account_Header() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col xl:flex-row gap-5 justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap gap-2">
            <p>Dashboard // Accounts //</p> <p className="text-blue-500">Maritime Logistics Corp</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 items-center">
            <Image src='/logo_transparent.png' width={120} height={120} alt="logo" className="bg-slate-50 rounded-full"/>
            <div className="flex flex-col gap-2">
                <h2 className="text-3xl">Maritime Logistics Corp</h2>

                <div className="flex flex-wrap lg:flex-nowrap gap-5">
                    <div className="flex flex-col">
                        <p>425 Harbor Boulevard Suite 300</p>
                        <p>Seattle, WA 98104</p>
                    </div>
                    <div className="flex flex-col px-2 border-l-2 border-slate-800">
                        <p className="text-slate-400">EXISTING ACCOUNT</p>
                        <p>54383</p>
                    </div>
                    <div className="flex flex-col px-2 border-l-2 border-slate-800">
                        <p className="text-slate-400">BROKER</p>
                        <p>Marsh Mclennan</p>
                    </div>
                    <div className="flex flex-col px-2 border-l-2 border-slate-800">
                        <p className="text-slate-400">UNDERWRITER</p>
                        <p>Kate Jonhson</p>
                    </div>
                </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-8 gap-5 border-yellow-300 border-2 rounded-3xl">
            <div className="flex gap-2">
                <span className="w-8 h-8 flex justify-center items-center border-2 border-yellow-300 rounded-full text-yellow-300">!</span>
                <h2 className="text-3xl text-yellow-300">Needs Attention</h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex flex-col">
                    <h3 className="text-xl">Marine Survey Required</h3>
                    <p className="text-slate-400">Sheduled for 06/12/2025</p>
                    <Link href="#" className="text-blue-500 hover:scale-105 duration-500">Review details link &rarr;</Link>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-xl">Loss Control Complete</h3>
                    <p className="text-slate-400">Last inspection 02/15/2025</p>
                    <Link href="#" className="text-blue-500 hover:scale-105 duration-500">View report &rarr;</Link>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-xl">Claims Review Required</h3>
                    <p className="text-slate-400">3 open claims // $245,000 TTL</p>
                    <Link href="#" className="text-blue-500 hover:scale-105 duration-500">View claims &rarr;</Link>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
