// Sales data across different quarters
const salesData = [
  {
    quarter: "Q1 2024",
    totalRevenue: 250000,
    averageProductSale: 1250,
    totalProducts: 200,
    region: "North",
  },
  {
    quarter: "Q2 2024",
    totalRevenue: 320000,
    averageProductSale: 1600,
    totalProducts: 250,
    region: "South",
  },
  {
    quarter: "Q3 2024",
    totalRevenue: 280000,
    averageProductSale: 1400,
    totalProducts: 220,
    region: "East",
  },
];

// Customer satisfaction data
const customerData = [
  {
    id: 1,
    name: "Tech Innovations",
    satisfactionScore: 85,
    segment: "Enterprise",
    totalSpend: 150000,
  },
  {
    id: 2,
    name: "Small Business Hub",
    satisfactionScore: 92,
    segment: "SMB",
    totalSpend: 45000,
  },
];

// Function to get total revenue
exports.getTotalRevenue = () => {
  return salesData.reduce((total, sale) => total + sale.totalRevenue, 0);
};

// Function to get average customer satisfaction
exports.getAverageCustomerSatisfaction = () => {
  const totalScore = customerData.reduce(
    (total, customer) => total + customer.satisfactionScore,
    0
  );
  return (totalScore / customerData.length).toFixed(2);
};

// Function to search sales by quarter
exports.findSalesByQuarter = (quarterToFind) => {
  return salesData.find((sale) => sale.quarter === quarterToFind);
};
