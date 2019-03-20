import Head from 'next/head';
import Podcast from '../components/Podcast';

export default class extends React.Component{
  static async getInitialProps({ query }) {
    let idPodcast = query.id;

    let reqPod = await fetch(`https://api.audioboom.com/audio_clips/${idPodcast}.mp3`);
    let dataAudio = await reqPod.json();
    let podcast = dataAudio.body.audio_clip;

    // console.log(podcast);
    return podcast;
  }

  render(){
    const podcast = this.props;
    console.log(podcast);
    return(
      <div>
        <Head>
          <title>{podcast.title}</title>
        </Head>
        <Podcast podcast={podcast}/>
      </div>
    )
  }
}