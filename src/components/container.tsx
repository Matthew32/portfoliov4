type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <div className="bg-gradient-to-r from-cyan-500 to-blue-500">{children}</div>;
}