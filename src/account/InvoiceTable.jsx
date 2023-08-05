// * icons
import { AiOutlinePlus } from "react-icons/ai";
import { BsPerson, BsArrowDownUp } from "react-icons/bs";
import { Link } from "react-router-dom";
import AddNewBtn from "../components/AddNewBtn";

const InvoiceTable = () => {
  // * random id for invoice
  const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  const invoiceId = getRndInteger(Math.pow(10, 16), Math.pow(10, 17)).toString(
    36
  );

  return (
    <div>
      {/* top  */}
      <div className=" flex justify-between items-center px-5 mb-5">
        <h1 className="text-lg font-semibold">Invoices</h1>
        {/* <AddNewBtn /> */}
      </div>

      {/* invoice table  */}
      <div className=" h-[200px] overflow-y-scroll">
        <table className="text-sm w-full border-separate border-spacing-3">
          <thead>
            <tr>
              <th className="table-item-1 w-3/12">
                <div className=" flex items-center justify-between">
                  <h1>Number</h1>
                  <BsArrowDownUp className=" cursor-pointer text-[12px]" />
                </div>
              </th>
              <th className="table-item-1 w-3/12">
                <div className=" flex items-center justify-between">
                  <h1>Name</h1>
                  <BsArrowDownUp className=" cursor-pointer text-[12px]" />
                </div>
              </th>
              <th className="table-item-1 w-2/12">
                <div className=" flex items-center justify-between">
                  <h1>Date</h1>
                  <BsArrowDownUp className=" cursor-pointer text-[12px]" />
                </div>
              </th>
              <th className="table-item-1 w-2/12">
                <div className=" flex items-center justify-between">
                  <h1>Amount</h1>
                  <BsArrowDownUp className=" cursor-pointer text-[12px]" />
                </div>
              </th>
              <th className="table-item-1 w-2/12">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="w-3/12 px-2 py-1 font-semibold">#tr77598ja854</td>
              <td className="w-3/12 px-2 py-1">
                <div className=" flex items-center gap-2">
                  <BsPerson />
                  <h3>Genry Williams</h3>
                </div>
              </td>
              <td className="w-2/12 px-2 py-1 opacity-70">25 Jun 2022</td>
              <td className="w-2/12 px-2 py-1">$510</td>
              <td className="w-2/12 px-2 py-1">
                <div className="flex gap-2 items-center">
                  <span className="p-1 bg-red-500 rounded-full"></span>
                  <p className=" text-red-500">Pending</p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="w-3/12 px-2 py-1 font-semibold">#gfu8748gk35</td>
              <td className="w-3/12 px-2 py-1">
                <div className=" flex items-center gap-2">
                  <BsPerson />
                  <h3>Daniel Parker</h3>
                </div>
              </td>
              <td className="w-2/12 px-2 py-1 opacity-70">24 Jun 2022</td>
              <td className="w-2/12 px-2 py-1">$98</td>
              <td className="w-2/12 px-2 py-1">
                <div className="flex gap-2 items-center">
                  <span className="p-1 bg-red-500 rounded-full"></span>
                  <p className=" text-red-500">Pending</p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="w-3/12 px-2 py-1 font-semibold">#{invoiceId}</td>
              <td className="w-3/12 px-2 py-1">
                <div className=" flex items-center gap-2">
                  <BsPerson />
                  <h3>Helen Morris</h3>
                </div>
              </td>
              <td className="w-2/12 px-2 py-1 opacity-70">23 Jun 2022</td>
              <td className="w-2/12 px-2 py-1">$275</td>
              <td className="w-2/12 px-2 py-1">
                <div className="flex gap-2 items-center">
                  <span className="p-1 bg-teal-500 rounded-full"></span>
                  <p className=" text-teal-500">Completed</p>
                </div>
              </td>
            </tr>

            <tr>
              <td className="w-3/12 px-2 py-1 font-semibold">#{invoiceId}</td>
              <td className="w-3/12 px-2 py-1">
                <div className=" flex items-center gap-2">
                  <BsPerson />
                  <h3>Lorem, ipsum</h3>
                </div>
              </td>
              <td className="w-2/12 px-2 py-1 opacity-70">23 Jun 2022</td>
              <td className="w-2/12 px-2 py-1">$275</td>
              <td className="w-2/12 px-2 py-1">
                <div className="flex gap-2 items-center">
                  <span className="p-1 bg-teal-500 rounded-full"></span>
                  <p className=" text-teal-500">Completed</p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="w-3/12 px-2 py-1 font-semibold">#{invoiceId}</td>
              <td className="w-3/12 px-2 py-1">
                <div className=" flex items-center gap-2">
                  <BsPerson />
                  <h3>Lorem, ipsum</h3>
                </div>
              </td>
              <td className="w-2/12 px-2 py-1 opacity-70">23 Jun 2022</td>
              <td className="w-2/12 px-2 py-1">$275</td>
              <td className="w-2/12 px-2 py-1">
                <div className="flex gap-2 items-center">
                  <span className="p-1 bg-teal-500 rounded-full"></span>
                  <p className=" text-teal-500">Completed</p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="w-3/12 px-2 py-1 font-semibold">#{invoiceId}</td>
              <td className="w-3/12 px-2 py-1">
                <div className=" flex items-center gap-2">
                  <BsPerson />
                  <h3>Lorem, ipsum</h3>
                </div>
              </td>
              <td className="w-2/12 px-2 py-1 opacity-70">23 Jun 2022</td>
              <td className="w-2/12 px-2 py-1">$275</td>
              <td className="w-2/12 px-2 py-1">
                <div className="flex gap-2 items-center">
                  <span className="p-1 bg-teal-500 rounded-full"></span>
                  <p className=" text-teal-500">Completed</p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="w-3/12 px-2 py-1 font-semibold">#{invoiceId}</td>
              <td className="w-3/12 px-2 py-1">
                <div className=" flex items-center gap-2">
                  <BsPerson />
                  <h3>Lorem, ipsum</h3>
                </div>
              </td>
              <td className="w-2/12 px-2 py-1 opacity-70">23 Jun 2022</td>
              <td className="w-2/12 px-2 py-1">$275</td>
              <td className="w-2/12 px-2 py-1">
                <div className="flex gap-2 items-center">
                  <span className="p-1 bg-teal-500 rounded-full"></span>
                  <p className=" text-teal-500">Completed</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoiceTable;
