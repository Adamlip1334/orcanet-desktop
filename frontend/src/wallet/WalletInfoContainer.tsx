import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { CoinsIcon } from "lucide-react";
import { DataTable } from "./DataTable";
import { WalletData, IPayment } from "./WalletData";
import { useEffect, useState } from "react";
import { columns } from "./columns";

function IncomeGraph() {
  const series: number[] = [44, 55, 13, 43, 22];

  const options: ApexOptions = {
    chart: {
      type: "donut",
      height: 100,
    },
    legend: {
      labels: {
        colors: "white",
      },
    },
    labels: ["Files", "Entertainment", "Luxury", "Tech", "Others"],
    // plotOptions: {
    //   pie: {
    //     donut: {
    //       labels: {
    //         show: false,
    //       },
    //     },
    //   },
    // },
    dataLabels: {
      // enabled: false,
    },
  };

  return (
    <div className="max-[1000px]:collapse pt-8 animate__animated animate__fadeInUp">
      <ReactApexChart options={options} series={series} type="donut" />
    </div>
  );
}

async function getData(): Promise<IPayment[]> {
  // Fetch data from your API here.
  return WalletData;
}

export default function WalletInfoContainer() {
  const [data, setData] = useState<IPayment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };

    fetchData();
  }, []);
  return (
    <div
      className="col-span-3 grid grid-cols-2 gap-7"
      style={{ gridTemplateRows: "max-content repeat(2, 1fr)" }}
    >
      <div className=" grid grid-rows-2">
        <div className="bg-card rounded-2xl px-8 pt-4 mb-4">
          <h4 className="text-base font-medium">Balance:</h4>
          <div className="flex gap-3 py-4 break-all">
            <CoinsIcon size={40} />
            <div className="text-4xl font-bold">1024.576</div>
          </div>
        </div>
        <div className="grid grid-rows-2 bg-card rounded-2xl px-8 pt-4 mt-2">
          <h4 className="text-base font-medium">Profit & Loss Today:</h4>
          <div className="flex justify-center break-all">
            <div className="text-4xl font-bold text-green-400">+1024.576</div>
          </div>
        </div>
      </div>
      <IncomeGraph />
      <div className="bg-card rounded-2xl col-span-2 row-span-2">
        <div className="animate__animated animate__fadeInUp">
          {/* <h3 className="mb-3 animate__animated animate__fadeInUp">
            Transactions
          </h3> */}
          {data.length > 0 ? (
            <DataTable columns={columns} data={data} />
          ) : (
            <div>Loading Transactions...</div>
          )}
        </div>
      </div>
    </div>
  );
}
