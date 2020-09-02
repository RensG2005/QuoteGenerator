import React, {useState} from 'react';
import './App.css';

let i;

function App() {
  
  let[quote, setQuote] = useState('The highest stage in moral ure at which we can arrive is when we recognize that we ought to control our thoughts.')
  let[author, setAuthor] = useState('Charles Darwin')
  
  function newQuote(){
   i = Math.floor(Math.random()  * 1600)
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    }).then(function(data) {
      setQuote(data[i].text)
      setAuthor(data[i].author)
      setRandomColor()
    })
  };
  
  
  function setRandomColor(){
    let colors = ['#193331', '#F61699', '#00B3E6', '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#332FCC','#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
    '#66664D', '#991AF1', '#E6666F', '#4DB3FF', '#1AB399','#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', '#4D8066', '#809980', '#E6FF80', '#1A8233', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
    document.documentElement.style.setProperty('--main-bg-color', colors[Math.floor(Math.random() * 20)]);
  }
  const twitterLink = () =>{
    return quote.split(' ').join("%20")
  
  }
  twitterLink()
  
  return (
    <div className="App">
        <div className="card">
            <h2 className="quote">{quote}</h2>
            <h4 className="author">{author}</h4>

            <div className="sm-btns">
            <div className="twitter">
                <a rel="noopener" target="_blank" href={`https://twitter.com/intent/tweet?text=${twitterLink()}`}><i className="fab fa-twitter"></i></a>
              </div>
              
              <div className="tumblr">
                <a><i className="fab fa-tumblr"></i></a>
              </div>
            </div>
            <button onClick={newQuote} className="new-quote">New Quote</button>
        </div>
        <p>By Rens</p>
    </div>
  );
}

export default App;
