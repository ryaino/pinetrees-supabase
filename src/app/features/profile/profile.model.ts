export interface ProfileDecoration {
  decoration_name: string
  professional_experience_years: number
  hobby_experience_years: number
  decorations: {
    image_url: string
    category: string
    decoration_characteristic_mappings: {
      characteristic: string
    }[]
  } | null
}
