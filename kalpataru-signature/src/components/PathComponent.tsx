import Link from "next/link";
import React from "react";

const PathComponent = ({
  pageName,
  flag,
  subpage,
  path,
  pageData
}: {
  pageName: string;
  flag: boolean;
  subpage: string;
  path: string,
  pageData: any
}) => {
  return (
    <div className="breadcrumbsSec">
      <p>
        <Link href={pageData?.acf?.breadcrumbs?.parent_pages?.[0]?.parent_page_link || ""}>Home &nbsp; / &nbsp;</Link>
        {flag && (
          <Link href={`${path}`}>{subpage} &nbsp; /&nbsp;</Link>
        )}
        {pageName}
      </p>
    </div>
  );
};

export default PathComponent;
