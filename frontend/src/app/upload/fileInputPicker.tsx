"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"

type FileMetaDataProps = {
  file: File | null
}

function FileMetaData({ file }: FileMetaDataProps) {
  if (!file) {
    return
  }
  return (
    <div className="grid grid-cols-2 text-xs gap-0 w-fit p-2 bg-white border rounded">
      <p className="font-semibold">Name:</p>
      <p>{file.name}</p>
      <p className="font-semibold">Size:</p>
      <p>{(file.size / 1000000).toFixed(2)} mb</p>
      <p className="font-semibold">Type:</p>
      <p>{file.type}</p>
    </div>
  )
}

export default function FilePicker() {
  const { toast } = useToast()

  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0])
    } else {
      setFile(null)
    }
  }

  const handleUploadFile = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!file) {
      return
    }
    toast({
      title: `Uploading '${file.name}'`,
    })
  }

  return (
    <div className="flex flex-col gap-4">
      <FileMetaData file={file} />
      <Input type="file" id="fileInput" onChange={handleFileChange} accept="audio/*" />
      <Button className="bg-blue-600 hover:bg-blue-600 font-bold" disabled={!file} onClick={handleUploadFile}>Upload</Button>
      <Toaster />
    </div>
  )
}
