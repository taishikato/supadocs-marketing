"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar";

const docLinks = [
  { title: "What is Supadocs?", href: "/docs" },
  { title: "Getting Started", href: "/docs/nesting/how-to-use-supadocs" },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link className="flex flex-row items-center gap-x-2" href="/">
                <Sparkles className="size-4" />
                <span className="cursor-pointer rounded-md font-semibold text-base hover:bg-muted">
                  Supadocs
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Docs</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {docLinks.map((doc) => {
                const isActive =
                  pathname === doc.href ||
                  (doc.href !== "/docs" && pathname.startsWith(`${doc.href}/`));

                return (
                  <SidebarMenuItem key={doc.href}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link href={doc.href}>{doc.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
