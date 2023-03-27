import React, { Component } from 'react'

export class NewsItem extends Component {

    gmtTime =(date)=>{
        let a = new Date(date);
        return a.toUTCString();
    }

    render() {

        let { title, discription, imgurl, murl, mode ,author,date} = this.props;
        return (
            <div className='my-3 d-flex justify-content-center' style={{
                backgroundColor: mode === 'light' ? 'white' : 'grey',
                color: mode === 'light' ? 'black' : 'white',
            }}>

                <div className="card" style={{
                    width: "19rem", backgroundColor: mode === 'light' ? 'white' : 'grey',
                    color: mode === 'light' ? 'black' : 'white',
                    border: mode === 'dark' ? '1px solid white' : 'none'
                }} >
                    <img src={imgurl} className="card-img-top" alt="*img Not Available*" />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{discription}...</p>
                        <p className="card-text " ><small className={`text-${this.props.mode==='dark'?'white':'dark'}`}>By {author?author:'Unknown'} on {this.gmtTime(date)}</small></p>
                        <a href={murl} className={`btn btn-sm btn-${mode === 'dark' ? 'dark' : 'primary'}`} target="_blank" rel="noreferrer">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem