import clsx from "clsx";

interface ContainerProps {
  className: string;
  [e: string]: any;
}

const Container: React.FC<ContainerProps> = ({ className, ...props }) => {
  return (
    <div
      className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
};

export default Container;
