import { Canal } from "./canal.model";

export interface Litige {
    id: number;
    name: string;
    canal: Canal | null;
    created: Date;
}