const ErrorNoPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 text-gray-600">
      <h1 className="text-2xl text-red-600 font-semibold mb-8">
        Page not found
      </h1>
      <p className="mb-6">
        React Bricks cannot find a page for the specified slug.
      </p>
    </div>
  )
}

export default ErrorNoPage
