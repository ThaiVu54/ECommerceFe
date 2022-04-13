import {Image} from "./image";
import {Category} from "./category";
import {Shop} from "./shop";
import {Origin} from "./origin";
import {Comment} from "./comment";

export interface Product {
  id?: number;
  name?: string;
  price?: number;
  quantity?: number;
  countBuy?: number;
  description?: string;
  dayUpdate?: string;
  origin?: Origin;
  brand?: string;
  images?: Image[];
  categories?: Category[];
  shop?: Shop;
  comments?: Comment[];
}
