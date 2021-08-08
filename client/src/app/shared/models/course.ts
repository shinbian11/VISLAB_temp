export interface ICourse {
    id: number;
    title: string;
    type: string;
    prerequisite: string;
    content : string,
    subcontent : string,
    subtitle : string,
    is_visible: boolean;
    index: number;
    updated?: boolean;
    semester_button : string;
  }
  