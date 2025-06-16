import Account_Details from "@/components/Account_Details";
import Account_Header from "@/components/Account_Header";
import Account_Status from "@/components/Account_Status";
import Communication from "@/components/Communication";
import Compliance_Documemtation from "@/components/Compliance_Documentation";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Perfomance_Metrics from "@/components/Perfomance_Metrics";
import Policies from "@/components/Policies";
import Policies_Table from "@/components/Policies_Table";

export default async function AccountsPage() {
  return (
    <>
      <Header />
      <main className="container flex flex-col mx-auto p-5 gap-10">
        <Navigation />
        <Account_Header />
        <Perfomance_Metrics />
        <Policies />
        <div className="flex flex-col xl:flex-row gap-5">
          <Account_Status />
          <Compliance_Documemtation />
        </div>
        <Account_Details />
        <Communication />
        <Policies_Table />
      </main>
    </>
  );
}
