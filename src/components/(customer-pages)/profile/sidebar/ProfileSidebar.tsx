import { cookies } from "next/headers";
import {
  customerSidebar,
  serviceSidebar,
} from "../config/sidebar-config";
import SidebarNav from "./SidebarNav";

export default async function ProfileSidebar() {
  const cookieStore = await cookies();
  const userMode = cookieStore.get("user-mode")?.value || "customer";

  const sidebarItems =
    userMode === "service" ? serviceSidebar : customerSidebar;

  return (
    <aside className="bg-[#353535]  flex flex-col h-fit lg:sticky lg:top-6">
      {/* Profile Header */}
      <div className="flex flex-col items-center gap-2 pt-8 pb-6 px-6">
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-zinc-700 ring-2 ring-[#4f2c1d]">
          <img
            src="https://i.pravatar.cc/150?img=68"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-white/72 font-semibold text-lg mt-1">
          Ziad Aboultaif
        </h3>
        <p className="text-white/72 text-sm">ziad@gmail.com</p>
      </div>

      {/* Navigation + Logout */}
      <div className="flex flex-col flex-1 p-4 min-h-[340px]">
        <SidebarNav items={sidebarItems} />
      </div>
    </aside>
  );
}
