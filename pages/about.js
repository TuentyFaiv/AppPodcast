export default class extends React.Component{
  render(){
    return (
      <div>
        <img className="image" src="/static/me.jpg" alt="ME"/>
        <h1 className="title">@Tonalli_Lopez</h1>
        <p className="description">FrontEnd Developer</p>
        <style jsx>{`
          :global(body){
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: lightgray;
            margin: 0;
          }

          div{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50vw;
            height: 100vh;
            background-color: gray;
            flex-direction: column;
          }

          .image{
            width: 20vw;
            height: 20vw;
            border-radius: 50%;
            box-shadow: 0 0 20px 5px black;
            object-fit: cover;
          }

          .title{
            font-family: 'Arial';
            font-size: 3vw;
            text-shadow: 0 -2px 5px black;
            color: teal;
          }

          .description{
            font-family: 'Verdana';
            font-size: 1vw;
          }
        `}</style>
      </div>
    )
  }
}