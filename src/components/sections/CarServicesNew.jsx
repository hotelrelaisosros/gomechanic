import { ChevronRight, Cog, Plus, Search, Settings, ShoppingCart, Sparkles, Star, Wind, Wrench, X, MapPin, Car, Fuel } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../layout/Footer";
import Navigation from "../layout/Navigation";

// Mock data for car details
const LOCATIONS = [
  "Guwahati",
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Jaipur"
];

const CAR_TYPES = [
  "Sedan",
  "SUV",
  "Hatchback",
  "MPV",
  "Luxury",
  "Sports"
];

const CAR_MODELS = {
  "Sedan": ["Maruti Swift", "Hyundai Creta", "Toyota Innova", "Skoda Octavia", "Honda Accord"],
  "SUV": ["Mahindra XUV500", "Tata Safari", "Skoda Kodiaq", "BMW X5", "Audi Q5"],
  "Hatchback": ["Maruti Alto", "Hyundai i20", "Tata Tiago", "Volkswagen Polo", "Skoda Rapid"],
  "MPV": ["Toyota Innova", "Mahindra XUV500", "Kia Carnival", "Honda Odyssey"],
  "Luxury": ["BMW 7 Series", "Audi A6", "Mercedes-Benz S-Class", "Jaguar XJ"],
  "Sports": ["Ferrari F8", "Lamborghini Huracan", "Porsche 911", "BMW M5"]
};

const FUEL_TYPES = [
  "Petrol",
  "Diesel",
  "CNG",
  "Hybrid",
  "Electric"
];

// Service categories
const serviceCategories = [
  { id: "services", label: "Services", icon: Settings },
  { id: "clutch", label: "Clutch", icon: Cog },
  { id: "ac", label: "AC", icon: Wind },
  { id: "spa", label: "SPA", icon: Sparkles },
  { id: "mechanical", label: "Mechanical Service", icon: Wrench },
];

// All services data
const services = [
  {
    id: "cs1",
    category: "Car Services",
    title: "Premium Service",
    imageColor: "bg-gradient-to-br from-blue-400 to-blue-600",
    imageUrl: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=400&fit=crop",
    inclusions: ["Car Scanning", "Battery Water Top up", "Interior Vacuuming", "Wiper Fluid Replacement", "Car Wash"],
    price: 3169,
    originalPrice: 4527,
    offerPrice: 2669,
    tag: "RECOMMENDED",
    hoursTaken: "6 Hrs",
    warranty: "1000 Kms or 3 Months Warranty",
    recommendedInterval: "Every 10,000 Kms or 6 Months"
  },
  {
    id: "cs2",
    category: "Car Services",
    title: "Performance Service",
    imageColor: "bg-gradient-to-br from-orange-400 to-red-600",
    imageUrl: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=400&h=400&fit=crop",
    inclusions: ["AC Filter Replacement", "Car Scanning", "Battery Water Top up", "Fuel Filter Checking", "Wiper Fluid"],
    price: 5319,
    originalPrice: 7599,
    offerPrice: 4255,
    tag: "ENHANCED ENGINE PERFORMANCE",
    hoursTaken: "8 Hrs",
    warranty: "1000 Kms or 3 Months Warranty",
    recommendedInterval: "Every 20,000 Kms or 12 Months"
  },
  {
    id: "cs3",
    category: "Car Services",
    title: "Brake Service",
    imageColor: "bg-gradient-to-br from-green-400 to-emerald-600",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    inclusions: ["Inspection of Brake Discs", "Opening & Fitting of Brake Discs", "Warranty on Labour"],
    price: 699,
    originalPrice: 874,
    offerPrice: 524,
    discountTag: "Extra 25% OFF",
    hoursTaken: "4 Hrs"
  },
  {
    id: "cl1",
    category: "Clutch",
    title: "Standard Clutch",
    imageColor: "bg-gradient-to-br from-gray-400 to-gray-600",
    imageUrl: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=400&fit=crop",
    inclusions: ["Engine Oil Replacement", "Car Wash", "Free Pick-up & Drop"],
    price: 2669,
    originalPrice: 3559,
    offerPrice: 2169,
    hoursTaken: "4 Hrs"
  },
  {
    id: "ac1",
    category: "AC",
    title: "AC Basic Service",
    imageColor: "bg-gradient-to-br from-cyan-400 to-blue-600",
    imageUrl: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=400&fit=crop",
    inclusions: ["Filter Cleaning", "Gas Refill", "Inspection"],
    price: 2669,
    originalPrice: 3559,
    offerPrice: 2169,
    hoursTaken: "3 Hrs"
  },
  {
    id: "spa1",
    category: "SPA",
    title: "SPA Basic",
    imageColor: "bg-gradient-to-br from-blue-300 to-indigo-500",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    inclusions: ["Car Wash", "Interior Cleaning", "Wax Polish"],
    price: 2669,
    originalPrice: 3559,
    offerPrice: 2169,
    hoursTaken: "2 Hrs"
  },
  {
    id: "mech1",
    category: "Mechanical Service",
    title: "Mechanical Complete",
    imageColor: "bg-gradient-to-br from-slate-400 to-zinc-600",
    imageUrl: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=400&fit=crop",
    inclusions: ["Engine Check", "Transmission Inspection", "All Fluids Top-up"],
    price: 2669,
    originalPrice: 3559,
    offerPrice: 2169,
    hoursTaken: "5 Hrs"
  }
];

