import Briefcase from "@/assets/icons/briefcase.svg?react";
import Contractor from "@/assets/icons/contractor.svg?react";
import Account from "@/assets/icons/account.svg?react";

export const PROCESS_MANAGER_BUTTONS = [
  {
    title: "Organizations",
    icon: <Briefcase />,
    path: "/organizations",
  },
  {
    title: "Contractors",
    icon: <Contractor />,
    path: "/contractors",
  },
  {
    title: "Clients",
    icon: <Account />,
    path: "/clients",
  },
];
