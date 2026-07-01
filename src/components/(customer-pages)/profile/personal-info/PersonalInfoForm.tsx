"use client";

import { Input } from "@/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";

interface PersonalInfoFormProps {
  userData: {
    username: string;
    email: string;
    phone: string;
    country: string;
  };
  onSave: (data: PersonalInfoFormProps["userData"]) => void;
  onCancel: () => void;
}

const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Japan",
  "India",
  "Bangladesh",
  "Brazil",
  "South Korea",
  "United Arab Emirates",
];

export default function PersonalInfoForm({
  userData,
  onSave,
  onCancel,
}: PersonalInfoFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSave({
      username: formData.get("username") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      country: formData.get("country") as string,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* User Name */}
        <div className="space-y-2">
          <label
            htmlFor="profile-username"
            className="text-sm font-semibold text-zinc-700"
          >
            User Name
          </label>
          <Input
            id="profile-username"
            name="username"
            defaultValue={userData.username}
            placeholder="Enter full name"
            className="h-12 bg-zinc-50 border border-zinc-200 text-zinc-900 mt-2 rounded-xl placeholder:text-zinc-400 focus:bg-white focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-0 focus-visible:border-primary"
          />
        </div>
 
        {/* Email */}
        <div className="space-y-2">
          <label
            htmlFor="profile-email"
            className="text-sm font-semibold text-zinc-700"
          >
            Email
          </label>
          <Input
            id="profile-email"
            name="email"
            type="email"
            defaultValue={userData.email}
            placeholder="Enter email address"
            className="h-12 bg-zinc-50 border border-zinc-200 text-zinc-900 mt-2 rounded-xl placeholder:text-zinc-400 focus:bg-white focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-0 focus-visible:border-primary"
          />
        </div>
 
        {/* Contact Number */}
        <div className="space-y-2">
          <label
            htmlFor="profile-phone"
            className="text-sm font-semibold text-zinc-700"
          >
            Contact Number
          </label>
          <Input
            id="profile-phone"
            name="phone"
            defaultValue={userData.phone}
            placeholder="+9 018674512001"
            className="h-12 bg-zinc-50 border border-zinc-200 text-zinc-900 mt-2 rounded-xl placeholder:text-zinc-400 focus:bg-white focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-0 focus-visible:border-primary"
          />
        </div>
 
        {/* Choose Country */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-zinc-700">
            Choose country
          </label>
          <Select name="country" defaultValue={userData.country || undefined}>
            <SelectTrigger className="h-12 bg-zinc-50 border border-zinc-200 text-zinc-900 mt-2 rounded-xl placeholder:text-zinc-400 focus:bg-white focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-0 focus-visible:border-primary">
              <SelectValue placeholder="Select country name" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-zinc-200 text-zinc-950">
              {countries.map((country) => (
                <SelectItem
                  key={country}
                  value={country}
                  className="focus:bg-zinc-100 focus:text-zinc-950 cursor-pointer"
                >
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
 
      {/* Actions */}
      <div className="flex items-center justify-end gap-4 mt-10">
        <button
          type="button"
          onClick={onCancel}
          className="px-8 py-3 bg-red-50 hover:bg-red-100 text-red-650 text-sm font-semibold rounded-xl transition-colors cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-8 py-3 bg-primary hover:bg-orange-500 text-white text-sm font-semibold rounded-xl transition-colors cursor-pointer shadow-md shadow-orange-500/10"
        >
          Save
        </button>
      </div>
    </form>
  );
}
