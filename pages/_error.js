import Layout from "../components/Layout";
import Link from 'next/link';

export default class Error extends React.Component{

  static async getInitialProps({res,err}){
    const statusCode = res ? res.statusCode : err ? 
      err.statusCode: null;
    return { statusCode };

  }

  render(){
    const { statusCode } = this.props;
    return(
      <Layout title="Oh no :(">
        {
          statusCode === 404 ?
            <div className="message">
              <h1>Esta Página no existe :c</h1>
              <p>
                <Link href="/">
                  <a>Volver a la Home</a>
                </Link>
              </p>
            </div>
          :
          <div className="message">
            <h1>Hubo un problema :c</h1>
            <p>Intenta nuevamente en unos segundos</p>
          </div>
        }
        <style jsx>{`
          .message{
            padding: 100px 30px;
            text-align: center;
          }

          h1{
            margin-bottom: 2em;
          }

          a{
            color: #8756CA;
          }
        `}</style>
      </Layout>
    )
  }
}