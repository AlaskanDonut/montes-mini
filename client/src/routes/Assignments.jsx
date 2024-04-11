import useAssignments from '../hooks/assignments/useAssignments.js'

export default function Assignments() {
  const [
    result,
    requestStatus,
    getAssignments ] = useAssignments()

  return (
    <>
      <h1>Assigments for course: </h1>
      <button onClick={getAssignments}>Get Assignments</button>
      { result.length !== 0 ? 
        <ul>
          { result.map(item => (
            <li key={item.id}>
              ID: {item.id},
              Content: {item.content}
            </li>
          )) }
        </ul> : 
        <p>{
          requestStatus === 'loading' ?
          'Loading...' :
          'There are no assignments.' }
        </p>
      }
    </>
  )
}