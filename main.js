var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
    model: Song
});

var SongView = Backbone.View.extend({
    tagName: "li",
    render: function() {
        console.log('laki', this.model);
        this.$el.html(this.model.get("title"));
        this.$el.attr("id", this.model.id);
        return this;
    }
});

var SongsView = Backbone.View.extend({
    initialize: function() {
        this.model.on("add", this.onSongAdd, this);
        this.model.on("remove", this.onSongRemoved, this);
    },
    onSongAdd: function(song) {
        console.log('laki added', this.model);
        var songView = new SongView({ model: song});
        this.$el.append(songView.render().$el);
    },
    onSongRemoved: function(song) {
        console.log('laki removed', this.model, this.model.get(song.id));
        // this.$el.find("li#"+this.model.get(song.id)).remove());
        this.$("li#"+song.id).remove();
    },
    render: function() {
        var self = this;
        this.model.each(function(song) {
            var songView = new SongView({model: song});
            self.$el.append(songView.render().$el);
        })
    }
});

var songs = new Songs([
    new Song({ id: 1, title: "Bluue"}),
    new Song({ id: 2, title: "black" }),
    new Song({ id: 3, title: "black orange" }),
]);

var songView = new SongsView({
    el: $("#SongView"),
    model: songs,
});
songView.render();

// songs.add(new Song({id:4, title: "man in the mirror"}));


/* SearchView = Backbone.View.extend({
    initialize: function () {
        alert("Alerts suck.");
    }
});

var search_view = new SearchView({
    el: $("#search_container")
});

var SongView = Backbone.View.extend({
    render: function () {
        this.$el.html("hey rendering");
        return this;
    }
});

var songView = new SongView({
    el: $("#SongView")
});
songView.render();


var SpanView = Backbone.View.extend({
    tagName: "span",
    className: "songss",
    attributes: {
        "data-genre": "Jazz",
    },
    render: function () {
        this.$el.html("hey rendering in span");
        return this;
    }
});

var spanView = new SpanView();
spanView.render();
$("#divSpan").html(spanView.$el); */

var Song1 = Backbone.Model.extend();

var SongView1 = Backbone.View.extend({
    render: function() {
        var template = _.template($("#songTemplate").html());
        var html = template(this.model.toJSON());
        this.$el.html(html);
        return this;
    }
});


var song1 = new Song1({ title: "hellow world", message: "Its me here!!!", plays: 2000 });

var songView1 = new SongView1({
    el: $("#container"),
    model: song1,
});
songView1.render();

// test by song1.set('listeners', 3); in console chrome

/* var Song1 = Backbone.Model.extend({
    defaults: {
        listeners: 0,
    }
});

var SongView1 = Backbone.View.extend({
    initialize: function() {
        this.model.on("change", this.render, this); // fn name, callback, instance
    },
    onModelChange: function() {
        // song1.set("listeners", this.model.get("listeners") + 1)
        this.$el.addClass("newClass");
    },
    tagName: "span",
    events: {
        "click": "onClick",
        "click .bookmark": "onClickBookMark",
    },
    onClick: () => {
        console.log('subhiksa');
    },
    onClickBookMark: (e) => {
        e.stopPropagation();
        alert('tried');
    },
    // remove button if u want listeners to work
    render: function() {
        this.$el.html(this.model.get("title") + "<button class='bookmark'>click me</button>" + this.model.get("listeners"));
        return this;
    }
});


var song1 = new Song1({ title: "hellpw world" });

var songView1 = new SongView1({
    el: $("#SongView1"),
    model: song1,
});
songView1.render(); */

