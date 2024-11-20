import Title from "@/components/ui/title"
import Content from "@/components/ui/content"
import FilePicker from "@/app/upload/fileInputPicker"

export default function Upload() {
  return (
    <div>
      <Title title="Upload Audio" />
      <Content>
        <div className="w-1/3">
          <FilePicker />
        </div>
      </Content>
    </div>
  )
}
