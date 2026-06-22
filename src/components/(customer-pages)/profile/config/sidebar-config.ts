export interface SidebarItem {
  label: string;
  href: string;
  icon: string;
}

export const customerSidebar: SidebarItem[] = [
  {
    label: "Personal Information",
    href: "/profile/personal-info",
    icon: "User",
  },
  {
    label: "Order Tracking",
    href: "/profile/order-tracking",
    icon: "FolderKanban",
  },
  {
    label: "Review & Feedback",
    href: "/profile/reviews",
    icon: "Star",
  },
  {
    label: "Setting",
    href: "/profile/settings",
    icon: "Settings",
  },
];

export const serviceSidebar: SidebarItem[] = [
  {
    label: "Personal Information",
    href: "/profile/personal-info",
    icon: "User",
  },
  {
    label: "My Order",
    href: "/profile/orders",
    icon: "FolderKanban",
  },
  {
    label: "Message",
    href: "/profile/message",
    icon: "MessageCircle",
  },
  {
    label: "Review & Feedback",
    href: "/profile/reviews",
    icon: "TbMessageStar",
  },
  {
    label: "Setting",
    href: "/profile/settings",
    icon: "Settings",
  },
];
