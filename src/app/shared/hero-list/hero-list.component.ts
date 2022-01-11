import { Component, OnInit } from '@angular/core';
import { HeroApiService } from 'src/app/service/hero-api.service';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  public valueSearch: any
  private setAllHeros: any;
  public getAllHeros: any;
  listObg: any =[];
  resObj :any =[];

  constructor(
    private heroApiService:HeroApiService
  ) { }

  ngOnInit(): void {}

  public getSearch(value: string){


    this.heroApiService.apiGetSearch(value).subscribe((res)=>{
      this.setAllHeros = res.results;
      this.getAllHeros = this.setAllHeros;  
      this.listObg.push(this.getAllHeros)
      
    })
 
  }



}
