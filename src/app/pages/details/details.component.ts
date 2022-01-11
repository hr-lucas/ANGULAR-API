import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Serviçes
import { HeroApiService } from 'src/app/service/hero-api.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  


  public hero: any;
  public isLoading: boolean = false;
  public title: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroApiService: HeroApiService
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

   getHero(){
    const id = this.activatedRoute.snapshot.params['id'];

this.heroApiService.apiGetId(id).subscribe((res)=>{
  console.log('teste',res)
  this.hero = res;
  this.isLoading = true;
})


  }

}
