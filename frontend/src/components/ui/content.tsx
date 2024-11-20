type Props = {
  children: React.ReactNode
}

export default function Content({ children }: Props) {
  return (
    <div>
      {children}
    </div>
  )
}