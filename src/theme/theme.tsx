import { blueGrey, teal } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
export const appTheme = createTheme({
  palette: {
    primary: teal,
    secondary: blueGrey,
  },

});

// interface PaletteOptions {
//     primary?: PaletteColorOptions;
//     secondary?: PaletteColorOptions;
//     error?: PaletteColorOptions;
//     warning?: PaletteColorOptions;
//     info?: PaletteColorOptions;
//     success?: PaletteColorOptions;
//     mode?: PaletteMode;
//     tonalOffset?: PaletteTonalOffset;
//     contrastThreshold?: number;
//     common?: Partial<CommonColors>;
//     grey?: ColorPartial;
//     text?: Partial<TypeText>;
//     divider?: string;
//     action?: Partial<TypeAction>;
//     background?: Partial<TypeBackground>;
//     getContrastText?: (background: string) => string;
//   }
  
// interface PaletteColor {
//     light?: string;
//     main: string;
//     dark?: string;
//     contrastText?: string;
//   }