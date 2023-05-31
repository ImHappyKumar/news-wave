import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    if (string!=='') {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }

  const updateNews = async () => {
    props.setProgress(10);
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?apiKey=${props.apiKey}&country=${props.country}&category=${props.category}&pageSize=${props.pageSize}&page=${page}`;
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }

  useEffect(() => {
    if (props.category!=='') {
      document.title = `${capitalizeFirstLetter(props.category)} - NewsWave`;
    }
    else {
      document.title = 'NewsWave';
    }
    updateNews();
    /* eslint-disable */
  }, []);

  const fetchMoreData = async () => {
    /*
    We first update the URL by increasing page by 1, then update page  This is because setState is asynchronous, so when we call setState({ page: page + 1 }) and immediately try to access page in the URL, it may not have been updated yet. So, first we used URL and then update page state
    */
    const url = `https://newsapi.org/v2/top-headlines?apiKey=${props.apiKey}&country=${props.country}&category=${props.category}&pageSize=${props.pageSize}&page=${page+1}`;
    setPage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
  }
    
  return (
    <>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner/>}>
        <div className='container my-5'>
          <h3 className='text-center' style={{marginTop: '100px', marginBottom: '30px'}}>{props.brandName} - Top {props.category?capitalizeFirstLetter(props.category):''} Headlines</h3>
          {loading && <Spinner />}
          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-4" key={element.url+element.page}>
                <NewsItem source={element.source} image={element.urlToImage} title={element.title} description={element.description} author={element.author} url={element.url} publishedAt={element.publishedAt}/>
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}

News.defaultProps = {
  country: 'in',
  pageSize: 15,
  category: ''
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News;