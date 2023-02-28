import { Info } from 'model/Info'

interface InfoBoxProps {
  info: Info
}

export function InfoBox({ info }: InfoBoxProps) {
  return (
    <div className='bg-slate-100 rounded-xl p-8'>
      <p>{info.title}</p>
      <p>{info.description}</p>
      <p>{info.version}</p>
      <p>{info.termsOfService}</p>
    </div>
  )
}
