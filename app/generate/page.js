import { Suspense } from 'react'
import GenerateClient from './GenerateClient'

export default async function Page({ searchParams }) {
  const params = await searchParams
  const handle = params?.handle ?? ""
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GenerateClient initialHandle={handle} />
    </Suspense>
  )
}