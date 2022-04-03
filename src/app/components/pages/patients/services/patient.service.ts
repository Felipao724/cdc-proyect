import { Injectable } from '@angular/core';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  private _patients: Patient[] =
  [ 
  {
    id: 1,
    first_name: 'Felipe de Jesus',
    paternal_surname: 'Salas',
    maternal_surname: 'Lopez',
    birthday: new Date(),
    gender: true,
    marital_status: 'Soltero',
    sons: 0,
    brothers: 1,
    all_agree: true,
    native_city_id: 2,
    mobile_phone: 6675481913,
    home_phone: 6674453156,
    employment_id: 3,
    ssn: 5426472,
    health_institution: 'IMSS',
    social_program: 'teleton',
    scholarship_id: 4,
    religion_id: 0,
    street: '18 de frebrero',
    house_number: 2977,
    suburb: 'Juntas de Humaya',
    actual_city_id: 2,
    state_id: 1,
    comments: '',
    creation_user_id: 1,
    created_at: new Date(),
  },
  {
    id: 2,
    first_name: 'Felipe de Jesus',
    paternal_surname: 'Salas',
    maternal_surname: 'Lopez',
    birthday: new Date(),
    gender: true,
    marital_status: 'Soltero',
    sons: 0,
    brothers: 1,
    all_agree: true,
    native_city_id: 2,
    mobile_phone: 6675481913,
    home_phone: 6674453156,
    employment_id: 3,
    ssn: 5426472,
    health_institution: 'IMSS',
    social_program: 'teleton',
    scholarship_id: 4,
    religion_id: 0,
    street: '18 de frebrero',
    house_number: 2977,
    suburb: 'Juntas de Humaya',
    actual_city_id: 2,
    state_id: 1,
    comments: '',
    creation_user_id: 1,
    created_at: new Date(),
  },
]

get patients(): Patient[] {
  return [...this._patients];
}

  constructor() {
    console.log("Esta madre esta jalando")
   }
}
