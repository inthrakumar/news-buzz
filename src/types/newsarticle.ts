// types.ts
export type News = {
  id: number;
  title: string;
  text: string;
  summary: string;
  url: string;
  image: string;
  video: string | null;
  publish_date: string;
  author: string | null;
  language: string;
  catgory: string;
  source_country: string;
  sentiment: number;
};

export type TopNews =
  | {
      news: News[];
    }[]
  | [];
