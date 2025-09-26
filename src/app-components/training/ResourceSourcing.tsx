"use client"

import * as React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MinusCircle, PlusCircle } from "lucide-react"

interface Resource {
  name: string
  location: string
}

interface ResourceSourcingProps {
  onSource: (resources: Resource[]) => void
}

export default function ResourceSourcing({ onSource }: ResourceSourcingProps) {
  const [resources, setResources] = useState<Resource[]>([])

  // Handle adding a new resource row
  const handleAddResource = () => {
    setResources((prev) => [...prev, { name: "", location: "" }])
  }

  // Handle removing a resource row
  const handleRemoveResource = (index: number) => {
    setResources((prev) => prev.filter((_, i) => i !== index))
  }

  // Handle input changes for each resource
  const handleResourceChange = (index: number, field: keyof Resource, value: string) => {
    setResources((prev) => {
      const updated = [...prev]
      updated[index][field] = value
      return updated
    })
  }

  // Handle submission of all resources
  const handleSubmit = () => {
    onSource(resources)
  }

  return (
    <div className="mx-auto my-4 w-[90%] max-w-[600px] rounded-md border border-gray-200 p-4">
      <h2 className="mb-4 text-2xl font-semibold">Add Training Resources</h2>

      {/* Add Resource Button */}
      <Button variant="outline" onClick={handleAddResource} className="mb-3">
        <PlusCircle className="mr-2 h-4 w-4" />
        Add Resource
      </Button>

      {/* Resource Rows */}
      {resources.map((resource, index) => (
        <div key={index} className="mb-2 flex items-center gap-2">
          <div className="flex-1">
            <label className="mb-1 block text-sm font-medium">Resource</label>
            <Input
              value={resource.name}
              onChange={(e) => handleResourceChange(index, "name", e.target.value)}
              placeholder="Resource name"
            />
          </div>
          <div className="flex-1">
            <label className="mb-1 block text-sm font-medium">Source</label>
            <Input
              value={resource.location}
              onChange={(e) => handleResourceChange(index, "location", e.target.value)}
              placeholder="Resource location"
            />
          </div>
          <Button variant="destructive" onClick={() => handleRemoveResource(index)}>
            <MinusCircle className="h-4 w-4" />
          </Button>
        </div>
      ))}

      {/* Save Resources Button */}
      <Button variant="default" className="mt-2 w-full" onClick={handleSubmit}>
        Save Resources
      </Button>
    </div>
  )
}
