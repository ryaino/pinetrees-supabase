import {Injectable} from '@angular/core';
import {SupabaseService} from "../supabase/supabase.service";

@Injectable({
  providedIn: 'root'
})
export class DecorationService {

  constructor(
    private supabaseService: SupabaseService
  ) {
  }

  async getAllDecorationsWithCharacteristics() {
    return this.supabaseService.supabase.from(
      'decorations'
    )
      .select(`
        name,
        image_url,
        category,
        decoration_characteristic_mappings(
          characteristic
        )
      `)
  }
}
