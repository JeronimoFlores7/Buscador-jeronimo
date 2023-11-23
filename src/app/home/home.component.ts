import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormControl } from '@angular/forms';
import { debounce, debounceTime } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  results: any;
onRecordClick(_t11: any) {
throw new Error('Method not implemented.');
}

  data: any[] = []; 

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

}
