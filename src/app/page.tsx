import { redirect } from "next/navigation";

// redirect = default
export default function RootPage() {
  redirect("/en");
}