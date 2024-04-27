import { YoutubeLogo } from "@phosphor-icons/react";

export const VideoLink = ({ url }) => {
  const video = url;
  return (
    <p>
      <YoutubeLogo size={24} />
      &nbsp; Watch the{" "}
      <a href={`${video}`} target="_blank" rel="noreferrer">
        video highlights
      </a>
    </p>
  );
};
