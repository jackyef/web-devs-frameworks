import { Image } from '@mdx-deck/components'

export default ({ scale }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "4rem",
      transform: `scale(${scale})`,
    }}
  >
    <Image
      src={require("file-loader!../assets/Medium.svg")}
      style={{
        display: "inline-block",
        margin: "8px 32px",
        width: "6vw",
        height: "6vw",
        backgroundSize: "contain",
      }}
    />
    <a href="https://medium.com/@jackyef">@jackyef</a>
    <Image
      src={require("file-loader!../assets/Twitter.svg")}
      style={{
        display: "inline-block",
        margin: "8px 32px",
        width: "6vw",
        height: "6vw",
        backgroundSize: "contain",
      }}
    />
    <a href="https://twitter.com/jacky_efendi">
      @jacky_efendi
    </a>
  </div>
);
