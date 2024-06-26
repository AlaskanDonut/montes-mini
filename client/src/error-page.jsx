import { useEffect } from 'react'
import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
    
  return (
    <div>
      Error: {error.status}, {error.statusText}
    </div>
  )
}