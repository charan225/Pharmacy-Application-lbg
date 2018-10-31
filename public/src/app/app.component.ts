import { Component } from '@angular/core';
import { Http} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  	posts : any[];
  	name;
  	manufacturer;
  	batch;
  	date;
  	price;
  	type;
  	dataName = [];
  	dataMf =[];
  	dataBatch = [];
  	dataPrice = [];
  	dataType = []; 
  	dataDate = []; 	
  	isUpdateClicked = false;
  constructor(private http: Http){

  	http.get('http://localhost:3001/api/seedData')
  		.subscribe(response => {
  			console.log(response.json());
  			this.posts = response.json();
  		})

  };
  submitForm() {
  	let newPost = { name : this.name,
  					manufacturer : this.manufacturer,
  					date : this.date,
  					batch : this.batch,
  					price : this.price,
  					type : this.type
  				}
  				this.posts.push(newPost);
  				console.log("newPost",newPost);
  	this.http.post('http://localhost:3001/api/seedData/newMed',newPost)
  	.subscribe(response => {
  		
  	})
 
  }
  updateForm(post, index) {
  	this.isUpdateClicked = true;
  	if(!post.toUpdate){
  		post.toUpdate = true;
  	}
  	else {
  		post.toUpdate = false;
  		let updatePost = {
  			name : this.dataName[index],
  			manufacturer : this.dataMf[index],
  			batch : this.dataBatch[index],
  			date : this.dataDate[index],
  			price : this.dataPrice[index],
  			type : this.dataType[index]
  		}
  		this.posts.splice(index,1,updatePost);
  		  	this.http.put('http://localhost:3001/api/seedData/putMed/' + index, updatePost)
  	.subscribe(response => {
  		
  	})
  	}  
  }
  deleteForm(index) {
  	this.posts.splice(index,1);
  	let id = {id : index};
  	this.http.delete('http://localhost:3001/api/seedData/delMed/' + index)
  	.subscribe(response => {
  		
  	})
  }
}
