import { AppShell } from '@mantine/core';
import HeaderComponent from './Header';
function Layout({ children }) {
  return (
    <AppShell
      header={<HeaderComponent />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0]
        }
      })}>
      {children}
    </AppShell>
  );
}

export default Layout;
