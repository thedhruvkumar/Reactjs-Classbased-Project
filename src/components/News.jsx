import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {

  constructor(){
    super();
    this.state = {
      articles: []
    }

  }
  async componentDidMount(){
    let data = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=4dd0045769ac4019bf44f2e121b96916').then((d)=>d.json())
    console.log(data)
    this.setState({
      articles:data.articles
    })

  }

  render() {


    return (
      <>
        <div className="container">
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
