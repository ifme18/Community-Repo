"use client"

import * as React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface TrainingAssessmentProps {
  templateLink: string
  onSubmit: (file: File | null, comments: string) => void
}

export function TrainingAssessment({
  templateLink,
  onSubmit,
}: TrainingAssessmentProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [comments, setComments] = useState("")

  // Handle file upload
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null
    setSelectedFile(file)
  }

  // Handle form submission
  const handleSubmit = () => {
    onSubmit(selectedFile, comments)
  }

  return (
    <div className="mx-auto my-4 w-[90%] max-w-[600px] rounded-md border border-gray-200 p-4">
      <h2 className="mb-3 text-2xl font-semibold">Employee Assessment</h2>

      {/* Link to download/view the evaluation template */}
      <p className="mb-2">
        Please review the evaluation template before submitting your assessment:
      </p>
      <a
        href={templateLink}
        target="_blank"
        rel="noreferrer"
        className="underline text-green-600"
      >
        View Evaluation Template
      </a>

      {/* File upload section */}
      <div className="my-3">
        <label
          htmlFor="file-upload"
          className="inline-flex cursor-pointer items-center rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/90"
        >
          {selectedFile ? "Change File" : "Upload Solution"}
        </label>
        <Input
          id="file-upload"
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
        {selectedFile && (
          <p className="mt-1 text-sm">
            Uploaded File: <span className="font-medium">{selectedFile.name}</span>
          </p>
        )}
      </div>

      {/* Optional comments */}
      <Textarea
        placeholder="Comments (Optional)"
        className="mb-3"
        rows={3}
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      />

      {/* Submit button */}
      <Button
        variant="default"
        className="w-full"
        onClick={handleSubmit}
        disabled={!selectedFile}
      >
        Submit Assessment
      </Button>
    </div>
  )
}
