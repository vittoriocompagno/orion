export interface DashboardLayoutProps {
  children: React.ReactNode;
}

export interface Stats {
  averageRating: number;
  totalReviews: number;
  positiveSentiment: number;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  source: 'google' | 'tripadvisor';
  sentiment: 'positive' | 'neutral' | 'negative';
  response?: {
    text: string;
    date: string;
  };
}

export interface Response {
  id: string;
  text: string;
  sentiment: 'positive' | 'neutral' | 'negative';
  isTemplate: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface UserSettings {
  companyName: string;
  email: string;
  plan: 'free' | 'pro' | 'enterprise';
  notifications: {
    email: boolean;
    push: boolean;
    negativeReviews: boolean;
  };
  autoResponder: {
    enabled: boolean;
    delay: number; // in minutes
  };
} 