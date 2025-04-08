import React, { useState } from 'react';
import { Button, Select, MenuItem, Pagination, TextField } from '@mui/material';
import { MdExpandMore, MdExpandLess, MdSearch } from 'react-icons/md';
import SearchBox from '../../components/SearchBox';

const Orders = () => {
    // Dữ liệu mẫu cho danh sách đơn hàng
    const [orders, setOrders] = useState([
        {
            id: '67f4e548228db479bb1ef3c7',
            paymentId: 'CASH ON DELIVERY',
            name: 'Sejal Gupta',
            phoneNumber: '919127262627',
            address: {
                type: 'Home',
                details: 'KIET Group of institutions, Ghaziabad Ghaziabad jdkjfksdjfk Uttar India',
            },
            pincode: '201206',
            totalAmount: 1550,
            email: 'sejal***',
            userId: '67f4e4b9228db479bb1ef35a',
            status: 'Confirm',
            date: '2025-04-08',
            products: [
                {
                    productId: '67f4e4e0228db479bb1ef3b3',
                    title: 'Large 40 L Backpack 40L Casual Trendy Laptop Backpack School College Bag For Men & Women (Black)',
                    image: 'https://serviceapi.spicezgold.com/download/1742447109721_dezire-crafts-blue-backpacks-15-l-dc-bags-334-product-images-rv95uppwtj-0-202309290238.webp',
                    quantity: 1,
                    price: 1550,
                    subTotal: 1550,
                },
            ],
        },
        // Thêm đơn hàng khác nếu cần
        {
            id: '67f4e548228db479bb1ef3c8',
            paymentId: 'ONLINE',
            name: 'John Doe',
            phoneNumber: '919876543210',
            address: {
                type: 'Office',
                details: '123 Business Park, Mumbai, Maharashtra, India',
            },
            pincode: '400001',
            totalAmount: 2999,
            email: 'john.doe@example.com',
            userId: '67f4e4b9228db479bb1ef35b',
            status: 'Delivered',
            date: '2025-04-07',
            products: [
                {
                    productId: '234242525',
                    title: 'Laptop',
                    image: 'https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg',
                    quantity: 2,
                    price: 1499.5,
                    subTotal: 2999,
                },
            ],
        },
    ]);

    // State cho tìm kiếm, mở rộng đơn hàng, và phân trang
    const [searchTerm, setSearchTerm] = useState('');
    const [expandedOrder, setExpandedOrder] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const ordersPerPage = 5; // Số đơn hàng mỗi trang

    // Lọc đơn hàng dựa trên từ khóa tìm kiếm
    const filteredOrders = orders.filter((order) =>
        order.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Tính toán phân trang
    const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);
    const paginatedOrders = filteredOrders.slice(
        (currentPage - 1) * ordersPerPage,
        currentPage * ordersPerPage
    );

    // Hàm mở rộng/thu gọn chi tiết đơn hàng
    const toggleExpandOrder = (index) => {
        setExpandedOrder(expandedOrder === index ? null : index);
    };

    // Hàm cập nhật trạng thái đơn hàng
    const handleStatusChange = (orderId, newStatus) => {
        setOrders((prev) =>
            prev.map((order) =>
                order.id === orderId ? { ...order, status: newStatus } : order
            )
        );
    };

    // Hàm xóa đơn hàng
    const handleDeleteOrder = (orderId) => {
        setOrders((prev) => prev.filter((order) => order.id !== orderId));
        setExpandedOrder(null); // Đóng chi tiết nếu đơn hàng bị xóa
    };

    return (
        <>
            <div className="card my-2 md:mt-2 shadow-md sm:rounded-lg bg-white">
                {/* Tiêu đề và ô tìm kiếm */}
                <div className="grid grid-cols-1 lg:grid-cols-2 px-5 py-5 flex-col sm:flex-row">
                    <h2 className="text-[18px] font-[600] text-left mb-2 lg:mb-0">
                        Recent Orders
                    </h2>
                    <div className="ml-auto w-full">
                        <div className="w-full h-auto bg-[#f1f1f1] relative overflow-hidden">
                            <SearchBox />
                        </div>
                    </div>
                </div>

                {/* Bảng đơn hàng chính */}
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    &nbsp;
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Order ID
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Payment ID
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Phone Number
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Address
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Pincode
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Total Amount
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    User ID
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Order Status
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedOrders.map((order, index) => (
                                <React.Fragment key={order.id}>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="px-6 py-4 font-[500]">
                                            <Button
                                                className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]"
                                                onClick={() => toggleExpandOrder(index)}
                                            >
                                                {expandedOrder === index ? (
                                                    <MdExpandLess className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                                                ) : (
                                                    <MdExpandMore className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                                                )}
                                            </Button>
                                        </td>
                                        <td className="px-6 py-4 font-[500]">
                                            <span className="text-primary">{order.id}</span>
                                        </td>
                                        <td className="px-6 py-4 font-[500]">
                                            <span className="text-primary whitespace-nowrap text-[13px]">
                                                {order.paymentId}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 font-[500] whitespace-nowrap">
                                            {order.name}
                                        </td>
                                        <td className="px-6 py-4 font-[500]">{order.phoneNumber}</td>
                                        <td className="px-6 py-4 font-[500]">
                                            <span className="inline-block text-[13px] font-[500] p-1 bg-[#f1f1f1] rounded-md">
                                                {order.address.type}
                                            </span>
                                            <span className="block w-[400px]">{order.address.details}</span>
                                        </td>
                                        <td className="px-6 py-4 font-[500]">{order.pincode}</td>
                                        <td className="px-6 py-4 font-[500]">{order.totalAmount}</td>
                                        <td className="px-6 py-4 font-[500]">{order.email}</td>
                                        <td className="px-6 py-4 font-[500]">
                                            <span className="text-primary">{order.userId}</span>
                                        </td>
                                        <td className="px-6 py-4 font-[500]">
                                            <Select
                                                value={order.status}
                                                onChange={(e) => handleStatusChange(order.id, e.target.value)}
                                                size="small"
                                                className="w-full"
                                                style={{ zoom: '80%' }}
                                            >
                                                <MenuItem value="Confirm">Confirm</MenuItem>
                                                <MenuItem value="Shipped">Shipped</MenuItem>
                                                <MenuItem value="Delivered">Delivered</MenuItem>
                                                <MenuItem value="Cancelled">Cancelled</MenuItem>
                                            </Select>
                                        </td>
                                        <td className="px-6 py-4 font-[500] whitespace-nowrap">
                                            {order.date}
                                        </td>
                                        <td className="px-6 py-4 font-[500] whitespace-nowrap">
                                            <Button
                                                variant="outlined"
                                                color="error"
                                                size="small"
                                                onClick={() => handleDeleteOrder(order.id)}
                                            >
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>

                                    {/* Bảng chi tiết sản phẩm */}
                                    {expandedOrder === index && (
                                        <tr>
                                            <td className="pl-20" colSpan="6">
                                                <div className="relative overflow-x-auto">
                                                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                            <tr>
                                                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                    Product ID
                                                                </th>
                                                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                    Product Title
                                                                </th>
                                                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                    Image
                                                                </th>
                                                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                    Quantity
                                                                </th>
                                                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                    Price
                                                                </th>
                                                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                    Sub Total
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {order.products.map((product, prodIndex) => (
                                                                <tr
                                                                    key={prodIndex}
                                                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                                                >
                                                                    <td className="px-6 py-4 font-[500]">
                                                                        <span className="text-gray-600">{product.productId}</span>
                                                                    </td>
                                                                    <td className="px-6 py-4 font-[500]">
                                                                        <div className="w-[200px]">{product.title}</div>
                                                                    </td>
                                                                    <td className="px-6 py-4 font-[500]">
                                                                        <img
                                                                            src={product.image}
                                                                            alt={product.title}
                                                                            className="w-[40px] h-[40px] object-cover rounded-md"
                                                                        />
                                                                    </td>
                                                                    <td className="px-6 py-4 font-[500] whitespace-nowrap">
                                                                        {product.quantity}
                                                                    </td>
                                                                    <td className="px-6 py-4 font-[500]">
                                                                        ₹{product.price.toFixed(2)}
                                                                    </td>
                                                                    <td className="px-6 py-4 font-[500]">
                                                                        ₹{product.subTotal.toFixed(2)}
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                            <tr>
                                                                <td className="bg-[#f1f1f1]" colSpan="6"></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Phân trang */}
                <div className="flex items-center justify-center mt-10 pb-5">
                    <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={(event, value) => setCurrentPage(value)}
                        color="primary"
                        showFirstButton
                        showLastButton
                    />
                </div>
            </div>
        </>
    );
};

export default Orders;