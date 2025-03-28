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
  {
    quarter: "Q4 2024",
    totalRevenue: 300000,
    averageProductSale: 1500,
    totalProducts: 200,
    region: "West",
  },
  {
    quarter: "Q1 2025",
    totalRevenue: 350000,
    averageProductSale: 1750,
    totalProducts: 250,
    region: "North",
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
  {
    id: 3,
    name: "Retail Solutions",
    satisfactionScore: 78,
    segment: "Retail",
    totalSpend: 80000,
  },
  {
    id: 4,
    name: "E-commerce Giants",
    satisfactionScore: 95,
    segment: "E-commerce",
    totalSpend: 120000,
  },
  {
    id: 5,
    name: "Healthcare Partners",
    satisfactionScore: 88,
    segment: "Healthcare",
    totalSpend: 60000,
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
exports.findSalesByQuarter = (quarter, year) => {
  const quarterString = `Q${quarter} ${year}`;
  return (
    salesData.find((sale) => sale.quarter === quarterString) || {
      message: "No data found for specified quarter",
    }
  );
};
