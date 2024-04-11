import { useState } from 'react'

export default function useAssignments() {
  const [requestStatus, setRequestStatus] = useState(null)
  const [result, setResult] = useState([])

  function getAssignments() {
    console.log('getAssignments()')
    setRequestStatus('loading')
    setTimeout(() => {
      setRequestStatus(null)
      setResult([
        { id: 1, content: 'contentttt'},
        { id: 2, content: 'this is content'}
      ])}, 1000)
  }
  
  return [
    result,
    requestStatus,
    getAssignments
  ]
}