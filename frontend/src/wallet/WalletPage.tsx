import TransferContainer from "./TransferContainer";
import WalletInfoContainer from "./WalletInfoContainer";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="flex justify-end">
      <div className="relative w-1/5 mb-5">
        <Input type="text" className="rounded-2xl" placeholder="Hash" />
        <Search className="absolute right-2 top-2" />
      </div>
    </div>
  );
}

function WalletContainer() {
  return (
    <div className="h-full grid grid-cols-5 gap-7">
      <TransferContainer />
      <WalletInfoContainer />
    </div>
  );
}

const WalletPage = () => {
  return (
    <div
      id="wallet-page"
      className="flex flex-col overflow-auto min-h-full grow py-11 px-14 scrollbar-none"
    >
      <SearchBar />
      <WalletContainer />
    </div>
  );
};

export default WalletPage;
