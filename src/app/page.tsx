export const dynamic = "force-dynamic"; // 可选，确保每次都执行 redirect

import { redirect } from "next/navigation";

export default function RootPage() {
  redirect("/home");
}
