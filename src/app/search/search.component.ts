import { Component, OnInit } from '@angular/core';
import { SearchDataServiceService } from '../service/search-data-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  data: any;
  constructor(public searchDataServiceService:SearchDataServiceService) { 
    searchDataServiceService.apiData$.subscribe(data => this.data = data)

  }

  ngOnInit(): void {
    console.log('data in serach='+this.data);
  }

}
