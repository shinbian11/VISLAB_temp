export interface Publication {
  id: number;
  title : string;
  venue : string;
  type : string;
  conference_prefix : string;
  published_in : string;
  publisher_url : string;
  volume : string;
  no : string;
  pages : string;
  year : number;
  conference_info : string;
  postfix : string;
  status : string;
  rank : string;
  updated?: boolean;
}
