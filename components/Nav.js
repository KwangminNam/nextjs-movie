import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from "./Nav.module.css"

const Nav = () => {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <style jsx>{`
        nav{
          background-color:tomato;
        }
        a{
          text-decoration:none;
        }
    `}</style>
    </nav>
  );
};

export default Nav;