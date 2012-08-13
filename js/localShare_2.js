$(function() {
	Parse.$ = jQuery;

	// Initialize Parse with your Parse application javascript keys
	Parse.initialize("8booUvxHTt4KusKniIYXB7pk4HfuvcsTJHZRMGZM", "ZAQfTvdidYJOI4tm8UMkDmPy1ZT7xTd2rDEKGXwG");

	// Card Model
	// -----------------

	var Card = Parse.Object.extend("Card", {
		// Default attributes
		defaults: {
			URL: "www.example.com",
			expirationDate: "2012-08-09T07:16:33.235Z",
			location: "0,0",
			name: "name"
		},

		// Ensure each Card has URL, Expiration Date, Location & Name
		initialize: function() {
			if (!this.get("URL")) {
				this.set({"URL: this.defaults.URL"})
			}
			if (!this.get("expirationDate")) {
				this.set({"expirationDate: this.defaults.expirationDate"})
			}
			if (!this.get("location")) {
				this.set({"location: this.defaults.location"})
			}
			if (!this.get("name")) {
				this.set({"name: this.defaults.name"})
			}
		},
	});


	// Card Collection
	// -------------------

	var CardList = Parse.Collection.extend({
		// Reference to this collection's model
		model: Card,

		comparator: function(card) {

		}
	});

});