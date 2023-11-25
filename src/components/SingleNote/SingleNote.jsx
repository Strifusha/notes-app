import {useParams} from 'react-router-dom'

function SingleNote() {
  const id = useParams()
  console.log(id)
  return (
    <div>
      <h1>hello!!!</h1>
    </div>
  )
}

export default SingleNote
