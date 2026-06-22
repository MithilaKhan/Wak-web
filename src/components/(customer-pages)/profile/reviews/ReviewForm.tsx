"use client";

import { Input } from "@/ui/input";
import { Textarea } from "@/ui/textarea";

interface ReviewFormProps {
  onSubmit: (data: { name: string; description: string }) => void;
  onCancel: () => void;
}

export default function ReviewForm({ onSubmit, onCancel }: ReviewFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit({
      name: formData.get("name") as string,
      description: formData.get("description") as string,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* User Name */}
      <div className="space-y-2">
        <label
          htmlFor="review-name"
          className="text-sm font-normal text-white/70"
        >
          User Name
        </label>
        <Input
          id="review-name"
          name="name"
          placeholder="Enter full name"
          className="h-12 bg-[#181717] mt-3 border-zinc-700/50 text-white rounded-xl placeholder:text-zinc-500 focus:ring-[#FF6700] focus:border-[#FF6700]"
        />
      </div>

      {/* Description */}
      <div className="space-y-2">
        <label
          htmlFor="review-description"
          className="text-sm font-normal text-zinc-300"
        >
          Description
        </label>
        <Textarea
          id="review-description"
          name="description"
          placeholder="Type here..."
          rows={5}
          className="bg-[#181717] mt-3 border-zinc-700/50 text-white rounded-xl placeholder:text-zinc-500 focus:ring-[#FF6700] focus:border-[#FF6700] resize-none"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-4 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-8 py-3 bg-[#5a2a2a] hover:bg-[#6a3232] text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-8 py-3 bg-primary text-white text-sm font-normal
           rounded-lg transition-colors cursor-pointer"
        >
          Save
        </button>
      </div>
    </form>
  );
}
