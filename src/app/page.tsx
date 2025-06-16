import Quick_Actions from "@/components/Quick_Actions";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Portfolio_Goals from "@/components/Portfolio_Goals";
import Work_Queue from "@/components/Word_Queue";
import Market_Intelligence from "@/components/Market_Intelligence";
import Accounts from "@/components/Accounts";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container flex flex-col mx-auto p-5 gap-10">
        <Navigation />
        <div className="flex flex-col xl:flex-row gap-5">
          <Work_Queue />
          <div className="flex flex-col sm:flex-row xl:flex-row gap-5 w-full">
            <Portfolio_Goals />
            <div className="flex gap-5 flex-col lg:flex-row xl:flex-col">
              <Quick_Actions />
              <Market_Intelligence />
            </div>
          </div>
        </div>
        <Accounts />
      </main>
    </>
  );
}
