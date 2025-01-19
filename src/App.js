import React, { useState, useEffect } from 'react';
import './App.css';
import { IoOptionsOutline } from "react-icons/io5";
import { FaInfoCircle, FaWhatsapp, FaGithub, FaInstagram } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";



// Sample product data
const products = [
  {
    "id": 1,
    "title": "3D FUN GUM GUMMY CANDIES 12X12X15GR",
    "image": "/images/1.jpeg",
    "category": "bites-gummyworld"
  },
  {
    "id": 2,
    "title": "3D GUMMY DUCKLING 12X12X15GR",
    "image": "/images/2.png",
    "category": "bites-gummyworld"
  },
  {
    "id": 3,
    "title": "3D GUMMY ICE CONE 12X12X15GR",
    "image": "/images/3.jpeg",
    "category": "bites-gummyworld"
  },
  {
    "id": 4,
    "title": "3D GUMMY ORANGE 12X12X15GR",
    "image": "/images/4.jpg",
    "category": "bites-gummyworld"
  },
  {
    "id": 5,
    "title": "3D GUMMY STRAWBERRY PILLOWS 12X12X15GR",
    "image": "images/5.jpeg",
    "category": "bites-gummyworld"
  },
    {
    "id": 6,
    "title": "3D HAPPY BEAR 12X12X15GR",
    "image": "/images/bear.png",
    "category": "bites-gummyworld"
  },
  {
    "id": 7,
    "title": "BLEZZ GULAS",
    "image": "/images/blez.jpeg",
    "category": "yafindo"
  },
  {
    "id": 8,
    "title": "BLEZZ MANGGA MADU",
    "image": "images/blez-mangga.jpeg",
    "category": "yafindo"
  },
  {
    "id": 9,
    "title": "DENEX BISCUIT STICK CHOCOLATE WHIT BOX 33GRX6",
    "image": "/images/denex.jpeg",
    "category": "denex"
  },
  {
    "id": 10,
    "title": "DENEX BISCUIT STICK STRAWBERRY WHIT BOX 33GRX6",
    "image": "/images/denex-stick-cklt.jpeg",
    "category": "denex"
  },
  {
    "id": 11,
    "title": "DENEX FUNIMAL CHOCOLATE 28GR X 30",
    "image": "/images/funimal-cklt.png",
    "category": "denex"
  },
  {
    "id": 12,
    "title": "DENEX FUNIMAL STRAWBERRY 28GR X 30P",
    "image": "/images/funimal-van.webp",
    "category": "denex"
  },
  {
    "id": 13,
    "title": "DENEX FUNIMAL VANILA 28GR X 30P",
    "image": "/images/fun-van.webp",
    "category": "denex"
  },
  {
    "id": 14,
    "title": "DENEX HANDLE BISCUITS ASSORTED 350GRX6",
    "image": "/images/Denex_Assorted_350gr_Bucket.webp",
    "category": "denex"
  },
  {
    "id": 15,
    "title": "DENEX HANDLE BISCUITS BLACK COKIES 350GRX6",
    "image": "/images/Denex_Black_Cookies_350gr_Bucket.webp",
    "category": "denex"
  },
    {
    "id": 16,
    "title": "DENEX HANDLE BISCUITS BUTTER COKIES 350GRX6",
    "image": "/images/Denex_Butter_Cookies_350gr_Bucket1.webp",
    "category": "denex"
  },
  {
    "id": 17,
    "title": "DENEX HANDLE BISCUITS CHOCOLATE 350GRX6",
    "image": "/images/Denex_Chocolate_Sandwich_350gr_Bucket_V2.webp",
    "category": "denex"
  },
  {
    "id": 18,
    "title": "DENEX HANDLE BISCUITS GOLDEN 350GRX6",
    "image": "/images/Denex_Golden_Cookies_350gr_Bucket_V2.webp",
    "category": "denex"
  },
  {
    "id": 19,
    "title": "DENEX HANDLE BISCUITS SANDWICH VANILA 350GRX6",
    "image": "/images/Denex_Vanilla_Sandwich_350gr_Bucket.webp",
    "category": "denex"
  },
  {
    "id": 20,
    "title": "DENEX HANDLE BISCUITS STR & CHERRY7 350GRX6",
    "image": "/images/Denex_Strawberry_and_Cherry_Cookies_350gr_Bucket.webp",
    "category": "denex"
  },
  {
    "id": 21,
    "title": "DENEX HANDLE WF CREAM ASSORTED 300GRX6",
    "image": "/images/Denex_Wafer_Cream_300gr_Assorted_Bucket.webp",
    "category": "denex"
  },
    {
    "id": 22,
    "title": "DENEX HANDLE WF CREAM CHOCOLATE 300GRX6",
    "image": "/images/Denex_Wafer_Cream_300gr_Chocolate_Bucket.webp",
    "category": "denex"
  },
    {
    "id": 23,
    "title": "DENEX HANDLE WF CREAM SAPPUCCINO 300GRX6",
    "image": "/images/Denex_Wafer_Cream_300gr_Cappuccino_Bucket.webp",
    "category": "denex"
  },
    {
    "id": 24,
    "title": "DENEX HANDLE WF ROLL ASSORTED 300GRX6",
    "image": "/images/Denex_Wafer_Stick_300gr_Assorted_Bucket.webp",
    "category": "denex"
  },
    {
    "id": 25,
    "title": "DENEX HANDLE WF ROLL CAPPUCCINO 300GRX6",
    "image": "/images/Denex_Wafer_Stick_300gr_Cappuccino_Bucket.webp",
    "category": "denex"
  },
    {
    "id": 26,
    "title": "DENEX HANDLE WF ROLL CHOCOLATE 300GRX6",
    "image": "/images/Denex_Wafer_Stick_300gr_Chocolate_Bucket.webp",
    "category": "denex"
  },
    {
    "id": 27,
    "title": "DENEX HANDLE WF STICK BOXES CHOCOLATE 180GRX12",
    "image": "/images/cklt.jpg",
    "category": "denex"
  },
    {
    "id": 28,
    "title": "DENEX HANDLE WF STICK BOXES TIRAMISU 180GRX12",
    "image": "/images/tiram.jpg",
    "category": "denex"
  },
    {
    "id": 29,
    "title": "DENEX MILK COCONUT ORANGE 20GR",
    "image": "/images/m.jpg",
    "category": "denex"
  },
    {
    "id": 30,
    "title": "DENEX MINI BLACK CRACKERS 20GRX10X6RTG",
    "image": "/images/Mini_Black_Crackers_25gr.webp",
    "category": "denex"
  },
    {
    "id": 31,
    "title": "DENEX MINI CRACKERS 20GRX10X6RTG",
    "image": "/images/Mini_Crackers_25gr.webp",
    "category": "denex"
  },
    {
    "id": 32,
    "title": "DENEX POTATO 250 GR X 6",
    "image": "/images/pot.jpeg",
    "category": "denex"
  },
    {
    "id": 33,
    "title": "DENEX VEGETABLE & CHEESE STICK 50GRX40P",
    "image": "/images/Denex_Vegetable_and_Cheese_Stick_50gr.webp",
    "category": "denex"
  },
    {
    "id": 34,
    "title": "DRAGONFLY WHEAT FLOUR 10X1KG",
    "image": "/images/drag1.webp",
    "category": "harvestar"
  },
    {
    "id": 35,
    "title": "DRAGONFLY WHEAT FLOUR 40X500G",
    "image": "/images/drag500.jpeg",
    "category": "harvestar"
  },
    {
    "id": 36,
    "title": "FILOO BALLS BISCUIT CHOCOBALL",
    "image": "/images/filoo-balls.jpg",
    "category": "yafindo"
  },
    {
    "id": 37,
    "title": "FILOO CUBES CHOCOMILK SCH 6X10X1BG",
    "image": "/images/filoo-cubes-rcg.jpg",
    "category": "yafindo"
  },
    {
    "id": 38,
    "title": "FILOO CUBES CHOCOMILK TPL 12*50*3GR",
    "image": "/images/filoo-cubes-tpl.jpg",
    "category": "yafindo"
  },
    {
    "id": 39,
    "title": "FILOO SOES CHOCO CREAM 6RCG*10PCS*25GR",
    "image": "/images/filoo-soes.png",
    "category": "yafindo"
  },
  {
    "id": 40,
    "title": "FUNNY BEAR BURGER 12X12X15GR",
    "image": "/images/funny-b.jpg",
    "category": "bites-gummyworld"
  },
  {
    "id": 41,
    "title": "FUNNY BEAR PIZZA 12X12X15GR",
    "image": "/images/funny-p.jpg",
    "category": "bites-gummyworld"
  },
  {
    "id": 42,
    "title": "JA MONA KOPYOR 20X300G",
    "image": "/images/mona.jpg",
    "category": "khong-guan"
  },
  {
    "id": 43,
    "title": "JB BISTAR BLUBERI 12X10X16G",
    "image": "/images/bistar-blue.webp",
    "category": "khong-guan"
  },
  {
    "id": 44,
    "title": "JB BISTAR NANAS 12X10X16G",
    "image": "/images/bistar-nanas.webp",
    "category": "all"
  },
  {
    "id": 45,
    "title": "JB BISTAR STROBERI 12X10X16G",
    "image": "/images/bistar-stro.webp",
    "category": "khong-guan"
  },
  {
    "id": 46,
    "title": "JELLY MARICO ANGGUR",
    "image": "/images/anggur.png",
    "category": "yafindo"
  },
  {
    "id": 47,
    "title": "JELLY MARICO JAMBU",
    "image": "/images/jambu.jpg",
    "category": "yafindo"
  },
  {
    "id": 48,
    "title": "JELLY MARICO MANGGA",
    "image": "/images/mangga.jpg",
    "category": "yafindo"
  },
  {
    "id": 49,
    "title": "JELLY MARICO STRAWBERY",
    "image": "/images/marico-stro.jpg",
    "category": "yafindo"
  },
  {
    "id": 50,
    "title": "KG ASSORTED BISCUITS CLASSIC MINI 350GX6 TIN",
    "image": "/images/khong_guan_khong_guan_classic_assorted_350gr_full01_m621mm5k.jpg",
    "category": "khong-guan"
  },
  {
    "id": 51,
    "title": "KG ASSORTED BISCUITS DYNASTY 700GX6 TIN",
    "image": "/images/dinasty.jpg",
    "category": "khong-guan"
  },
  {
    "id": 52,
    "title": "KG ASSORTED BISCUITS FAMILY 650GX6 TIN",
    "image": "/images/ass-fam.jpeg",
    "category": "khong-guan"
  },
  {
    "id": 53,
    "title": "KG ASSORTED BISCUITS RED BULAT RANTAI 1000GX6 TIN",
    "image": "/images/rantai.jpg",
    "category": "khong-guan"
  },
  {
    "id": 54,
    "title": "KG ASSORTED BISCUITS TOP EKONOMI 1150GX6 TIN",
    "image": "/images/tp-eko.jpeg",
    "category": "khong-guan"
  },
  {
    "id": 55,
    "title": "KG ASSORTED BISCUITS TOP MEDIUM 1000GX6 TIN",
    "image": "/images/tp-medium.webp",
    "category": "khong-guan"
  },
  {
    "id": 56,
    "title": "KG ASSORTED BISCUITS TOP MINI 650GX6 TIN",
    "image": "/images/khong-guan_khong-guan_full01.webp",
    "category": "khong-guan"
  },
  {
    "id": 57,
    "title": "KG ASSORTED BISCUITS TOP SEGI 1600GX6 TIN",
    "image": "/images/tp-segi.webp",
    "category": "khong-guan"
  },
  {
    "id": 58,
    "title": "KG ASSORTED OPP RED 300GX20P",
    "image": "/images/khong-guan_khong-guan-asst-opp-red-275-gr_full01.webp",
    "category": "khong-guan"
  },
  {
    "id": 59,
    "title": "KG CIZZRING KUKIS SAGU KEJU 135GX20PAK",
    "image": "/images/cizz.jpg",
    "category": "khong-guan"
  },
  {
    "id": 60,
    "title": "KG CREAM CRACKERS 120GX20",
    "image": "/images/khong_guan_khong_guan_cream_crackers_120_gram_full01_hn0ww3pv.webp",
    "category": "khong-guan"
  },
  {
    "id": 61,
    "title": "KG CREAM CRACKERS 200GX16 PAK",
    "image": "/images/cc200.jpg",
    "category": "khong-guan"
  },
  {
    "id": 62,
    "title": "KG CREAM CRACKERS 350GX24 PAK",
    "image": "/images/cc350.jpg",
    "category": "khong-guan"
  },
  {
    "id": 63,
    "title": "KG GABIN COKELAT 16GX12PX10RCG",
    "image": "/images/sg-11134201-22110-mvmbaylahfjv3d.jpeg",
    "category": "khong-guan"
  },
  {
    "id": 64,
    "title": "KG KRAKERS SAYUR 135GX20 PAK",
    "image": "/images/csayur.png",
    "category": "khong-guan"
  },
  {
    "id": 65,
    "title": "KG LA COCO CHOCOLATE 24GX12PX10RCG",
    "image": "/images/lacoco.jpg",
    "category": "khong-guan"
  },
  {
    "id": 66,
    "title": "KG LEMON PUFF CREAM 6KGX1TIN",
    "image": "/images/lemonpuff.jpg",
    "category": "khong-guan"
  },
  {
    "id": 67,
    "title": "KG MALKIST ABON SAPI 21GX8PX10RCG",
    "image": "/images/abonrcg.webp",
    "category": "khong-guan"
  },
  {
    "id": 68,
    "title": "KG MALKIST ABON SAPI 135GX20 PAK",
    "image": "/images/44281989_8e4d66be-c070-45f5-839d-2df2f1eaeedc_800_800.jpeg",
    "category": "khong-guan"
  },
  {
    "id": 69,
    "title": "KG MALKIST ABON SAPI 800GX6TIN",
    "image": "/images/abontin.jpeg",
    "category": "khong-guan"
  },
  {
    "id": 70,
    "title": "KG MALKIST CRACKERS 200GX16PAK",
    "image": "/images/",
    "category": "khong-guan"
  },
  {
    "id": 71,
    "title": "KG MALKIST CRACKERS 135GX20",
    "image": "/images/12fced34-378a-4721-8d24-4614eaf12010.jpg",
    "category": "khong-guan"
  },
  {
    "id": 72,
    "title": "KG MALKIST CRACKERS 21GX8PX10RCG",
    "image": "/images/38c2256d-0032-40a9-851f-f6a435a156fb.jpeg",
    "category": "khong-guan"
  },
  {
    "id": 73,
    "title": "KG MALKIST KELAPA 21GX8PX10RCG",
    "image": "/images/khong_guan_khongguan_malkist_kelapa_27_gram_-10_pcs-_full02_kwosnuda.webp",
    "category": "khong-guan"
  },
  {
    "id": 74,
    "title": "KG MALKIST SALUT COKLAT 100GX20PAK",
    "image": "/images/id-11134207-7rask-m2aoewx90zy132.jpeg",
    "category": "khong-guan"
  },
  {
    "id": 75,
    "title": "KG MALKIST SEAWEED 135GX20 PAK",
    "image": "/images/71160237_d3a21b88-2f4a-4faa-92ea-e9203daa7ba0_800_800.jpeg",
    "category": "khong-guan"
  },
  {
    "id": 76,
    "title": "KG MARIE SPECIAL 225GX24 PAK",
    "image": "/images/ProductMariebiscuit_khongguan_225gr.png",
    "category": "khong-guan"
  },
  {
    "id": 77,
    "title": "KG MARIE SUSU 160GX20 PAK",
    "image": "/images/2d519d1c4158ba8743105cc693a91bde.jpeg",
    "category": "khong-guan"
  },
  {
    "id": 78,
    "title": "KG SALTCHEESE COMBERRY 17GX12PX10RCG",
    "image": "/images/cb.jpg",
    "category": "khong-guan"
  },
  {
    "id": 79,
    "title": "KG SALTCHEESE COMBO 175GX20 PAK",
    "image": "/images/scb.jpg",
    "category": "khong-guan"
  },
  {
    "id": 80,
    "title": "KG SALTCHEESE COMBO 17GX12BAGX10RCG",
    "image": "/images/9fa3dcab26f1312ce09e95cb42334ec3.jpeg",
    "category": "khong-guan"
  },
  {
    "id": 81,
    "title": "KG SALTCHEESE COMBO 17GX12PX10RCG",
    "image": "/images/comborcg1.jpg",
    "category": "khong-guan"
  },
  {
    "id": 82,
    "title": "KG SALTCHEESE COMBO 34GRX6PAKX10RTG",
    "image": "/images/id-11134207-7r98y-llkcrt4uxqocea.jpeg",
    "category": "khong-guan"
  },
  {
    "id": 83,
    "title": "KG SALTCHEESE COMBOCIZ 175GX20 PAK",
    "image": "/images/72dc7c94-5bfa-46e4-8c36-8fca8c64c5b2.jpg",
    "category": "khong-guan"
  },
  {
    "id": 84,
    "title": "KG SALTCHEESE COMBOCIZ 17GX12PX10RCG",
    "image": "/images/cbciz.jpg",
    "category": "khong-guan"
  },
  {
    "id": 85,
    "title": "KG SALTCHEESE CRACKERS 200GX30",
    "image": "/images/b22536504c24d29ed0ee97768eb25502.jpeg",
    "category": "khong-guan"
  },
  {
    "id": 87,
    "title": "KG SALTCHEESE CRACKERS 336G X 6 TIN",
    "image": "/images/4f39f9db0c6845f25b320e488201addd.jpeg",
    "category": "khong-guan"
  },
  {
    "id": 88,
    "title": "KG SALTCHEESE CRACKERS BARBEQUE 200GX30",
    "image": "/images/76cee77302d7520c897c200fe3984f89.jpeg",
    "category": "khong-guan"
  },
  {
    "id": 89,
    "title": "KG SALTCHEESE CRACKERS GT 200GX24PAK",
    "image": "/images/b22536504c24d29ed0ee97768eb25502.jpeg",
    "category": "khong-guan"
  },
  {
    "id": 90,
    "title": "KG SALTCHEESE CRACKERS POCKET 100GX40",
    "image": "/images/6540910_2f8354da-3396-46e1-9172-308ab18aad47_672_672.jpeg",
    "category": "khong-guan"
  },
  {
    "id": 91,
    "title": "KG SUPERCO 138GX30 PAK",
    "image": "/images/ca506d6709893db4c1345b8b1800b807.jpeg",
    "category": "khong-guan"
  },
  {
    "id": 92,
    "title": "KG SUPERCO 22GX12PX10RCG",
    "image": "/images/superco.png",
    "category": "khong-guan"
  },
  {
    "id": 93,
    "title": "KG SUPERCO 33GX6PX10RCG",
    "image": "/images/sg-11134201-7rbkt-lplscopgwwep41.jpeg",
    "category": "khong-guan"
  },
  {
    "id": 94,
    "title": "KG SUPERCO LEMON 22GX12PX10RCG",
    "image": "/images/id-11134207-7r98q-lwmsq0w6fshp57.jpeg",
    "category": "khong-guan"
  },
  {
    "id": 95,
    "title": "KG WAFER CHOCOLATE 1300GX6TIN",
    "image": "/images/khong_guan_khong_guan_wafers_wafer_chocolate_1300g_1300_gram_full01_flj9p04c.jpg",
    "category": "khong-guan"
  },
  {
    "id": 96,
    "title": "KG WAFER CHOCOLATE 600GX6 TIN",
    "image": "/images/53209521-d7be-4819-9f02-20ad43bdff7c.jpg",
    "category": "khong-guan"
  },
  {
    "id": 97,
    "title": "KG WAFER CLASSIC CHOCOLATE MINI 310GX6TIN",
    "image": "/images/classicmini.jpg",
    "category": "khong-guan"
  },
  {
    "id": 98,
    "title": "KG WAFER CLASSIC COKLAT 350X12 PAK",
    "image": "/images/khong_guan_khong_guan_-_classic_chocolate_wafer_-_350_gr_full01_ebr8sen.webp",
    "category": "khong-guan"
  },
  {
    "id": 99,
    "title": "KG WAFER GRAND CLASSIC CHOCOLATE 18GX10PX20RCG",
    "image": "/images/sg-11134201-22120-zfmc7ldqq4kvd5.jpeg",
    "category": "khong-guan"
  },
  {
    "id": 100,
    "title": "KG WAFER GRAND CLASSIC CHOCOLATE 72GX30 PAK",
    "image": "/images/3a75e020414bf0c1cb8f59e8853fa8cc.jpg",
    "category": "khong-guan"
  }
];

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [popupVisible, setPopupVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [aboutVisible, setAboutVisible] = useState(false);

  const filteredProducts = products.filter(
    (product) => activeCategory === 'all' || product.category === activeCategory
  );

  const productCategories = Array.from(
    new Set(products.map((product) => product.category))
  );

  const aboutDescription = `
    
     
    We specialize in offering a wide range of items in categories such as ${productCategories.join(', ')}.
    Our commitment is to deliver the best products that meet the diverse needs of our customers.
  `;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsButtonVisible(false);
        setPopupVisible(false)
      } else {
        // Scrolling up
        setIsButtonVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="app">
      <header className="header">
        <a> </a>
        <ul className="list">
          <li>
            <a href="https://wa.me/62895346372918?text=Saya%20tertarik%20dengan%20produk%20yang%20Anda%20jual" 
            target='_blank'
            ><FaWhatsapp /> CONTACT SALESMAN</a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setAboutVisible(true);
              }}
            >
              <FaInfoCircle /> ABOUT
            </a>
          </li>
        </ul>
      </header>
      <main className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <div className="product-details">
              <h3>{product.title}</h3>
            </div>
          </div>
        ))}
      </main>

      {popupVisible && (
        <div className="popup">
          <h3>Options</h3>
          <button onClick={() => setActiveCategory('all')}>All</button>
          <button onClick={() => setActiveCategory('BKP')}>BKP</button>
          <button onClick={() => setActiveCategory('bites-gummyworld')}>Bites Gummyworld</button>
          <button onClick={() => setActiveCategory('yafindo')}>Yafindo</button>
          <button onClick={() => setActiveCategory('khong-guan')}>Khong Guan</button>
          <button onClick={() => setPopupVisible(false)}>Close</button>
        </div>
      )}

      <button
        className={`floating-button ${isButtonVisible ? 'visible' : 'hidden'}`}
        onClick={() => setPopupVisible(true)}
      >
        <IoOptionsOutline />
      </button>

      {aboutVisible && (
        <div className="about-popup">
          <div className="about-content">
            <button
              className="close-button"
              onClick={() => setAboutVisible(false)}
            >
              {/* &times;  */}
              <IoMdCloseCircle />  
            </button>
            <h2>About This App</h2>
            <p>This is a catalogue app. Jadi tolong jangan expect price nya to be listed.</p>
            <p>Web based app ini lahir/ada karena me myself as a salesman, banyak yang minta/tanya produknya apa aja.
            Jadi saya bikin aja ini. Buat dikirim via chat/bisa buat nunjukin ketika ditoko Anda. Make my work simpler.</p>
            <p>If you don't know me, my name is Wahid. Sales dari CV. Lumbung Pangan Semesta yang bergerak dibidang distribusi FMCG.</p>
            <br />
            <br />
            <em style={{fontSize:'.8rem'}}>This project also available on GitHub if you want to clone it.</em><br />
            <div className='social'>
            <a style={{textDecoration:'none'}} href='https://github.com/page403/cat/' target='_blank'>
              
                <FaGithub /><br /> Clone
              </a>
            <a style={{textDecoration:'none'}} href='https://instagram.com/mazwahid' target='_blank'>
              
                <FaInstagram /> <br /> Get in Touch
              </a>
              </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;