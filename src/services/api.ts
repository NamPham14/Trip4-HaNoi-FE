export interface ItineraryRequest {
  title: string;
  budget: number;
  days: number;
  numberOfPeople: number;
  categoryNames: string[];
}

export interface ItineraryPlaceResponse {
  id: number;
  placeId: number;
  placeName: string;
  dayNumber: number;
  orderIndex: number;
  session: string;
  estimatedCost: number;
}

export interface DayItineraryResponse {
  dayNumber: number;
  places: ItineraryPlaceResponse[];
}

export interface ItineraryResponse {
  id: number;
  title: string;
  budget: number;
  days: number;
  numberOfPeople: number;
  createdAt: string;
  itineraryDays: DayItineraryResponse[];
}

export interface CategoryResponse {
  id: number;
  name: string;
}

export interface ChatRequest {
  message: string;
}

export interface TimelineItem {
  time: string;
  activity: string;
  placeId: number;
  note: string;
  estimatedCost: number;
}

export interface ChatResponse {
  introduction: string;
  timeline: TimelineItem[];
  summary: string;
  suggestedPlaceIds: number[];
}

const API_BASE_URL = '/api/itineraries'; 
const CATEGORY_API_URL = '/api/v1/categories';
const CHAT_API_URL = '/api/chat';
const DEFAULT_USER_ID = '1';

export const chatWithAI = async (message: string): Promise<ChatResponse> => {
  const response = await fetch(CHAT_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    throw new Error('Failed to chat with AI');
  }

  return response.json();
};

export const getAllCategories = async (): Promise<CategoryResponse[]> => {
  const response = await fetch(CATEGORY_API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }
  return response.json();
};

export const createItinerary = async (data: ItineraryRequest): Promise<ItineraryResponse> => {
  const response = await fetch(`${API_BASE_URL}/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'User-Id': DEFAULT_USER_ID,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to create itinerary');
  }

  const result = await response.json();
  return result as ItineraryResponse;
};
