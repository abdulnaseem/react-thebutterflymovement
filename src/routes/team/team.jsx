// src/routes/team/team.jsx
import { useEffect } from "react";
import SEO from "../../components/SEO";

const leadershipTeam = [
  {
    name: "Abdul Hannan",
    role: "Founder & Head Coach",
    bio: "Founder of The Butterfly Movement, leading the organisation's vision through boxing, grappling, mentoring and youth development. Abdul is committed to helping young people build confidence, discipline, resilience and positive life skills through structured community programmes.",
    badges: [
      "Founder",
      "Head Coach",
      "Youth Mentor",
      "Community Leader",
    ],
  },
  {
    name: "Abdul Khan",
    role: "Director of Technology & Operations",
    bio: "Leads technology, digital strategy and operational systems across The Butterfly Movement. A qualified Computing Teacher and former Software Engineer, Abdul oversees the organisation's digital infrastructure, programme operations and technology strategy.",
    qualifications: [
      "Qualified Teacher Status (QTS)",
      "Postgraduate Certificate in Education (PGCE)",
      "BSc (Hons) Computer Science (Network Computing)",
    ],
    badges: [
      "Computing Teacher",
      "Former Software Engineer",
      "Technology",
      "Operations",
    ],
  },
];

const coachingTeam = [
  {
    name: "Fajlur Rahman Al Jamee",
    role: "Lead Coach",
    bio: "Fajlur is a Senior Youth Worker and Lead Coach with over six years' experience supporting vulnerable young people across Tower Hamlets. Having progressed from participant and amateur boxer to Lead Coach, he uses boxing to build confidence, discipline, resilience and positive life skills within local communities.",
    qualifications: [
      "Level 2 & 3 Youth Work",
      "Level 3 Personal Training",
      "Level 2 Conflict Management",
      "Level 2 Safeguarding Young People and Protecting Children",
    ],
    badges: [
      "Lead Coach",
      "Youth Work",
      "Boxing",
      "Mentoring",
      "Safeguarding",
    ],
  },
  {
    name: "Muhammed Hoque",
    role: "Assistant Coach",
    bio: "Muhammed is a qualified Level 1 Boxing Coach, PE Teacher and Youth Worker who has supported The Butterfly Movement since the very beginning. Drawing on his experience as a former amateur boxer and educator, he helps young people develop confidence, resilience and discipline through structured boxing sessions, believing that the lessons learned in sport can be carried into everyday life.",
    qualifications: [
      "Qualified Teacher Status (QTS)",
      "Postgraduate Certificate in Education (PGCE)",
      "BA (Hons) Physical Education",
      "Level 1 Boxing Coach",
    ],
    badges: [
      "Boxing Coach",
      "PE Teacher",
      "Youth Worker",
      "Mentoring",
      "Knowledge is Power"
    ],
  },
  {
    name: "Emon",
    role: "Assistant Coach",
    bio: "Emon assists in coaching sessions and community activities, helping create an inclusive environment where young people can learn, grow and develop confidence.",
    badges: [
      "Assistant Coach",
      "Community",
      "Inclusive Support",
    ],
  },
];

export default function Team() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Meet Our Team | The Butterfly Movement"
        description="Meet the coaches, mentors and professionals behind The Butterfly Movement, delivering boxing, grappling, mentoring and youth development programmes."
        path="/team"
        image="/logo.png"
      />

      <main className="min-h-screen bg-[#070707] pt-28 text-white">
        <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <header className="mx-auto mb-14 max-w-4xl text-center">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#f5b400] sm:text-sm">
                Meet Our Team
              </p>

              <h1 className="mt-4 text-4xl font-black uppercase leading-none sm:text-5xl md:text-6xl lg:text-7xl">
                The People Behind The Movement
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-white/70 sm:text-base md:text-lg">
                Our team combines coaching, mentoring, education, technology
                and community experience to create safe, structured and
                positive programmes for young people.
              </p>
            </header>

            <TeamSection
              title="Leadership"
              members={leadershipTeam}
              featured
            />

            <TeamSection
              title="Coaching & Mentoring Team"
              members={coachingTeam}
              className="mt-14"
            />
          </div>
        </section>
      </main>
    </>
  );
}

function TeamSection({
  title,
  members,
  featured = false,
  className = "",
}) {
  const headingId = `${title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")}-heading`;

  return (
    <section className={className} aria-labelledby={headingId}>
      <h2
        id={headingId}
        className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#f5b400]"
      >
        {title}
      </h2>

      <div
        className={`grid gap-5 ${
          featured ? "lg:grid-cols-2" : "lg:grid-cols-3"
        }`}
      >
        {members.map((member) => (
          <TeamMemberCard
            key={member.name}
            member={member}
            featured={featured}
          />
        ))}
      </div>
    </section>
  );
}

function TeamMemberCard({ member, featured }) {
  return (
    <article
      className={`rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl transition duration-300 hover:-translate-y-1 hover:border-[#f5b400]/40 ${
        featured ? "sm:p-8" : ""
      }`}
    >
      <div
        className={`flex flex-col gap-4 ${
          featured ? "sm:flex-row sm:items-start" : ""
        }`}
      >
        <div
          aria-hidden="true"
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f5b400] text-xl font-black text-black"
        >
          {member.name.charAt(0)}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-2xl font-black uppercase text-white">
            {member.name}
          </h3>

          <p className="mt-1 text-sm font-bold uppercase tracking-wide text-[#f5b400]">
            {member.role}
          </p>

          <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
            {member.bio}
          </p>

          {member.qualifications?.length > 0 && (
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
              <h4 className="text-xs font-black uppercase tracking-[0.18em] text-[#f5b400]">
                Qualifications
              </h4>

              <ul className="mt-3 space-y-2 text-sm leading-6 text-white/70">
                {member.qualifications.map((qualification) => (
                  <li
                    key={qualification}
                    className="flex items-start gap-2"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f5b400]"
                    />
                    <span>{qualification}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div
            className="mt-5 flex flex-wrap gap-2"
            aria-label={`${member.name} skills`}
          >
            {member.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-[#f5b400]/30 bg-[#f5b400]/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#f5b400]"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}