var img= new Image;

var movies = [
    {
        id:1,
        title: 'Harry Potter',
        desc: 'Movie about magician',
        poster:'./posters/harry.jpg'
    },
    {
        id:2,
        title: 'The Lion King',
        desc: 'Film about wild cat',
        poster:'./posters/lion.jpg'
    },
    {
        id:3,
        title: 'The Ilusionist',
        desc:'In turn-of-the-century Vienna, a magician uses his abilities to secure the love of a woman far above his social standing.',
        poster:'./posters/ilusionist.jpg'
    },
    {
        id:4,
        title: 'Solo',
        desc: 'During an adventure into a dark criminal underworld, Han Solo meets his future copilot Chewbacca and encounters Lando Calrissian years before joining the Rebellion.',
        poster:'./posters/solo.jpg'
    }
];
var moviesElements = movies.map(function (movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc)),
        React.createElement('img',{src:movie.poster});
});
var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Movies list'),
        React.createElement('ul', {}, moviesElements)
    )
;
ReactDOM.render(element, document.getElementById('app'));