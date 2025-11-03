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
import { Calendar, MapPin, Users, AlertCircle, Clock } from "lucide-react";
import { Screen } from "../app-components/layout/screen";

/* -------------------------------------------------------------------------- */
/*  EVENT TYPE – matches the shape used in Home (Events, Announcements, News) */
/* -------------------------------------------------------------------------- */
export type Event = {
  id?: string | number;
  eventName?: string;          // <-- used for death name
  location: string;
  date: string;                // DD/MM/YYYY (as in Home)
  time?: string;               // optional – not needed for deaths
  attendees?: number;          // optional
  category?: string;           // e.g. "death"
  priority?: "high" | "medium" | "low";
  announcementName?: string;   // not used
  description?: string;        // cause of death
  urgent?: boolean;            // not used
  newsTitle?: string;          // not used
  author?: string;             // reportedBy
  readTime?: string;           // not used
  featured?: boolean;          // not used
};

/* --------------------------------------------------------------- */
/*  AddDeathDialog – now styled exactly like the Home page cards   */
/* --------------------------------------------------------------- */
export function AddDeathDialog({
  onAdd,
  triggerLabel = "Add Death",
}: {
  onAdd: (d: Event) => void;
  triggerLabel?: string;
}) {
  const [open, setOpen] = useState(false);

  // ---- form fields -------------------------------------------------
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | "">("");
  const [date, setDate] = useState(() => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return `${dd}/${mm}/${yyyy}`;               // DD/MM/YYYY (Home format)
  });
  const [cause, setCause] = useState("");
  const [location, setLocation] = useState("");
  const [reportedBy, setReportedBy] = useState("");

  // ---- helpers ----------------------------------------------------
  const resetForm = () => {
    setName("");
    setAge("");
    setDate(() => {
      const today = new Date();
      const dd = String(today.getDate()).padStart(2, "0");
      const mm = String(today.getMonth() + 1).padStart(2, "0");
      const yyyy = today.getFullYear();
      return `${dd}/${mm}/${yyyy}`;
    });
    setCause("");
    setLocation("");
    setReportedBy("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !name.trim() ||
      age === "" ||
      !date ||
      !cause.trim() ||
      !location.trim() ||
      !reportedBy.trim()
    )
      return;

    const newRecord: Event = {
      id: Date.now(),
      eventName: name.trim(),
      location: location.trim(),
      date,
      description: cause.trim(),
      author: reportedBy.trim(),
      category: "death",
      priority: "high",               // deaths are always high-priority in the UI
    };

    onAdd(newRecord);
    resetForm();
    setOpen(false);
  };

  // ---- colour helpers (same as Home) -------------------------------
  const getCategoryColor = (cat: string) => {
    const map: Record<string, string> = {
      death: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    };
    return map[cat] ?? "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
  };

  const getPriorityColor = (pri: string) => {
    const map: Record<string, string> = {
      high: "border-l-red-500 bg-red-50 dark:bg-red-900/20",
      medium: "border-l-yellow-500 bg-yellow-50 dark:bg-yellow-900/20",
      low: "border-l-green-500 bg-green-50 dark:bg-green-900/20",
    };
    return map[pri] ?? "";
  };

  // -----------------------------------------------------------------
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">{triggerLabel}</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[620px] bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        {/* Wrap the whole dialog in Screen for consistent padding */}
        <Screen>
          <form onSubmit={handleSubmit} className="space-y-6">
            <DialogHeader className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <DialogTitle className="flex items-center text-xl font-semibold text-gray-900 dark:text-white">
                <AlertCircle className="h-5 w-5 mr-2 text-red-500" />
                Add Death Record
              </DialogTitle>
              <DialogDescription className="text-gray-600 dark:text-gray-400">
                Fill in the details below and click **Save** to record the death.
              </DialogDescription>
            </DialogHeader>

            {/* ---------- Form Grid ---------- */}
            <div className="grid gap-5">
              {/* Full name */}
              <div className="grid gap-2">
                <Label htmlFor="death-name" className="flex items-center">
                  <Users className="h-4 w-4 mr-1 text-gray-500" />
                  Full name
                </Label>
                <Input
                  id="death-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full name of the deceased"
                  required
                />
              </div>

              {/* Age + Date (side-by-side on sm+) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="death-age">Age</Label>
                  <Input
                    id="death-age"
                    type="number"
                    min="0"
                    value={age === "" ? "" : String(age)}
                    onChange={(e) =>
                      setAge(e.target.value === "" ? "" : Number(e.target.value))
                    }
                    placeholder="Age"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="death-date" className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                    Date of death
                  </Label>
                  <Input
                    id="death-date"
                    type="text"
                    placeholder="DD/MM/YYYY"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Cause */}
              <div className="grid gap-2">
                <Label htmlFor="death-cause">Cause of death</Label>
                <Input
                  id="death-cause"
                  value={cause}
                  onChange={(e) => setCause(e.target.value)}
                  placeholder="e.g. Road accident, Illness"
                  required
                />
              </div>

              {/* Location + Reported By (side-by-side) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="death-location" className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                    Location
                  </Label>
                  <Input
                    id="death-location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="District / Village"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="death-reported">Reported by</Label>
                  <Input
                    id="death-reported"
                    value={reportedBy}
                    onChange={(e) => setReportedBy(e.target.value)}
                    placeholder="Name of reporter"
                    required
                  />
                </div>
              </div>
            </div>

            {/* ---------- Footer ---------- */}
            <DialogFooter className="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    resetForm();
                    setOpen(false);
                  }}
                >
                  Cancel
                </Button>
              </DialogClose>

              <Button
                type="submit"
                className={`bg-red-600 hover:bg-red-700 text-white ${getPriorityColor(
                  "high"
                )}`}
              >
                Save Record
              </Button>
            </DialogFooter>
          </form>
        </Screen>
      </DialogContent>
    </Dialog>
  );
}