import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Component's
import { heroHeaderComponent } from './hero-header/hero-header.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroListComponent } from './hero-list/hero-list.component';

import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    heroHeaderComponent,
    HeroSearchComponent,
    HeroListComponent
  ],
  exports: [
    heroHeaderComponent,
    HeroSearchComponent,
    HeroListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
