import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(){ return NextResponse.json(await prisma.templateDefinition.findMany({orderBy:{sortOrder:'asc'}})); }
export async function POST(req:Request){ const body=await req.json(); return NextResponse.json(await prisma.templateDefinition.create({data:body})); }
