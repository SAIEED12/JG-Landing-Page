"use client";

import { Pagination, Table } from "@heroui/react";
import StatusSelect from "./StatusSelect";
import Link from "next/link";

export default function OrderTable({ ordersData }) {
  const orders = ordersData.data;
  const page = ordersData.page;
  const pages = [];
  const totalPages = ordersData.totalPage;
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
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

      <Table.Footer>
        <Pagination size="sm">
          {/* <Pagination.Summary>
            {start} to {end} of {users.length} results
          </Pagination.Summary> */}
          <Pagination.Content>
            <Pagination.Item>
              <Pagination.Previous isDisabled={page === 1}>
                <Pagination.PreviousIcon />
                Prev
              </Pagination.Previous>
            </Pagination.Item>
            {pages.map((p) => (
              <Pagination.Item key={p}>
                <Link href={`/dashboard/admin/orders?page=${p}`}>
                  <Pagination.Link isActive={p === page}>{p}</Pagination.Link>
                </Link>
              </Pagination.Item>
            ))}
            <Pagination.Item>
              <Pagination.Next isDisabled={page === totalPages}>
                Next
                <Pagination.NextIcon />
              </Pagination.Next>
            </Pagination.Item>
          </Pagination.Content>
        </Pagination>
      </Table.Footer>
    </Table>
  );
}
