
const blogs = [
  {
    id: 1,
    title: "How to Stay Productive While Working Remotely",
    description:
      "Learn tips and strategies to maintain productivity while working from home.",
    image: "/images/coffee.webp",
  },
  {
    id: 2,
    title: "Top 10 Web Development Trends in 2024",
    description:
      "Discover the latest trends in web development that are shaping the industry.",
    image: "/images/beverage.webp",
  },
  {
    id: 3,
    title: "The Benefits of a Healthy Work-Life Balance",
    description:
      "Explore why balancing work and personal life is essential for mental health.",
    image: "/images/food.webp",
  },
  {
    id: 4,
    title: "Mastering Tailwind CSS for Modern Web Design",
    description:
      "A comprehensive guide to utilizing Tailwind CSS for building responsive websites.",
    image: "/images/beverage.webp",
  },
  {
    id: 3,
    title: "The Benefits of a Healthy Work-Life Balance",
    description:
      "Explore why balancing work and personal life is essential for mental health.",
    image: "/images/food.webp",
  },
  {
    id: 4,
    title: "Mastering Tailwind CSS for Modern Web Design",
    description:
      "A comprehensive guide to utilizing Tailwind CSS for building responsive websites.",
    image: "/images/coffee.webp",
  },
];

const Blog = () => {
  return (
    <div className="bg-[#3a6fa4] text-gray-900 min-h-screen p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-white">Our Blog</h1>
        <p className="text-lg text-white">
          Stay updated with our latest articles, tutorials, and insights.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transform transition hover:scale-105"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <a
                href="#"
                className="text-blue-600 font-medium hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;