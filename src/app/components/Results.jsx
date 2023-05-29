import React from 'react'

export default function Results({results}) {
  return (
    <div>
      Results
      {results.map((result) =>(
        <div key={result.id}>

            {result.original_title}
            {result.title}
        </div>
      ))}
    </div>
  )
}
