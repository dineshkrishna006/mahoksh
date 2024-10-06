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
  return (
    
      <Table className="font-out bg-[#BA9977] md:w-[750px]">
        <TableHeader>
          <TableRow>
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
              <TableCell className="font-medium text-center">{ind+1}</TableCell>
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

  );
}
