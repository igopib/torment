import MenuBar from './MenuBar'
import Main from './Main'
import { LOGO } from '@/lib/ascii'

export default function Dashboard() {
  return (
    <div className='p-2 min-h-screen' style={{ fontFamily: 'Ibm' }}>
      <div className='h-full flex gap-4 border border-dashed flex-col text-start justify-start p-2'>
        <pre className='text-[0.30rem] sm:text-[0.6rem] text-center'>
          <code>{LOGO}</code>
        </pre>
        <MenuBar />
        <Main />
      </div>
    </div>
  )
}
