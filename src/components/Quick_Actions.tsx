export default function Quick_Actions() {
    const ButtonStyles = 'bg-blue-500 rounded-full cursor-pointer py-2 cursor-pointer duration-500 hover:scale-105';
    return (
        <section className="flex flex-col gap-5 bg-slate-800 lg:w-xs p-4 rounded-3xl">
            <h2 className="text-2xl">Quick actions</h2>
            <div className="flex flex-col gap-2">
                <button className={ButtonStyles}>New Submission</button>
                <button className={ButtonStyles}>Quote Builder</button>
                <button className={ButtonStyles}>Risks Models</button>
                <button className={ButtonStyles}>Documents Upload</button>
            </div>
        </section>
    )
}