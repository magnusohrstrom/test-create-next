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
  </nav>
)

export default Nav
