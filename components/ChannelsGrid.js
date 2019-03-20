import { Link } from '../routes';
import  slug from '../helpers/slug';

export default class ChannelsGrid extends React.Component{
  render(){
    const { channels } = this.props;

    return(
      <div className="channels">
        {
          channels.map((channel) => {
            return (
              <Link 
                key={channel.id} 
                route="channel" 
                params={{
                  slug: slug(channel.title),
                  id: channel.id
                }} 
                prefetch
              >
                <div>
                  <a className="channel">
                    <img src={channel.urls.logo_image.original} alt="" />
                  </a>
                  <h2>{channel.title}</h2>
                </div>
              </Link>
            )
          })
        }
        <style jsx>{`
          .channels{
            display: grid;
            grid-gap: 15px;
            margin: 15px;
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          }

          .channel{
            display: block;
            border-radius: 3px;
            background: transparent;
            margin: 0;
            padding: 0;
            margin-bottom: .5em;
          }

          h2:hover{
            text-decoration: underline;
            cursor: pointer;
            transform: scale(1.1);
          }

          .channel img{
            width: 100%;
            box-shadow: 0 2px 6px rgba(0, 0, 0, .15);
            border-radius: 3px;
            objet-fit: cover;
          }

          h2{
            padding: 5px;
            font-size: 0.9em;
            font-weight: 600;
            margin: 0;
            text-align: center;
          }
        `}</style>
      </div>
    )
  }
}