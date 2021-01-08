const ErrorNoKeys = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 text-gray-600">
      <h1 className="text-2xl text-red-600 font-semibold mb-8">
        Warning: missing App credentials
      </h1>
      <p className="mb-6">
        <code className="text-sm text-black bg-gray-100 px-1 py-1 rounded">
          NEXT_PUBLIC_APP_ID
        </code>{' '}
        and{' '}
        <code className="text-sm text-black bg-gray-100 px-1 py-1 rounded">
          API_KEY
        </code>{' '}
        are not configured in your{' '}
        <code className="text-sm text-black bg-gray-100 px-1 py-1 rounded">
          .env.local
        </code>{' '}
        file.
      </p>
      <p className="mb-2">
        Please create a{' '}
        <code className="text-sm text-black bg-gray-100 px-1 py-1 rounded">
          .local.env
        </code>{' '}
        file with:
      </p>
      <pre className="bg-gray-900 text-white px-4 py-3 rounded">
        {`NEXT_PUBLIC_APP_ID=...
API_KEY=...`}
      </pre>
    </div>
  )
}

export default ErrorNoKeys
