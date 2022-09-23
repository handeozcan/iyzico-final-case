import { MantineProvider, ColorSchemeProvider, AppShell } from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import HeaderComponent from './Header';
function Layout({ children }) {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true
  });

  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
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
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default Layout;
