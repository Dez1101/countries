import Layout from ".././Components/Layout.js";
import Home from ".././Components/Home.js";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

// Home page that lists all the countries

const Countries = (props) => (
  <Layout>
    <Home />
    <ul>
      {props.country.map((countries) => (
        <li key={countries.name}>
          <Link href={`/${countries.name}`}>
            <a>{countries.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Countries.getInitialProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/region/africa");
  const result = await res.json();

  console.log(`Result: ${result.length}`);
  console.log(`1st Fetched Country: ${result[0].name}`);

  return {
    country: result,
  };
};

export default Countries;
