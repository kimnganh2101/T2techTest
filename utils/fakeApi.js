// utils/fakeApi.js
// export const fetchCategories = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//     {
//       name: 'PROMOTION',
//       subcategories: [
//         {
//           name: 'FRESH FOOD',
//           subcategories: [
//             { name: 'FISH AND SEAFOOD' },
//               { name: 'PROCESSED MEAT' },
//               { name: 'VEGETABLES' }
//           ]
//           },
//         {
//           name: 'FROZEN FOOD',
//           subcategories: [
//             { name: 'Orange Juice' },
//             { name: 'Apple Juice' }
//           ]
//           },
//         {
//           name: 'SALTY GROCERY',
//           subcategories: [
//             { name: 'Orange Juice' },
//             { name: 'Apple Juice' }
//           ]
//           },
//         {
//           name: 'SWEET GROCERY',
//           subcategories: [
//             { name: 'Orange Juice' },
//             { name: 'Apple Juice' }
//           ]
//           },
        
//         {
//           name: 'BEVERAGES',
//           subcategories: [
//             { name: 'Orange Juice' },
//             { name: 'Apple Juice' }
//           ]
//         }
//       ]
//     },
//     {
//       name: 'OUR PRODUCT',
//       subcategories: [
//         {
//           name: 'Chips',
//           subcategories: [
//             { name: 'Potato Chips' },
//             { name: 'Corn Chips' }
//           ]
//         }
//       ]
//           },
//     {
//       name: 'YEN MARKET MENU',
//       subcategories: [
//         {
//           name: 'Soft Drinks',
//           subcategories: [
//             { name: 'Coca-Cola' },
//             { name: 'Pepsi' }
//           ]
//         },
//         {
//           name: 'Juices',
//           subcategories: [
//             { name: 'Orange Juice' },
//             { name: 'Apple Juice' }
//           ]
//         }
//       ]
//           },
//     {
//       name: 'SEASONAL',
//       subcategories: [
//         {
//           name: 'Soft Drinks',
//           subcategories: [
//             { name: 'Coca-Cola' },
//             { name: 'Pepsi' }
//           ]
//         },
//         {
//           name: 'Juices',
//           subcategories: [
//             { name: 'Orange Juice' },
//             { name: 'Apple Juice' }
//           ]
//         }
//       ]
//     },
    
    
//   ]);
//     }, 1000); // Mô phỏng độ trễ 1 giây
//   });
// };



export const fetchProducts = () => {
  return Promise.resolve([
    {
      name: 'Bạch tuộc sốt wasabi (tako wasabi)',
      price: '702.000',
      unit: '/Kg',
      image: 'https://mastererp.mylifecompany.com//Resources/Images/Items/28ce2d37-5fc8-49ef-8a99-218c4a5b69c302012025043704.jpg'
    },
    {
      name: 'Cá hồi Nauy nguyên con tươi (Salmon)',
      price: '618.000',
      unit: '/Kg',
      image: 'https://mastererp.mylifecompany.com//Resources/Images/Items/Cá Hồi Nguyên con17122024050223.png'
    },
    {
      name: 'Cá hồi Nauy tươi Fillet (Salmon)',
      price: '948.000',
      unit: '/Kg',
      image: 'https://mastererp.mylifecompany.com//Resources/Images/Items/SP000902-PD00052-WEB_Ca-Hoi-Phi-Le-Phan-Than17122024035448.png'
    },
    {
      name: 'Đầu cá hồi (Salmon)',
      price: '98.000',
      unit: '/Kg',
      image: 'https://mastererp.mylifecompany.com//Resources/Images/Items/YSEXTF00728112023114821_S17122024032008.jpg'
    },
    {
      name: 'Lườn Cá hồi Nauy tươi (Salmon)',
      price: '178.000',
      unit: '/Kg',
      image: 'https://mastererp.mylifecompany.com//Resources/Images/Items/Lườn Cá hồi Nauy tươi (Salmon)17122024041523.jpg'
    },
    {
      name: 'Trứng cá tuyết tẩm gia vị Mentaiko {YAMAYA}-80g',
      price: '128.000',
      unit: '/box',
      image: 'https://mastererp.mylifecompany.com//Resources/Images/Items/Trứng cá tuyết tẩm gia vị Mentaiko {YAMAYA}-80g19122024024928.jpg'
    },
    {
      name: 'Xương Cá hồi',
      price: '58.000',
      unit: '/Kg',
      image: 'https://mastererp.mylifecompany.com//Resources/Images/Items/Xương cá Hồi17122024034743.jpg'
    }
  ]);
};

