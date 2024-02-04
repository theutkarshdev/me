import connect from "@/dbConfig/conn";
import Contact from "@/models/contactModel";
import { NextResponse } from "next/server";

connect();

export async function POST(req) {
  try {
    const reqBody = await req.json();
    const { firstname, lastname, email, phone, message } = reqBody;
    const newContact = new Contact({
      firstname,
      lastname,
      email,
      phone,
      message,
    });

    await newContact.save();

    return NextResponse.json({ msg: "contact added successfully..." }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(req) {
    try {
      
  
      return NextResponse.json({ msg: "contact get successfully..." }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
