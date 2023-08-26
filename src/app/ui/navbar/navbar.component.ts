import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DecorationService} from "../../services/decoration.service";

@Component({
  selector: 'pinetrees-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  decorations: {
    name: string,
    image_url: string,
    category: string,
    decoration_characteristic_mappings: {
      characteristic: string
    }[]
  }[] = [];

  constructor(private decorationService: DecorationService) {
  }

  async ngOnInit() {
    const response = await this.decorationService.getAllDecorationsWithCharacteristics();
    if (response.data) {
      this.decorations = response.data;
    }
  }


}
