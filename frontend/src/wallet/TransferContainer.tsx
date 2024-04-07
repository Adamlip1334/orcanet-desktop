import { useState } from "react";
import { MapPin, Wallet, Send, Copy } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import QRCode from "react-qr-code";

function TransferInfo() {
  const infoList: { title: string; icon: JSX.Element; description: string }[] =
    [
      {
        title: "Location:",
        icon: <MapPin size={15} />,
        description: "Chong Qing, China",
      },
      {
        title: "Wallet ID:",
        icon: <Wallet size={15} />,
        description: "4d2ca285e64945c7fe88772bb5fda24bhsa",
      },
    ];

  return (
    <div className="h-fit bg-card rounded-2xl px-9 py-5">
      <h1 className="font-bold text-lg">Information</h1>
      {infoList.map((info) => (
        <div key={info.title} className="2xl:flex 2xl:gap-2 mt-3">
          <div className="flex gap-2 items-center">
            {info.icon}
            <h5 className="font-semibold whitespace-nowrap">{info.title}</h5>
          </div>
          <p className="break-words w-9/12 overflow-auto">{info.description}</p>
        </div>
      ))}
    </div>
  );
}

function ReceiverInput() {
  return (
    <div>
      <h4 className="font-semibold">Pay to</h4>
      <Input type="text" className="rounded-2xl mt-2 px-5 text-center" />
      <p className="w-full text-center text-sm text-gray-500">
        Please enter the Wallet ID of the Receiver
      </p>
    </div>
  );
}

function AmountInput({
  setAmount,
  setReason,
}: {
  setAmount: React.Dispatch<React.SetStateAction<number>>;
  setReason: React.Dispatch<React.SetStateAction<string>>;
}) {
  const columns: string[] = ["Amount", "Reason"];

  function changeAmount(e: React.ChangeEvent<HTMLInputElement>) {
    const max = 99999999,
      min = 0,
      inputAmount = Number(e.target.value);

    if (inputAmount > max) {
      setAmount(max);
    } else if (inputAmount < min) {
      setAmount(min);
    } else {
      setAmount(inputAmount);
    }
  }

  return (
    <div className="grid grid-cols-2 gap-5">
      {columns.map((column) => (
        <div key={column}>
          <h4 className="font-semibold">{column}</h4>
          <Input
            id={column.toLowerCase()}
            type={column === "Amount" ? "number" : "text"}
            className="rounded-2xl mt-2 px-5"
            onChange={
              column === "Amount"
                ? (e) => changeAmount(e)
                : (e) => setReason(e.target.value)
            }
            max="99999999"
            min="0"
          />
        </div>
      ))}
    </div>
  );
}

function SendContainer({ amount }: { amount: number }) {
  const summaries = [
    { title: "Commission", amount: 0 },
    { title: "Total", amount: amount },
  ];
  return (
    <div className="grid grid-rows-2 font-semibold overflow-auto">
      <div className="2xl:grid 2xl:grid-cols-2">
        {summaries.map((summary) => (
          <div key={summary.title} className="flex justify-center">
            <h4 className="mr-2">{summary.title}:</h4>
            <p>{summary.amount.toFixed(8)}</p>
          </div>
        ))}
      </div>
      <Button className="rounded-2xl py-7 flex gap-3 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-lg">
        <Send size={20} />
        Send
      </Button>
    </div>
  );
}

function TransferPanelInput() {
  const [amount, setAmount]: [
    number,
    React.Dispatch<React.SetStateAction<number>>
  ] = useState(0);

  const [reason, setReason]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState("");

  return (
    <div className="grid grid-rows-3 gap-5 mt-10">
      <ReceiverInput />
      <AmountInput setAmount={setAmount} setReason={setReason} />
      <SendContainer amount={amount} />
    </div>
  );
}

function QRCodeContainer() {
  return (
    <div className="py-14 rounded-3xl mt-10 grid place-items-center bg-gradient-to-r from-fuchsia-500 to-cyan-500 overflow-auto">
      <QRCode value="https://www.google.com" />
      <div className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 mt-4 break-all text-center px-8">
        <p className="mt-4">
          12D3KooWM1J3AZKnEvVtEVjwFka2Z2Z9EZo5XVzUoyrAofWRUUWK
        </p>
      </div>

      <Button className="rounded-2xl mt-6 py-7 w-64 flex gap-3 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-lg items-center">
        <Copy size={20} />
        Copy
      </Button>
    </div>
  );
}

function TransferPanel() {
  const [option, setOption] = useState("Send");

  const options: string[] = ["Send", "QR Code"];

  return (
    <div className="h-full bg-card rounded-2xl px-9 py-7">
      <h1 className="text-3xl font-bold text-center">Transfer</h1>
      <div className="grid grid-cols-2 mt-7 text-center font-semibold">
        {options.map((opt) => (
          <div
            key={opt}
            className={`cursor-pointer transition-all duration-700 pb-5 border-b-2 ${
              option === opt ? "border-b-purple-700" : ""
            }`}
            onClick={() => setOption(opt)}
          >
            {opt}
          </div>
        ))}
      </div>
      {option === "Send" ? <TransferPanelInput /> : <QRCodeContainer />}
    </div>
  );
}

export default function TransferContainer() {
  return (
    <div className="h-full flex flex-col gap-7 col-span-2 font-sans">
      <TransferInfo />
      <TransferPanel />
    </div>
  );
}
