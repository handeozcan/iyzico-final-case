import { Header, ActionIcon, Image, useMantineColorScheme } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconSun, IconMoonStars } from '@tabler/icons';
import logo from '../../assets/images/logo.jpeg';

export default function HeaderComponent() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  return (
    <Header height={80}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: 'auto 30px'
        }}>
        <Link to="/">
          <Image fit="contain" width={80} height={80} src={logo} />
        </Link>
        <ActionIcon
          variant="outline"
          color={dark ? 'yellow' : 'blue'}
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme">
          {dark ? <IconSun size={22} /> : <IconMoonStars size={22} />}
        </ActionIcon>
      </div>
    </Header>
  );
}
