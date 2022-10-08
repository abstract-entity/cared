import { Anomaly } from "./anomaly.model";
import { Canal } from "./canal.model";

export interface Litige {
    id: string;
    name: string;
    obs: string;
    canal: Canal | undefined;
    anomaly: Anomaly;
    created: Date;
    photos: string[];
}