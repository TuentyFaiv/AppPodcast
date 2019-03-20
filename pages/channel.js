import Layout from '../components/Layout';
// import LayoutChannel from '../components/LayoutChannel';
import ChannelsGrid from '../components/ChannelsGrid';
import PodcastsListWithClick from '../components/PodcastListWithClick';
import Error from './_error';
import PodcastPlayer from '../components/PodcastPlayer';
export default class extends React.Component{
  constructor(props){
    super(props);
    this.state = { openPodcast: null};
  }

  static async getInitialProps({ query, res }){
    let idChannel = query.id;


    try{
      let [reqChannel, reqAudios, reqSeries] = await Promise.all([
        fetch(`https://api.audioboom.com/channels/${idChannel}`),
        fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
        fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`)
      ])

      if(reqChannel.status >= 400){
        res.statusCode = reqChannel.status;
        return { channel: null, audioClips: null, series: null, statusCode: reqChannel.status }
      }
      
      let [dataChannel, dataAudios, dataSeries] = await Promise.all([
        reqChannel.json(),
        reqAudios.json(),
        reqSeries.json()
      ])

      let channel = dataChannel.body.channel;

      let audioClips = dataAudios.body.audio_clips;

      let series = dataSeries.body.channels;

      console.log(channel);
      // console.log(audioClips);
      return { channel, audioClips, series, statusCode:200 };
    }catch(e){
      return { channel: null, audioClips: null, series:null, statusCode:503}
    }
  }

  openPodcast = (event, podcast) => {
    event.preventDefault();
    this.setState({
      openPodcast: podcast
    });
  }

  closePodcast = (event) => {
    event.preventDefault();
    this.setState({
      openPodcast: null
    });
  }

  render(){
    const { channel, audioClips, series, statusCode } = this.props;
    const { openPodcast } = this.state;

    if(statusCode !== 200){
      return (
        <Error statusCode={statusCode}/>
      )
    }
    return(
      <Layout title={ channel.title }>
        <div className="banner-channel">
          <img src={channel.urls.banner_image.original} />
        </div>
        {
          openPodcast && 
            <div className="modal">
              <PodcastPlayer podcast={openPodcast} onClose={this.closePodcast}/>
            </div>
        }
        <h1>{channel.title}</h1>
        {series.length > 0 &&
          <div>
            <h2>Series</h2>
            <ChannelsGrid channels={series} />
          </div>
        }

        {/* <PodcastsGrid audioClips={audioClips} /> */}
        <h2>Ultimos Podcasts</h2>
        <PodcastsListWithClick podcasts={audioClips} onclickPodcast={this.openPodcast} />
        <style jsx>{`
          h1{
            // display: inline-block;
            margin: 10px 0 0 15px;
            font-size: 50px;
            color: #8756CA;
            text-shadow: 0 0 20px gray;
            // background: rgba(0, 0, 0, .3);
          }

          h2{
            text-align: center;
          }

          .banner-channel img{
            width: 100%;
          }

          .modal{
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 99999;
          }

        `}</style>
      </Layout>
    )
  }
}