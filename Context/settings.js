export const APP_PAGES = {
  APP: {
    HOME: "HOME"
  }
};

export const COLORS = {
  BACKGROUND: "#ffffff",
  MAIN_COLOR: "#0d162f",
  SUB_TEXT_COLOR: "#9ba2b0",
  SUB_FONT_SIZE: 18,
  MAIN_FONT_SIZE: 38,
  LOSE_COLOR: "#fc6d77",
  GAIN_COLOR: "#4cdbb5",
  VIEW_MORE_COLOR: "#5680f5",
  BACKGROUND_ICON: "#f7f9fb"
};

export const WALLETS = [
  {
    id: 1,
    name: "ETH",
    amount: "2534"
  },
  {
    id: 2,
    name: "VISA",
    amount: "192"
  }
];

export const PEOPLE = [
  {
    id: 1,
    img: "https://assets1.cbsnewsstatic.com/hub/i/2018/11/06/0c1af1b8-155a-458e-b105-78f1e7344bf4/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man.jpg"
  },
  {
    id: 2,
    img: "https://media.npr.org/assets/img/2022/11/08/ap22312071681283-0d9c328f69a7c7f15320e8750d6ea447532dff66.jpg"
  },
  {
    id: 3,
    img: "https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2017-09/shutterstock_243101992.jpg"
  },
  {
    id: 4,
    img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/27/08/jennifer-lawrence.jpg"
  },
  {
    id: 5,
    img: "https://helpfulprofessor.com/wp-content/uploads/2022/10/French-woman-e1667050422125-1024x683.jpg"
  }
];

export const TRANSACTIONS = [
  {
    id: 1,
    name: "Nike Shop",
    description: "Clothing and Footware",
    icon: require("../Components/Icons/nike.png"),
    price: "-142.60",
    timeStamp: "30 min"
  },
  {
    id: 2,
    name: "McDonald's",
    description: "Cafes and Restaurants",
    icon: require("../Components/Icons/mcdonalds.png"),
    price: "-14.60",
    timeStamp: "1 hour ago"
  }
];

import { Ionicons } from "react-native-vector-icons";
export const APP_ICONS = {
  ADD: (
    <Ionicons
      name={"ios-add-outline"}
      style={{ color: "#3071f5", fontSize: 28 }}
    />
  )
};
