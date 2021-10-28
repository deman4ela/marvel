export interface IHero {
  name: string;
  id: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  };
}

export interface IComic {
  title: string;
  id: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  pageCount: string;
}
