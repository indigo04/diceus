export default function Market_Intelligence() {
    return (
        <section className="flex flex-col gap-5 bg-slate-800 p-4 rounded-3xl">
            <h2 className="text-2xl">Market intelligence</h2>
            <div className="flex gap-2 pb-2 border-b-2 border-slate-400/20">
                <span className="w-4 h-4 bg-red-700 rounded-full" />
                <p>Rate hardening in Cyber market -+15% YoY</p>
            </div>
            <div className="flex gap-2 pb-2 border-b-2 border-slate-400/20">
                <span className="w-4 h-4 bg-yellow-300 rounded-full" />
                <p>New capacity entering Marine market</p>
            </div>
            <div className="flex gap-2 pb-2 border-b-2 border-slate-400/20">
                <span className="w-4 h-4 bg-blue-700 rounded-full" />
                <p>Environmental regulatory changes in CA</p>
            </div>
        </section>
    )
}