import {Ticket} from "@/app/(models)/Ticket";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest, { params : {id} }:{params:{id:string}}) {
 

  const foundTicket = await Ticket.findOne({ _id: id });
  return NextResponse.json({ foundTicket }, { status: 200 });
}

export async function PUT(req:NextRequest, { params : {id} }:{params:{id:string}}) {
  try {
   

    const body = await req.json();
    const ticketData = body.formData;

    const updateTicketData = await Ticket.findByIdAndUpdate(id, {
      ...ticketData,
    });

    return NextResponse.json({ message: "Ticket updated" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(req:NextRequest, { params : {id} }:{params:{id:string}}) {
  try {
    

    await Ticket.findByIdAndDelete(id);
    return NextResponse.json({ message: "Ticket Deleted" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
