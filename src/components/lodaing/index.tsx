import { memo } from 'react';

const Loading = memo(() => {
  return (
    <div className="flex justify-center items-center h-full w-full p-8">
      <div className="w-12 h-12 border-4 border-t-transparent border-blue-500 rounded-full animate-spin" />
    </div>
  );
});

Loading.displayName = 'Loading';

export default Loading;
