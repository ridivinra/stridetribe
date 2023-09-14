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
      ACTIVITY: {
        Row: {
          activityTypeId: number
          created_at: string
          date: string
          distance: number | null
          duration: number | null
          id: number
          userId: string
        }
        Insert: {
          activityTypeId: number
          created_at?: string
          date: string
          distance?: number | null
          duration?: number | null
          id?: number
          userId: string
        }
        Update: {
          activityTypeId?: number
          created_at?: string
          date?: string
          distance?: number | null
          duration?: number | null
          id?: number
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "ACTIVITY_activityTypeId_fkey"
            columns: ["activityTypeId"]
            referencedRelation: "ACTIVITYTYPE"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ACTIVITY_userId_fkey"
            columns: ["userId"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      ACTIVITYTYPE: {
        Row: {
          created_at: string
          defaultConversionFactor: number
          distanceMetric: boolean
          id: number
          name: string
        }
        Insert: {
          created_at?: string
          defaultConversionFactor: number
          distanceMetric: boolean
          id?: number
          name: string
        }
        Update: {
          created_at?: string
          defaultConversionFactor?: number
          distanceMetric?: boolean
          id?: number
          name?: string
        }
        Relationships: []
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
