export default function Blog() {
  const posts = [
    {
      title: "Building My Portfolio",
      date: "August 2025",
      excerpt: "How I designed and built my portfolio using Next.js and Tailwind CSS.",
    },
    {
      title: "Why I Love Next.js",
      date: "July 2025",
      excerpt: "Exploring the benefits of using Next.js for modern web development.",
    },
  ];

  return (
    <main className="bg-[#0a0118] text-white min-h-screen py-20">
      <h1 className="text-4xl font-bold text-center mb-10">Blog & Insights</h1>
      <div className="max-w-3xl mx-auto grid gap-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-purple-900/40 rounded-xl p-6 shadow-lg hover:scale-105 transition transform duration-300"
          >
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-400">{post.date}</p>
            <p className="mt-2 text-gray-300">{post.excerpt}</p>
            <a
              href="#"
              className="inline-block mt-4 text-purple-400 hover:underline"
            >
              Coming soon →
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
