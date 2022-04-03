export interface Patient {
   id?: number | string;
   first_name: string;
   paternal_surname: string;
   maternal_surname: string;
   birthday: Date;
   gender: Boolean;
   marital_status: string; //Preguntar
   sons: number;
   brothers: number;
   all_agree: Boolean; //Preguntar
   native_city_id: number;
   mobile_phone: number;
   home_phone: number;
   employment_id: number;
   ssn: number;
   health_institution: string;
   social_program: string;
   scholarship_id: number;
   religion_id: number;
   street: string;
   house_number: number;
   suburb: string;
   actual_city_id: number;
   state_id: number;
   comments: string;
   creation_user_id: number;
   created_at: Date;
}

 