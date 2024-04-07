export default function FileStats() {
  return (
    <div className="grid grid-rows-3 gap-7 h-full py-16 px-8">
      <div className=" bg-indigo-950 rounded-2xl p-8 row-span-1 grid grid-rows-3">
        <h4 className="text-base font-medium">File Upload In Total:</h4>
        <div className="flex justify-center gap-3 pt-4 break-all row-span-2">
          <div className="text-5xl font-bold">5</div>
        </div>
      </div>
      <div className="bg-indigo-950 rounded-2xl p-8 row-span-1 grid grid-rows-3">
        <h4 className="text-base font-medium">File Download In Total:</h4>
        <div className="flex justify-center gap-3 pt-4 break-all row-span-2">
          <div className="text-5xl font-bold">10</div>
        </div>
      </div>
      <div className="bg-indigo-950 rounded-2xl p-8 row-span-1 grid grid-rows-3">
        <h4 className=" text-base font-medium">Profit & Loss In Total:</h4>
        <div className="flex justify-center gap-3 pt-4 break-all row-span-2">
          <div className="text-4xl font-bold text-green-400">+ 1024.576</div>
        </div>
      </div>
    </div>
  );
}
