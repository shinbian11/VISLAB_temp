export interface Member {
  id: number;
  name: string;
  role: string;
  degree: string;
  interest: string;
  employment: string;
  email: string;
  website: string;
  enrolled_year: number;
  enrolled_month: number;
  graduation_year: number;
  is_alumni: boolean;
  image_path: string;
  image_org_name: string;
  index: number;
  updated?: boolean;
}
