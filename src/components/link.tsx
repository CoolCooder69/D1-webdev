interface CustomLinkProps {
  url: string;
  title: string;
}

const CustomLink = ({ url, title }: CustomLinkProps) => (
  <a
    href={url}
    className="hover:underline hover:text-yellow-200 text-[17px] hover:scale-110 cursor-pointer"
  >
    {title}
  </a>
);

export default CustomLink;