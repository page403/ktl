import React, { useState, useEffect } from 'react';
import './App.css';
import { IoOptionsOutline } from "react-icons/io5";
import { FaInfoCircle, FaWhatsapp, FaGithub, FaInstagram } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";




// Sample product data
const products = [
  { "price": 98000,
    "id": 1727180,
    "title": "SNOW CAKE COKELAT 60 PCS",
    "image": "/images/sk-cklt.jpg",
    "category": "mochi"
  },
    { "price": 98000,
    "id": 179177180,
    "title": "SNOW CAKE SUSU 60 PCS",
    "image": "/images/sk-susu.jpg",
    "category": "mochi"
  },
    { "price": 98000,
    "id": 72718371,
    "title": "SNOW CAKE STROBERI 60 PCS",
    "image": "/images/sk-stro.jpg",
    "category": "mochi"
  },
    { "price": 98000,
    "id": 8888368180,
    "title": "SNOW CAKE MANGGA 60 PCS",
    "image": "/images/sk-mangga.jpg",
    "category": "mochi"
  },

    { "price": 97500,
    "id": 736282828368180,
    "title": "NAROSA 60 PCS",
    "image": "/images/narosa.jpg",
    "category": "roti"
  },

  { "price": 215000,
    "id": 111118368180,
    "title": "SLAWET BAR 6x50",
    "image": "/images/slawet.jpg",
    "category": "ciki"
  },

  { "price": 150000,
    "id": 222228368180,
    "title": "UDANG 10x10",
    "image": "/images/udang.jpg",
    "category": "ciki"
  },
  
  { "price": 74000,
    "id": 33333368180,
    "title": "TOKORASA MINI STICK 10x10",
    "image": "/images/takorasa.jpg",
    "category": "ciki"
  },
  
  { "price": 107000,
    "id": 17262872,
    "title": "OOJHI BAKAR X 60",
    "image": "/images/o-bakar.jpg",
    "category": "oojhi"
  },
  { "price": 92000,
    "id": 17736282872,
    "title": "OOJHI DUO X 60",
    "image": "/images/o-duo.jpg",
    "category": "oojhi"
  },

  { "price": 107000,
    "id": 89262872,
    "title": "OOJHI BUN X 60",
    "image": "/images/o-bun.jpg",
    "category": "oojhi"
  },
  {
    "price": 98000,
    "id": 917290,
    "title": "*NAGASAKI X60PCS",
    "image": "/images/nagasakii.jpg",
    "category": "roti"
  },
  {
    "price": 98000,
    "id": 98888888290,
    "title": "KUE SALJU COKELAT X60PCS",
    "image": "/images/salju1.png",
    "category": "roti"
  },
  {
    "price": 98000,
    "id": 99999999290,
    "title": "KUE SALJU STROBERI X60PCS",
    "image": "/images/salju2.png",
    "category": "roti"
  },
   {
    "price": 98000,
    "id": 171717181719999290,
    "title": "KUE SALJU MANGGA X60PCS",
    "image": "/images/salju3.png",
    "category": "roti"
  },
   {
    "price": 98000,
    "id": 738166666282999290,
    "title": "KUE SALJU BLUBERI X60PCS",
    "image": "/images/salju4.png",
    "category": "roti"
  },
  { "price": 97500,
    "id": 1111117,
    "title": "AOKA GULUNG X 60 PCS",
    "image": "/images/aoka-gulung.jpeg",
    "category": "aoka"
  },
    { "price": 93000,
    "id": 172838117,
    "title": "AOKA DONAT X 40 PCS",
    "image": "/images/aoka-donat.jpeg",
    "category": "aoka"
  },
    { "price": 97500,
    "id": 839311117,
    "title": "AOKA HOLEY X 60 PCS",
    "image": "/images/aoka-holey.jpeg",
    "category": "aoka"
  },
  { "price": 97500,
    "id": 1111127,
    "title": "AOKA PANDA X 60 PCS",
    "image": "/images/aoka-panda.jpeg",
    "category": "aoka"
  },
  
  { "price": 107500,
    "id": 1111118,
    "title": "AOKA X 60 PCS",
    "image": "/images/aoka-panggang.jpeg",
    "category": "aoka"
  },
    { "price": 68000,
    "id": 119021118,
    "title": "TANGO BROWNIESx4x10 PCS",
    "image": "/images/t-b.png",
    "category": "ot"
  },
  {
    "price": 21000,
    "id": 990,
    "title": "RON 88 240MLX24",
    "image": "/images/ron200.jpeg",
    "category": "ron88"
  },
  {
    "price": 31200,
    "id": 991,
    "title": "RON 88 380MLX24",
    "image": "/images/ron380.jpeg",
    "category": "ron88"
  },
      {
    "price": 37000,
    "id": 992,
    "title": "RON 88 600MLX24",
    "image": "/images/ron600.jpg",
    "category": "ron88"
  },
  {
    "price": 40000,
    "id": 993,
    "title": "RON 88 1500MLX12",
    "image": "/images/ron1500.jpeg",
    "category": "ron88"
  },
  {
    "price": 15000,
    "id": 994,
    "title": "RON 88 19L",
    "image": "/images/GALON19.jpg",
    "category": "ron88"
  },
    { "price": 115000,
    "id": 1311106,
    "title": "JAHE 61 20X40X125G",
    "image": "/images/jahe.jpeg",
    "category": "permen"
  },
  {
    "price": 119000,
    "id": 1,
    "title": "3D FUN GUM GUMMY CANDIES 12X12X15GR",
    "image": "/images/1.jpeg",
    "category": "bites-gummyworld"
  },
  { "price": 119000,
    "id": 2,
    "title": "3D GUMMY DUCKLING 12X12X15GR",
    "image": "/images/2.png",
    "category": "bites-gummyworld"
  },
  { "price": 119000,
    "id": 3,
    "title": "3D GUMMY ICE CONE 12X12X15GR",
    "image": "/images/3.jpeg",
    "category": "bites-gummyworld"
  },
  { "price": 119000,
    "id": 4,
    "title": "3D GUMMY ORANGE 12X12X15GR",
    "image": "/images/4.jpg",
    "category": "bites-gummyworld"
  },
  { "price": 119000,
    "id": 5,
    "title": "3D GUMMY STRAWBERRY PILLOWS 12X12X15GR",
    "image": "images/5.jpeg",
    "category": "bites-gummyworld"
  },
    {
      "price": 119000,
    "id": 6,
    "title": "3D HAPPY BEAR 12X12X15GR",
    "image": "/images/bear.png",
    "category": "bites-gummyworld"
  },
  
  
  { "price": 32400,
    "id": 7,
    "title": "BLEZZ GULAS",
    "image": "/images/blez.jpeg",
    "category": "yafindo"
  },
  { "price": 32400,
    "id": 8,
    "title": "BLEZZ MANGGA MADU",
    "image": "images/blez-mangga.jpeg",
    "category": "yafindo"
  },
  { "price": 102000,
    "id": 9,
    "title": "DENEX BISCUIT STICK CHOCOLATE WHIT BOX 33GRX6",
    "image": "/images/denex.jpeg",
    "category": "denex"
  },
  { "price": 102000,
    "id": 10,
    "title": "DENEX BISCUIT STICK STRAWBERRY WHIT BOX 33GRX6",
    "image": "/images/denex-stick-cklt.jpeg",
    "category": "denex"
  },
  { "price": 105000,
    "id": 18976140,
    "title": "DENEX BUTTER COOKIES 90GRX24",
    "image": "/images/Denex_Butter_Cookies_90gr.webp",
    "category": "denex"
  },
  { "price": 205000,
    "id": 19630,
    "title": "DENEX MINI BLACK COKELAT 35GRX6X20",
    "image": "/images/mbcoklat.jpg",
    "category": "denex"
  },
  { "price": 205000,
    "id": 183630,
    "title": "DENEX MINI BLACK TIRAMISU 35GRX6X20",
    "image": "/images/mbtiramisu.jpg",
    "category": "denex"
  },
  { "price": 205000,
    "id": 1967230,
    "title": "DENEX MINI BLACK ORANGE 35GRX6X20",
    "image": "/images/mborange.jpg",
    "category": "denex"
  },
  { "price": 48500,
    "id": 11,
    "title": "DENEX FUNIMAL CHOCOLATE 28GR X 30",
    "image": "/images/funimal-cklt.png",
    "category": "denex"
  },
  { "price": 48500,
    "id": 12,
    "title": "DENEX FUNIMAL STRAWBERRY 28GR X 30P",
    "image": "/images/funimal-van.webp",
    "category": "denex"
  },
  { "price": 48500,
    "id": 13,
    "title": "DENEX FUNIMAL VANILA 28GR X 30P",
    "image": "/images/fun-van.webp",
    "category": "denex"
  },
  { "price": 45500,
    "id": 29,
    "title": "DENEX MILK COCONUT ORANGE 20GR",
    "image": "/images/m.jpg",
    "category": "denex"
  },
  { "price": 45500,
    "id": 30,
    "title": "DENEX MINI BLACK CRACKERS 20GRX10X6RTG",
    "image": "/images/Mini_Black_Crackers_25gr.webp",
    "category": "denex"
  },
  { "price": 45500,
    "id": 31,
    "title": "DENEX MINI CRACKERS 20GRX10X6RTG",
    "image": "/images/Mini_Crackers_25gr.webp",
    "category": "denex"
  },
  { "price": 60600,
    "id": 33,
    "title": "DENEX VEGETABLE & CHEESE STICK 50GRX40P",
    "image": "/images/Denex_Vegetable_and_Cheese_Stick_50gr.webp",
    "category": "denex"
  },
  { "price": 80000,
    "id": 34,
    "title": "DRAGONFLY WHEAT FLOUR 10X1KG",
    "image": "/images/drag1.webp",
    "category": "harvestar"
  },
  { "price": 165800,
    "id": 35,
    "title": "DRAGONFLY WHEAT FLOUR 40X500G",
    "image": "/images/drag500.jpeg",
    "category": "harvestar"
  },
  { "price": 245000,
    "id": 36,
    "title": "FILOO BALLS BISCUIT CHOCOBALL 20JAR X 35PCS",
    "image": "/images/filoo-balls.jpg",
    "category": "yafindo"
  },
  { "price": 96000,
    "id": 37,
    "title": "FILOO CUBES CHOCOMILK SCH 6X10X1BG",
    "image": "/images/filoo-cubes-rcg.jpg",
    "category": "yafindo"
  },
  { "price": 204000,
    "id": 38,
    "title": "FILOO CUBES CHOCOMILK TPL 12*50*3GR",
    "image": "/images/filoo-cubes-tpl.jpg",
    "category": "yafindo"
  },
  { "price": 96000,
    "id": 39,
    "title": "FILOO SOES CHOCO CREAM 6RCG*10PCS*25GR",
    "image": "/images/filoo-soes.png",
    "category": "yafindo"
  },
  { "price": 119000,
    "id": 40,
    "title": "FUNNY BEAR BURGER 12X12X15GR",
    "image": "/images/funny-b.jpg",
    "category": "bites-gummyworld"
  },
  { "price": 119000,
    "id": 41,
    "title": "FUNNY BEAR PIZZA 12X12X15GR",
    "image": "/images/funny-p.jpg",
    "category": "bites-gummyworld"
  },
  { "price": 172000,
    "id": 42,
    "title": "JA MONA KOPYOR 20X300G",
    "image": "/images/mona.jpg",
    "category": "khong-guan"
  },
  { "price": 96000,
    "id": 43,
    "title": "JB BISTAR BLUBERI 12X10X16G",
    "image": "/images/bistar-blue.webp",
    "category": "khong-guan"
  },
  { "price": 96000,
    "id": 44,
    "title": "JB BISTAR NANAS 12X10X16G",
    "image": "/images/bistar-nanas.webp",
    "category": "khong-guan"
  },
  { "price": 96000,
    "id": 45,
    "title": "JB BISTAR STROBERI 12X10X16G",
    "image": "/images/bistar-stro.webp",
    "category": "khong-guan"
  },
  { "price": 77000,
    "id": 46,
    "title": "JELLY MARICO ANGGUR",
    "image": "/images/anggur.png",
    "category": "yafindo"
  },
  { "price": 77000,
    "id": 47,
    "title": "JELLY MARICO JAMBU",
    "image": "/images/jambu.jpg",
    "category": "yafindo"
  },
  { "price": 77000,
    "id": 48,
    "title": "JELLY MARICO MANGGA",
    "image": "/images/mangga.jpg",
    "category": "yafindo"
  },
  { "price": 77000,
    "id": 49,
    "title": "JELLY MARICO STRAWBERY",
    "image": "/images/marico-stro.jpg",
    "category": "yafindo"
  },

  { "price": 315000,
    "id": 58,
    "title": "KG ASSORTED OPP RED 300GX20P",
    "image": "/images/khong-guan_khong-guan-asst-opp-red-275-gr_full01.webp",
    "category": "khong-guan"
  },
  { "price": 153000,
    "id": 580,
    "title": "KG CAMINO TRIPLE JOY 120GX18P",
    "image": "/images/camino.jpg",
    "category": "khong-guan"
  },
  { "price": 220000,
    "id": 59,
    "title": "KG CIZZRING KUKIS SAGU KEJU 135GX20PAK",
    "image": "/images/cizz.jpg",
    "category": "khong-guan"
  },
  { "price": 125000,
    "id": 60,
    "title": "KG CREAM CRACKERS 120GX20",
    "image": "/images/khong_guan_khong_guan_cream_crackers_120_gram_full01_hn0ww3pv.webp",
    "category": "khong-guan"
  },
  { "price": 136000,
    "id": 61,
    "title": "KG CREAM CRACKERS 200GX16 PAK",
    "image": "/images/cc200.jpg",
    "category": "khong-guan"
  },
  { "price": 354000,
    "id": 62,
    "title": "KG CREAM CRACKERS 350GX24 PAK",
    "image": "/images/cc350.jpg",
    "category": "khong-guan"
  },
  { "price": 102000,
    "id": 63,
    "title": "KG GABIN COKELAT 16GX12PX10RCG",
    "image": "/images/sg-11134201-22110-mvmbaylahfjv3d.jpeg",
    "category": "khong-guan"
  },
  { "price": 132000,
    "id": 1063,
    "title": "KG GABIN COKELAT 100GX20P",
    "image":"/images/gabinpak.jpeg",
    "category": "khong-guan"
  },
  
  { "price": 138000,
    "id": 64,
    "title": "KG KRAKERS SAYUR 135GX20 PAK",
    "image": "/images/csayur.png",
    "category": "khong-guan"
  },
  { "price": 102000,
    "id": 65,
    "title": "KG LA COCO CHOCOLATE 24GX12PX10RCG",
    "image": "/images/lacoco.jpg",
    "category": "khong-guan"
  },
  { "price": 235000,
    "id": 66,
    "title": "KG LEMON PUFF CREAM 6KGX1TIN",
    "image": "/images/lemonpuff.jpg",
    "category": "khong-guan"
  },
  { "price": 68000,
    "id": 67,
    "title": "KG MALKIST ABON SAPI 21GX8PX10RCG",
    "image": "/images/abonrcg.webp",
    "category": "khong-guan"
  },
  { "price": 138000,
    "id": 68,
    "title": "KG MALKIST ABON SAPI 135GX20 PAK",
    "image": "/images/44281989_8e4d66be-c070-45f5-839d-2df2f1eaeedc_800_800.jpeg",
    "category": "khong-guan"
  },
  { "price": 128000,
    "id": 70,
    "title": "KG MALKIST CRACKERS 200GX16PAK",
    "image": "/images/id-11134207-7rask-m15sgj7da1oi76.jpeg",
    "category": "khong-guan"
  },
  { "price": 130000,
    "id": 71,
    "title": "KG MALKIST CRACKERS 135GX20",
    "image": "/images/12fced34-378a-4721-8d24-4614eaf12010.jpg",
    "category": "khong-guan"
  },
  { "price": 68000,
    "id": 72,
    "title": "KG MALKIST CRACKERS 21GX8PX10RCG",
    "image": "/images/38c2256d-0032-40a9-851f-f6a435a156fb.jpeg",
    "category": "khong-guan"
  },
  { "price": 68000,
    "id": 73,
    "title": "KG MALKIST KELAPA 21GX8PX10RCG",
    "image": "/images/khong_guan_khongguan_malkist_kelapa_27_gram_-10_pcs-_full02_kwosnuda.webp",
    "category": "khong-guan"
  },
  { "price": 132000,
    "id": 74,
    "title": "KG MALKIST SALUT COKLAT 100GX20PAK",
    "image": "/images/id-11134207-7rask-m2aoewx90zy132.jpeg",
    "category": "khong-guan"
  },
  { "price": 138000,
    "id": 75,
    "title": "KG MALKIST SEAWEED 135GX20 PAK",
    "image": "/images/71160237_d3a21b88-2f4a-4faa-92ea-e9203daa7ba0_800_800.jpeg",
    "category": "khong-guan"
  },
  { "price": 330000,
    "id": 76,
    "title": "KG MARIE SPECIAL 225GX24 PAK",
    "image": "/images/ProductMariebiscuit_khongguan_225gr.png",
    "category": "khong-guan"
  },
  { "price": 188000,
    "id": 77,
    "title": "KG MARIE SUSU 160GX20 PAK",
    "image": "/images/2d519d1c4158ba8743105cc693a91bde.jpeg",
    "category": "khong-guan"
  },
  { "price": 177000,
    "id": 7172737,
    "title": "KG MARIE SUSU CLASSIC 375GX12 PAK",
    "image": "/images/msusu.jpeg",
    "category": "khong-guan"
  },
  { "price": 102000,
    "id": 78,
    "title": "KG SALTCHEESE COMBERRY 17GX12PX10RCG",
    "image": "/images/cb.jpg",
    "category": "khong-guan"
  },
  { "price": 206000,
    "id": 79,
    "title": "KG SALTCHEESE COMBO 175GX20 PAK",
    "image": "/images/scb.jpg",
    "category": "khong-guan"
  },
  { "price": 126000,
    "id": 80,
    "title": "KG SALTCHEESE COMBO 17GX12BAGX10RCG",
    "image": "/images/9fa3dcab26f1312ce09e95cb42334ec3.jpeg",
    "category": "khong-guan"
  },
  { "price": 102000,
    "id": 81,
    "title": "KG SALTCHEESE COMBO 17GX12PX10RCG",
    "image": "/images/comborcg1.jpg",
    "category": "khong-guan"
  },
  { "price": 102000,
    "id": 82,
    "title": "KG SALTCHEESE COMBO 34GRX6PAKX10RTG",
    "image": "/images/id-11134207-7r98y-llkcrt4uxqocea.jpeg",
    "category": "khong-guan"
  },
  { "price": 196000,
    "id": 83,
    "title": "KG SALTCHEESE COMBOCIZ 175GX20 PAK",
    "image": "/images/72dc7c94-5bfa-46e4-8c36-8fca8c64c5b2.jpg",
    "category": "khong-guan"
  },
  { "price": 102000,
    "id": 84,
    "title": "KG SALTCHEESE COMBOCIZ 17GX12PX10RCG",
    "image": "/images/cbciz.jpg",
    "category": "khong-guan"
  },
  { "price": 264000,
    "id": 85,
    "title": "KG SALTCHEESE CRACKERS 200GX30",
    "image": "/images/b22536504c24d29ed0ee97768eb25502.jpeg",
    "category": "khong-guan"
  },

  { "price": 264000,
    "id": 88,
    "title": "KG SALTCHEESE CRACKERS BARBEQUE 200GX30",
    "image": "/images/76cee77302d7520c897c200fe3984f89.jpeg",
    "category": "khong-guan"
  },
  { "price": 204000,
    "id": 89,
    "title": "KG SALTCHEESE CRACKERS GT 200GX24PAK",
    "image": "/images/b22536504c24d29ed0ee97768eb25502.jpeg",
    "category": "khong-guan"
  },
  { "price": 184000,
    "id": 90,
    "title": "KG SALTCHEESE CRACKERS POCKET 100GX40",
    "image": "/images/6540910_2f8354da-3396-46e1-9172-308ab18aad47_672_672.jpeg",
    "category": "khong-guan"
  },
  { "price": 204000,
    "id": 91,
    "title": "KG SUPERCO 138GX30 PAK",
    "image": "/images/ca506d6709893db4c1345b8b1800b807.jpeg",
    "category": "khong-guan"
  },
  { "price": 102000,
    "id": 92,
    "title": "KG SUPERCO 22GX12PX10RCG",
    "image": "/images/superco.png",
    "category": "khong-guan"
  },
  { "price": 102000,
    "id": 921,
    "title": "KG SUPERCO GANDUM 14GX12PX10RCG",
    "image": "/images/superco-gandum.jpg",
    "category": "khong-guan"
  },
  { "price": 102000,
    "id": 93,
    "title": "KG SUPERCO 33GX6PX10RCG",
    "image": "/images/sg-11134201-7rbkt-lplscopgwwep41.jpeg",
    "category": "khong-guan"
  },
  { "price": 102000,
    "id": 94,
    "title": "KG SUPERCO LEMON 22GX12PX10RCG",
    "image": "/images/id-11134207-7r98q-lwmsq0w6fshp57.jpeg",
    "category": "khong-guan"
  },

  { "price": 234000,
    "id": 98,
    "title": "KG WAFER CLASSIC COKLAT 350X12 PAK",
    "image": "/images/khong_guan_khong_guan_-_classic_chocolate_wafer_-_350_gr_full01_ebr8sen.webp",
    "category": "khong-guan"
  },
  { "price": 170000,
    "id": 99,
    "title": "KG WAFER GRAND CLASSIC CHOCOLATE 18GX10PX20RCG",
    "image": "/images/sg-11134201-22120-zfmc7ldqq4kvd5.jpeg",
    "category": "khong-guan"
  },
  { "price": 141000,
    "id": 100,
    "title": "KG WAFER GRAND CLASSIC CHOCOLATE 72GX30 PAK",
    "image": "/images/3a75e020414bf0c1cb8f59e8853fa8cc.jpg",
    "category": "khong-guan"
  },

  { "price": 80000,
    "id": 102,
    "title": "KITARO SNACK MI AYAM 5*20*18 GR",
    "image": "/images/GfU6idLFJe12Tcb2rQljSPfJGdS9eFMKizGWcJXK.jpg",
    "category": "yafindo"
  },
  { "price": 80000,
    "id": 103,
    "title": "KITARO SNACK MI ORI 5*20*18 GR",
    "image": "/images/UDhAEGpuXMPs4sTrpnZzl4rXid8a4QoEapyEh0ep.jpg",
    "category": "yafindo"
  },
  { "price": 102000,
    "id": 104,
    "title": "LEMONIA CHOCOLATE 18GRX12PAKX10SCT",
    "image": "/images/9e85a2a8d1083fd36796008d2b3f2ba2.jpeg",
    "category": "khong-guan"
  },
  { "price": 252000,
    "id": 105,
    "title": "LEMONIA CHOCOLATE COOKIES 130GX36",
    "image": "/images/2d519d1c4158ba8743105cc693a91bde.jpg",
    "category": "khong-guan"
  },
  { "price": 156000,
    "id": 106,
    "title": "LEMONIA CHOCOLATE COOKIES GT 130GX24PAK",
    "image": "/images/2d519d1c4158ba8743105cc693a91bde.jpg",
    "category": "khong-guan"
  },
  { "price": 252000,
    "id": 107,
    "title": "LEMONIA COOKIES 130GX36",
    "image": "/images/nissin_nissin_lemonia_130_gr_full01_cgeejw6x.webp",
    "category": "khong-guan"
  },
  { "price": 102000,
    "id": 108,
    "title": "LEMONIA COOKIES 20GX12X10",
    "image": "/images/nissin_nissin_lemonia_cookies_original_20_gr_full01_ndgc3l98.webp",
    "category": "khong-guan"
  },

  { "price": 156000,
    "id": 110,
    "title": "LEMONIA COOKIES GT 130GX24PAK",
    "image": "/images/nissin_nissin_lemonia_130_gr_full01_cgeejw6x.webp",
    "category": "khong-guan"
  },

  { "price": 250000,
    "id": 112,
    "title": "MARGARIN FORVITA 500 GR X24",
    "image": "/images/id-11134207-7r992-lswtiljxk1ev34.jpeg",
    "category": "bkp"
  },
  { "price": 342000,
    "id": 113,
    "title": "MARGARIN FORVITA 60X200G",
    "image": "/images/b8e923d3366aff0dacaa3ebd926750d4.png_720x720q80.png",
    "category": "bkp"
  },
  { "price": 32400,
    "id": 114,
    "title": "MARICO CUP JUMBO DEGAN",
    "image": "/images/Frame-140-1024x1024.png",
    "category": "yafindo"
  },
  { "price": 32400,
    "id": 115,
    "title": "MARICO CUP JUMBO KELAPA JERUK",
    "image": "/images/kelapaj.png",
    "category": "yafindo"
  },
  { "price": 32400,
    "id": 116,
    "title": "MARICO CUP JUMBO LECI",
    "image": "/images/Frame-139-1024x1024.png",
    "category": "yafindo"
  },
  { "price": 32400,
    "id": 117,
    "title": "MARICO CUP JUMBO MANGGA MADU",
    "image": "/images/manggamadu.png",
    "category": "yafindo"
  },
  { "price": 32400,
    "id": 118,
    "title": "MARICO CUP JUMBO MELON",
    "image": "/images/Frame-138-1024x1024.png",
    "category": "yafindo"
  },
  { "price": 79380,
    "id": 119,
    "title": "MARICO JELLY GUM ANGGUR",
    "image": "/images/a08f54cb566aa1d55c5b4f4a41cf35cc.jpeg",
    "category": "yafindo"
  },
  { "price": 79380,
    "id": 120,
    "title": "MARICO JELLY GUM LECI",
    "image": "/images/21607edfd37a0a7432a1d66f25f8d2c7.jpeg",
    "category": "yafindo"
  },
  { "price": 79380,
    "id": 121,
    "title": "MARICO JELLY GUM MANGGA",
    "image": "/images/213f5151246e07b637666a8489340546.jpeg",
    "category": "yafindo"
  },
  { "price": 79380,
    "id": 122,
    "title": "MARICO JELLY GUM STRAWBERY",
    "image": "/images/sg-11134201-7rbl6-lmugpkpdlis9f9.jpeg",
    "category": "yafindo"
  },

  { "price": 102000,
    "id": 124,
    "title": "MD BOURBON CHOCOLATE 12X10X24G",
    "image": "/images/monde_monde_bourbon_coklat_mini_biscuit_24gr_-10_sachet-renceng-_full01_oo4tp2s0.jpg",
    "category": "khong-guan"
  },

  { "price": 290000,
    "id": 126,
    "title": "MD GENJI LEMON PIE 20X95G",
    "image": "/images/03c94915-fe04-4a80-a7c1-e0e140e8c93b.jpeg",
    "category": "khong-guan"
  },
  { "price": 216000,
    "id": 127,
    "title": "MD GENJI LEMON PIE 24X85G",
    "image": "/images/monde_monde-genji-pie-lemon-85-gr_full01.webp",
    "category": "khong-guan"
  },
  { "price": 168000,
    "id": 128,
    "title": "MD GENJI MINI ORIGINAL PIE 24X50G",
    "image": "/images/monde_monde-genji-mini-pie-original-50-gr_full01.webp",
    "category": "khong-guan"
  },
  { "price": 290000,
    "id": 129,
    "title": "MD GENJI ORIGINAL PIE 20X85G",
    "image": "/images/monde_monde_genji_pie_85_gr_full01_trs0onwt.webp",
    "category": "khong-guan"
  },
  { "price": 216000,
    "id": 130,
    "title": "MD GENJI ORIGINAL PIE 24X70G",
    "image": "/images/id-11134207-7r98p-lzogsvbkbv1ae3.jpeg",
    "category": "khong-guan"
  },
  { "price": 290000,
    "id": 131,
    "title": "MD GENJI RAISIN PIE 20X95G",
    "image": "/images/1fc4163a41b38728dc8602ca249a0275.jpeg",
    "category": "khong-guan"
  },
  { "price": 216000,
    "id": 132,
    "title": "MD GENJI RAISIN PIE 24X85G",
    "image": "/images/monde_monde-genji-raisin-pie--85-g-_full03.webp",
    "category": "khong-guan"
  },
  { "price": 216000,
    "id": 133,
    "title": "MD GENJI SOFT PIE COKLAT 24X85G",
    "image": "/images/monde_genji_soft_pie_chocolate_85_gr_full03_os7jhcjt.webp",
    "category": "khong-guan"
  },
  { "price": 216000,
    "id": 134,
    "title": "MD GENJI SOFT PIE STRAWBERRY 24X85G",
    "image": "/images/00085920107a.jpg",
    "category": "khong-guan"
  },
  { "price": 290000,
    "id": 135,
    "title": "MD GENJI STRAWBERRY PIE 20X95G",
    "image": "/images/monde_genji_strawberry_pie_95_gr_full03_m1g356lx.webp",
    "category": "khong-guan"
  },
  { "price": 216000,
    "id": 136,
    "title": "MD GENJI STRAWBERRY PIE 24X85G",
    "image": "/images/71160237_a104ca90-5c70-400c-ad25-2348756a0cc5_900_900.jpeg",
    "category": "khong-guan"
  },
    { "price": 228000,
    "id": 135006,
    "title": "MD CHOCOLATE PUFF 24X100G",
    "image": "/images/cpuff.jpeg",
    "category": "khong-guan"
  },
  { "price": 228000,
    "id": 130006,
    "title": "MD LEMON PUFF 24X100G",
    "image": "/images/lpuff.jpeg",
    "category": "khong-guan"
  },
  { "price": 192000,
    "id": 137,
    "title": "MD piebis 24x190g",
    "image": "/images/mdpiebis.jpg",
    "category": "khong-guan"
  },
  { "price": 102000,
    "id": 138,
    "title": "MD PIEBIS 6X10X40G",
    "image": "/images/id-11134207-7qul1-lkdn8qh24jp2ed.jpeg",
    "category": "khong-guan"
  },
  { "price": 90000,
    "id": 1380,
    "title": "MD-POLA SNACK ORIGINAL 6X10X17G",
    "image": "/images/pola.jpg",
    "category": "khong-guan"
  },



  { "price": 102500,
    "id": 145,
    "title": "MINYAK FITRI 400ML",
    "image": "/images/id-11134207-7r98t-lrs21pledykma2.jpeg",
    "category": "bkp"
  },
  { "price": 105500,
    "id": 245,
    "title": "MINYAK FITRI 200ML",
    "image": "/images/fitri200.jpg",
    "category": "bkp"
  },
  { "price": 213000,
    "id": 146,
    "title": "MINYAK HEMART 900ML",
    "image": "/images/c2338eec-1b25-4826-ab31-32263bc7e84a.jpg",
    "category": "bkp"
  },
  { "price": 121000,
    "id": 147,
    "title": "MINYAK HEMART 500ML",
    "image": "/images/id-11134207-7r990-lt8zb329o22l68.jpeg",
    "category": "bkp"
  },
  { "price": 184000,
    "id": 148,
    "title": "MINYAK RIZKY 800ML",
    "image": "/images/8124a217403dc9e096470a92d5e0a149.png_720x720q80.png",
    "category": "bkp"
  },
  { "price": 94080,
    "id": 150,
    "title": "MY NORY AYAM",
    "image": "/images/SekKm5XKhzZrvxvNJ3zbxZBVSg4dH6E0hfc3M5gz.jpg",
    "category": "yafindo"
  },
  { "price": 94080,
    "id": 151,
    "title": "MY NORY BALADO",
    "image": "/images/T8WuDsmTd2A7Z3cSxFzQA9kcpArLJz8NAUAZPRkE.jpg",
    "category": "yafindo"
  },
  { "price": 94080,
    "id": 152,
    "title": "MY NORY MIE GORENG",
    "image": "/images/id-11134207-7ras8-m20v86wrqwls9b.jpeg",
    "category": "yafindo"
  },
  { "price": 94080,
    "id": 153,
    "title": "MY NORY ORI",
    "image": "/images/yMVIUStEeRrseGxqTI896YXWcKXLXNdi6WyS0qQb.jpg",
    "category": "yafindo"
  },
  { "price": 94080,
    "id": 154,
    "title": "MY NORY SAPI",
    "image": "/images/SekKm5XKhzZrvxvNJ3zbxZBVSg4dH6E0hfc3M5gz (1).jpg",
    "category": "yafindo"
  },

  
{ "price": 90000,
    "id": 1559622,
    "title": "NORI HOSHI KIMCHI",
    "image": "/images/nh5.jpg",
    "category": "nori"
  },

  { "price": 90000,
    "id": 84739612,
    "title": "NORI HOSHI ORIGINAL",
    "image": "/images/nh4.jpg",
    "category": "nori"
  },
  { "price": 90000,
    "id": 947222,
    "title": "NORI HOSHI PEDAS",
    "image": "/images/nh3.jpg",
    "category": "nori"
  },
  { "price": 90000,
    "id": 182612,
    "title": "NORI HOSHI AYAM BAKAR",
    "image": "/images/nh2.jpg",
    "category": "nori"
  },
  { "price": 90000,
    "id": 93738,
    "title": "NORI HOSHI SAPI PANGGANG",
    "image": "/images/nh1.jpg",
    "category": "nori"
  },

  
  { "price": 112160,
    "id": 155,
    "title": "NORI ONE ROLL BBQ",
    "image": "/images/bbq.png",
    "category": "nori-one"
  },
  { "price": 112160,
    "id": 156,
    "title": "NORI ONE ROLL MIE GORENG",
    "image": "/images/no-img.svg",
    "category": "nori-one"
  },
  { "price": 112160,
    "id": 157,
    "title": "NORI ONE ROLL ORIGINAL",
    "image": "/images/no-img.svg",
    "category": "nori-one"
  },
  { "price": 112160,
    "id": 158,
    "title": "NORI ONE ROLL SAMBAL MATAH",
    "image": "/images/sambal.jpg",
    "category": "nori-one"
  },

  { "price": 204000,
    "id": 166,
    "title": "NS BUTTER COCONUT BISKUIT 200GX24",
    "image": "/images/f58b47d0-8421-4894-8e73-9d8dd7011b08.jpg",
    "category": "khong-guan"
  },

  { "price": 182000,
    "id": 168,
    "title": "NS-FRYCHIP 20X300 G",
    "image": "/images/Biscuit-Exporter-Export-Cookies-Pie-Crackers-Sandwich-Wafers-Snacks-Assorted-Khong-Guan-Monde-Nissin-Indonesia-JCB-Food-pdk-bru-5.jpg",
    "category": "khong-guan"
  },
  { "price": 144000,
    "id": 169,
    "title": "NS-HEXA CRACKERS 18X225 G",
    "image": "/images/nissin_nissin-hexa-crackers-225-gram_full01.webp",
    "category": "khong-guan"
  },
  { "price": 102000,
    "id": 170,
    "title": "NS-RINDLE COCONUT 12X300 G",
    "image": "/images/1fe7440ed5abb80f90e5001c24c262d9.jpeg",
    "category": "khong-guan"
  },
  { "price": 102000,
    "id": 171,
    "title": "NS-RINDLE kopi 12X300 G",
    "image": "/images/id-11134207-7r98u-llbhlawfv6ltee.jpeg",
    "category": "khong-guan"
  },
  { "price": 182000,
    "id": 172,
    "title": "NS-STICK DURIAN 20X300 G",
    "image": "/images/stik-durian.jpg",
    "category": "khong-guan"
  },

  

  { "price": 62720,
    "id": 174,
    "title": "POPUKON KRMLLW COKLAT 4*10*20G***",
    "image": "/images/id-11134207-7r98t-lvx46vkh9x8td8.jpeg",
    "category": "yafindo"
  },
  { "price": 62720,
    "id": 175,
    "title": "POPUKON KRMLLW KARAMEL 4*10*20G***",
    "image": "/images/no-img.svg",
    "category": "yafindo"
  },
  { "price": 62720,
    "id": 176,
    "title": "POPUKON KRMLLW STROBERI 4*10*20G***",
    "image": "/images/id-11134207-7r98t-lvx46vkh9x8td8.jpeg",
    "category": "yafindo"
  },
  { "price": 49000,
    "id": 177,
    "title": "SOES POUCH ARJUNA KEJU 30 PCS",
    "image": "/images/1826100189096476672.jpg",
    "category": "arjuna"
  },
  { "price": 49000,
    "id": 178,
    "title": "SOES POUCH ARJUNA STRAWBERRY 30 PCS",
    "image": "/images/1826102443596668928.jpg",
    "category": "arjuna"
  },
  { "price": 49000,
    "id": 179,
    "title": "SOES POUCH ARJUNA VANILLA 30 PCS",
    "image": "/images/1826102736897081344.jpg",
    "category": "arjuna"
  },
  { "price": 49000,
    "id": 180,
    "title": "SOES POUCH ARJUNA COKELAT 30 PCS",
    "image": "/images/POUCH-SOES-ARJUNA-COKELAT-BACKGROUND.jpg",
    "category": "arjuna"
  },
  

  

  { "price": 102000,
    "id": 184,
    "title": "SR CHOCOLATE SHORTCAKE SIIP 42GX6PX10",
    "image": "/images/id-11134207-7r98q-lrfdaez3tydifd.jpeg",
    "category": "khong-guan"
  },
  { "price": 102000,
    "id": 185,
    "title": "SR KLIK CRACKERS 24GX12X10",
    "image": "/images/316698446_1815859535437422_1472623727682383011_n.jpg",
    "category": "khong-guan"
  },
  { "price": 168000,
    "id": 1853738,
    "title": "SR RODEO LONG CREAM CHOCOLATE 138gX24",
    "image": "/images/rodeo.jpg",
    "category": "khong-guan"
  },
  { "price": 294000,
    "id": 186,
    "title": "SR SHORTCAKE BANANA CREAM 225 G X 30 PAK",
    "image": "/images/464669168_18443122285066806_6183329551910662005_n.jpg",
    "category": "khong-guan"
  },
  { "price": 294000,
    "id": 187,
    "title": "SR SHORTCAKE COKLAT CREAM 225 G X 30 P",
    "image": "/images/399651208_18380286091066806_8473065539036180158_n.jpg",
    "category": "khong-guan"
  },
  { "price": 294000,
    "id": 188,
    "title": "SR SHORTCAKE MILK CREAM 225X30P",
    "image": "/images/56563b4c115399821618c1b83f3672c5.jpeg",
    "category": "khong-guan"
  },
  { "price": 294000,
    "id": 189,
    "title": "SR SHORTCAKE STRAWBERRY CREAM 225 G X 30 PAK",
    "image": "/images/ProductSerenastrawshortcake225gr.jpg",
    "category": "khong-guan"
  },
  { "price": 294000,
    "id": 190,
    "title": "SR SHORTCAKE TIRAMISU CREAM 225 G X 30 PAK",
    "image": "/images/id-11134207-7ras8-m1s2fi7x2nqp7a.jpeg",
    "category": "khong-guan"
  },

  { "price": 180000,
    "id": 192,
    "title": "SR TOGO LONG CREAM COKLAT 128GTX30PACK",
    "image": "/images/8fdbcc8d-c17f-4502-ab64-1b311818a538.jpg",
    "category": "khong-guan"
  },
  { "price": 180000,
    "id": 193,
    "title": "SR TOGO LONG CREAM PEANUT 128GX30P",
    "image": "/images/5f876ce2e2d9026417758eeafb128865.jpeg",
    "category": "khong-guan"
  },
  { "price": 102000,
    "id": 194,
    "title": "SR TOGO SIIP BLACK CREAM VANILA 22GGX12X10",
    "image": "/images/ef058aaf2004825061d4f590e5e0893f.jpeg",
    "category": "khong-guan"
  },
  { "price": 102000,
    "id": 195,
    "title": "SR TOGO SIIP CHOCOLATE 22GG12PX10",
    "image": "/images/fd10215dd9d9b44bfd6aa026d71185ae.jpeg",
    "category": "khong-guan"
  },
  { "price": 96000,
    "id": 196,
    "title": "TAMADA GEMSTAR 30 GRAM 6 PAK X 10",
    "image": "/images/f4xw2ylomftwk4ronfsgqltjmqxxk4dmn5qwi4zpmruxg5dsnfrhk5dpoixtcnjwge2tmmjygqxxa4tpmr2wg5bpguydqmbvgiytgmzpizfwy52vheydeodygnbeu6tknyxgu4dhh53t2nrqgatgqpjwgaya-.jpg",
    "category": "yafindo"
  },
  { "price": 88200,
    "id": 197,
    "title": "TAMADA MARSMELLOW CONE COKLAT 6X12X17G",
    "image": "/images/0pOCcxRTHTH47QZmN7tqrov0Lfx9TNOytRC7Phz4.jpg",
    "category": "yafindo"
  },
  { "price": 88200,
    "id": 198,
    "title": "TAMADA MARSMELLOW CONE STRAWBERRY 6X12X17G",
    "image": "/images/ixjieQgqYLCXljfbAwmc3pVEVe9EiIsLkteQvO3K.jpg",
    "category": "yafindo"
  },
  { "price": 88200,
    "id": 199,
    "title": "TAMADA MARSMELLOW CONE VANILA 6X12X17G",
    "image": "/images/UwzzCuKzoWTurSmIhzoIqiWWf4sqbeYuVK7Bloqq.jpg",
    "category": "yafindo"
  },
  { "price": 112896,
    "id": 200,
    "title": "TAMADA MARSMELLOW PIE COKLAT 12X24X4G",
    "image": "/images/8a142fd3ca4d37b1a6aac046b6a77c6f.png",
    "category": "yafindo"
  },
  { "price": 112896,
    "id": 201,
    "title": "TAMADA MARSMELLOW PIE STRAWBERRY 12X24X4G",
    "image": "/images/id-11134207-7r98r-lz0qr02x4izk8e.jpeg",
    "category": "yafindo"
  },
  { "price": 112896,
    "id": 202,
    "title": "TAMADA MARSMELLOW PIE VANILA 12X24X4G",
    "image": "/images/4941a3be19f2749714af1ace2ff7a173.png",
    "category": "yafindo"
  },
  { "price": 80000,
    "id": 203,
    "title": "TAMADA MEISESS 10X2X8GR",
    "image": "/images/YUdf30q7Xydud7PGZiO3riczB58X0i7oDV1j2N97.jpg",
    "category": "yafindo"
  },
  
  { "price": 154000,
    "id": 204,
    "title": "TP WAFER CHOCOLATE 14X300G",
    "image": "/images/tp.jpg",
    "category": "khong-guan"
  }
];

