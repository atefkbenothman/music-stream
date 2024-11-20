"use server"
import fs from "fs"
import path from "path"
import { NextResponse } from "next/server"


async function saveAudioFileLocally(file: File) {
  const filePath = path.join(process.cwd(), "audio-files", file.name)
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  const buffer = Buffer.from(await file.arrayBuffer())
  fs.writeFileSync(filePath, buffer)
}

export async function POST(req: Request) {
  const data = await req.formData()
  const file: File | null = data.get("file") as unknown as File
  if (!file) {
    return NextResponse.json( { message: "no file was uploaded" })
  }
  saveAudioFileLocally(file)
  return NextResponse.json({ message: "file uploaded successfully", name: file.name })
}