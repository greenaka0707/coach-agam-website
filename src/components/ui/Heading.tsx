type HeadingProps = {
  title: string;
  subtitle?: string;
};

export default function Heading({
  title,
  subtitle,
}: HeadingProps) {
  return (
    <>
      <h2>{title}</h2>

      {subtitle && <p>{subtitle}</p>}
    </>
  );
}