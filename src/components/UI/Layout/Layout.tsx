type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className="mx-4 sm:mx-auto my-24 px-6 sm:px-14 py-14 lg:w-[840px] flex flex-col justify-center bg-white rounded-[25px] rounded-br-[110px] sm:rounded-br-[200px]">
      {children}
    </div>
  );
}