// Modal Component
const CarDetailsModal = ({ isOpen, onClose, onSubmit }) => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCarType, setSelectedCarType] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedFuel, setSelectedFuel] = useState("");

  const handleSubmit = () => {
    if (selectedLocation && selectedCarType && selectedModel && selectedFuel) {
      onSubmit({
        location: selectedLocation,
        carType: selectedCarType,
        model: selectedModel,
        fuelType: selectedFuel
      });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-red-600 to-red-700 text-white p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Tell us about your car</h2>
            <p className="text-red-100 text-sm mt-1">Help us suggest the best services for you</p>
          </div>
          <button onClick={onClose} className="text-white hover:bg-red-800 p-2 rounded-full transition">
            <X size={24} />
          </button>
        </div>

        {/* Form Content */}
        <div className="p-8 space-y-6">
          {/* Location */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
              <MapPin size={18} className="text-red-600" />
              Select Location
            </label>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full bg-gray-50 border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-900 font-medium focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 transition"
            >
              <option value="">Choose your location...</option>
              {LOCATIONS.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          {/* Car Type */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Car size={18} className="text-red-600" />
              Select Car Type
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {CAR_TYPES.map(type => (
                <button
                  key={type}
                  onClick={() => {
                    setSelectedCarType(type);
                    setSelectedModel("");
                  }}
                  className={`p-3 rounded-lg font-bold transition-all border-2 ${
                    selectedCarType === type
                      ? "border-red-600 bg-red-50 text-red-600"
                      : "border-gray-200 bg-white text-gray-900 hover:border-red-300"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Car Model */}
          {selectedCarType && (
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Car size={18} className="text-red-600" />
                Select Car Model
              </label>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full bg-gray-50 border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-900 font-medium focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 transition"
              >
                <option value="">Choose your model...</option>
                {(CAR_MODELS[selectedCarType] || []).map(model => (
                  <option key={model} value={model}>{model}</option>
                ))}
              </select>
            </div>
          )}

          {/* Fuel Type */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Fuel size={18} className="text-red-600" />
              Select Fuel Type
            </label>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {FUEL_TYPES.map(fuel => (
                <button
                  key={fuel}
                  onClick={() => setSelectedFuel(fuel)}
                  className={`p-3 rounded-lg font-bold transition-all border-2 ${
                    selectedFuel === fuel
                      ? "border-red-600 bg-red-50 text-red-600"
                      : "border-gray-200 bg-white text-gray-900 hover:border-red-300"
                  }`}
                >
                  {fuel}
                </button>
              ))}
            </div>
          </div>

          {/* Summary */}
          {selectedLocation && selectedCarType && selectedModel && selectedFuel && (
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 mt-6">
              <p className="text-sm text-gray-700">
                <span className="font-bold text-red-600">{selectedModel}</span> • 
                <span className="font-bold text-red-600"> {selectedFuel}</span> • 
                <span className="font-bold text-red-600"> {selectedLocation}</span>
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-50 border-t-2 border-gray-200 p-6 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-3 rounded-lg transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!selectedLocation || !selectedCarType || !selectedModel || !selectedFuel}
            className={`flex-1 font-bold py-3 rounded-lg transition ${
              selectedLocation && selectedCarType && selectedModel && selectedFuel
                ? "bg-red-600 hover:bg-red-700 text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            View Services
          </button>
        </div>
      </div>
    </div>
  );
};

// Filter Panel Component
const FilterPanel = ({ selectedFilters }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 sticky top-6">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Your Car Details</h3>

      {/* Selected Details */}
      <div className="space-y-3">
        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg border-l-4 border-red-600">
          <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Location</p>
          <p className="text-lg font-bold text-gray-900 flex items-center gap-2 mt-1">
            <MapPin size={18} className="text-red-600" />
            {selectedFilters.location}
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border-l-4 border-blue-600">
          <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Car Type</p>
          <p className="text-lg font-bold text-gray-900 flex items-center gap-2 mt-1">
            <Car size={18} className="text-blue-600" />
            {selectedFilters.carType}
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border-l-4 border-purple-600">
          <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Model</p>
          <p className="text-lg font-bold text-gray-900">{selectedFilters.model}</p>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border-l-4 border-green-600">
          <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Fuel Type</p>
          <p className="text-lg font-bold text-gray-900 flex items-center gap-2 mt-1">
            <Fuel size={18} className="text-green-600" />
            {selectedFilters.fuelType}
          </p>
        </div>

        <button className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-lg transition">
          Change Car Details
        </button>
      </div>
    </div>
  );
};

// Main Component
export default function CarServices() {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState("Services");
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState(null);

  // Handle category from navigation
  useEffect(() => {
    if (location.state?.category) {
      const categoryMap = {
        "Car Services": "Services",
        "Clutch": "Clutch",
        "AC": "AC",
        "SPA": "SPA",
        "Mechanical Services": "Mechanical Service"
      };
      
      const mappedCategory = categoryMap[location.state.category] || location.state.category;
      setActiveCategory(mappedCategory);
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  // Get services for current category
  const getServicesForCategory = (category) => {
    if (category === "Services") {
      return services.filter(s => s.category === "Car Services");
    }
    return services.filter(s => s.category === category);
  };

  // Filter services by search
  const displayedServices = getServicesForCategory(activeCategory).filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.inclusions.some(inc => inc.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSearch;
  });

  return (
    <>
      <Navigation />
      
      {/* Modal for car details */}
      {!selectedFilters && (
        <CarDetailsModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onSubmit={(filters) => setSelectedFilters(filters)}
        />
      )}

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header Section */}
        <div className="bg-white border-b border-gray-200">
          {/* Breadcrumb */}
          <div className="max-w-7xl mx-auto px-4 pt-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Link to="/" className="hover:text-red-600">Home</Link>
              <ChevronRight size={16} />
              <span className="text-gray-900 font-medium">
                {activeCategory === "Services" ? "Car Services" : activeCategory}
              </span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-50 text-gray-900 placeholder-gray-400 border border-gray-300 rounded-full pl-11 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>

          {/* Category Navigation */}
          <div className="max-w-7xl mx-auto px-4 pb-4">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              {serviceCategories.map((category) => {
                const isActive = activeCategory === category.label;
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.label)}
                    className={`flex-shrink-0 flex flex-col items-center gap-1.5 px-5 py-3 rounded-xl transition-all ${
                      isActive
                        ? "bg-gradient-to-br from-red-600 to-red-700 text-white shadow-lg scale-105"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <Icon className="w-8 h-8" />
                    <span className="text-xs font-semibold whitespace-nowrap">
                      {category.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Content */}
        {selectedFilters && (
          <main className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Filter Panel - Right Column */}
              <div className="lg:col-span-1">
                <FilterPanel selectedFilters={selectedFilters} />
              </div>

              {/* Services - Left Column */}
              <div className="lg:col-span-3">
                {/* Page Title */}
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-gray-900 mb-1">
                    {activeCategory === "Services" ? "Car Services" : activeCategory}
                  </h1>
                  <p className="text-gray-600 text-sm">
                    Recommended for {selectedFilters.model} ({selectedFilters.fuelType})
                  </p>
                </div>

                {/* Services List */}
                <div className="space-y-5">
                  {displayedServices.length > 0 ? (
                    displayedServices.map((service) => (
                      <article
                        key={service.id}
                        className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                      >
                        <div className="flex flex-col md:flex-row">
                          {/* Image */}
                          <div className="relative w-full md:w-48 h-48 flex-shrink-0 overflow-hidden">
                            {service.tag && (
                              <div className="absolute top-3 left-3 z-10 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                {service.tag}
                              </div>
                            )}
                            <img
                              src={service.imageUrl}
                              alt={service.title}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Details */}
                          <div className="p-5 flex-1 flex flex-col justify-between">
                            <div>
                              <div className="flex items-start justify-between mb-3">
                                <h2 className="text-xl font-bold text-gray-900">
                                  {service.title}
                                </h2>
                                <span className="ml-2 bg-red-100 text-red-700 px-2.5 py-0.5 rounded-full text-xs font-semibold flex-shrink-0">
                                  {service.hoursTaken || "4 Hrs"}
                                </span>
                              </div>

                              {/* Info Box */}
                              <div className="bg-gray-50 p-3 rounded-lg mb-4 space-y-1.5">
                                {service.warranty && (
                                  <div className="flex items-center gap-2 text-xs text-gray-700">
                                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                                    <span>{service.warranty}</span>
                                  </div>
                                )}
                                {service.recommendedInterval && (
                                  <div className="flex items-center gap-2 text-xs text-gray-700">
                                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                                    <span>{service.recommendedInterval}</span>
                                  </div>
                                )}
                                <div className="flex items-center gap-2 text-xs text-green-700 font-semibold">
                                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                                  <span>Free Pick-up & Drop</span>
                                </div>
                              </div>

                              {/* Inclusions */}
                              <div className="mb-4">
                                <h3 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-1.5">
                                  <Star className="text-red-600 fill-red-600" size={14} />
                                  Service Includes
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                  {service.inclusions.slice(0, 4).map((inclusion, idx) => (
                                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                                      <Plus className="text-green-600 flex-shrink-0 mt-0.5" size={12} />
                                      <span>{inclusion}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Price & Button */}
                            <div className="space-y-3 pt-4 border-t border-gray-200">
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="flex items-baseline gap-2 mb-0.5">
                                    <span className="text-xs text-gray-400 line-through">
                                      ₹{service.originalPrice.toLocaleString('en-IN')}
                                    </span>
                                    <span className="text-2xl font-bold text-gray-900">
                                      ₹{service.price.toLocaleString('en-IN')}
                                    </span>
                                  </div>
                                  <span className="text-xs text-green-600 font-semibold">
                                    Save ₹{(service.originalPrice - service.price).toLocaleString('en-IN')}
                                  </span>
                                </div>
                                <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-all flex items-center gap-2 flex-shrink-0">
                                  <ShoppingCart size={16} />
                                  ADD
                                </button>
                              </div>

                              {/* Offer Bar */}
                              <div className="bg-gray-900 text-white px-3 py-2 rounded-lg flex items-center justify-between text-sm">
                                <span className="font-semibold">
                                  Get at ₹{service.offerPrice.toLocaleString('en-IN')}
                                </span>
                                {service.discountTag && (
                                  <span className="bg-yellow-400 text-gray-900 px-2 py-0.5 rounded-full text-xs font-bold">
                                    {service.discountTag}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))
                  ) : (
                    <div className="text-center py-16">
                      <div className="inline-block p-5 bg-gray-100 rounded-full mb-3">
                        <Search className="text-gray-400" size={40} />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">No services found</h3>
                      <p className="text-gray-600 text-sm">Try adjusting your search or car details</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </main>
        )}

        {/* Stats */}
        <section className="bg-gray-900 text-white py-12 border-t-4 border-red-600 mt-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "3M+", label: "Cars Serviced" },
                { value: "25L+", label: "Happy Customers" },
                { value: "4.9★", label: "Average Rating" },
                { value: "1000+", label: "Touch Points" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl font-bold mb-1 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              What Car Owners Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "John Doe", title: "Friendly Staff", initials: "JD", color: "from-blue-400 to-blue-600" },
                { name: "Anita Sharma", title: "Best Among All", initials: "AS", color: "from-pink-400 to-rose-600" },
                { name: "Rajesh Kumar", title: "Excellent Service", initials: "RK", color: "from-green-400 to-emerald-600" }
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6 border border-gray-100">
                  <div className="text-red-600 text-5xl font-serif mb-3">"</div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{testimonial.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. The service was exceptional.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                      <div className="text-xs text-gray-500">Verified Customer</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  );
}
