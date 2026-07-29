"use client";

import { Pagination, Table } from "@heroui/react";
import StatusSelect from "./StatusSelect";
import Link from "next/link";

// Generates a compact page list like [1, '...', 5, 6, 7, '...', 17]
function getPaginationRange(current, total, siblingCount = 1) {
  const totalPageNumbers = siblingCount * 2 + 5;

  if (totalPageNumbers >= total) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const leftSibling = Math.max(current - siblingCount, 1);
  const rightSibling = Math.min(current + siblingCount, total);

  const showLeftDots = leftSibling > 2;
  const showRightDots = rightSibling < total - 1;

  if (!showLeftDots && showRightDots) {
    const leftRange = Array.from(
      { length: 3 + siblingCount * 2 },
      (_, i) => i + 1
    );
    return [...leftRange, "...", total];
  }

  if (showLeftDots && !showRightDots) {
    const rightCount = 3 + siblingCount * 2;
    const rightRange = Array.from(
      { length: rightCount },
      (_, i) => total - rightCount + 1 + i
    );
    return [1, "...", ...rightRange];
  }

  if (showLeftDots && showRightDots) {
    const middleRange = Array.from(
      { length: rightSibling - leftSibling + 1 },
      (_, i) => leftSibling + i
    );
    return [1, "...", ...middleRange, "...", total];
  }
}

export default function OrderTable({ ordersData }) {
  const orders = ordersData.data;
  const page = ordersData.page;
  const totalPages = ordersData.totalPage;

  // Fewer siblings on mobile keeps the row short
  const pages = getPaginationRange(page, totalPages, 1);

  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Orders" className="min-w-[600px]">
          <Table.Header>
            <Table.Column isRowHeader>Name</Table.Column>
            <Table.Column>Phone</Table.Column>
            <Table.Column>Unit</Table.Column>
            <Table.Column>Price</Table.Column>
            <Table.Column>Date</Table.Column>
            <Table.Column>Address</Table.Column>
            <Table.Column>Status</Table.Column>
          </Table.Header>

          <Table.Body>
            {orders.map((order) => (
              <Table.Row key={order._id}>
                <Table.Cell className="font-semibold text-slate-800">
                  {order.name}
                </Table.Cell>

                <Table.Cell>{order.phone}</Table.Cell>

                <Table.Cell className="font-bold">{order.quantity}</Table.Cell>

                <Table.Cell className="font-semibold text-[#0F3457]">
                  ৳{order.totalPrice}
                </Table.Cell>

                <Table.Cell>
                  <div>
                    {new Date(order.createdAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "2-digit",
                    })}
                  </div>
                  <div className="text-xs text-slate-500">
                    {new Date(order.createdAt).toLocaleTimeString("en-GB", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </Table.Cell>

                <Table.Cell className="max-w-xs">{order.address}</Table.Cell>

                <Table.Cell>
                  <StatusSelect
                    orderId={order._id}
                    status={order.orderStatus}
                  />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>

      {/* PAGINATION */}
      <Table.Footer>
        <Pagination size="sm" className="flex w-full justify-center flex-wrap gap-1 px-2">
          <Pagination.Content className="flex-wrap justify-center gap-1">
            <Pagination.Item>
              <Pagination.Previous className="font-bold" isDisabled={page === 1}>
                <Link
                  className="flex gap-2"
                  href={`/dashboard/admin/orders?page=${page - 1}`}
                >
                  <Pagination.PreviousIcon />
                </Link>
              </Pagination.Previous>
            </Pagination.Item>

            {pages.map((p, idx) =>
              p === "..." ? (
                <Pagination.Item key={`dots-${idx}`}>
                  <span className="px-2 text-slate-400 select-none">…</span>
                </Pagination.Item>
              ) : (
                <Pagination.Item key={p}>
                  <Link href={`/dashboard/admin/orders?page=${p}`}>
                    <Pagination.Link
                      isActive={p === page}
                      className={`rounded-lg px-3 py-1 font-semibold transition ${
                        p === page
                          ? "bg-[#0F3457] text-white"
                          : "bg-transparent text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {p}
                    </Pagination.Link>
                  </Link>
                </Pagination.Item>
              )
            )}

            <Pagination.Item>
              <Pagination.Next className="font-bold" isDisabled={page === totalPages}>
                <Link
                  className="flex gap-2"
                  href={`/dashboard/admin/orders?page=${page + 1}`}
                >
                  <Pagination.NextIcon />
                </Link>
              </Pagination.Next>
            </Pagination.Item>
          </Pagination.Content>
        </Pagination>
      </Table.Footer>
    </Table>
  );
}