import { Suspense } from 'react'
import GenerateClient from './GenerateClient'

export default function Page({ searchParams }) {
  const handle = searchParams?.handle ?? ""
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GenerateClient initialHandle={handle} />
    </Suspense>
  )
}