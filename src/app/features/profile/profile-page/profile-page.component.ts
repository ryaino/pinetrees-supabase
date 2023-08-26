import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileService} from "../profile.service";
import {ProfileAvatarCardComponent} from "../ui/profile-avatar-card/profile-avatar-card.component";
import {CardComponent} from "../../../ui/card/card.component";
import {ProfileDecoration} from "../profile.model";
import {
  ProfileDecorationCategoryComponent
} from "../ui/profile-decoration-category/profile-decoration-category.component";

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CommonModule, ProfileAvatarCardComponent, CardComponent, ProfileDecorationCategoryComponent],
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  profileInfo: {
    contact_email: string
    contact_phone: string
    family_name: string
    given_name: string
    introduction: string
    location: string
    profile_picture_url: string
    profile_decorations: ProfileDecoration[]
  } | null = null

  profileDecorations: Map<string, ProfileDecoration[]> = new Map()

  allCharacteristics: string[] = [];
  relatedDecorations: ProfileDecoration[] = [];

  constructor(
    private profileService: ProfileService
  ) {
  }

  async ngOnInit() {
    const response = await this.profileService.getProfile();
    if (response.data && response.data.length > 0) {
      this.profileInfo = response.data[0];
      this.profileInfo.profile_decorations.forEach(decoration => {
        if (decoration.decorations) {
          const category = decoration.decorations.category;
          if (category) {
            let categoryItems = this.profileDecorations.get(category);
            if (!categoryItems) {
              categoryItems = [];
            }
            categoryItems.push(decoration);
            this.profileDecorations.set(category, categoryItems)

          }
          decoration.decorations.decoration_characteristic_mappings.forEach(mapping => {
            this.allCharacteristics.push(mapping.characteristic);
          })

        }
      })
      const characteristics = await this.profileService.getRelatedDecorations(this.allCharacteristics);
      console.log(characteristics.data)
    }
  }

}
