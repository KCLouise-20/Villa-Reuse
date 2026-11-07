export interface ActivityEntry {
  id: string;
  title: string;
  note: string;
  count?: number;
  icon: "leaf" | "heart" | "coin" | "bell";
}

export interface Profile {
  name: string;
  email: string;
  initials: string;
  neighborhood: string;
  memberSince: number;
  coins: number;
  itemsShared: number;
  wasteSavedKg: number;
}

export const PROFILE: Profile = {
  name: "Jordan Lee",
  email: "jordan.lee@example.com",
  initials: "YO",
  neighborhood: "Downtown Villa",
  memberSince: 2023,
  coins: 120,
  itemsShared: 9,
  wasteSavedKg: 120,
};

export const ACTIVITY: ActivityEntry[] = [
  { id: "donations",    title: "My donations",        note: "Items you've shared",       count: 3, icon: "leaf"  },
  { id: "claims",       title: "Claims & exchanges",  note: "Requests and pickup details", count: 2, icon: "leaf"  },
  { id: "favorites",    title: "Favorite items",      note: "Things you saved for later",  count: 2, icon: "heart" },
  { id: "transactions", title: "Transaction history", note: "Coins earned and spent",             icon: "coin" },
  { id: "notifications",title: "Notifications",       note: "Updates from the community", count: 5, icon: "bell"  },
];
