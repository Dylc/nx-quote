export interface IQuote {
  source?: Array<string>;
  tags?: Array<string>;
  _id: string;
  author: string;
  text: {
    [key: string]: string;
  };
  createdAt: Date;
  updatedAt: Date;
  context?: string;
  _v: number
}
