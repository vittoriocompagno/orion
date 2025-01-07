export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          first_name: string | null
          last_name: string | null
          phone_number: string | null
          company_name: string | null
          business_type: string | null
          place_id: string | null
          ip_address: string | null
          location: Json | null
          marketing_preferences: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          first_name?: string | null
          last_name?: string | null
          phone_number?: string | null
          company_name?: string | null
          business_type?: string | null
          place_id?: string | null
          ip_address?: string | null
          location?: Json | null
          marketing_preferences?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          first_name?: string | null
          last_name?: string | null
          phone_number?: string | null
          company_name?: string | null
          business_type?: string | null
          place_id?: string | null
          ip_address?: string | null
          location?: Json | null
          marketing_preferences?: Json | null
          created_at?: string
          updated_at?: string
        }
      }
      business_settings: {
        Row: {
          id: string
          notification_preferences: Json
          auto_response_settings: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          notification_preferences?: Json
          auto_response_settings?: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          notification_preferences?: Json
          auto_response_settings?: Json
          created_at?: string
          updated_at?: string
        }
      }
      business_profiles: {
        Row: {
          id: string
          user_id: string
          name: string
          slug: string
          description: string | null
          logo_url: string | null
          rating: number | null
          total_reviews: number
          google_review_url: string | null
          website_url: string | null
          menu_url: string | null
          booking_url: string | null
          instagram_url: string | null
          theme_primary_color: string
          theme_background_color: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          slug: string
          description?: string | null
          logo_url?: string | null
          rating?: number | null
          total_reviews?: number
          google_review_url?: string | null
          website_url?: string | null
          menu_url?: string | null
          booking_url?: string | null
          instagram_url?: string | null
          theme_primary_color?: string
          theme_background_color?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          slug?: string
          description?: string | null
          logo_url?: string | null
          rating?: number | null
          total_reviews?: number
          google_review_url?: string | null
          website_url?: string | null
          menu_url?: string | null
          booking_url?: string | null
          instagram_url?: string | null
          theme_primary_color?: string
          theme_background_color?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
} 