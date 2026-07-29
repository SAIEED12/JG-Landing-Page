import OrderTable from '@/components/OrderTable';
import React from 'react';

const getOrders = async(page) =>{
  if(!page){
    page=1;
  }
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/orders?page=${page}`)
  const data = await res.json()
  return data
}

const OrdersPage = async({searchParams}) => {
  const params = await searchParams;
  console.log(params)
  const orders = await getOrders(params.page)
  // console.log(orders)
  return (
    <div> 
      <h2 className='mt-10 mb-5 font-bold text-2xl text-[#0F3457]'>All Orders</h2>
      <OrderTable ordersData={orders}/>
    </div>
  );
};

export default OrdersPage;