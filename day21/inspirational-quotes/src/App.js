import logo from './logo.svg';
import './App.css';
import Quote from './quotes';

function App() {
  const quotes = [
    'Tell other people that you are unprecedentedly fascinating.',
    'Believe in the warning, not the failure.',
    'Free your mind until your reflection becomes your guardian angel.',
    'Being a young man can be a full-time job.',
    'Never think of it as karma, think of it as life.',
    'Postponing paranoia destroys your own destiny.',
    'Do drugs, or don\'t '
    ]

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]; //this is to get a random quote from the array above, it always has * somehting to make it work

  return (
    <>
      <p>There are {quotes.length} possible quotes</p>
      <Quote quote={randomQuote} />
    </>
  );
}

export default App;
