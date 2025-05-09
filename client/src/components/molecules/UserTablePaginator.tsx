"use client";

import React from "react";
import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  totalRecords: number;
}

export default function UserTablePaginator({ totalRecords }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;
  const currentLimit = Number(searchParams.get("limit")) || 10;

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    const newPage = Math.floor(event.first / event.rows) + 1;
    const newLimit = event.rows;

    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    params.set("limit", newLimit.toString());

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="card">
      <Paginator
        first={(currentPage - 1) * currentLimit}
        rows={currentLimit}
        totalRecords={totalRecords}
        rowsPerPageOptions={[10, 20, 30]}
        onPageChange={onPageChange}
      />
    </div>
  );
}
