"use client";

import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Database,
  FileSymlink,
  Goal,
  House,
  KeyRound,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react";

export default function Navigation() {
  const path = usePathname();
  const navlinks = [
    { id: 0, name: "Dashboard", href: "/", icon: <House size={22} /> },
    {
      id: 1,
      name: "Accounts",
      href: "/accounts",
      icon: <Database size={22} />,
    },
    { id: 2, name: "Brokers", href: "#", icon: <Users size={22} /> },
    { id: 3, name: "Submissions", href: "#", icon: <FileSymlink size={22} /> },
    { id: 4, name: "Organizations", href: "#", icon: <Building2 size={22} /> },
    { id: 5, name: "Goals & Rules", href: "#", icon: <Goal size={22} /> },
    { id: 6, name: "Admin", href: "#", icon: <KeyRound size={22} /> },
  ];
  const ActiveListItem = (link: {
    id: number;
    name: string;
    href: string;
    icon: JSX.Element;
  }) => {
    if (link.href === path) {
      return "py-2 px-4 border-2 border-slate-800 rounded-full bg-blue-500 hover:scale-105 duration-500";
    }

    return "py-2 px-4 border-2 border-slate-800 rounded-full bg-slate-950 hover:scale-105 duration-500";
  };
  return (
    <nav>
      <ul className="flex flex-wrap gap-2">
        {navlinks.map((link) => (
          <li key={link.id} className={ActiveListItem(link)}>
            <Link href={link.href} className="flex gap-2 items-center">
              <span
                className={
                  link.href === path ? "text-slate-50" : "text-blue-500"
                }
              >
                {link.icon}
              </span>

              <p className="text-slate-50">{link.name}</p>
            </Link>
          </li>
        ))}
        <span className="p-2 border-2 border-slate-800 rounded-full text-slate-800 bg-slate-950">
          <ArrowLeft />
        </span>
        <span className="p-2 border-2 border-slate-800 rounded-full text-slate-800 bg-slate-950">
          <ArrowRight />
        </span>
      </ul>
    </nav>
  );
}
