export const invoices: Invoices[] = [
  {
    customer: "BigCo",
    performances: [
      {
        playID: "hamlet",
        audience: 55,
      },
      {
        playID: "as_like",
        audience: 35,
      },
      {
        playID: "othello",
        audience: 40,
      },
    ],
  },
];

export type Invoices = {
  [key: string]: string | Performances[];
  customer: string;
  performances: Performances[];
};
export type Performances = {
  [key: string]: string | number;
  playID: string;
  audience: number; // 청중
};
