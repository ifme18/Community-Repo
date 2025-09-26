"use client"

import * as React from "react"

interface Result {
  employee: string
  score: number
}

interface ResultsProps {
  results: Result[]
}

export function TrainingResults({ results }: ResultsProps) {
  return (
    <div className="mx-auto my-4 w-[90%] max-w-[600px] rounded-md border border-gray-200 p-4">
      <h2 className="mb-4 text-2xl font-semibold">Assessment Results</h2>
      {results.map((result, index) => (
        <p key={index} className="mb-2">
          <span className="font-medium">{result.employee}</span>: {result.score}
        </p>
      ))}
    </div>
  )
}
