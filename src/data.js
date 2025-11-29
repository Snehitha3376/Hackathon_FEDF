// Single source of truth for all categories and items (6 images each).
// Each item: { id, title, price, img, description }

const data = {
  clothes: {
    title: 'Clothes',
    description: 'Traditional & contemporary garments made by tribal artisans.',
    items: [
      { id: 'c1', title: 'Handwoven frock', price: 899, img: 'https://img.freepik.com/premium-photo/traditional-african-dress-isolated-white-background_250469-15614.jpg', description: 'Hand-dyed indigo kurta.' },
      { id: 'c2', title: 'Block Print Kurta', price: 1299, img: 'https://64.media.tumblr.com/3d553129a313b9fe26aae87ce397518e/c8b19f11181329ae-e3/s1280x1920/ae1700b12e984ef69b1bd0a8992d82e919acb34d.png', description: 'Hand-block printed cotton dress.' },
      { id: 'c3', title: 'Embroidered Shawl', price: 1599, img: 'https://vjvnow.com/cdn/shop/products/red-tribal-motif-aari-embroidered-khadi-shawldupatta-with-lemon-cotton-lace-vjv-now-2.jpg?v=1740656265&width=720', description: 'Soft embroidered shawl.' },
      { id: 'c4', title: 'Natural Dye Scarf', price: 499, img: 'https://i.etsystatic.com/8826469/r/il/8c0244/4172895993/il_1080xN.4172895993_8wuj.jpg', description: 'Eco-friendly natural dye.' },
      { id: 'c5', title: 'Handloom Saree', price: 2499, img: 'https://www.sujatra.com/cdn/shop/products/26.2_Exclusive_hand_painted_gond_tribal_art_saree_on_brown_handloom_cotton_5d2539e9-b7c9-4203-885a-f86062c47343_grande.jpg?v=1672644219', description: 'Fine handloom saree.' },
      { id: 'c6', title: 'Patchwork Jacket', price: 1999, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNSN_pV-qkLxjnDWm5wrdJgM1hA2dAAb0b-Q&s', description: 'Upcycled patchwork jacket.' },
    ],
  },

  crafts: {
    title: 'Crafts',
    description: 'Home decor, baskets, woven goods, and more.',
    items: [
      { id: 'x1', title: 'Bamboo Basket', price: 399, img: 'https://www.bhatiacane.com/wp-content/uploads/2022/09/71UT4VwvsWL._SL1500_.jpg', description: 'Handwoven bamboo basket.' },
      { id: 'x2', title: 'Rattan Tray', price: 599, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4xXrUQ0t2Texu9GmzZ5JrOzb_-EAczlUbDg&s', description: 'Decorative rattan tray.' },
      { id: 'x3', title: 'Home Decor', price: 399, img: 'https://tse2.mm.bing.net/th/id/OIP.Ivfi_v86nHUmuPQfv2ri5QHaG5?pid=Api&P=0&h=180', description: 'Home Decor.'},
      { id: 'x4', title: 'Woven Wall Hanging', price: 599, img: 'https://img0.etsystatic.com/200/1/13760430/il_340x270.1460184918_jfwt.jpg', description: 'Woven tapestry.' },
      { id: 'x5', title: 'Hand-stitched Cushion', price: 499, img: 'https://i.etsystatic.com/12951383/r/il/4eb046/3004966574/il_1588xN.3004966574_h8iz.jpg', description: 'Ethnic cushion cover.' },
      { id: 'x6', title: 'Wooden Art', price: 399, img: 'https://www.gitagged.com/wp-content/uploads/2018/06/indian-tribal-wooden-art-GiTAGGED-1.jpg', description: 'Hanging decorative mobile.' },
    ],
  },

  pottery: {
    title: 'Pottery',
    description: 'Hand-thrown and decorated clay pottery.',
    items: [
      { id: 'p1', title: 'Terracotta Vase', price: 699, img: 'https://images.woodenstreet.de/image/cache/data/home-decors/planters/silver-colour-bloom-tribal-art-handpainted-earthen-vases-set-of-3/updated/1-750x650.jpg', description: 'Traditional terracotta vase.' },
      { id: 'p2', title: 'Hand-glaze bowl', price: 499, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn-kBoh4ujp19fTX0PRQwCblr_YfUUt9D9zw&s', description: 'Hand-glaze bowl.'},
      { id: 'p3', title: 'Ceramic Mug', price: 249, img: 'https://shop.landrysinc.com/cdn/shop/products/RFC-Elephant-Art-Mug_620x.jpg?v=1680212043', description: 'Hand-thrown coffee mug.' },
      { id: 'p4', title: 'Decorative Plate', price: 499, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx5CZNsM_lTn28G-ul_txj7U4c0-hdsPut6g&s', description: 'Patterned plate.' },
      { id: 'p5', title: 'Clay Pitcher', price: 799, img: 'https://tse4.mm.bing.net/th/id/OIP.J3XEAdczgxpkyJiG9sEgvwHaEO?pid=Api&P=0&h=180', description: 'Rustic clay pitcher.' },
      { id: 'p6', title: 'Planter Pot', price: 399, img: 'https://m.media-amazon.com/images/I/6169b-7JGqL._AC_SX300_SY300_QL70_ML2_.jpg', description: 'Handmade planter.' },
    ],
  },

  jewellery: {
    title: 'Jewellery',
    description: 'Ethnic, tribal-inspired necklaces, earrings, and more.',
    items: [
      { id: 'j1', title: 'Beaded Necklace', price: 699, img: 'https://i.etsystatic.com/7768651/r/il/8c50a2/1807875132/il_1140xN.1807875132_2muu.jpg', description: 'Colorful beaded necklace.' },
      { id: 'j2', title: 'Silver Pendant', price: 1299, img: 'https://tse1.mm.bing.net/th/id/OIP.trYRy9xoFNBqjGmDDyoB-wHaFj?pid=Api&P=0&h=180', description: 'Hand-forged pendant.' },
      { id: 'j3', title: 'Tribal Earrings', price: 499, img: 'https://5.imimg.com/data5/SELLER/Default/2022/11/GO/ZZ/QV/3515985/e07--1000x1000.JPG', description: 'Statement earrings.' },
      { id: 'j4', title: 'Beaded Bracelet', price: 299, img: 'https://i.etsystatic.com/9306642/r/il/74b694/632773681/il_1588xN.632773681_ozre.jpg', description: 'Hand-beaded bracelet.' },
      { id: 'j5', title: 'Ethnic Ring', price: 199, img: 'https://i.etsystatic.com/12115152/r/il/d31cb2/1218198383/il_fullxfull.1218198383_rhst.jpg', description: 'Antique-style ring.' },
      { id: 'j6', title: 'Statement Collar', price: 2499, img: 'https://tse1.mm.bing.net/th/id/OIP.g5gJzQRgieh789HUpPLfbQHaFr?pid=Api&P=0&h=180', description: 'Bold collar piece.' },
    ],
  },
};

export default data;
