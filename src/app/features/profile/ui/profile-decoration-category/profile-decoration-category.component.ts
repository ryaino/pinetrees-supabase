import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileDecoration} from "../../profile.model";
import {ProfileDecorationCardComponent} from "../profile-decoration-card/profile-decoration-card.component";

@Component({
  selector: 'pinetrees-profile-decoration-category',
  standalone: true,
  imports: [CommonModule, ProfileDecorationCardComponent],
  templateUrl: './profile-decoration-category.component.html',
  styleUrls: ['./profile-decoration-category.component.scss']
})
export class ProfileDecorationCategoryComponent {

  @Input()
  categoryName: string = ''
  @Input()
  decorations?: ProfileDecoration[] = [];

}
