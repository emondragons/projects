var chevy = { make: "chevy",
	 model: "Bel Air",
	 year: 1957,
	 color: "red",
	 passengers: 2,
	 covertible: false,
	 mileage: 1021 }; //car object "state & behavior"semicolon

// access property
var miles = chevy.mileage;

//change property
chevy.mileage = 10000;

// add new property
chevy.needsWashing = true;

//compute
for (var i =0; i < chevy.passengers; i++){
	addPersonToCar();
}

// delete property
delete chevy.color;

var lookMaNoProps = { };
lookMaNoProps.age = 10;
if (lookMaNoProps.age > 5) {
lookMaNoProps.school = "Elementary";
}
