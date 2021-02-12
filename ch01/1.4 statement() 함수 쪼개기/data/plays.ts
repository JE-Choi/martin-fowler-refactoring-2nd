export const plays: Plays = {
  hamlet: { name: "Hamlet", type: "tragedy" },
  as_like: { name: "As You Like It", type: "comedy" },
  othello: { name: "Othello", type: "tragedy" },
};

export type Plays = {
  [prop: string]: PlaysInfo; // Index Signature 속성 선언
  hamlet: PlaysInfo;
  as_like: PlaysInfo;
  othello: PlaysInfo;
};

export type PlaysInfo = { name: string; type: Genre };

export type Genre = "tragedy" | "comedy";
