import {Injectable} from '@angular/core';
import {SupabaseService} from "../../supabase/supabase.service";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private supabaseService: SupabaseService
  ) {
  }

  async getProfile() {
    const query = this.supabaseService.supabase
      .from('developer_profiles')
      .select(
        `
        contact_email,
        contact_phone,
        given_name,
        family_name,
        profile_picture_url,
        introduction,
        location,
         profile_decorations(
          decoration_name,
          professional_experience_years,
          hobby_experience_years,
          decorations(
            image_url,
            category,
            decoration_characteristic_mappings(
              characteristic
            )
          )
        )`
      )
      .eq('slug', 'ryan')
    const profile = await query;
    return profile;
  }


  async getRelatedDecorations(characteristics: string[]) {
    return this.supabaseService.supabase
      .from('decorations')
      .select(`
        name,
        image_url,
        decoration_characteristic_mappings(
          characteristic
        )
      `)
      .in('decoration_characteristic_mappings.characteristic', characteristics);
  }
}
