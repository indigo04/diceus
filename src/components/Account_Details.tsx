"use client";

import { CircleArrowDown, CircleArrowUp, Rocket } from "lucide-react";
import Link from "next/link";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

export default function Account_Details() {
  const data = [
    { month: "", value: null },
    { month: "Jan", value: 0 },
    { month: "", value: 200 },
    { month: "Feb", value: 150 },
    { month: "", value: 250 },
    { month: "Mar", value: 300 },
    { month: "", value: 200 },
    { month: "Apr", value: 300 },
    { month: "", value: 250 },
    { month: "Now", value: 500 },
    { month: "", value: null },
  ];
  return (
    <section className="flex w-full flex-col gap-5">
      <h2 className="text-3xl">Account Details</h2>
      <div className="flex flex-col xl:flex-row gap-5 bg-slate-800 p-4 lg:p-8 rounded-3xl">
        <div className="flex flex-col gap-5 border-b-2 xl:border-r-2 border-dashed pb-6 xl:border-b-0 xl:pr-6">
          <div className="flex flex-col text-2xl gap-5 bg-slate-400/10 p-4 rounded-lg">
            <div className="flex items-center gap-8 px-2">
              <Link href="#" className="hover:scale-105 duration-500">
                DECISION SUPPORT
              </Link>
              <span className="px-2 py-1  border-slate-50 border-2 rounded-lg bg-slate-800">
                4
              </span>
            </div>
            <div className="flex flex-col px-8 gap-4">
              <Link
                href="#"
                className="text-blue-500 hover:scale-105 duration-500"
              >
                Winnability
              </Link>
              <Link href="#" className="hover:scale-105 duration-500">
                Exposure Review & Suggested Coverage
              </Link>
              <Link href="#" className="hover:scale-105 duration-500">
                Portfolio Strategy Alignment
              </Link>
              <Link href="#" className="hover:scale-105 duration-500">
                Broker Analytics
              </Link>
            </div>
          </div>
          <div className="flex gap-8 items-center text-2xl">
            <Link href="#" className="hover:scale-105 duration-500">
              RISK ASSESSMENT
            </Link>
            <span className="px-2 py-1 bg-slate-400/10 border-2 rounded-lg">
              6
            </span>
          </div>
          <div className="flex text-2xl items-center gap-4">
            <Link href="#" className="hover:scale-105 duration-500 xl:whitespace-nowrap">
              DOCUMENTS AND COMPLIANCE
            </Link>
            <span className="px-2 py-1 border-2 rounded-lg bg-slate-400/10">
              2
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col gap-5">
          <h2 className="text-5xl">Winnability</h2>
          <div className="flex flex-wrap lg:flex-nowrap w-full gap-5">
            <article className="flex flex-col gap-5 px-4 py-8 bg-slate-400/10 rounded-3xl">
              <h2 className="text-3xl">Overall Score</h2>
              <div className="flex flex-wrap gap-2">
                <p className="text-5xl">82%</p>
                <div className="flex gap-2 items-center border-2 border-blue-500 rounded-full p-2">
                  <div className="flex gap-1">
                    <span className="w-4 h-4 rounded-full bg-blue-500" />
                    <span className="w-4 h-4 rounded-full bg-blue-500" />
                    <span className="w-4 h-4 rounded-full bg-blue-500" />
                    <span className="w-4 h-4 rounded-full bg-blue-500" />
                  </div>
                  <p className="text-blue-500 whitespace-nowrap">Very Strong</p>
                </div>
              </div>
            </article>
            <article className="bg-slate-400/10 rounded-2xl p-4 w-full max-w-xs text-white">
              <p className="text-2xl mb-2">Historical trend</p>
              <ResponsiveContainer width="90%" height={120}>
                <LineChart data={data}>
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    stroke="#888"
                    interval={0}
                    minTickGap={0}
                  />
                  <Tooltip cursor={false} contentStyle={{ display: "none" }} />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#3b82f6"
                    strokeWidth={2.5}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </article>
            <article className="flex bg-slate-400/10 w-full px-6 rounded-3xl">
              <div className="flex flex-col gap-2 py-5 w-full">
                <h3 className="text-2xl">Position</h3>
                <div className="flex w-full gap-2 items-center relative">
                  <div className="absolute h-6 w-[35%] rounded-r-full bg-gradient-to-r from-slate-800 to-blue-500"></div>
                  <div className="w-full h-6 bg-slate-400/15 rounded-r-full"></div>
                  <p className="w-full flex text-slate-50">Your score: 82%</p>
                </div>
                <div className="flex w-full gap-2 items-center relative">
                  <div className="absolute h-6 w-[30%] rounded-r-full bg-gradient-to-r from-slate-800 to-blue-500"></div>
                  <div className="w-full h-6 bg-slate-400/15 rounded-r-full"></div>
                  <p className="w-full flex text-slate-400">Market Avg: 68%</p>
                </div>
                <div className="flex w-full gap-2 items-start relative">
                  <div className="absolute h-6 w-[40%] rounded-r-full bg-gradient-to-r from-slate-800 to-blue-500"></div>
                  <div className="w-full h-6 bg-slate-400/15 rounded-r-full"></div>
                  <p className="w-full flex text-slate-400">
                    Tap Competitor: 88%
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap w-full gap-5">
            <article className="flex flex-col w-full gap-5 p-4 rounded-3xl bg-slate-400/10">
              <div className="flex gap-2 items-center">
                <CircleArrowUp size={36} className="text-green-400" />
                <h3 className="text-2xl">Increasing Winnability</h3>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex gap-2 items-center">
                  <span className="px-4 py-2 rounded-full border-2 border-green-400 text-green-400">
                    1
                  </span>
                  <div className="flex w-full gap-2">
                    <div className="flex-col w-full gap-2">
                      <p className="whitespace-nowrap">Brokers relationship</p>
                      <div className="flex w-full gap-2">
                        <span className="bg-gradient-to-r flex from-slate-400/10 to-green-400 w-[60%] rounded-r-full h-6" />
                        <p className="text-slate-400 flex items-end">+28%</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="px-4 py-2 rounded-full border-2 border-green-400 text-green-400">
                    2
                  </span>
                  <div className="flex w-full gap-2">
                    <div className="flex-col w-full gap-2">
                      <p className="whitespace-nowrap">Loss history</p>
                      <div className="flex w-full gap-2">
                        <span className="bg-gradient-to-r flex from-slate-400/10 to-green-400 w-[55%] rounded-r-full h-6" />
                        <p className="text-slate-400 flex items-end">+22%</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="px-4 py-2 rounded-full border-2 border-green-400 text-green-400">
                    3
                  </span>
                  <div className="flex w-full gap-2">
                    <div className="flex-col w-full gap-2">
                      <p className="whitespace-nowrap">Industry growth</p>
                      <div className="flex w-full gap-2">
                        <span className="bg-gradient-to-r flex from-slate-400/10 to-green-400 w-[50%] rounded-r-full h-6" />
                        <p className="text-slate-400 flex items-end">+16%</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="px-4 py-2 rounded-full border-2 border-green-400 text-green-400">
                    4
                  </span>
                  <div className="flex w-full gap-2">
                    <div className="flex-col w-full gap-2">
                      <p className="whitespace-nowrap">Multiline opportunity</p>
                      <div className="flex w-full gap-2">
                        <span className="bg-gradient-to-r flex from-slate-400/10 to-green-400 w-[45%] rounded-r-full h-6" />
                        <p className="text-slate-400 flex items-end">+11%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="flex flex-col w-full gap-5 p-4 rounded-3xl bg-slate-400/10">
              <div className="flex gap-2 items-center">
                <CircleArrowDown size={36} className="text-yellow-200" />
                <h3 className="text-2xl">Decreasing Winnability</h3>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex gap-2 items-center">
                  <span className="px-4 py-2 rounded-full border-2 border-yellow-200 text-yellow-200">
                    1
                  </span>
                  <div className="flex w-full gap-2">
                    <div className="flex-col w-full gap-2">
                      <p className="whitespace-nowrap">Premium pricing</p>
                      <div className="flex w-full gap-2">
                        <span className="bg-gradient-to-r flex from-slate-400/10 to-yellow-200 w-[60%] rounded-r-full h-6" />
                        <p className="text-slate-400 flex items-end">+28%</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="px-4 py-2 rounded-full border-2 border-yellow-200 text-yellow-200">
                    2
                  </span>
                  <div className="flex w-full gap-2">
                    <div className="flex-col w-full gap-2">
                      <p className="whitespace-nowrap">Total exposure</p>
                      <div className="flex w-full gap-2">
                        <span className="bg-gradient-to-r flex from-slate-400/10 to-yellow-200 w-[55%] rounded-r-full h-6" />
                        <p className="text-slate-400 flex items-end">+22%</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="px-4 py-2 rounded-full border-2 border-yellow-200 text-yellow-200">
                    3
                  </span>
                  <div className="flex w-full gap-2">
                    <div className="flex-col w-full gap-2">
                      <p className="whitespace-nowrap">Loss ratio trend</p>
                      <div className="flex w-full gap-2">
                        <span className="bg-gradient-to-r flex from-slate-400/10 to-yellow-200 w-[50%] rounded-r-full h-6" />
                        <p className="text-slate-400 flex items-end">+16%</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="px-4 py-2 rounded-full border-2 border-yellow-200 text-yellow-200">
                    4
                  </span>
                  <div className="flex w-full gap-2">
                    <div className="flex flex-col w-full gap-2">
                      <p className="whitespace-nowrap">Market competition</p>
                      <div className="flex w-full gap-2">
                        <span className="bg-gradient-to-r flex from-slate-400/10 to-yellow-200 w-[45%] rounded-r-full h-6" />
                        <p className="text-slate-400 flex items-end">+11%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <article className="flex flex-col rounded-3xl p-4 gap-5 bg-slate-400/10">
            <div className="flex gap-2 text-green-400 items-center">
              <Rocket size={36} className="shrink-0" />
              <h2 className="text-2xl">AI-Powered Recommendations</h2>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap justify-between gap-10 items-center">
              <div className="flex flex-col gap-2">
                <h3>
                  Offer 5% premium discount in exchange for 3-year commitment
                </h3>
                <p className="text-slate-400">
                  Historical win rate increases 24% with multi-year commitments.
                  Current pricing is 12% above market average. This approach
                  would strenghthen retention while maintaining adequate
                  profitability.
                </p>
              </div>

              <button className="py-4 px-12 bg-green-400 text-slate-950 rounded-full hover:scale-105 duration-500 cursor-pointer">
                Apply
              </button>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap justify-between gap-10 items-center">
              <div className="flex flex-col gap-2">
                <h3>
                  Propose risk control services for cargo handling procedures
                </h3>
                <p className="text-slate-400">
                  Can potentially reduce loss ratio by 15-20% based on similar
                  maritime accounts in your portfolio. Specific focus on
                  loading/unloading operations would address the most frequent
                  claim scenarios.
                </p>
              </div>

              <button className="py-4 px-12 bg-green-400 text-slate-950 rounded-full hover:scale-105 duration-500 cursor-pointer">
                Apply
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
