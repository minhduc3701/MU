import * as Types from "./../constants/ActionType";

let initialState = [
  {
    id: 1,
    name: "Manchester United Home Shirt 2019/2020",
    image: "https://images.sportsdirect.com/images/products/37724808_l.jpg",
    price: 55
  },
  {
    id: 2,
    name: "Manchester United Third Shirt 2019 2020",
    image: "https://images.sportsdirect.com/images/products/37838903_l.jpg",
    price: 55
  },
  {
    id: 3,
    name: "Manchester United Away Shirt 2019 2020",
    image: "https://images.sportsdirect.com/images/products/37725569_l.jpg",
    price: 55
  },
  {
    id: 4,
    name: "Manchester United Away Shorts 2019 2020",
    image: "https://images.sportsdirect.com/images/products/37241103_l.jpg",
    price: 22
  },
  {
    id: 5,
    name: "Manchester United Third Shorts 2019 2020",
    image: "https://images.sportsdirect.com/images/products/37241203_l.jpg",
    price: 22
  },
  {
    id: 6,
    name: "Manchester United Home Shorts 2019 2020",
    image: "https://images.sportsdirect.com/images/products/37240801_l.jpg",
    price: 22
  },
  {
    id: 7,
    name: "Manchester United Home Socks 2019 2020",
    image: "https://images.sportsdirect.com/images/products/37315703_l.jpg",
    price: 12
  },
  {
    id: 8,
    name: "Manchester United Away Socks 2019 2020",
    image: "https://images.sportsdirect.com/images/products/37316869_l.jpg",
    price: 12
  },
  {
    id: 9,
    name: "Manchester United Third Socks 2019 2020",
    image: "https://images.sportsdirect.com/images/products/37318103_l.jpg",
    price: 12
  },
  {
    id: 10,
    name: "Manchester United Third Shirt 2018 2019",
    image: "https://images.sportsdirect.com/images/products/37721822_l.jpg",
    price: 33
  },
  {
    id: 11,
    name: "Manchester United Away Shirt 2018 2019",
    image: "https://images.sportsdirect.com/images/products/37724706_l.jpg",
    price: 33
  },
  {
    id: 12,
    name: "Manchester United Home Shirt 2018 2019",
    image: "https://images.sportsdirect.com/images/products/37716208_l.jpg",
    price: 33
  },
  {
    id: 13,
    name: "Manchester United Training Shirt 2019 2020",
    image: "https://images.sportsdirect.com/images/products/37060703_l.jpg",
    price: 32
  },
  {
    id: 14,
    name: "Manchester United T Shirt 2019 2020",
    image: "https://images.sportsdirect.com/images/products/37060803_l.jpg",
    price: 25
  },
  {
    id: 15,
    name: "Manchester United Polo Shirt 2018 2019",
    image: "https://images.sportsdirect.com/images/products/37438743_l.jpg",
    price: 27
  },
  {
    id: 16,
    name: "Manchester United Tracksuit Bottoms 2019 2020",
    image: "https://images.sportsdirect.com/images/products/37059603_l.jpg",
    price: 37
  }
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default products;
