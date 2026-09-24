interface Props {
  text?: string;
  href?: string;
  className?: string;
}

export const MainButton = ({
  text = "Request Invite",
  href = "#",
  className = "",
}: Props) => {
  return (
    <a
      className={`rounded-full bg-linear-to-b from-green-500 to-cyan-400 px-5 py-2 text-white transition-all duration-300 hover:brightness-110 ${className}`}
      href={href}
    >
      {text}
    </a>
  );
};
