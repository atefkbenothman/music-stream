type Props = {
  title: string
}

export default function Title({ title }: Props) {
  return (
    <div>
      <p className="font-bold text-xl mb-4">{title}</p>
    </div>
  )
}