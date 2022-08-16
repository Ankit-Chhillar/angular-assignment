import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/services/app.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  usaData:any=[];
  constructor(private appService:AppService) { }

  ngOnInit(): void {
    this.getUsaData();
  }

  getUsaData(){
    this.appService.getUSAData().subscribe(res=>{
       console.log(res);
       this.usaData = res.data;
    });
  }
}
