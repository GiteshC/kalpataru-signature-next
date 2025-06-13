import Link from "next/link";
import React from "react";

const PathComponent = ({
  pageName,
  flag,
  subpage,
}: {
  pageName: string;
  flag: boolean;
  subpage: string;
}) => {
  return (
    <div className="breadcrumbsSec">
      <p>
        <Link href={"/"}>Home &nbsp; / &nbsp;</Link>
        {flag && (
          <Link href="signature-residences.html">{subpage} &nbsp; /&nbsp;</Link>
        )}
        {pageName}
      </p>
    </div>
  );
};

export default PathComponent;
