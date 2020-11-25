export interface IQuote {
  author: string;
  createdAt: Date;
  context?: string;
  source: Array<string>;
  tags?: Array<string>;
  text: {
    [key: string]: string;
  };
}
