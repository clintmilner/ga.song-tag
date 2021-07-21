const base = {
  white: '#f1f1f1',
  black: '#282c34',
}

export const theme = theme => {
  switch (theme) {
    case 'LIGHT':
      return {
        background: base.white,
        color: base.black,
        headerBG: 'gold',
        headerBorder: base.black,
      }
    default:
    case 'DARK':
      return {
        background: base.black,
        color: base.white,
        headerBG: 'cornflowerblue',
        headerBorder: base.white,
      }
  }
}
