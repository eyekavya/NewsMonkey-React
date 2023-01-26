import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  //picked up article from json so that i can use this array directly in my state object
  articles = [
    {
      source: {
        id: "news-com-au",
        name: "News.com.au",
      },
      author: null,
      title: "Steve Smith does it again, stuns cricket world",
      description: "Steve Smith has done it again.",
      imageUrl:
        "https://www.news.com.au/sport/cricket/absolute-clinic-steve-smith-smashes-another-brutal-century-in-bbl-derby/news-story/aae63fb9ca1e63c5586fddb083ca49e6",
      urlToImage:
        "https://content.api.news/v3/images/bin/93e16617b78e30584315f5a3b67238e7",
      publishedAt: "2023-01-21T10:13:00Z",
      content:
        "Steve Smith has done it again.\r\nThe Australian Test No. 3 has reminded the cricket world he is just as handy in the shortest form of the game, smashing his second Big Bash century in a week. \r\nBattin… [+1533 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      imageUrl:
        "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      imageUrl:
        "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];

  constructor() {
    super();
    //making an object (called state) for status (refer json file)
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount() {
    let data = await fetch(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=e74225b94c0e4e2e9badc4c07532da02"
    );
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }

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
      </div>
    );
  }
}

export default News;
