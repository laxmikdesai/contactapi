const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'dashed' },
          style: { border: '1px dashed', color: 'gray' }
        }
      ]
    }
  }
});
