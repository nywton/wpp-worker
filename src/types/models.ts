export type Message = {
  id: string;
  type: string;
  from: string;
  fromMe: boolean;
  to: string;
  body: string;
  timestamp: number;
};
