import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support the Groveport Madison Band Boosters with a donation. Your contributions fund instruments, uniforms, scholarships, and more.",
};

export default function DonatePage() {
  redirect(SITE.donateUrl);
}
