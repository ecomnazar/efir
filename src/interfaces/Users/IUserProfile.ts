export interface IUserProfile {
  avatar: string;
  bio: string;
  city: { id: number; slug: string; name: string; region: number };
  count_stars: number;
  created_at: string;
  expires_at: any;
  id: string;
  is_commentable: boolean;
  is_premium: boolean;
  level: number;
  phone_number: string;
  premium_at: any;
  qr_code: any;
  region: { id: number; slug: string; name: string };
  username: string;
}
