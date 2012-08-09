$(function() {

  Parse.$ = jQuery;

  // Initialize Parse with your Parse application javascript keys
  Parse.initialize("8booUvxHTt4KusKniIYXB7pk4HfuvcsTJHZRMGZM", "ZAQfTvdidYJOI4tm8UMkDmPy1ZT7xTd2rDEKGXwG");

  // Card Model
  // ----------

  // Our basic Card model has `URL`, `expirationDate`, `location`, `name`, `password`,  attributes.
  var Card = Parse.Object.extend("Card", {
    // Default attributes for the todo.
    defaults: {
      URL: "www.example.com",
      expirationDate: "2012-08-09T07:16:33.235Z"
    },

    // Ensure that each todo created has `URL`.
    initialize: function() {
      if (!this.get("URL")) {
        this.set({"URL": this.defaults.URL});
      }
    },

    // Toggle the `done` state of this todo item.
    // toggle: function() {
    //   this.save({done: !this.get("done")});
    // }
  });

  // Card Collection
  // ---------------

  var CardList = Parse.Collection.extend({

    // Reference to this collection's model.
    model: Card

    // Filter down the list of all todo items that are finished.
    // done: function() {
    //   return this.filter(function(todo){ return todo.get('done'); });
    // },
  });


 var Cards = new CardList();

Cards.fetch({
  success: function(collection) {
    Cards.each(function(object) {
      //console.warn(object);
      var view = new CardView({model: object});
      this.$("#card-list").append(view.render().el);
    });
  },
  error: function(collection, error) {
    // The collection could not be retrieved.
  }
});


  // Card Item View
  // --------------

  // The DOM element for a todo item...
  var CardView = Parse.View.extend({

    //... is a table row tag.
    tagName:  "tr",

    // Cache the template function for a single item.
    template: _.template($('#card-template').html()),


    // The TodoView listens for changes to its model, re-rendering. Since there's
    // a one-to-one correspondence between a Todo and a TodoView in this
    // app, we set a direct reference on the model for convenience.
    initialize: function() {
      this.render();
    },

    // Re-render the contents of the todo item.
    render: function() {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    },
  });
});
