interface PersonalInfoViewProps {
  userData: {
    username: string;
    email: string;
    phone: string;
    country: string;
  };
}

export default function PersonalInfoView({ userData }: PersonalInfoViewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* User Name */}
      <div className="space-y-2">
        <label className="text-sm font-normal text-white/70">User Name</label>
        <div className="h-12 px-4 flex items-center bg-[#2e2d2d] mt-3 rounded-xl text-sm text-white border border-zinc-700/50">
          {userData.username}
        </div>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label className="text-sm font-normal text-white/70">Email</label>
        <div className="h-12 px-4 flex items-center bg-[#2e2d2d] mt-3 rounded-xl text-sm text-white border border-zinc-700/50">
          {userData.email}
        </div>
      </div>

      {/* Contact Number */}
      <div className="space-y-2">
        <label className="text-sm font-normal text-white/70">
          Contact Number
        </label>
        <div className="h-12 px-4 flex items-center bg-[#2e2d2d] mt-3 rounded-xl text-sm text-white border border-zinc-700/50">
          {userData.phone}
        </div>
      </div>

      {/* Country */}
      <div className="space-y-2">
        <label className="text-sm font-normal text-white/70">
          Choose country
        </label>
        <div className="h-12 px-4 flex items-center bg-[#2e2d2d] mt-3 rounded-xl text-sm text-zinc-400 border border-zinc-700/50">
          {userData.country || "Select country name"}
        </div>
      </div>
    </div>
  );
}
