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
  customer: string;
  performances: Performances[];
};
export type Performances = {
  playID: string;
  audience: number; // 청중
};
