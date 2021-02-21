import {PlaysInfo} from "./plays.js";

export type StatementDataType = {
  customer: string;
  performances: {
    play: PlaysInfo | undefined;
    amount: number;
    volumeCredits: number;
    playID: string;
    audience: number;
  }[];
  totalAmount: number;
  totalVolumeCredits: number;
};
