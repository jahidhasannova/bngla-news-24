
const LoadingPage = () => {
  return (
    <div className="flex min-h-[65vh] items-center justify-center px-4">
      <div className="flex flex-col items-center text-center">
        <div className="relative h-14 w-14">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200" />
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-red-700" />
        </div>

        <h2 className="mt-5 text-xl font-semibold text-gray-800">
          একটু অপেক্ষা করুন...
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          আপনার অনুরোধটি প্রক্রিয়া করা হচ্ছে
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;

