export const navigation = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research/" },
  { label: "Grants & Honours", href: "/grants-honours/" },
  { label: "Teaching & Service", href: "/teaching-service/" },
  { label: "Team", href: "/team/" },
  { label: "Data", href: "/data/" },
  { label: "Vacancy", href: "/vacancy/" },
] as const;

export const pageTitles: Record<string, string> = {
  research: "Research",
  "grants-honours": "Grants & Honours",
  "teaching-service": "Teaching & Service",
  team: "Team",
  data: "Data",
  vacancy: "Vacancy",
};
