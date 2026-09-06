import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function GoBack ({
  parentPath,
  parentName
}: {
  parentPath: string
  parentName: string
}) {
  return (
    <>
      <Link
        href={parentPath}
        className='inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition mb-10 text-sm uppercase tracking-widest'
      >
        <ArrowLeft size={16} />
        {parentName}
      </Link>
    </>
  )
}
