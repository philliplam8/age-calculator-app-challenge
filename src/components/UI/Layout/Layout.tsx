type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className="mx-4 sm:mx-auto my-24 px-12 py-12 lg:w-[935px] flex flex-col justify-center bg-white rounded-[25px] rounded-br-[100px]">
      {children}
    </div>
  );
}
