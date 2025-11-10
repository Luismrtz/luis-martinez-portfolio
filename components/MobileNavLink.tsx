import React from "react";

interface MobileNavLinkProps {
  href: string;
  label: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  onClick: () => void;
}

const MobileNavLink = ({ href, label, Icon, onClick }: MobileNavLinkProps) => {
  return (
    <>
      <a
        href={href}
        onClick={onClick}
        className="btn flex items-center gap-3 rounded-lg p-2"
      >
        <Icon className="h-4 w-4" aria-hidden="true" />
        <span>{label}</span>
      </a>
    </>
  );
};

export default MobileNavLink;
