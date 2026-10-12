interface Heading1Props {
  title: string;
}

const Heading1 = ({ title }: Heading1Props) => (
  <div className="text-2xl text-center font-medium">{title}</div>
);

export default Heading1;