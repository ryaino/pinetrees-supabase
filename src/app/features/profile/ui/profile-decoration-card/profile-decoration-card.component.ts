import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileDecoration} from "../../profile.model";

@Component({
  selector: 'pinetrees-profile-decoration-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-decoration-card.component.html',
  styleUrls: ['./profile-decoration-card.component.scss']
})
export class ProfileDecorationCardComponent {

  @Input()
  decoration!: ProfileDecoration

}
