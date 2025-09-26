"use client"

import * as React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface TrainingNeedFormProps {
  onSubmit: (data: {
    trainingName: string
    description: string
    evaluationLink: string
    evaluationFile: File | null
  }) => void
}

export function TrainingNeedForm({ onSubmit }: TrainingNeedFormProps) {
  const [trainingName, setTrainingName] = useState("")
  const [description, setDescription] = useState("")
  const [evaluationLink, setEvaluationLink] = useState("")
  const [evaluationFile, setEvaluationFile] = useState<File | null>(null)

  // Handle file upload
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setEvaluationFile(event.target.files[0])
    }
  }

  const handleSubmit = () => {
    onSubmit({ trainingName, description, evaluationLink, evaluationFile })
  }

  return (
    <div className="mx-auto my-4 w-[90%] max-w-[600px] rounded-md border border-gray-200 p-4">
      <h2 className="mb-4 text-2xl font-semibold">Create Training Need</h2>

      <div className="mb-3">
        <p className="mb-1 text-sm font-medium">Training Name</p>
        <Input
          value={trainingName}
          onChange={(e) => setTrainingName(e.target.value)}
          placeholder="Enter the training name"
        />
      </div>

      <div className="mb-3">
        <p className="mb-1 text-sm font-medium">Description</p>
        <Textarea
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe the training..."
        />
      </div>

      <div className="mb-3">
        <p className="mb-1 text-sm font-medium">Evaluation Template</p>
        {/* Upload a document */}
        <label
          htmlFor="evaluation-file"
          className="inline-flex cursor-pointer items-center rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/90"
        >
          Upload File
        </label>
        <Input
          id="evaluation-file"
          type="file"
          className="hidden"
          onChange={handleFileUpload}
        />
        {/* Display uploaded file name */}
        {evaluationFile && (
          <p className="mt-1 text-sm">Uploaded: {evaluationFile.name}</p>
        )}

        {/* Or provide a link */}
        <p className="mt-3 mb-1 text-sm font-medium">Or provide a link</p>
        <Input
          value={evaluationLink}
          onChange={(e) => setEvaluationLink(e.target.value)}
          placeholder="https://example.com/evaluation-link"
        />
      </div>

      <Button variant="default" className="w-full" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  )
}
