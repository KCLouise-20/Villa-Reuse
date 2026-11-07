export type Category = "Clothes" | "Appliances" | "Books" | "Others";
export type CategoryFilter = "All" | Category;

export interface Item {
  id: number;
  title: string;
  category: Category;
  details: string;
  distanceKm: number;
  postedAgo: string;
  coins: number;
  image: string;
}

export interface FilterState {
  category: CategoryFilter;
  query: string;
}
