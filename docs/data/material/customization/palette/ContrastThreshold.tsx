import * as React from 'react';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';

const defaultContrastThresholdTheme = createTheme({});

const highContrastThresholdTheme = createTheme({
  palette: {
    contrastThreshold: 4.5,
  },
});

function ContrastShowcase({ title }: { title: string }) {
  const theme = useTheme();

  return (
    <Stack gap={1} alignItems="center">
      <span>
        <b>{title}</b>
      </span>
      <span>{theme.palette.contrastThreshold}:1</span>
      <Stack direction="row" gap={1}>
        <Button variant="contained" color="warning">
          Warning
        </Button>
      </Stack>
    </Stack>
  );
}

export default function contrastThreshold() {
  return (
    <Stack direction="row" gap={4}>
      <ThemeProvider theme={defaultContrastThresholdTheme}>
        <ContrastShowcase title="Default contrast threshold" />
      </ThemeProvider>
      <ThemeProvider theme={highContrastThresholdTheme}>
        <ContrastShowcase title="Higher contrast threshold" />
      </ThemeProvider>
    </Stack>
  );
}
