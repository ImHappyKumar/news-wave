import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 15,
    category: ''
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  capitalizeFirstLetter = (string) => {
    if (string!=='') {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }
    if (this.props.category!=='') {
      document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsWave`;
    }
    else {
      document.title = 'NewsWave';
    }
  }

  async componentDidMount() {
    this.props.setProgress(10);
    this.setState({loading: true});
    const url = `https://newsapi.org/v2/top-headlines?apiKey=${this.props.apiKey}&country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
    this.props.setProgress(100);
  }

  fetchMoreData = async () => {
    /*
    We first update the URL by increasing page by 1, then update page state. This is because setState is asynchronous, so when we call this.setState({ page: this.state.page + 1 }) and immediately try to access this.state.page in the URL, it may not have been updated yet. So, first we used URL and then update page state
    */
    const url = `https://newsapi.org/v2/top-headlines?apiKey=${this.props.apiKey}&country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page+1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      page: this.state.page+1
    });
  }

  render() {
    const {brandName, category} = this.props;
    
    return (
      <>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}>
          <div className='container my-5'>
            <h3 className='text-center'>{brandName} - Top {category?this.capitalizeFirstLetter(category):''} Headlines</h3>
            {this.state.loading && <Spinner />}
            <div className="row">
              {this.state.articles.map((element) => {
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
}

export default News