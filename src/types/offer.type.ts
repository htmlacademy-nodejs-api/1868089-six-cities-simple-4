type OfferCoordinates = {
  longtitude: string;
  latitude: string;
};

export type Offer = {
  title: string;
  description: string;
  postDate: string;
  city: string;
  previewImg: string;
  photos: string[],
  isPremium: boolean;
  rating: number;
  housingType: string;
  rooms: number;
  guests: number;
  price: number;
  facilities: string[],
  user: number;
  commentCount: number;
  coordinates: OfferCoordinates
};
