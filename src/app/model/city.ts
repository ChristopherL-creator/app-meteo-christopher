export interface City {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    ranking: number;
    elevation: number;
    feature_code: string;
    country_code: string;
    admin1_id: number;
    timezone: string;
    country_id: number;
    country: string;
    admin1: string;
    admin2_id?: number;
    admin2: string;
}
