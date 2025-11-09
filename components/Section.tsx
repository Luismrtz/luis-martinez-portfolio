import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn(`py-24 md:py-32 ${className}`)}>
      <div className="container-page">{children}</div>
    </section>
  );
}
