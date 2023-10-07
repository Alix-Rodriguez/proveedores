import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit{

  banner: boolean = true;

  @Input() dato: string = "0";
  
  ngOnInit(): void {
    if(this.dato === "1"){
      this.banner = false;
    }
  }

}
