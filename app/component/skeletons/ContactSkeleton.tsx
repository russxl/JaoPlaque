export function ContactSkeleton() {
  return (
    <div className="min-h-screen bg-white animate-pulse">
      {/* Banner Skeleton */}
      <div className="h-[300px] bg-gray-200 w-full" />
      
      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 rounded w-2/3" />
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="h-10 w-10 bg-gray-200 rounded-full" />
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-24" />
                    <div className="h-4 bg-gray-200 rounded w-32" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Skeleton */}
          <div className="bg-gray-50 p-8 rounded-lg space-y-6">
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-20" />
              <div className="h-10 bg-gray-200 rounded w-full" />
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-20" />
              <div className="h-10 bg-gray-200 rounded w-full" />
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-20" />
              <div className="h-10 bg-gray-200 rounded w-full" />
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-20" />
              <div className="h-32 bg-gray-200 rounded w-full" />
            </div>
            <div className="h-12 bg-gray-200 rounded w-full" />
          </div>
        </div>
      </div>

      {/* Map Skeleton */}
      <div className="h-[400px] bg-gray-200 w-full" />
    </div>
  );
} 