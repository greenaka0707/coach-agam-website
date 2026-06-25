import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
};

export default function Section({
  children,
}: SectionProps) {
  return (
    <section
      style={{
        padding: "80px 0",
      }}
    >
      {children}
    </section>
  );
}