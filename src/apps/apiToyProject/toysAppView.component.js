// //This is the appview

// import {Component, OnInit} from 'angular2/core';
// import {ToyReducer} from '..';
import Flux from 'flux-angular2';
// import {Flux} from 'flux-angular2';

// import Component from 'angular2/core';
// import Component, OnInit from 'angular2/core';

var markup=`

<div>
    HELOOOOOO
  <form>
    <h3>get all</h3>
    <button (click)="getAllItems()">Refresh All</button>
    <hr/>
    <h3>get by id</h3>
    <input #toyId placeholder="toy id">
    <button (click)="getItem(toyId.value)">Retrieve Toy by Id</button>
    <hr/>
    <h3>search by sport and/or type (WIP)</h3>
    <input #toySportSearch placeholder="toy sport">
    <input #toyTypeSearch placeholder="toy type">
    <button (click)="searchItems(toySportSearch.value, toyTypeSearch.value)">Search Toys</button>
    <hr/>
    <h3>post a new item</h3>
    <input #toySport placeholder="toy sport">
    <input #toyType placeholder="toy type">
    <button (click)="saveItem(toySport.value, toyType.value)">Create New Toy</button>
    <hr/>
    <br/>
  </form>
</div>
<br/>
<br/>
<div *ngFor="#toy of toys" junk="; var index=index">
  Id: {{toy.id}}<br/>
  Sport: {{toy.sport}}<br/>
  Type: {{toy.type}}
  <hr>
</div>

`;

@Flux.View.component({
    selector: 'ToyAppView',
    style: `clickable {color: blue;}`,
    // template: `<h1>Stufff</h1>`
    template: markup
    // template: require('./toysAppView.component.html')
    // templateUrl: 'src/apps/apiToyProject/toysAppView.component.html'
    // templateUrl: '/dist/'+ __package.version + '/public/stuff2.html'
    // templateUrl: '../../public/stuff2.html'

})
export default class ToysAppView extends Flux.AppView {
    constructor() {
        super();
        // this.toyReducer = new ToyReducer();
    }

    reduce(state, action) {
        return {
        //   toys: this.toyReducer.reduce(state.toys, action)
        };
    }

    initialState() {
        return {};
    }
}

Flux.Page.bootstrap(ToysAppView);


// //our root app component
// import {
//   Component, OnInit
// } from 'angular2/core';
// import {HTTP_PROVIDERS} from 'angular2/http';
// import { DataService } from './dataService';
// import { Configuration } from './configuration';
// import { Toy } from './toy';


// import {Flux} from 'flux-angular2';


// @Component({
//     selector: 'toys',
//     providers: [DataService, Configuration],
//     directives: [],
//     templateUrl: 'src/toys.component.html' // apparently this needs to be a full path; ./toys.component.html does not work
// })
// export class ToyComponent implements OnInit {
   
//    // TODO get these data from API call
      
//   public toys:Toy[] = [];
//   public currentToy:Toy;
//   constructor(private _dataService: DataService) { }
    
//     ngOnInit() {
//         console.log(Flux);
//       this.getAllItems();
//       //this.currentToy = this.toys[0];
//       // console.log('currentToy: ' + this.currentToy.id);
//     }
    
//     //...

//     private getAllItems(): void {
//         this._dataService
//             .GetAll()
//             .subscribe(
//                 (data: any) => this.toys = data,
//                 error => console.log(error),
//                 () => console.log('Get all Items complete.')
//                 );
//     }
    
//     private searchItems(sport:string, type:string): void {
//         this._dataService
//             .Search(sport, type)
//             .subscribe(
//                 (data: any) => this.toys = data,
//                 error => console.log(error),
//                 () => console.log('search items complete.')
//                 );
//     }

//     private getItem(id:number): void {
//         this._dataService
//             .GetSingle(id)
//             .subscribe(
//                 (data: any) => this.toys = data,
//                 //(data: any) => this.currentToy = data,
//                 error => console.log(error),
//                 () => console.log('Get Item complete')
//                 );
//     }
    
//     private saveItem(sport:string, type:string): void {
//         let toyToAdd = new Toy();
//         toyToAdd.sport = sport;
//         toyToAdd.type = type;
//         let retVal;
//         this._dataService
//             .Add(toyToAdd)
//             .subscribe(
//                 (data: any) => this.toys = data,
//                 error => console.log(error),
//                 () => console.log('Save Item Complete')
//                 );
        
//     }

 
// }