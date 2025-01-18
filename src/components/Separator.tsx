type Props = {
  className?: string;
};

export const Separator = ({ className }: Props) => {
  return <div className={`h-[1px] bg-zinc-200 ${className}`}></div>;
};
