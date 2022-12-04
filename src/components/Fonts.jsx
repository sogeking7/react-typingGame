import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
		/* San Francisco */
      @font-face {
        font-family: 'SF';
        src: url('../fonts/SFNSText-Regular.otf')
      }
      `}
  />
);

export default Fonts;
