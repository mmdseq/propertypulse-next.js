"use client"

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"
        aria-label="Loading Spinner"
      ></div>
    </div>
  )
}

export default LoadingPage
