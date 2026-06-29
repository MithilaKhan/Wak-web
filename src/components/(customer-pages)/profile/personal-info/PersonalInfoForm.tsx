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
            className="text-sm font-medium text-zinc-300"
          >
            User Name
          </label>
          <Input
            id="profile-username"
            name="username"
            defaultValue={userData.username}
            placeholder="Enter full name"
            className="h-12 bg-[#4f2c1d] border-zinc-700/50 text-white mt-2.5 rounded-xl placeholder:text-zinc-500 focus:ring-[#4f2c1d]/10 focus:border-[#4f2c1d]/10"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label
            htmlFor="profile-email"
            className="text-sm font-medium text-zinc-300"
          >
            Email
          </label>
          <Input
            id="profile-email"
            name="email"
            type="email"
            defaultValue={userData.email}
            placeholder="Enter email address"
            className="h-12 bg-[#4f2c1d] border-zinc-700/50 text-white mt-2.5 rounded-xl placeholder:text-zinc-500 focus:ring-[#4f2c1d]/10 focus:border-[#4f2c1d]/10"
          />
        </div>

        {/* Contact Number */}
        <div className="space-y-2">
          <label
            htmlFor="profile-phone"
            className="text-sm font-medium text-zinc-300"
          >
            Contact Number
          </label>
          <Input
            id="profile-phone"
            name="phone"
            defaultValue={userData.phone}
            placeholder="+9 018674512001"
            className="h-12 bg-[#4f2c1d] border-zinc-700/50 text-white mt-2.5 rounded-xl placeholder:text-zinc-500 focus:ring-[#4f2c1d]/10 focus:border-[#4f2c1d]/10"
          />
        </div>

        {/* Choose Country */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-zinc-300">
            Choose country
          </label>
          <Select name="country" defaultValue={userData.country || undefined}>
            <SelectTrigger className="h-12 bg-[#4f2c1d] border-zinc-700/50 text-white mt-2.5 rounded-xl placeholder:text-zinc-500 focus:ring-[#4f2c1d]/10 focus:border-[#4f2c1d]/10">
              <SelectValue placeholder="Select country name" />
            </SelectTrigger>
            <SelectContent className="bg-[#2a2a2a] border-zinc-700 text-white">
              {countries.map((country) => (
                <SelectItem
                  key={country}
                  value={country}
                  className="focus:bg-zinc-700 focus:text-white cursor-pointer"
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
          className="px-8 py-3 bg-[#5a2a2a] hover:bg-[#6a3232] text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-8 py-3 bg-primary text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
        >
          Save
        </button>
      </div>
    </form>
  );
}
