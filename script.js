function Phone (brand, price, color,cameraMPX) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.cameraMPX = cameraMPX;
}
Phone.prototype.printInfo = function(){
	console.log('The phone brand is ' + this.brand + ', color is ' + this.color.toLowerCase() + ' and its price is ' + this.price);
}
Phone.prototype.compare = function(Phone){
var info = this.brand + ' is ';
var diff;
if(this.price>Phone.price) {
	info+= 'more expensive than ' + Phone.brand;
	diff = this.price - Phone.price;
}	
if(this.price<Phone.price) {
	info+= 'cheaper than ' + Phone.brand;
	diff= Phone.price - this.price;
}	
info+='. The difference in price between them is ' + diff;
console.log(info);
}
var sGalaxy = new Phone('Samsung', 2000, 'Gold', 16);
var iPhone7 = new Phone('Iphone', 4000, 'Red', 20);
var xperiaZ5 = new Phone('Sony', 2350, 'Black', 18);

sGalaxy.printInfo();
iPhone7.printInfo();
xperiaZ5.printInfo();
sGalaxy.compare(xperiaZ5);