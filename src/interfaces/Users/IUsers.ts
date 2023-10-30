interface ICity {
  id: number;
  slug: string;
  name: string;
  region: number;
}

interface IRegion {
  id: number;
  slug: string;
  name: string;
}

export interface IUsers {
  avatar: null;
  bio: string;
  city: ICity;
  count_stars: number;
  created_at: string;
  expires_at: string;
  id: string;
  is_commentable: boolean;
  is_premium: boolean;
  level: number;
  phone_number: string;
  premium_at: string;
  qr_code: string | null;
  region: IRegion;
  username: string;
}