import axios from 'axios';

    

const KEY = 'AIzaSyBK20TT_A5ecCJoGQrCfHadQlrIXU87iqc';


export default axios.create({ 
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key: KEY,
        regionCode : 'kenya'
    }
});




// https://www.googleapis.com/youtube/v3/search?part=snippet&regionCode=us&key=AIzaSyBK20TT_A5ecCJoGQrCfHadQlrIXU87iqc