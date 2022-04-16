import React, { Component } from "react";
import NewsItem from "./NewsItem"
import PropTypes from "prop-types" ;

export default class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 8, 
    category: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number, 
    category: PropTypes.string,
  }

  constructor(){
    super();
    this.state = {
      articles: [],
      page:1
    }

  }
  async componentDidMount(){
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=1&apiKey=4dd0045769ac4019bf44f2e121b96916`).then((d)=>d.json())
    console.log(data)
    this.setState({
      articles:data.articles,
      totalResults: data.totalResults
    })

  }

  handlePrevClick = async ()=>{
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4dd0045769ac4019bf44f2e121b96916&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);  
    this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
        
    })

}

 handleNextClick = async ()=>{
    console.log("Next"); 
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4dd0045769ac4019bf44f2e121b96916&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json() 
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            
        })
}
    }

  render() {


    return (
      <>

        <div className="container">
        <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
          <div className="row my-5">
          {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:''} newsUrl={element.url}/>
                    </div> 
                })}
          </div>
        </div>
      </>
    );
  }
}
