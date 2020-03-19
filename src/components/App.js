import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../API/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';



class App extends React.Component {
    state = { videos : [], selectedVideo: null };


    componentDidMount(){
        this.onTermSubmit(" ");
    }


    // on term submit
    onTermSubmit = async term => { 


        //console.log("term :", term)
    const response = await youtube.get('https://www.googleapis.com/youtube/v3/search',{
            params:{ 
                key:'AIzaSyBK20TT_A5ecCJoGQrCfHadQlrIXU87iqc',            
                q:term, 
                regionCode : 'us',
                part:'snippet',

            }
        })


        //console.log(response)
        this.setState({ 
            videos: response.data.items,
            selectedVideo:response.data.items[0]
        })
    }

    // on video select
    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video});
    }

    render() {
        return (  
            <div className = "ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                    <div className="eleven wide column">
                    <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="five wide column">
                    <VideoList 
                        onVideoSelect={this.onVideoSelect} 
                        videos={this.state.videos}/>
                    </div>
                </div>
                </div>
            </div> 
        ) 
    }
}
 

export default App;