"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type TrainingApprovalProps = {
  training: {
    name: string
    description: string
    evaluationLink?: string
    evaluationFile?: File | null
  }
  onApprove: () => void
  onReject: () => void
}

export function TrainingApproval({
  training,
  onApprove,
  onReject,
}: TrainingApprovalProps) {
  const handleViewFile = () => {
    if (training.evaluationFile) {
      const fileURL = URL.createObjectURL(training.evaluationFile)
      window.open(fileURL, "_blank")
    }
  }

  return (
    <div className="mx-auto my-4 w-[90%] max-w-[600px] rounded-md border border-gray-200 p-4">
      <h2 className="mb-4 text-2xl font-semibold">Approve Training</h2>
      <Card>
        <CardHeader>
          <CardTitle>Training Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div>
            <p className="text-sm text-muted-foreground">Title</p>
            <h3 className="text-lg font-semibold">{training.name}</h3>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Description</p>
            <p>{training.description}</p>
          </div>

          {training.evaluationLink && (
            <div>
              <p className="text-sm text-muted-foreground">Evaluation Link</p>
              <a
                href={training.evaluationLink}
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                {training.evaluationLink}
              </a>
            </div>
          )}

          {training.evaluationFile && (
            <div>
              <p className="text-sm font-medium">Uploaded Document</p>
              <Button variant="outline" onClick={handleViewFile}>
                View Document
              </Button>
            </div>
          )}
        </CardContent>
        <CardFooter className="space-x-2">
          <Button variant="default" onClick={onApprove}>
            Approve
          </Button>
          <Button variant="destructive" onClick={onReject}>
            Reject
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
