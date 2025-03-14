export const Skeleton = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="animate-pulse bg-black-medium-light h-22 w-full rounded-sm"></div>
      <div className="animate-pulse bg-black-medium-light h-22 w-full rounded-sm"></div>
      <div className="animate-pulse bg-black-medium-light h-22 w-full rounded-sm"></div>
      <div className="animate-pulse bg-black-medium-light h-22 w-full rounded-sm"></div>
      <div className="animate-pulse bg-black-medium-light h-22 w-full rounded-sm"></div>
    </div>
  );
};
