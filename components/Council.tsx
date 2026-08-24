import { Reveal } from "@/components/Reveal";
import {
  executiveMembers,
  generalSecretary,
  president,
  type CouncilMember,
} from "@/lib/site";

function Portrait({ member }: { member: CouncilMember }) {
  return (
    <figure className="flex w-[var(--portrait)] flex-col items-center">
      <div className="portrait-frame">
        <div className="portrait-inner">
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full bg-navy object-cover object-[center_20%]"
          />
        </div>
      </div>
      <figcaption className="mt-3.5 px-0.5 text-center">
        <p className="font-display text-[0.72rem] leading-snug tracking-[0.08em] text-white md:text-[0.8rem]">
          {member.name}
        </p>
      </figcaption>
    </figure>
  );
}

function RoleLabel({ children }: { children: string }) {
  return (
    <p className="gold-text mb-5 font-display text-[0.62rem] tracking-[0.34em] md:text-[0.7rem]">
      {children.toUpperCase()}
    </p>
  );
}

export function Council() {
  return (
    <section id="council" className="px-5 py-16 md:px-10 md:py-20">
      <div className="silver-rule mb-12 md:mb-16" />
      <div className="mx-auto w-full max-w-[1120px]">
        <Reveal>
          <div className="council-panel px-5 py-11 sm:px-10 md:px-16 md:py-14">
            <h2 className="text-center font-display text-[1.2rem] tracking-[0.28em] text-white md:text-[1.45rem]">
              EXECUTIVE COUNCIL
            </h2>
            <div className="gold-rule mx-auto mt-5 max-w-[12rem]" />

            <div className="mt-11 flex flex-col items-center md:mt-12">
              <RoleLabel>{president.role}</RoleLabel>
              <Portrait member={president} />
            </div>

            <div className="silver-rule mx-auto my-10 max-w-[22rem] md:my-12" />

            <div className="flex flex-col items-center">
              <RoleLabel>{generalSecretary.role}</RoleLabel>
              <Portrait member={generalSecretary} />
            </div>

            <div className="silver-rule mx-auto my-10 max-w-[22rem] md:my-12" />

            <div className="flex flex-col items-center">
              <RoleLabel>Executive Members</RoleLabel>
              <div className="flex w-full max-w-[46rem] flex-col items-center gap-9 sm:flex-row sm:items-start sm:justify-center sm:gap-8">
                {executiveMembers.map((member) => (
                  <Portrait key={member.name} member={member} />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
