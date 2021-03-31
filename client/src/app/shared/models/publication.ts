export interface IPublication {
  title: string;
  venue: string;  /* [International, Domestic] */
  type: string;   /* [Journal, Conference, Workshop, Poster, Book] */
  authors: string[];
  conferencePrefix?: string;  /* ex. In Proceedings of the | In Extended Abstracts of the */
  publishedIn: string;        /* Journal title | Conference name */
  publisherURL?: string;      /* ex. https://www.computer.org/csdl/journal/tg */
  volume?: string;
  no?: string;
  pages?: string;
  year: number;
  conferenceInfo?: string;    /* ex. October 25-30 in Salt Lake City, Utah, USA */
  postfix?: string;           /* ex. Also presented at ... */
  status?: string;            /* [Submitted, accepted, published] */
  doi?: string;
  month?: number;
  rank?: string;              /* [SCIE, SSCI, SCOPUS, A&HCI, KCI] */
  pdfPath?: string;
}
