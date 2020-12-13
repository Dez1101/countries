import Link from "next/link";

// Header component for info page

const Header = (props) => (
  <div>
    <h1>{props.name}</h1>
    <Link href="/">
      <a>Home</a>
    </Link>
    <style jsx>{`
      div {
        border-bottom: solid 1px lightgrey;
        padding-top: 2%;
        padding-left: 1%;
        background-color: #ff4d4d;
      }
      h1 {
        display: inline-block;
      }
      a {
        margin-left: 1%;
        font-size: 1.2rem;
        color: black;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </div>
);

export default Header;
