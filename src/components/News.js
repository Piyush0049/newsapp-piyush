import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import LoadingBar from 'react-top-loading-bar'
export default class News extends Component {
  static defaultProps = {
    category: "science"  // Correct spelling for defaultProps
  }

  static propTypes = {
    category: PropTypes.string,  // Correct spelling for propTypes
  }
  handleprev = () => {

  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading: false
    }
    document.title = this.capitalizeFirstLetter(this.props.category) + '- PulsePoint News'
  }
  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  async componentDidMount() {
    // runs after render  
    this.props.setprogress(10)
    this.setState({ loading: true })
    let url = `https://newsapi.org/v2/everything?apiKey=b133f5095d2143fb86530d5fe550f24e&q=${this.props.category}&page=1`;
    this.props.setprogress(20)
    let response = await fetch(url);
    let data = await response.json();
    this.props.setprogress(60)
    // Update the state with the fetched data
    this.setState({ articles: data.articles, loading: false });
    this.props.setprogress(100)
  }


  handleprev = async () => {
    this.props.setprogress(10)
    this.setState({ loading: true })
    let url = `https://newsapi.org/v2/everything?apiKey=b133f5095d2143fb86530d5fe550f24e&q=${this.props.category}&page=${this.state.page - 1}`;
    this.props.setprogress(30)
    let response = await fetch(url);
    let data = await response.json();
    // Update the state with the fetched data
    this.setState({ articles: data.articles });
    this.props.setprogress(70)
    this.scrollToTop()
    this.setState({
      page: this.state.page - 1,
      loading: false
    });
    this.props.setprogress(100)
  };

  handleNext = async () => {
    this.props.setprogress(10)
    this.setState({ loading: true })
    let url = `https://newsapi.org/v2/everything?apiKey=b133f5095d2143fb86530d5fe550f24e&q=${this.props.category}&page=${this.state.page + 1}`;
    this.props.setprogress(40)
    let response = await fetch(url);
    let data = await response.json();
    // Update the state with the fetched data
    this.setState({ articles: data.articles });
    this.props.setprogress(70)
    this.scrollToTop()
    this.setState({
      page: this.state.page + 1,
      loading: false
    });
    this.props.setprogress(100)
  };







  capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  render() {

    return (
      <>
        <h4 className='ml-3 mx-2 ' style={{ position: "relative", marginTop: "90px", fontFamily: "sans-serif", fontSize: "50px" }}><strong> {this.capitalizeFirstLetter(this.props.category)} </strong></h4>
        {this.state.loading && <Spinner />}
        <div className='container my-4' >
          {!this.state.loading && <div className='row'>
            {this.state.articles.map((element) => {
              return <div className='col-md-4 my-3' style={{ width: "400px", position: 'relative', left: "8.5%" }}>
                <Newsitem author={!element.author ? "Anonymous" : element.author} publishedAt={!element.publishedAt ? "Unknown" : new Date(element.publishedAt).toGMTString()} key={element.url} title={element.title ? element.title + "..." : ""} description={element.description ? element.description + "..." : ""} imageurl={!element.urlToImage ? "https://images.indianexpress.com/2024/01/betting-app.jpg" : element.urlToImage} url={element.url} source={element.source.name} />
              </div>
            })}

            <div class="d-flex justify-content-between mt-5" style={{ position: "sticky", bottom: "50%", margin: "0 20px" }}>
              <button className='mr-5' disabled={this.state.page <= 1} type="button" class="btn btn-dark" onClick={this.handleprev} style={{ position: "absolute", left: "5%" }} ><strong>&larr;</strong></button>
              <button className='ml-5' type="button" class="btn btn-dark" onClick={this.handleNext} style={{ position: "absolute", right: "5%" }}><strong>&rarr;</strong></button>
            </div>
          </div>}
        </div>
      </>
    )
  }
}





{/*  <div className='col my-3'>
        <Newsitem title = "title" description = "description"/>
        </div>
        <div className='col my-3'>
        <Newsitem title = "title" description = "description"/>
        </div>
        <div className='col my-3'>
        <Newsitem title = "title" description = "description"/>
        </div>        
        </div>
        <div className='row my-4'>
        <div className='col my-3'>
        <Newsitem title = "title" description = "description"/>
        </div>
        <div className='col my-3'>
        <Newsitem title = "title" description = "description"/>
        </div>
        <div className='col my-3'>
        <Newsitem title = "title" description = "description"/>
        </div>
        <div className='col my-3'>
        <Newsitem title = "title" description = "description"/>
        </div>*/}