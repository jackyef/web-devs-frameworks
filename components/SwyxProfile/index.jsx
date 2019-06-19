import { Image } from "@mdx-deck/components";

export default () => {
  return (
    <div>
      <Image
        src={require("file-loader!./swyx-twitter.png")}
        style={{
          display: "inline-block",
          margin: "8px 16px",
          width: "32vw",
          height: "32vw",
          backgroundSize: "contain",
        }}
      />
    </div>
  );
};
