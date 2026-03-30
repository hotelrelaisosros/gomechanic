const guaranteeData = [
  {
    left: { text: "Free Pickup Drop", bg: "bg-blue-50" },
    right: { text: "Genuine Parts", bg: "bg-purple-50" },
  },
  {
    left: { text: "30 Days Warranty", bg: "bg-green-50" },
    right: { text: "Affordable Prices", bg: "bg-yellow-50" },
  },
];

const Guarantee = () => {
  return (
    <section className="sm:py-14 bg-white">
      {/* Header */}
      <div className="mb-8">
        <div className="w-25 h-[2px] bg-red-500 mb-4" />
        <h2 className="text-3xl font-bold text-gray-900">Guarantee</h2>
      </div>

      {/* Rows */}
      <div className="space-y-4">
        {guaranteeData.map((row, index) => {
          return (
            <div
              key={index}
              className="flex flex-col md:flex-row w-full"
            >
              {/* Left */}
              <div
                className={`${row.left.bg} py-4 px-6 font-bold text-gray-900 w-[70%]`}
              >
                {row.left.text}
              </div>

              {/* Right */}
              <div
                className={`${row.right.bg} py-4 px-6 font-bold text-gray-900 w-full`}
              >
                {row.right.text}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Guarantee;
