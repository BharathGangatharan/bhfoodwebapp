// all images imported from images directory
import product_01_image_01 from "../images/Bg_removed/nproduct_01.1.png";
import product_01_image_02 from "../images/Bg_removed/nproduct_01.1.png";
import product_01_image_03 from "../images/Bg_removed/nproduct_01.3.png";

import product_02_image_01 from "../images/product_2.1.png";
import product_02_image_02 from "../images/Bg_removed/nproduct_2.2.png";
import product_02_image_03 from "../images/Bg_removed/nproduct_2.3.png";

import product_03_image_01 from "../images/Bg_removed/nproduct_3.1.png";
import product_03_image_02 from "../images/Bg_removed/nproduct_3.2.png";
import product_03_image_03 from "../images/Bg_removed/nproduct_3.3.png";

import product_04_image_01 from "../images/Bg_removed/nproduct_4.1.png";
import product_04_image_02 from "../images/Bg_removed/nproduct_4.2.png";
import product_04_image_03 from "../images/Bg_removed/nproduct_4.3.png";

import product_05_image_01 from "../images/Bg_removed/nproduct_04.png";
import product_05_image_02 from "../images/Bg_removed/nproduct_08.png";
import product_05_image_03 from "../images/Bg_removed/nproduct_09.png";

import product_06_image_01 from "../images/bread(1).png";
import product_06_image_02 from "../images/bread(2).png";
import product_06_image_03 from "../images/bread(3).png";

const products = [
  {
    id: "01",
    title: "Chicken Burger",
    price: 24.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",
    rating: "5",
    desc: "Signature burger made with a crunchy chicken fillet, veggies & a delicious mayo sauce",
    isSelected: false,
    amount:0,
    quantity:'1'
  },

  {
    id: "02",
    title: "Vegetarian Pizza",
    price: 115.0,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "Pizza",
    rating: "4",
    isSelected: false,
    amount:0,
    quantity:'1',

    desc: "Flavourful & meaty chicken keema paratha and goodness of cheesy pizza coming together in an epic crossover",
  },

  {
    id: "03",
    title: "Double Cheese Margherita",
    price: 110.0,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: "Pizza",
    rating: "3",

    desc: "American classic! spicy, herbed chicken sausage on pizza",
    isSelected: false,
    amount:0,
    quantity:'1'
  },

  {
    id: "04",
    title: "Maxican Green Wave",
    price: 110.0,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: "Pizza",
    rating: "4",

    desc: "Mexican double green wave, golden corn and extra cheese, true delight",
    isSelected: false,
    amount:0,
    quantity:'1'
  },

  {
    id: "05",
    title: "Cheese Burger",
    price: 24.0,
    image01: product_05_image_01,
    image02: product_05_image_02,
    image03: product_05_image_03,
    category: "Burger",
    rating: "3",

    desc: "Cheese burger with a delicious tandoori sauce",
    isSelected: false,
    amount:0,
    quantity:'1'
  },
  {
    id: "06",
    title: "Royal Cheese Burger",
    price: 24.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",
    rating: "3",

    desc: "Best seller Royal cheese burger with a crispy patties, veggies & a pausy sauce",
    isSelected: false,
    amount:0,
    quantity:'1'
  },

  {
    id: "07",
    title: "Seafood Pizza",
    price: 115.0,
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: "Pizza",
    rating: "1",

    desc: "A delightful combination of Corn n cheese seafood pizza & Basil Pesto Dip",
    isSelected: false,
    amount:0,
    quantity:'1'
  },

  {
    id: "08",
    title: "Thin Cheese Pizza",
    price: 110.0,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: "Pizza",
    rating: "5",

    desc: "A crazy fusion like never before. A delicious fusion of corn stuffed paratha and cheesy pizza",
    isSelected: false,
    amount:0,
    quantity:'1'
  },

  {
    id: "09",
    title: "Pizza With Mushroom",
    price: 110.0,
    image01: product_04_image_02,
    image02: product_04_image_01,
    category: "Pizza",
    rating: "5",

    desc: "Delightful combination of oninon,capsicum,tomato, & grilled mushroom",
    isSelected: false,
    amount:0,
    quantity:'1'
  },

  {
    id: "10",
    title: "Classic Hamburger",
    price: 24.0,
    image01: product_05_image_02,
    image02: product_05_image_01,
    image03: product_05_image_03,
    category: "Burger",
    rating: "4",

    desc: "Spicy peri peri chicken strips & our Dynamite spicy Mayo Sauce Bottle",
    isSelected: false,
    amount:0,
    quantity:'1'
  },

  {
    id: "11",
    title: "Crunchy Bread ",
    price: 35.0,
    image01: product_06_image_01,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Bread",
    rating: "3",

    desc: "Moise, Sweet treats, a refined form of potash of crunchy bread",
    isSelected: false,
    amount:0,
    quantity:'1'
  },

  {
    id: "12",
    title: "Delicious Bread ",
    price: 35.0,
    image01: product_06_image_02,
    image02: product_06_image_01,
    image03: product_06_image_03,
    category: "Bread",
    rating: "5",

    desc: "Added with flaky croissant, wheat,flour and pepper chili",
    isSelected: false,
    amount:0,
    quantity:'1'
  },

  {
    id: "13",
    title: "Loaf Bread ",
    price: 35.0,
    image01: product_06_image_03,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Bread",
    rating: "3",

    desc: "Softy,Tendery and loafty bread",
    isSelected: false,
    amount:0,
    quantity:'1'
  },
];

export default products;
