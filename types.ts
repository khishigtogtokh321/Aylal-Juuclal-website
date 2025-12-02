export enum UserRole {
  TOURIST = 'TOURIST',
  ORGANIZATION = 'ORGANIZATION',
  GOVERNMENT = 'GOVERNMENT',
}

export enum ViewState {
  HOME = 'HOME',
  LOGIN = 'LOGIN',
  TRANSPORT_LIST = 'TRANSPORT_LIST',
  TRANSPORT_DETAIL = 'TRANSPORT_DETAIL',
  ACCOMMODATION_LIST = 'ACCOMMODATION_LIST',
  ACCOMMODATION_DETAIL = 'ACCOMMODATION_DETAIL',
  CHECKOUT = 'CHECKOUT',
  PAYMENT = 'PAYMENT',
  ORG_DASHBOARD = 'ORG_DASHBOARD',
  GOV_DASHBOARD = 'GOV_DASHBOARD',
}

export interface Transport {
  id: string;
  type: 'plane' | 'bus' | 'train' | 'car';
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  company: string;
  seatsRemaining: number;
  price: number;
  amenities: string[];
}

export interface Accommodation {
  id: string;
  name: string;
  type: 'hotel' | 'resort' | 'ger';
  location: string;
  rating: number;
  pricePerNight: number;
  image: string;
  description: string;
  facilities: string[];
}
