import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';



export class News extends Component {

  static defaultProps ={
    category:"general"
  }
   capitalizeFirstLetter=(string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  getData = async (pageNo) => {
    this.props.setProgress(20);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=94c0c90dbc624bcaa424c07ce57da017&page=${pageNo}&pageSize=18`;
    this.setState({
      loading: true
    });
    this.props.setProgress(45);
    let data = await fetch(url);
    this.props.setProgress(70);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
    this.props.setProgress(100);
  }


  async componentDidMount() {
    this.getData(this.state.page);

  };


  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
    document.title =`${this.capitalizeFirstLetter(this.props.category)} -dailynews`
  }

  handleNextClick = async () => {

    this.getData(this.state.page + 1);
    this.setState({
      page: this.state.page + 1
    })
    window.scrollTo(0, 0);
  }

  handlePrevClick = async () => {
    this.getData(this.state.page - 1);
    this.setState({
      page: this.state.page - 1
    })
    window.scrollTo(0, 0);

  }
  render() {
    return (
      <div className='container my-3 ' style={{
        backgroundColor: this.props.mode === 'light' ? 'white' : 'grey',
        color: this.props.mode === 'light' ? 'black' : 'white'
         }}>
        <h2 className='text-center' style={{marginTop:'80px'}}>DailyNews -Top {' '} 
         {this.capitalizeFirstLetter(this.props.category)} Headlines!</h2>
        <Spinner loading={this.state.loading}/>
        <div className="row">
          {
            !this.state.loading && this.state.articles.map((Element) => {
              return (

                <div className="col-md-4" key={Element.url} ><NewsItem title={Element.title} discription={Element.description} imgurl={Element.urlToImage} murl
                  ={Element.url} mode={this.props.mode} author={Element.author} date={Element.publishedAt}/>
                </div>

              )

            })}

        </div>
        <div className="container2 d-flex justify-content-between my-3">

          <button type="button" className={`btn btn-sm btn-${this.props.mode==='dark' ? 'light':'secondary'}`}  onClick={this.handlePrevClick} disabled={this.state.page <= 1}>&larr; Previous</button>

          <button type="button" className={`btn btn-sm btn-${this.props.mode==='dark' ? 'dark':'primary'}`}  onClick={this.handleNextClick} disabled={this.state.page + 1 > this.state.totalResults / 18}>Next &rarr; </button>

        </div>
      </div>
    )


  }
}

export default News