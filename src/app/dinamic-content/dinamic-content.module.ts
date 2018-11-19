import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardContentComponent } from './card-content/card-content.component';

@NgModule({
  declarations: [HeaderComponent, CardContentComponent],
  imports: [
    CommonModule
  ]
})
export class DinamicContentModule { }
