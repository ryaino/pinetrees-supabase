import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from "../../../../ui/card/card.component";

@Component({
  selector: 'pinetrees-profile-avatar-card',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './profile-avatar-card.component.html',
  styleUrls: ['./profile-avatar-card.component.scss']
})
export class ProfileAvatarCardComponent {

  @Input()
  name?: string = '';
  @Input()
  contactEmail?: string = '';
  @Input()
  location?: string = '';
  @Input()
  contactPhone?: string = '';
  @Input()
  pictureUrl?: string = '';


}
