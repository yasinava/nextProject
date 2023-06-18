import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
export async function GET(request, { params }) {
  console.log(" is ok");
  const category = params.category;
  const filePath = path.join(process.cwd(), "src", "data", "category.json");
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  const details = data.find((item) => item.name === category);
  return NextResponse.json(details);
}
