import Head from './head'
import Link from 'next/link'
import styled from 'styled-components';

const StyledUl = styled.ul`
  background:pink; 
`;

const links = [
  { href: 'https://github.com/segmentio/create-next-app', label: 'Github' }, { href: '/AboutPage', label:'about'}
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link prefetch href="/">
          <a>Home</a>
        </Link>
      </li>
      <StyledUl>
        {links.map(
          ({ key, href, label }) => (
            <li key={key}>
              <Link as={label} href={href}>
                <a>{label}</a>
              </Link>
            </li>
          )
        )}
      </StyledUl>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;
      }
      nav {
        text-align: center;
        background:green;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
)

export default Nav
