import { Breadcrumbs } from "@/utils/type";
import Link from "next/link";
import React from "react";

interface BreadcrumbsSecProps {
  pathData?: Breadcrumbs;
}

const PathComponent = ({ pathData }: BreadcrumbsSecProps) => {
  const { current_page_name, parent_pages } = pathData || {};

  return (
    <div className="breadcrumbsSec">
      <p>
        {parent_pages?.map((page) => (
          <Link key={page.parent_page_link} href={page.parent_page_link}>
            {page.parent_page_text} &nbsp; / &nbsp;
          </Link>
        ))}
        {current_page_name}
      </p>
    </div>
  );
};

export default PathComponent;

// {
//   pageName,
//   flag,
//   subpage,
//   path,
//   pageData
// }: {
//   pageName: string;
//   flag: boolean;
//   subpage: string;
//   path: string,
//   pageData: any
// }
