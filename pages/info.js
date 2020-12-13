import Layout from ".././Components/Layout.js";
import Header from ".././Components/Header.js";
import fetch from "isomorphic-unfetch";

// Shows info for a country

const Information = (props) => (
  <Layout>
    <Header name={props.country[0].name} link="/" title="Home" />
    <div className="info">
      <h4>Region: {props.country[0].region}</h4>
      <h4>Subregion: {props.country[0].subregion}</h4>
      <h4>Capital: {props.country[0].capital}</h4>
      <h4>Population: {props.country[0].population}</h4>
      <h4>Currency: {props.country[0].currencies[0].name}</h4>
    </div>
  
    <style jsx>{`
      .info {
        margin-left: 1%;
      }
    `}</style>
  </Layout>
);

Information.getInitialProps = async (url) => {
  const { id } = url.query;
  console.log(id);
  const res = await fetch(
    `https://restcountries.eu/rest/v2/name/${id}?fullText=true`//data for countries will be retrieved from this api
  );
  const country = await res.json();
  console.log(`Fetched country: ${country[0].name}`);

  return { country };
};

export default Information;
