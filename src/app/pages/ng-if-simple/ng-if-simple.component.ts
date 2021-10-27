import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-ng-if-simple',
   template: `
      <button (click)="show = !show"> 
         {{show ? 'hide' : 'show'}}
      </button>

      show = {{show}}
      <br>

      <div *ngIf="show; else elseBlock">
         Text to show
      </div>

      <ng-template #elseBlock>
         Alternate text while primary text is hidden
      </ng-template>
` 
})
export class NgIfSimpleComponent implements OnInit {

   show = true;

   constructor() { }

   ngOnInit(): void {
   }

}
