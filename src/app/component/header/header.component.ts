import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { SelectText } from 'src/app/select-text.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public totalItem : number = 0;
  public searchTerm !: string;
  selectedProp: string | undefined;
  arrayList: Array<any> = [];

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })

     {
      // this.selectedText = new SelectText();    
      this.arrayList.push({ value: 1, text: "India" });
      this.arrayList.push({ value: 2, text: "America" });
      this.arrayList.push({ value: 3, text: "Canada" });
      this.arrayList.push({ value: 4, text: "U.S" });
      this.arrayList.push({ value: 5, text: "U.K" });
      this.arrayList.push({ value: 6, text: "Germany" });
      this.arrayList.push({ value: 7, text: "France" });
      this.arrayList.push({ value: 8, text: "China" });
      this.arrayList.push({ value: 9, text: "Japan" });
      this.arrayList.push({ value: 10, text: "Singapore" });
    }




  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }

  


}