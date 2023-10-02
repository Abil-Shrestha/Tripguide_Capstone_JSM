export type NextAppSEOProps = {
    title?: string
  }

// Hotel Details
export interface IHotelDetail {
  detail: {
    hotelId: string;
    brand: string;
    name: string;
    description: string;
    hotelFeatures: {
      features: string[];
      hotelAmenities: {
        code: string;
        name: string;
      }[]
    };
    location: {
      address: {
        cityName: string;
        countryName: string;
        addressLine1: string;
        zip: string;
        phone: string;
      }
    };
    guestReviews: {
      city: string;
      firstName: string;
      overallScore: string;
      reviewTextPositive: string;
      reviewTextGeneral: string;
      reviewTextNegative: string;
      creationDate: string;
    }[];
    images: {
      imageHDUrl: string;
    }[];
    rooms: {
      roomId: string;
      roomDisplayName: string;
      displayableRates: {
        displayPrice: number;
      }[];
      longDescription: number;
      roomFeatures: {
        condo: boolean;
        highlightedRoomAmenities: {
          code: string;
          name: string;
        }[];
      };
    }[];
    policies: {
      childrenDescription: string;
      importantInfo: string[];
      petDescription: string;
    };
    ratesSummary: {
      minPrice: string;
    };
    thumbnailUrl: string;
    starRating: number;
    totalReviewCount: number;
  }
}
