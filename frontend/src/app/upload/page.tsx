import Title from "@/components/ui/title"
import Content from "@/components/ui/content"

import { Input } from "@/components/ui/input"

export default function Upload() {
  return (
    <div>
      <Title title="Upload" />
      <Content>
        <div className="w-1/2">
          <Input type="file" id="fileInput" />
        </div>
      </Content>
    </div>
  );
}
