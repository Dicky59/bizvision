import { notFound } from "next/navigation";

// All routes are handled by src/app/[locale]/ via next-intl middleware.
// This file exists only as a fallback and should never be reached.
export default function RootPage() {
  notFound();
}
