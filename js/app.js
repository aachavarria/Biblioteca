(function(){ // define funcionalidad
var app = angular.module('store', []);

app.controller('BooksController',function($scope){
	this.books = books;
	$scope.gender = gender;
	$scope.favGender = "none";
	$scope.currentPage = 0;
	$scope.data = books;
  //return de numer of pages 
  $scope.numberOfPages=function(){
    return Math.ceil($scope.data.length/$scope.pageSize);                
  }

});

//custom filter to slipt de books collection
app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
 		}
});

app.directive('bookForm', function(){
	return{
		restrict: 'E',
		templateUrl: 'formBook.html',
		controller:function(){
			this.book ={};
			this.addBook = function(library) {
				  library.books.push(this.book);
				  $('.modal').modal('hide')
			};
		},
		controllerAs: 'bookCtrl'
	};
});

app.directive('genderForm', function(){
	return{
		restrict: 'E',
		templateUrl: 'formGender.html',
		controller:function($scope){
			this.newGender = "";
			this.addGender = function(library) {
				  $scope.gender.push(this.newGender);
				  $('#genderModal').modal('hide')
			};
		},
		controllerAs: 'genderCtrl'
	};
});

app.directive('configForm', function(){
	return{
		restrict: 'E',
		templateUrl: 'formConfig.html',
		controller:function($scope){
			this.newfavGender = "";
			this.saveConfig = function(library) {
				  $scope.favGender = this.newfavGender;
				  $('#configModal').modal('hide')
			};
		},
		controllerAs: 'configCtrl'
	};
});

app.directive('bookInfo', function(){
	return{
		restrict: 'E',
		templateUrl: 'bookInfo.html',
	};
});

app.directive('bookFavorite', function(){
	return{
		restrict: 'E',
		templateUrl: 'bookFav.html',
	};
});

app.directive('searchPanel', function(){
	return{
		restrict: 'E',
		templateUrl: 'searchPanel.html',
	};
});

app.directive('pagination', function(){
	return{
		restrict: 'E',
		templateUrl: 'pagination.html',
	};
});


var gender = ["Fantasía épica","Literatura juvenil","Ciencia ficción","Mitología griega"];

var books =[

{
	name: "El libro de las sombras contadas",
	author: 'Terry Goodkind',
	pages: '600',
	gender : 'Fantasía épica',
	rated : 5,
	age: 2001,
	img:'img/sombrascontadas.jpg'
},
{
	name: "Hijos del destino",
	author: 'Darren Shan',
	pages: '300',
	gender : 'Fantasía épica',
	rated : 3,
	age: 2005,
	img:'img/hijosdestino.jpg'
},
{
	name: "La música del silencio",
	author: 'Patrick Rothfuss',
	pages: '145',
	gender : 'Fantasía épica',
	rated : 5,
	age: 2014,
	img:'img/musicasilencio.jpg'
},
{
	name: "Bajo la misma estrella",
	author: 'John Green',
	pages: '313',
	gender : 'Literatura juvenil',
	rated : 4,
	age: 2012,
	img:'img/mismaestrella.jpg'
},
{
	name: "Literatura juvenil",
	author: 'Orson Scott Card',
	pages: '180',
	gender : 'Ciencia ficción',
	rated : 3,
	age: 1985,
	img:'img/endergame.jpg'
},
{
	name: "Hush, Hush",
	author: 'Becca Fitzpatrick',
	pages: '380',
	gender : 'Literatura juvenil',
	rated : 3,
	age: 2009,
	img:'img/hushhush.jpg'
},
{
	name: "Divergente",
	author: 'Veronica Roth',
	pages: '487',
	gender : 'Ciencia ficción',
	rated : 3,
	age: 2012,
	img:'img/divergente.png'
},
{
	name: "El ladrón del rayo",
	author: 'Rick Riordan',
	pages: '288',
	gender : 'Mitología griega',
	rated : 5,
	age: 2005,
	img:'img/ladronrayo.jpg'
},
{
	name: "Juego de tronos",
	author: 'George Raymond Richard Martin',
	pages: '694',
	gender : 'Fantasía épica',
	rated : 5,
	age: 1995,
	img:'img/juegotronos.jpg'
}];

})();


