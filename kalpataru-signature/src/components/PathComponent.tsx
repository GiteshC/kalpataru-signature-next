import Link from "next/link";
import React from "react";

const PathComponent = ({ pageName }: { pageName: string }) => {
  return (
    <div className="breadcrumbsSec">
      <p>
        <Link href={"/"}>Home &nbsp; / &nbsp;</Link> {pageName}
      </p>
    </div>
  );
};

export default PathComponent;
