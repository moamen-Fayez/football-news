
import './App.css';
import { React } from 'react';
import { useState, useEffect } from 'react';
function App() {
 
  const [feeds, setFeeds] = useState([]);
  
  useEffect( () => {
    fetch('https://www.scorebat.com/video-api/v3/feed/?token=[MTQ1OTNfMTY0NjIyMzgwN181OTFlNzk2NjdhYTlkMDQ3NDY2NzA4YTYyNTE2MTdiM2FlNmQ0YjNj]')
    .then(res => {
      return res.json()
    } ).then(date => { console.log(date.response); setFeeds(date.response)

    }    )
  }, [])
  //console.log(feeds.response)

  return (
    <>
    <div className='hdr'>Check your favorite team's results, news and more!</div>
    <div className="App">
      
      { feeds.map((feed)=> <div className='evfeed'>
      <a href={feed.matchviewUrl} target='_blank' rel='noreferrer' > <img className='imgy' src={feed.thumbnail} alt='pic'      /> </a><br/>
          <p>{feed.title}</p>
          <p>{feed.competition}</p>
          <p>{feed.date}</p>
      </div>  ) }
    
    
    </div>
    </>
  );
}

export default App;
