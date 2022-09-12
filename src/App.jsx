import { useEffect, useState } from 'react'
import './App.css'
import NewsCard from './components/NewsCard/NewsCard'
import HeaderComp from './components/HeaderComp/HeaderComp'
import FooterComp from './components/FooterComp/FooterComp'

function App() {
  const [newsArray, setNewsArray] = useState([])


  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v3/articles?_limit=100")
      .then((response) => response.json())
      .then((data) => setNewsArray(data))

  }, [])



  return (
    <div className="App">
      <HeaderComp />
      <NewsCard news={newsArray} />
      <FooterComp />
    </div>
  )
}

export default App
