import { JsonValue } from "inngest/helpers/jsonify";

export interface DailySumaryProps {
  items: {
    id: string;
    name: string;
    kind: string;
    items: {
      id: string;
      name: string;
      username: string;
      ticketsCount: number;
      cdfTotal: number;
      usdTotal: number;
    }[];
  }[];
}
