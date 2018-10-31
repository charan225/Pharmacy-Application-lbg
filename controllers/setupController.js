
var bodyParser = require('body-parser');

module.exports = function(app) {
		app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended : true}));

			var seedData = [
	{
		name : "Paracetamol",
		manufacturer: "ZenLabs",
		batch: "45637",
		date: "2019-08-12",
		price: "650",
		type : "tablet"  
	},
	{
		name : "Zintac",
		manufacturer: "Reddy's",
		batch: "55787",
		date: "2019-04-06",
		price: "800",
		type : "tablet" 
	},
	{
		name : "Couphilgo",
		manufacturer: "MediLabs",
		batch: "45663",
		date: "2019-07-06",
		price: "450",
		type : "syrup" 
	}		


		]
		app.get('/api/seedData',function(req,res){

		res.send(JSON.stringify(seedData));
		});
		app.post('/api/seedData/newMed',function(req,res){
  		let newPost = { name : req.body.name,
  					manufacturer : req.body.manufacturer,
  					batch : req.body.batch,
  					price : req.body.price,
  					type : req.body.type
  				}
  				seedData.push(newPost);
  				
		res.send('success');
		});
		app.delete('/api/seedData/delMed/:id', function(req,res){
		let index = req.params.id;
		seedData.splice(index,1);
		res.send('success');

	});	
			app.put('/api/seedData/putMed/:id', function(req,res){
		let updatePost = { name : req.body.name,
  					manufacturer : req.body.manufacturer,
  					batch : req.body.batch,
  					price : req.body.price,
  					type : req.body.type
  				}

		let index = req.params.id;
		seedData.splice(index,1,updatePost);

		res.send('success');

	});
}