// data/products.js
// fakeApi.js
export const getProducts = () => {
  const products = [
    {
      name: 'Ba chỉ bò Mỹ cuộn 500g',
      price: '189.000',
      unit: '/Khay',
      image: 'https://mastererp.mylifecompany.com//Resources/Images/Items/Ba chỉ bò Mỹ cuộn 500g19122024054738.jpg',
    },
    {
      name: 'Ba rọi cuộn (Iberico roll Belly) - Khay 300gr',
      price: '168.000',
      unit: '/Khay',
      image: 'https://mastererp.mylifecompany.com//Resources/Images/Items/Ba rọi cuộn (Iberico roll Belly) - Khay 300gr31122024054847.jpg',
    },
    {
      name: 'Bánh nhân bạch tuộc Takoyaki 1.2kg (40x30g)',
      price: '235.000',
      unit: '/Túi',
      image: 'https://mastererp.mylifecompany.com//Resources/Images/Items/Bánh nhân bạch tuộc Takoyaki 12kg (40x30g)19122024075236.jpg',
    },
    {
      name: 'Bánh nhân bạch tuộc Takoyaki túi 1kg',
      price: '189.000',
      unit: '/Túi',
      image: 'https://mastererp.mylifecompany.com//Resources/Images/Items/Bánh Nhân Bạch Tuộc Takoyaki (2)19122024074330.jpg',
    },
    {
      name: 'Đầu Thăn Ngoại Bò Hokubee Úc Đông Lạnh 300G',
      price: '349.000',
      unit: '/Khay',
      image: 'https://mastererp.mylifecompany.com//Resources/Images/Items/Đầu Thăn Ngoại Bò Hokubee Úc Đông Lạnh 300G31122024055105.png',
    },
    {
      name: 'IB Jowl Meat Thịt diềm má 300gr/khay',
      price: '282.000',
      unit: '/Khay',
      image: 'https://mastererp.mylifecompany.com//Resources/Images/Items/IB Jowl Meat Thịt diềm má 300grkhay31122024055316.jpg',
    },
    {
      name: 'Lõi nạc vai bò (top blade) Mỹ cắt steak 500g',
      price: '359.000',
      unit: '/Khay',
      image: 'https://mastererp.mylifecompany.com//Resources/Images/Items/Lõi nạc vai bò (top blade) Mỹ cắt steak 500g31122024055634.jpg',
    },
    {
      name: 'Thăn Ngoại Bò Hitachi A5 (Sirloin)',
      price: '4.980.000',
      unit: '/Kg',
      image: 'https://mastererp.mylifecompany.com//Resources/Images/Items/常陸和牛102012025112230.jpg',
    },
    {
      name: 'Thịt ba rọi Bò Mỹ cắt sẵn 500gr',
      price: '358.000',
      unit: '/Kg',
      image: 'https://mastererp.mylifecompany.com//Resources/Images/Items/ba-chi-cuon-bo-my02012025102223.jpg',
    },
    {
      name: 'Thịt diềm thăn (IB Serecto Penceta)',
      price: '258.000',
      unit: '/Khay',
      image: 'https://mastererp.mylifecompany.com//Resources/Images/Items/iberico02012025101926.jpg',
    },
  ];

  // Giả lập một sự chậm trễ trong việc lấy dữ liệu
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000); // Giả lập delay 2 giây
  });
};



// server/api/banners.js

// data/bannerData.js

// fakeApi.js
export const getBanners = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "yenmarket",
          src: "http://bizweb.dktcdn.net/100/382/166/themes/900578/assets/banner3_1.jpg?1724210132257"
        },
        {
          id: 2,
          title: "yenmarket",
          src: "http://bizweb.dktcdn.net/100/382/166/themes/900578/assets/banner3_2.jpg?1724210132257"
        },
        {
          id: 3,
          title: "yenmarket",
          src: "http://bizweb.dktcdn.net/100/382/166/themes/900578/assets/banner3_3.jpg?1724210132257"
        }
      ]);
    }, 500); // Giả lập delay 0.5 giây
  });
};



// services/categoryService.js



export const fetchSubcategorieschild1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'FRESH FOOD' },
        { id: 2, name: 'FROZEN FOOD' },
        { id: 3, name: 'SALTY GROCERY' },
        { id: 4, name: 'SWEET GROCERY' },
        { id: 5, name: 'BEVERAGES' }
      ])
    }, 500) // Giả lập thời gian fetch từ server
  })
}


// src/api/categoryData.js

export const getCategoryList = () => {
  return [
    {
      name: "PROMOTION",
      hasArrow: false,
    },
    {
      name: "OUR PRODUCTS",
      hasArrow: true,
    },
    {
      name: "YEN MARKET MENU",
      hasArrow: true,
    },
    {
      name: "SEASONAL",
      hasArrow: true,
    }
  ];
};







// fakeMenuApi.js
export const fetchMenu = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: "PROMOTION",
          children: [
            
          ],
        },
        {
          name: "OUR PRODUCT",
          children: [],
        },
        {
          name: "YEN MARKET MENU",
          children: [],
        },
        {
          name: "SEASONAL",
          children: [],
        },
      ]);
    }, 1000);
  });
};
