export interface IResearch {
  id: number;
  title: string;
  year: number;
  month: number;
  short_desc: string;
  abstract: string;
  markdown_desc: string;
  image_path: string;
  image_org_name: string;
  video_url: string;
  demo_url: string;
  github_url: string;
  extra_url: string;
  is_visible:boolean;
  is_featured:boolean;
}
