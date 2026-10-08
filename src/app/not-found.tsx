import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-[65vh] items-center justify-center px-4">
      <div className="w-full max-w-lg text-center">
        <p className="text-8xl font-extrabold tracking-tight text-red-700">
          404
        </p>

        <h1 className="mt-4 text-3xl font-bold text-gray-900">
          Page Not Found
        </h1>

        <p className="mt-3 text-gray-500 leading-7">
          দুঃখিত, আপনি যে ক্যাটাগরিটি খুঁজছেন সেটি পাওয়া যায়নি।
          <br />
          অনুগ্রহ করে আবার চেষ্টা করুন অথবা হোম পেজে ফিরে যান।
        </p>

        <Link
          href="/"
          className="mt-7 inline-block rounded-md bg-red-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-800"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;