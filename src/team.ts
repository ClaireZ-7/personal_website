import memberData from "./team-members.json";

export type MemberGroup = "team" | "alumni";

export interface TeamMember {
  name: string;
  position: string;
  affiliation: string[];
  group: MemberGroup;
  image?: string;
  link?: string;
}

const members = memberData as TeamMember[];

function surname(name: string) {
  const withoutNickname = name.replace(/\s*\([^)]*\)\s*/g, " ").trim();
  return withoutNickname.split(/\s+/).at(-1) ?? withoutNickname;
}

function teamRoleRank(position: string) {
  const normalized = position.toLowerCase();
  if (normalized.includes("phd")) return 0;
  if (normalized.includes("research assistant")) return 1;
  return 2;
}

export const teamMembers = members
  .filter((member) => member.group === "team")
  .sort((left, right) => {
    const roleDifference = teamRoleRank(left.position) - teamRoleRank(right.position);
    return roleDifference || surname(left.name).localeCompare(surname(right.name), "en");
  });

export const alumniMembers = members.filter((member) => member.group === "alumni");
