import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {

  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  public search(value: string){
    this.emmitSearch.emit(value)
  }
}
