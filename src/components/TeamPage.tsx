import type { TeamMember } from "@/team";
import { alumniMembers, teamMembers } from "@/team";

function initials(name: string) {
  return name
    .replace(/\([^)]*\)/g, "")
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function MemberCard({ member }: { member: TeamMember }) {
  const name = member.link ? (
    <a href={member.link} target="_blank" rel="noreferrer">
      {member.name}
    </a>
  ) : member.name;

  return (
    <article className="team-card">
      <div className="team-photo">
        {member.image ? (
          <img src={member.image} alt={member.name} />
        ) : (
          <span className="team-photo-placeholder" aria-label={`${member.name} photo placeholder`}>
            {initials(member.name)}
          </span>
        )}
      </div>
      <h3 className="team-name">{name}</h3>
      <p className="team-position">{member.position}</p>
      <div className="team-affiliation">
        {member.affiliation.map((line) => <p key={line}>{line}</p>)}
      </div>
    </article>
  );
}

export default function TeamPage() {
  return (
    <article className="legacy-content page-team">
      <h2 className="wsite-content-title team-page-title">MEET OUR TEAM</h2>

      <section className="team-section" aria-label="Current team members">
        <div className="team-grid">
          {teamMembers.map((member) => <MemberCard key={member.name} member={member} />)}
        </div>
      </section>

      <section className="team-section team-alumni" aria-labelledby="alumni-title">
        <h2 id="alumni-title" className="team-section-title">Alumni</h2>
        <p className="team-alumni-note">
          We are connecting with alumni. Please feel free to drop me an email if you are not here yet!
        </p>
        <div className="team-grid team-grid-alumni">
          {alumniMembers.map((member) => <MemberCard key={member.name} member={member} />)}
        </div>
      </section>
    </article>
  );
}
