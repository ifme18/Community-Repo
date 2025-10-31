import React, { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export type DeathRecord = {
  id?: string | number;
  name: string;
  age: number;
  date: string;
  cause: string;
  location: string;
  reportedBy: string;
};

export function AddDeathDialog({
  onAdd,
  triggerLabel = "Add Death",
}: {
  onAdd: (d: DeathRecord) => void;
  triggerLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | "">("");
  const [date, setDate] = useState("");
  const [cause, setCause] = useState("");
  const [location, setLocation] = useState("");
  const [reportedBy, setReportedBy] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !date || !cause.trim() || !location.trim() || !reportedBy.trim() || age === "") return;
    const newRecord: DeathRecord = {
      id: Date.now(),
      name: name.trim(),
      age: Number(age),
      date,
      cause: cause.trim(),
      location: location.trim(),
      reportedBy: reportedBy.trim(),
    };
    onAdd(newRecord);
    setName("");
    setAge("");
    setDate("");
    setCause("");
    setLocation("");
    setReportedBy("");
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form onSubmit={handleSubmit}>
        <DialogTrigger asChild>
          <Button variant="outline">{triggerLabel}</Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Add Death Record</DialogTitle>
            <DialogDescription>
              Provide details for the death record and click Save.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="death-name">Full name</Label>
              <Input id="death-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" required />
            </div>

            <div className="grid sm:grid-cols-2 gap-2">
              <div>
                <Label htmlFor="death-age">Age</Label>
                <Input id="death-age" type="number" value={age === "" ? "" : String(age)} onChange={(e) => setAge(e.target.value === "" ? "" : Number(e.target.value))} placeholder="Age" required />
              </div>
              <div>
                <Label htmlFor="death-date">Date</Label>
                <Input id="death-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="death-cause">Cause</Label>
              <Input id="death-cause" value={cause} onChange={(e) => setCause(e.target.value)} placeholder="Cause of death" required />
            </div>

            <div className="grid sm:grid-cols-2 gap-2">
              <div>
                <Label htmlFor="death-location">Location</Label>
                <Input id="death-location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="District / Location" required />
              </div>
              <div>
                <Label htmlFor="death-reported">Reported By</Label>
                <Input id="death-reported" value={reportedBy} onChange={(e) => setReportedBy(e.target.value)} placeholder="Reporter name" required />
              </div>
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" type="button" onClick={() => setOpen(false)}>
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}