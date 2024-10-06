"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
interface Order {
  items: string[];
  totalAmount: number;
  status: string;
  arrivalDate?: string;
}

export function Profile() {
  const orders: Order[] = [
    {
      items: ["Coconut Oil", "Mustard oil", "Groundnut oil"],
      totalAmount: 500,
      status: "Delivered",
      arrivalDate: "29-09-2024",
    },
    {
      items: ["Coconut Oil", "Mustard oil"],
      totalAmount: 400,
      status: "Confirmed",
      arrivalDate: "12-10-2023",
    },
    {
      items: ["Coconut Oil"],
      totalAmount: 120,
      status: "Pending",
    },
  ];
  const profiledate = {
    name: "Dinesh Krishna P",
    email: "dineshkrishna0456@gmail.com",
    phone: "+916303372132",
  };

  return (
    <div className="w-full bg-mbackg font-out flex flex-col gap-10 ">
      <div>
        <h1 className="text-2xl font-out font-semibold my-3">Profile</h1>
        <div className="md-[750px]  flex flex-col md:flex-row gap-5  justify-between items-start bg-[#BA9977] py-8 px-4 rounded-2xl">
          <div className="flex flex-col gap-5">
            <div className="w-[300px] flex justify-start gap-2  items-center">
              <div className="w-[80px] flex justify-between font-[520]">
                <p>Name</p>
                <p>:</p>
              </div>
              <p>{profiledate.name}</p>
            </div>
            <div className="w-[300px] flex justify-start gap-2  items-center">
              <div className="w-[80px] flex justify-between font-[520]">
                <p>Email</p>
                <p>:</p>
              </div>
              <p className="pl-1">{profiledate.email}</p>
            </div>
            <div className="w-[300px] flex justify-start gap-2  items-center">
              <div className="w-[80px] flex justify-between font-[520]">
                <p>Phone</p>
                <p>:</p>
              </div>
              <p>{profiledate.phone}</p>
            </div>
          </div>

          <div className="w-[300px] flex justify-start gap-2  items-start">
            <div className="w-[80px] flex justify-between font-[520]">
              <p>Address</p>
              <p>:</p>
            </div>
            <p> John DoeJohn Do e</p>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="text-2xl font-out font-semibold my-3">Orders</h1>
        <Table className="font-out bg-[#BA9977]  md:w-[750px]">
          <TableHeader>
            <TableRow className="text-base">
              <TableHead>S.no</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead className="text-center w-[100px]">Status</TableHead>
              <TableHead>Arriving</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order, ind) => (
              <TableRow key={ind}>
                <TableCell className="font-medium text-center">
                  {ind + 1}
                </TableCell>
                <TableCell className=" text-center">
                  {order.items.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </TableCell>
                <TableCell className=" text-center">
                  {order.totalAmount}
                </TableCell>
                <TableCell className="">
                  <p className="rounded-md text-white bg-mgreen w-[80px] p-2">
                    {order.status}
                  </p>
                </TableCell>
                <TableCell className=" text-center">
                  {order.arrivalDate ? order.arrivalDate : "NA"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
        </Table>
      </div>
    </div>
  );
}
