function Storage() {
	this.drumstickNum = Number(chrome.storage.sync.get({'drumstickNum':'0'}));	

	var list = chrome.storage.sync.get({'list': ''});
	this.listJson = JSON.parse(list);


	
}

Storage.prototype.addItem = function(item) {
	
}

Storage.prototype.addOneDrumstick = function() {
	var self = this;
	var drumstickNumAddOne = this.drumstickNum + 1 
	chrome.storage.sync.set({'drumstickNum': drumstickNumAddOne}, () => {
		self.drumstickNum = drumstickNumAddOne;
		console.log(self.drumstickNum)
	});
}

Storage.prototype.reduceOneDrumstick = function() {
	var self = this;
	var drumstickNumReduceOne = this.drumstickNum - 1 
	chrome.storage.sync.set({'drumstickNum': this.drumstickNumReduceOne + 1}, () => {
		self.drumstickNum = drumstickNumReduceOne;
		console.log(self.drumstickNum)
	});
}