const kaoProducts = [
  {
    id: 1,
    "img": "/images/laurier_logo_l.png"
  },
  {
    id: 2,
    "img": "/images/Jergens-Logo.png"
  },
  {
    id: 3,
    "img": "/images/meg logo_east.png"
  },
  {
    id: 4,
    "img": "/images/logo-liese.png"
  },
  {
    id: 5,
    "img": "/images/merries-logo.jpg"
  },
  {
    id: 6,
    "img": "/images/mglogo.png"
  },
  {
    id: 7,
    "img": "/images/logo-liese.png"
  },
  {
    id: 8,
    "img": "/images/Jergens-Logo.png"
  },
]

const uniqueCategories = [...new Set(products.map(item => item.category))];
console.log(uniqueCategories)

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [popupVisible, setPopupVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [aboutVisible, setAboutVisible] = useState(false);

  function formatRupiah(number) {
    const formattedNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `Rp. ${formattedNumber}`;
  }

  const filteredProducts = products.filter(
    (product) => activeCategory === 'all' || product.category === activeCategory
  );

  const uniqueCategories = [...new Set(products.map(item => item.category))];

  const formattedCategories = uniqueCategories.map((category) => {
    return category
      .replace(/-/g, " ") // Replace all hyphens with spaces
      .split(" ") // Split the string into an array of words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
      .join(" "); // Join the words back into a string with spaces
  });
// mbuh
  useEffect(() => { 
    function handleOnBeforeUnload(event: BeforeUnloadEvent){
      event.preventDefault();
      return (event.returnValue = '');
    }
    window.addEventListener('beforeunload', handleOnBeforeUnload, {capture: true})
  },[]);
// ahir mbuh
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
        <a><img src='logo192.png' width={80} /></a>
        <ul className="list">
          <li>
            <a href="https://wa.me/62895346372918?text=Saya%20tertarik%20dengan%20produk%20yang%20Anda%20jual" 
            target='_blank'
            rel="noreferrer"
            ><FaWhatsapp /> Contact Salesman</a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setAboutVisible(true);
              }}
            >
              <FaInfoCircle /> Tentang
            </a>
          </li>
        </ul>
      </header>
      <main className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3 className='product-price'>{formatRupiah(product.price)}</h3>
            <div className="product-details">
              <p>{product.title}</p>
            </div>
          </div>
        ))}
      </main>

      {popupVisible && (
        <div className="popup">
          <h3>Options</h3>
          <button onClick={() => setActiveCategory('all')}>All</button>
          
            
            {formattedCategories.map((i) => (
              <>
              {/* <p>{i}</p> */}


              </>
              
              ))}
            {/* <div style={{ display:'flex', width:'100%', height:400, alignContent:'space-around'}}> */}

          <button onClick={() => setActiveCategory('bkp')}>BKP</button>
          <button onClick={() => setActiveCategory('arjuna')}>Arjuna</button>
          <button onClick={() => setActiveCategory('ron88')}>RON88</button>
          <button onClick={() => setActiveCategory('nori-one')}>Nori One</button>
          <button onClick={() => setActiveCategory('harvestar')}>Harvestar</button>
          <button onClick={() => setActiveCategory('denex')}>Denex</button>
          <button onClick={() => setActiveCategory('bites-gummyworld')}>Bites Gummyworld</button>
          <button onClick={() => setActiveCategory('yafindo')}>Yafindo</button>
          <button onClick={() => setActiveCategory('khong-guan')}>Khong Guan</button>
          <button onClick={() => setPopupVisible(false)}>Close</button>
            {/* </div> */}
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
            <p>This is an online catalogue app. Jadi harga pricelist.</p>
            <em><b>Satuan harga per karton.</b><br />
            <b>Harga belum potongan/promo.</b><br />
            <b>Harga sewaktu-waktu dapat berubah. Terutama minyak goreng.</b><br />
            <b>Harga sudah termasuk PPN.</b>
            </em><br />
            <p>Web based app ini lahir/ada karena me myself as a salesman, banyak yang minta/tanya produknya apa aja.
            Jadi saya bikin aja ini. Buat dikirim via chat. Make my work simpler.</p>
            <p>If you don't know me, my name is Wahid. Sales dari CV. Lumbung Pangan Semesta yang bergerak dibidang distribusi FMCG.</p>
            <br />
            <br />
            <em style={{fontSize:'.8rem'}}>This project also available on GitHub.</em><br />
            <div className='social'>
            <a style={{textDecoration:'none'}} href='https://github.com/page403/cat/' target='_blank'
            rel="noreferrer"
            >
                <FaGithub /><br /> Clone
              </a>
            <a style={{textDecoration:'none'}} href='https://instagram.com/mazwahid' target='_blank'
            rel="noreferrer"
            >
              
                <FaInstagram /> <br /> Get in Touch
              </a>
              </div>
          </div>
        </div>
      )}
      <div className='footer'>
        <div class="footer-content">
            <p>We're also trusted to distribute product from PT KAO Indonesia.</p>
            <img width='50%' src='/images/footer-kao.jpg' />
            <br />
            <p>© {new Date().getFullYear()}</p>
        </div>

    </div>
    </div>
  );
}

export default App;
