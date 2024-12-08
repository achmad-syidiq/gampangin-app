const dummyProducts = [
  {
    name: "Laptop Asus",
    sku: "GM-001",
    category: "Electronics",
    qty: 91,
    modal: 1934000,
    price: 2500000,
    status: "active",
  },
  {
    name: "Smartphone Samsung",
    sku: "GM-002",
    category: "Electronics",
    qty: 152,
    modal: 1500000,
    price: 2500000,
    status: "in-active",
  },
  {
    name: "Headphone JBL",
    sku: "GM-003",
    category: "Accessories",
    qty: 300,
    modal: 600000,
    price: 1200000,
    status: "active",
  },
  {
    name: "Smartwatch Apple",
    sku: "GM-004",
    category: "Electronics",
    qty: 75,
    modal: 2500000,
    price: 5000000,
    status: "in-active",
  },
  {
    name: "Kamera Canon EOS",
    sku: "GM-005",
    category: "Electronics",
    qty: 45,
    modal: 5000000,
    price: 8000000,
    status: "active",
  },
  {
    name: "Tablet Samsung Galaxy",
    sku: "GM-006",
    category: "Electronics",
    qty: 120,
    modal: 2200000,
    price: 3500000,
    status: "in-active",
  },
  {
    name: "Keyboard Mechanical",
    sku: "GM-007",
    category: "Accessories",
    qty: 50,
    modal: 450000,
    price: 1200000,
    status: "active",
  },
  {
    name: "Speaker Bluetooth Bose",
    sku: "GM-008",
    category: "Electronics",
    qty: 80,
    modal: 1200000,
    price: 2200000,
    status: "in-active",
  },
  {
    name: "External Hard Drive 1TB",
    sku: "GM-009",
    category: "Electronics",
    qty: 200,
    modal: 800000,
    price: 1500000,
    status: "active",
  },
  {
    name: "Power Bank 20000mAh",
    sku: "GM-010",
    category: "Accessories",
    qty: 350,
    modal: 400000,
    price: 900000,
    status: "in-active",
  },
  {
    name: "Laptop Dell XPS",
    sku: "GM-011",
    category: "Electronics",
    qty: 60,
    modal: 4000000,
    price: 5500000,
    status: "active",
  },
  {
    name: "Earbuds Sony",
    sku: "GM-012",
    category: "Accessories",
    qty: 180,
    modal: 800000,
    price: 1500000,
    status: "in-active",
  },
  {
    name: "Gaming Chair DXRacer",
    sku: "GM-013",
    category: "Furniture",
    qty: 90,
    modal: 2500000,
    price: 5000000,
    status: "active",
  },
  {
    name: "Electric Kettle Philips",
    sku: "GM-014",
    category: "Home Appliances",
    qty: 150,
    modal: 300000,
    price: 700000,
    status: "in-active",
  },
  {
    name: "Vacuum Cleaner Dyson",
    sku: "GM-015",
    category: "Home Appliances",
    qty: 80,
    modal: 4000000,
    price: 6000000,
    status: "active",
  },
  {
    name: "Blender Philips",
    sku: "GM-016",
    category: "Home Appliances",
    qty: 110,
    modal: 500000,
    price: 900000,
    status: "in-active",
  },
  {
    name: "Air Conditioner LG",
    sku: "GM-017",
    category: "Home Appliances",
    qty: 60,
    modal: 4000000,
    price: 8000000,
    status: "active",
  },
  {
    name: "Refrigerator Samsung",
    sku: "GM-018",
    category: "Home Appliances",
    qty: 40,
    modal: 5000000,
    price: 9000000,
    status: "in-active",
  },
  {
    name: "Washing Machine LG",
    sku: "GM-019",
    category: "Home Appliances",
    qty: 70,
    modal: 3000000,
    price: 5000000,
    status: "active",
  },
  {
    name: "Oven Electrolux",
    sku: "GM-020",
    category: "Home Appliances",
    qty: 150,
    modal: 900000,
    price: 1600000,
    status: "in-active",
  },
  {
    name: "Smart TV Sony",
    sku: "GM-021",
    category: "Electronics",
    qty: 200,
    modal: 3000000,
    price: 6000000,
    status: "active",
  },
  {
    name: "Smartphone Xiaomi",
    sku: "GM-022",
    category: "Electronics",
    qty: 120,
    modal: 1500000,
    price: 2000000,
    status: "in-active",
  },
  {
    name: "Monitor LG 27 inch",
    sku: "GM-023",
    category: "Electronics",
    qty: 90,
    modal: 1500000,
    price: 2500000,
    status: "active",
  },

  {
    name: "Smartphone Oppo",
    sku: "GM-024",
    category: "Electronics",
    qty: 150,
    modal: 1300000,
    price: 2200000,
    status: "in-active",
  },
  {
    name: "Gaming Mouse Razer",
    sku: "GM-025",
    category: "Accessories",
    qty: 200,
    modal: 300000,
    price: 800000,
    status: "active",
  },
  {
    name: "Gaming Keyboard Corsair",
    sku: "GM-026",
    category: "Accessories",
    qty: 300,
    modal: 600000,
    price: 1300000,
    status: "in-active",
  },
  {
    name: "External SSD 512GB",
    sku: "GM-027",
    category: "Electronics",
    qty: 250,
    modal: 700000,
    price: 1200000,
    status: "active",
  },
  {
    name: "Bluetooth Speaker JBL",
    sku: "GM-028",
    category: "Electronics",
    qty: 180,
    modal: 400000,
    price: 900000,
    status: "in-active",
  },
  {
    name: "Electric Fan Panasonic",
    sku: "GM-029",
    category: "Home Appliances",
    qty: 100,
    modal: 250000,
    price: 600000,
    status: "active",
  },
  {
    name: "Electric Grill Tefal",
    sku: "GM-030",
    category: "Home Appliances",
    qty: 80,
    modal: 600000,
    price: 1200000,
    status: "in-active",
  },
  {
    name: "Smart Home Hub Amazon Echo",
    sku: "GM-031",
    category: "Electronics",
    qty: 60,
    modal: 1200000,
    price: 2500000,
    status: "active",
  },
  {
    name: "Smartphone Vivo",
    sku: "GM-032",
    category: "Electronics",
    qty: 130,
    modal: 1700000,
    price: 2500000,
    status: "in-active",
  },
  {
    name: "Action Camera GoPro",
    sku: "GM-033",
    category: "Electronics",
    qty: 90,
    modal: 2500000,
    price: 4500000,
    status: "active",
  },
  {
    name: "Power Supply Corsair 750W",
    sku: "GM-034",
    category: "Accessories",
    qty: 110,
    modal: 800000,
    price: 1400000,
    status: "in-active",
  },
  {
    name: "Laptop HP Envy",
    sku: "GM-035",
    category: "Electronics",
    qty: 70,
    modal: 3000000,
    price: 5000000,
    status: "active",
  },
  {
    name: "Smartphone OnePlus",
    sku: "GM-036",
    category: "Electronics",
    qty: 120,
    modal: 2500000,
    price: 3500000,
    status: "in-active",
  },
  {
    name: "LED TV Samsung 40 inch",
    sku: "GM-037",
    category: "Electronics",
    qty: 140,
    modal: 2500000,
    price: 5000000,
    status: "active",
  },
  {
    name: "Wireless Router TP-Link",
    sku: "GM-038",
    category: "Electronics",
    qty: 250,
    modal: 600000,
    price: 1200000,
    status: "in-active",
  },
  {
    name: "Power Bank Anker 10000mAh",
    sku: "GM-039",
    category: "Accessories",
    qty: 300,
    modal: 350000,
    price: 800000,
    status: "active",
  },
  {
    name: "Mouse Pad SteelSeries",
    sku: "GM-040",
    category: "Accessories",
    qty: 150,
    modal: 200000,
    price: 400000,
    status: "in-active",
  },
  {
    name: "Wireless Earbuds Bose",
    sku: "GM-041",
    category: "Accessories",
    qty: 180,
    modal: 800000,
    price: 1500000,
    status: "active",
  },
  {
    name: "Tablet Lenovo",
    sku: "GM-042",
    category: "Electronics",
    qty: 100,
    modal: 2000000,
    price: 3500000,
    status: "in-active",
  },
  {
    name: "Smart TV LG 55 inch",
    sku: "GM-043",
    category: "Electronics",
    qty: 60,
    modal: 4500000,
    price: 8000000,
    status: "active",
  },
  {
    name: "Refrigerator Panasonic",
    sku: "GM-044",
    category: "Home Appliances",
    qty: 90,
    modal: 4000000,
    price: 7000000,
    status: "in-active",
  },
  {
    name: "Smartphone Huawei",
    sku: "GM-045",
    category: "Electronics",
    qty: 50,
    modal: 1200000,
    price: 2500000,
    status: "active",
  },
  {
    name: "Kipas Angin Miyako",
    sku: "GM-046",
    category: "Home Appliances",
    qty: 200,
    modal: 250000,
    price: 500000,
    status: "in-active",
  },
  {
    name: "Smartphone Realme",
    sku: "GM-047",
    category: "Electronics",
    qty: 140,
    modal: 1500000,
    price: 2300000,
    status: "active",
  },
  {
    name: "Blender Kenwood",
    sku: "GM-048",
    category: "Home Appliances",
    qty: 70,
    modal: 400000,
    price: 900000,
    status: "in-active",
  },
  {
    name: "Hair Dryer Philips",
    sku: "GM-049",
    category: "Home Appliances",
    qty: 180,
    modal: 300000,
    price: 600000,
    status: "active",
  },
  {
    name: "LED Lamp Philips",
    sku: "GM-050",
    category: "Home Appliances",
    qty: 250,
    modal: 50000,
    price: 100000,
    status: "in-active",
  },
];

export default dummyProducts;
