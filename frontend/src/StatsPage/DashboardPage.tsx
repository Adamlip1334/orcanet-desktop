// import { motion } from "framer-motion";
// import { routeVariants } from "../../helper/RouterAnimation.ts";

import Metric from "./Metric";
// import UserInfo from "./UserInfoPanel.tsx";
import FileStats from "./FileStats";

export default function DashboardPage() {
  return (
    <div className="overflow-auto h-full w-full no-scrollbar bg-card">
      <div className="grid grid-cols-1 overflow-y-auto scrollbar-none h-full md:grid-cols-7 ">
        <div className="md:col-span-5">
          <Metric />
        </div>
        <div className="md:col-span-2 ">
          {/* <UserInfo /> */}
          <FileStats />
        </div>
      </div>
    </div>
  );
}
