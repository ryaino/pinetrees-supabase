import {PostgrestError} from "@supabase/supabase-js";

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
      decoration_categories: {
        Row: {
          name: string
        }
        Insert: {
          name?: string
        }
        Update: {
          name?: string
        }
        Relationships: []
      }
      decoration_characteristic_mappings: {
        Row: {
          characteristic: string
          decoration: string
        }
        Insert: {
          characteristic: string
          decoration: string
        }
        Update: {
          characteristic?: string
          decoration?: string
        }
        Relationships: [
          {
            foreignKeyName: "decoration_characteristic_mappings_characteristic_fkey"
            columns: ["characteristic"]
            referencedRelation: "decoration_characteristics"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "decoration_characteristic_mappings_decoration_fkey"
            columns: ["decoration"]
            referencedRelation: "decorations"
            referencedColumns: ["name"]
          }
        ]
      }
      decoration_characteristics: {
        Row: {
          name: string
        }
        Insert: {
          name?: string
        }
        Update: {
          name?: string
        }
        Relationships: []
      }
      decorations: {
        Row: {
          category: string
          image_url: string
          name: string
        }
        Insert: {
          category?: string
          image_url?: string | null
          name?: string
        }
        Update: {
          category?: string
          image_url?: string | null
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "decorations_category_fkey"
            columns: ["category"]
            referencedRelation: "decoration_categories"
            referencedColumns: ["name"]
          }
        ]
      }
      developer_profiles: {
        Row: {
          contact_email: string
          contact_phone: string
          family_name: string
          given_name: string
          id: string
          introduction: string
          location: string
          profile_picture_url: string
          slug: string
        }
        Insert: {
          contact_email?: string | null
          contact_phone?: string | null
          family_name?: string | null
          given_name?: string | null
          id: string
          introduction?: string | null
          location?: string | null
          profile_picture_url?: string | null
          slug?: string
        }
        Update: {
          contact_email?: string | null
          contact_phone?: string | null
          family_name?: string | null
          given_name?: string | null
          id?: string
          introduction?: string | null
          location?: string | null
          profile_picture_url?: string | null
          slug?: string
        }
        Relationships: [
          {
            foreignKeyName: "developer_profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      profile_decorations: {
        Row: {
          decoration_name: string
          hobby_experience_years: number
          professional_experience_years: number
          profile_id: string
        }
        Insert: {
          decoration_name: string
          hobby_experience_years?: number
          professional_experience_years?: number
          profile_id: string
        }
        Update: {
          decoration_name?: string
          hobby_experience_years?: number
          professional_experience_years?: number
          profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "profile_decorations_decoration_name_fkey"
            columns: ["decoration_name"]
            referencedRelation: "decorations"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "profile_decorations_profile_id_fkey"
            columns: ["profile_id"]
            referencedRelation: "developer_profiles"
            referencedColumns: ["id"]
          }
        ]
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
