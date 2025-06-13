import Link from "next/link";
import React from "react";

const PathComponent = ({
  pageName,
  flag,
  subpage,
  path
}: {
  pageName: string;
  flag: boolean;
  subpage: string;
  path: string,
}) => {
  return (
    <div className="breadcrumbsSec">
      <p>
        <Link href={"/"}>Home &nbsp; / &nbsp;</Link>
        {flag && (
          <Link href={`${path}`}>{subpage} &nbsp; /&nbsp;</Link>
        )}
        {pageName}
      </p>
    </div>
  );
};

export default PathComponent;
