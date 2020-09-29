var quotes;
var author;

const getTodos = async () => {
  try {
    const res = await axios.get('https://type.fit/api/quotes');

    quotes = res.data;

    author = Math.floor(Math.random()*1643);
    document.getElementById('data').innerHTML = quotes[author].text;
    document.getElementById('author').innerHTML = '- '+quotes[author].author;

    console.log(author)

    return quotes;
  } catch (e) {
    console.error(e);
  }
};

getTodos();