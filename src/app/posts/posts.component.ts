import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  data: any[] = []; 
  filterData = '';

  constructor(private apiService: ApiService){ }


  ngOnInit(): void { 
    this.llenarData();
  
  }

  llenarData(){
    this.apiService.getData().subscribe( (data:any) => {
      this.data = data.searchRetrieveResponse.records;
       console.log(this.data);
    })
  }

  onRecordClick(_t11: any) {
    throw new Error('Method not implemented.');
    }
}
