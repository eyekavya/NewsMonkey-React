import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let data = await fetch(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=e74225b94c0e4e2e9badc4c07532da02"
    );
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }

  handlePrevClick = () => {};

  handleNextClick = () => {};

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((e) => {
            // a unique key is required in order to use map fn
            return (
              <div className="col-md-4" key={e.url}>
                <NewsItem
                  title={e.title ? e.title.slice(0, 45) : ""}
                  description={e.description ? e.description.slice(0, 88) : ""}
                  imageUrl={e.urlToImage}
                  newsUrl={e.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            class="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            class="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
