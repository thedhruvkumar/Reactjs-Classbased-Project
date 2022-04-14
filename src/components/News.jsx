import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row my-5">
            <div className="col-md-4">
              <NewsItem title="Mytitle" description="my description" />
            </div>
            <div className="col-md-4">
              <NewsItem title="Mytitle" description="my description" />
            </div>
            <div className="col-md-3">
              <NewsItem title="Mytitle" description="my description" />
            </div>
          </div>
          <div className="row my-5">
            <div className="col-md-4">
              <NewsItem title="Mytitle" description="my description" />
            </div>
            <div className="col-md-4">
              <NewsItem title="Mytitle" description="my description" />
            </div>
            <div className="col-md-4">
              <NewsItem title="Mytitle" description="my description" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
