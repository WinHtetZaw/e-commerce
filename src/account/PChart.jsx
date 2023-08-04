import { RingProgress } from "@mantine/core";

const PChart = () => {
  return (
    <div className=" w-4/12">
      <h2>Order Status</h2>
      <p className=" text-sm opacity-80">Total Earnings of the Month</p>

      <div className=" flex items-center">
        <RingProgress
          className=" w-2/3"
          size={200}
          thickness={25}
          label={
            <div className="flex flex-col text-sm opacity-80 justify-center items-center">
              <p>Ratio</p>
              <p>100%</p>
            </div>
          }
          sections={[
            { value: 50, color: "rgb(20 184 166)" },
            { value: 33, color: "rgb(234 179 8)" },
            { value: 17, color: "rgb(239 68 68)" },
          ]}
        />

        <div className="w-1/3 flex gap-2 flex-col">
          <div className=" text-sm">
            <p className=" flex items-center gap-2">
              <span className="text-teal-500 text-[12px]">Success</span>
              <span className="">50%</span>
            </p>
          </div>

          <div className=" text-sm">
            <p className=" flex items-center gap-2">
              <span className="text-yellow-500 text-[12px]">Pending</span>
              <span className="">33%</span>
            </p>
          </div>

          <div className=" text-sm">
            <p className=" flex items-center gap-2">
              <span className="text-red-500 text-[12px]">Failed</span>
              <span className="">17%</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PChart;
