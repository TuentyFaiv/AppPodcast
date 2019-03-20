export default class PodcastPlayer extends React.Component{
  render(){
    const { podcast, onClose } = this.props;

    return(
      <div className="clip">
        <nav>
          {
            onClose ?
              <a onClick={onClose}>⬅ Volver</a>
            :
              <Link
                route="channel"
                params={{
                  slug: slug(podcast.channel.title),
                  id: podcast.channel.id
                }}
                prefetch
              >
                <a>⬅ Volver</a>
              </Link>
          }
          
        </nav>
        <div className="picture">
          <div>
            <img src={podcast.urls.image} />
          </div>
        </div>
        <div className="player">
          <h3>{podcast.title}</h3>
          <h6>{podcast.channel.title}</h6>
          <audio controls>
            <source src={podcast.urls.high_mp3} type="audio/mp3" />
            Your browser does not support the audio element.
            </audio>
        </div>

        <style jsx>{`
          nav {
            background: none;
          }
          nav a {
            display: inline-block;
            padding: 15px;
            color: white;
            cursor: pointer;
            text-decoration: none;
          }
          .clip {
            display: flex;
            height: 100vh;
            flex-direction: column;
            background: #8756ca;
            color: white;
          }

          .picture {
            display: flex;
            width: 100%;
            height: 80vh;
            align-items: center;
            justify-content: center;
            flex: 1 1;
            flex-direction: column;
          }

          .picture div img{
            width: 50vh;
            height: 50vh;
            object-fit: cover;
            background-position: 50% 50%;
            background-size: contain;
            background-repeat: no-repeat;
          }

          .player {
            height: auto;
            padding: 30px;
            background: rgba(0,0,0,0.3);
            text-align: center;
          }
          h3 {
            margin: 0;
          }
          h6 {
            margin: 0;
            margin-top: 1em;
          }
          audio {
            margin-top: 2em;
            width: 100%;
          }

          .modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 99999;
          }
        `}</style>

        <style jsx global>{`
          body{
            margin: 0;
            font-family: system-ui;
            background: white;
          }
        `}</style>
      </div>
    )
  }
}