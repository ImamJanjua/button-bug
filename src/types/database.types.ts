export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      addresses: {
        Row: {
          city: string;
          country: string;
          google_places_id: string | null;
          id: string;
          location: unknown | null;
          postal_code: string;
          state: string;
          street: string;
        };
        Insert: {
          city: string;
          country?: string;
          google_places_id?: string | null;
          id?: string;
          location?: unknown | null;
          postal_code: string;
          state: string;
          street: string;
        };
        Update: {
          city?: string;
          country?: string;
          google_places_id?: string | null;
          id?: string;
          location?: unknown | null;
          postal_code?: string;
          state?: string;
          street?: string;
        };
        Relationships: [];
      };
      app_roles: {
        Row: {
          id: number;
          name: string;
        };
        Insert: {
          id: number;
          name: string;
        };
        Update: {
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      appointments: {
        Row: {
          created_at: string | null;
          date: string;
          doctor_details: string | null;
          doctor_id: string;
          end_time: string;
          id: string;
          method: Database["public"]["Enums"]["appointment_method"] | null;
          patient_attachment_urls: string[] | null;
          patient_details: string | null;
          patient_id: string | null;
          patient_name: string | null;
          start_time: string;
          status: Database["public"]["Enums"]["appointment_status"] | null;
          type: Database["public"]["Enums"]["appointment_type"] | null;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string | null;
          date: string;
          doctor_details?: string | null;
          doctor_id: string;
          end_time: string;
          id?: string;
          method?: Database["public"]["Enums"]["appointment_method"] | null;
          patient_attachment_urls?: string[] | null;
          patient_details?: string | null;
          patient_id?: string | null;
          patient_name?: string | null;
          start_time: string;
          status?: Database["public"]["Enums"]["appointment_status"] | null;
          type?: Database["public"]["Enums"]["appointment_type"] | null;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string | null;
          date?: string;
          doctor_details?: string | null;
          doctor_id?: string;
          end_time?: string;
          id?: string;
          method?: Database["public"]["Enums"]["appointment_method"] | null;
          patient_attachment_urls?: string[] | null;
          patient_details?: string | null;
          patient_id?: string | null;
          patient_name?: string | null;
          start_time?: string;
          status?: Database["public"]["Enums"]["appointment_status"] | null;
          type?: Database["public"]["Enums"]["appointment_type"] | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "appointments_patient_id_fkey";
            columns: ["patient_id"];
            isOneToOne: false;
            referencedRelation: "patients";
            referencedColumns: ["id"];
          },
        ];
      };
      doctor_settings: {
        Row: {
          doctor_id: string;
          id: string;
          name: string;
          value: string;
        };
        Insert: {
          doctor_id: string;
          id?: string;
          name: string;
          value: string;
        };
        Update: {
          doctor_id?: string;
          id?: string;
          name?: string;
          value?: string;
        };
        Relationships: [];
      };
      doctors: {
        Row: {
          clinic_address_id: string;
          id: string;
          price: number;
        };
        Insert: {
          clinic_address_id: string;
          id: string;
          price: number;
        };
        Update: {
          clinic_address_id?: string;
          id?: string;
          price?: number;
        };
        Relationships: [
          {
            foreignKeyName: "doctors_clinic_address_id_fkey";
            columns: ["clinic_address_id"];
            isOneToOne: false;
            referencedRelation: "addresses";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "doctors_id_fkey";
            columns: ["id"];
            isOneToOne: true;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
        ];
      };
      doctors_treatments: {
        Row: {
          doctor_id: string;
          treatment_id: number;
        };
        Insert: {
          doctor_id: string;
          treatment_id: number;
        };
        Update: {
          doctor_id?: string;
          treatment_id?: number;
        };
        Relationships: [];
      };
      patients: {
        Row: {
          id: string;
        };
        Insert: {
          id: string;
        };
        Update: {
          id?: string;
        };
        Relationships: [];
      };
      profiles: {
        Row: {
          app_role_id: number;
          avatar_url: string | null;
          id: string;
          name: string | null;
          onboarding_status:
            | Database["public"]["Enums"]["onboarding_status"]
            | null;
        };
        Insert: {
          app_role_id: number;
          avatar_url?: string | null;
          id: string;
          name?: string | null;
          onboarding_status?:
            | Database["public"]["Enums"]["onboarding_status"]
            | null;
        };
        Update: {
          app_role_id?: number;
          avatar_url?: string | null;
          id?: string;
          name?: string | null;
          onboarding_status?:
            | Database["public"]["Enums"]["onboarding_status"]
            | null;
        };
        Relationships: [
          {
            foreignKeyName: "profiles_app_role_id_fkey";
            columns: ["app_role_id"];
            isOneToOne: false;
            referencedRelation: "app_roles";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "profiles_id_fkey";
            columns: ["id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      reviews: {
        Row: {
          comment: string | null;
          created_at: string | null;
          doctor_id: string;
          id: string;
          patient_id: string;
          rating: number;
        };
        Insert: {
          comment?: string | null;
          created_at?: string | null;
          doctor_id: string;
          id?: string;
          patient_id: string;
          rating: number;
        };
        Update: {
          comment?: string | null;
          created_at?: string | null;
          doctor_id?: string;
          id?: string;
          patient_id?: string;
          rating?: number;
        };
        Relationships: [
          {
            foreignKeyName: "reviews_patient_id_fkey";
            columns: ["patient_id"];
            isOneToOne: false;
            referencedRelation: "patients";
            referencedColumns: ["id"];
          },
        ];
      };
      slots: {
        Row: {
          created_at: string | null;
          date: string;
          doctor_id: string;
          end_time: string;
          id: string;
          is_available: boolean | null;
          start_time: string;
        };
        Insert: {
          created_at?: string | null;
          date: string;
          doctor_id: string;
          end_time: string;
          id?: string;
          is_available?: boolean | null;
          start_time: string;
        };
        Update: {
          created_at?: string | null;
          date?: string;
          doctor_id?: string;
          end_time?: string;
          id?: string;
          is_available?: boolean | null;
          start_time?: string;
        };
        Relationships: [];
      };
      treatments: {
        Row: {
          category: string;
          id: number;
          name: string;
        };
        Insert: {
          category: string;
          id: number;
          name: string;
        };
        Update: {
          category?: string;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      user_settings: {
        Row: {
          id: string;
          name: string | null;
          user_id: string;
          value: Json | null;
        };
        Insert: {
          id?: string;
          name?: string | null;
          user_id: string;
          value?: Json | null;
        };
        Update: {
          id?: string;
          name?: string | null;
          user_id?: string;
          value?: Json | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      custom_access_token_hook: {
        Args: {
          event: Json;
        };
        Returns: Json;
      };
      log_message: {
        Args: Record<PropertyKey, never>;
        Returns: undefined;
      };
    };
    Enums: {
      appointment_method: "videocall" | "in_person";
      appointment_status: "scheduled" | "cancelled";
      appointment_type: "primary" | "secondary" | "tertiary" | "blocked";
      day_of_week:
        | "monday"
        | "tuesday"
        | "wednesday"
        | "thursday"
        | "friday"
        | "saturday"
        | "sunday";
      gender: "men" | "women" | "divers";
      onboarding_status: "pending" | "reviewing" | "completed";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (
      & Database[PublicTableNameOrOptions["schema"]]["Tables"]
      & Database[PublicTableNameOrOptions["schema"]]["Views"]
    )
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database } ? (
    & Database[PublicTableNameOrOptions["schema"]]["Tables"]
    & Database[PublicTableNameOrOptions["schema"]]["Views"]
  )[TableName] extends {
    Row: infer R;
  } ? R
  : never
  : PublicTableNameOrOptions extends keyof (
    & PublicSchema["Tables"]
    & PublicSchema["Views"]
  ) ? (
      & PublicSchema["Tables"]
      & PublicSchema["Views"]
    )[PublicTableNameOrOptions] extends {
      Row: infer R;
    } ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Insert: infer I;
  } ? I
  : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    } ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Update: infer U;
  } ? U
  : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    } ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;
