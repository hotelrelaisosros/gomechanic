import { ChevronRight, Search, Settings, ShoppingCart, Star, Plus, X, MapPin, Car, Fuel, ArrowRight, Edit2, Wind, Sparkles, Cog } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import Footer from "../layout/Footer";
import Navigation from "../layout/Navigation";

const LOCATIONS = ["Guwahati", "Delhi", "Mumbai", "Bangalore", "Hyderabad"];
const CAR_TYPES = ["Sedan", "SUV", "Hatchback"];
const FUEL_TYPES = ["Petrol", "Diesel", "CNG"];

const CAR_MODELS = {
  Sedan: ["Maruti Swift", "Hyundai Creta", "Toyota Innova"],
  SUV: ["Mahindra XUV500", "Tata Safari"],
  Hatchback: ["Maruti Alto", "Hyundai i20"]
};

const services = [
  {
    id: "s1",
    category: "Car Services",
    title: "Premium Service",
    price: 3169,
    originalPrice: 4527,
    warranty: "1000 Kms or 3 Months",
    hoursTaken: "6 Hrs",
    inclusions: ["Car Scanning", "Battery Top up", "Interior Vacuuming"]
  },
  {
    id: "s2",
    category: "Car Services",
    title: "Performance Service",
    price: 5319,
    originalPrice: 7599,
    warranty: "1000 Kms or 3 Months",
    hoursTaken: "8 Hrs",
    inclusions: ["AC Filter", "Car Scanning", "Battery Check"]
  }
];

const CarDetailsModal = ({ isOpen, onClose, onComplete }) => {
  const [formData, setFormData] = useState({
    location: "",
    carType: "",
    model: "",
    fuelType: ""
  });

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (formData.location && formData.carType && formData.model && formData.fuelType) {
      onComplete(formData);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full">
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Tell us about your car</h2>
            <p className="text-red-100 text-sm">Personalize your service selection</p>
          </div>
          <button onClick={onClose} className="hover:bg-red-700 p-1 rounded">
            <X size={24} />
          </button>
        </div>

        <div className="p-8 space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
              <MapPin size={18} className="text-red-600" />
              Location
            </label>
            <select
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full bg-gray-50 border-2 border-gray-300 rounded-lg px-4 py-3"
            >
              <option value="">Choose location...</option>
              {LOCATIONS.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Car size={18} className="text-red-600" />
              Car Type
            </label>
            <div className="grid grid-cols-3 gap-3">
              {CAR_TYPES.map((type) => (
                <button
                  key={type}
                  onClick={() => setFormData({ ...formData, carType: type, model: "" })}
                  className={`p-3 rounded-lg font-bold border-2 transition-all ${
                    formData.carType === type
                      ? "border-red-600 bg-red-50 text-red-600"
                      : "border-gray-200 hover:border-red-300"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {formData.carType && (
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-3">Car Model</label>
              <select
                value={formData.model}
                onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                className="w-full bg-gray-50 border-2 border-gray-300 rounded-lg px-4 py-3"
              >
                <option value="">Choose model...</option>
                {(CAR_MODELS[formData.carType] || []).map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label className="block text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Fuel size={18} className="text-red-600" />
              Fuel Type
            </label>
            <div className="grid grid-cols-3 gap-3">
              {FUEL_TYPES.map((fuel) => (
                <button
                  key={fuel}
                  onClick={() => setFormData({ ...formData, fuelType: fuel })}
                  className={`p-3 rounded-lg font-bold border-2 transition-all ${
                    formData.fuelType === fuel
                      ? "border-red-600 bg-red-50 text-red-600"
                      : "border-gray-200 hover:border-red-300"
                  }`}
                >
                  {fuel}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={!formData.location || !formData.carType || !formData.model || !formData.fuelType}
            className={`w-full font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all ${
              formData.location && formData.carType && formData.model && formData.fuelType
                ? "bg-red-600 hover:bg-red-700 text-white cursor-pointer"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Continue <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

const FilterPanel = ({ selectedFilters, onChangeDetails, cartCount }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 sticky top-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold">Your Car Details</h3>
        <button onClick={onChangeDetails} className="text-red-600 hover:bg-red-50 p-2 rounded">
          <Edit2 size={18} />
        </button>
      </div>

      <div className="space-y-3 mb-6">
        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
          <p className="text-xs font-semibold text-gray-600 uppercase">Location</p>
          <p className="text-lg font-bold text-gray-900">{selectedFilters.location}</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
          <p className="text-xs font-semibold text-gray-600 uppercase">Car Type</p>
          <p className="text-lg font-bold text-gray-900">{selectedFilters.carType}</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
          <p className="text-xs font-semibold text-gray-600 uppercase">Model</p>
          <p className="text-lg font-bold text-gray-900">{selectedFilters.model}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
          <p className="text-xs font-semibold text-gray-600 uppercase">Fuel</p>
          <p className="text-lg font-bold text-gray-900">{selectedFilters.fuelType}</p>
        </div>
      </div>

      {cartCount > 0 && (
        <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-4 mb-6">
          <p className="text-sm font-bold flex items-center gap-2">
            <ShoppingCart size={18} className="text-orange-600" />
            {cartCount} items in cart
          </p>
        </div>
      )}

      <button
        onClick={onChangeDetails}
        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-lg mb-2 transition-colors"
      >
        Change Details
      </button>
      <Link
        to="/cart"
        className={`w-full block text-center font-bold py-2 rounded-lg transition-colors ${
          cartCount > 0
            ? "bg-blue-600 hover:bg-blue-700 text-white"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        View Cart ({cartCount})
      </Link>
    </div>
  );
};

const CarServices = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState(null);

  const handleAddToCart = (service) => {
    const newItem = {
      ...service,
      cartItemId: Date.now(),
      quantity: 1,
      addedAt: new Date().toISOString()
    };
    dispatch(addToCart(newItem));
  };

  return (
    <>
      <Navigation />
      {!selectedFilters && (
        <CarDetailsModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onComplete={(filters) => {
            setSelectedFilters(filters);
            setShowModal(false);
          }}
        />
      )}

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {selectedFilters && (
          <>
            <div className="bg-white border-b border-gray-200">
              <div className="max-w-7xl mx-auto px-4 pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Link to="/" className="hover:text-red-600">
                    Home
                  </Link>
                  <ChevronRight size={16} />
                  <span className="text-gray-900 font-medium">Services</span>
                </div>
              </div>

              <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="relative max-w-2xl mx-auto">
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-300 rounded-full pl-11 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-1">
                  <FilterPanel
                    selectedFilters={selectedFilters}
                    onChangeDetails={() => setSelectedFilters(null)}
                    cartCount={cart.length}
                  />
                </div>

                <div className="lg:col-span-3">
                  <h1 className="text-3xl font-bold text-gray-900 mb-6">
                    Services for {selectedFilters.model} ({selectedFilters.fuelType})
                  </h1>
                  <div className="space-y-5">
                    {services.map((service) => (
                      <article
                        key={service.id}
                        className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
                      >
                        <div className="flex flex-col md:flex-row">
                          <div className="w-full md:w-48 h-48 flex-shrink-0 bg-red-100"></div>
                          <div className="p-5 flex-1">
                            <div className="flex justify-between items-start mb-3">
                              <h2 className="text-xl font-bold text-gray-900">{service.title}</h2>
                              <span className="bg-red-100 text-red-700 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                                {service.hoursTaken}
                              </span>
                            </div>

                            <div className="bg-gray-50 p-3 rounded-lg mb-4 space-y-1.5">
                              <div className="flex items-center gap-2 text-xs text-gray-700">
                                <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                                <span>{service.warranty}</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs text-green-700 font-semibold">
                                <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                <span>Free Pick-up & Drop</span>
                              </div>
                            </div>

                            <div className="mb-4">
                              <h3 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-1.5">
                                <Star className="text-red-600 fill-red-600" size={14} />
                                Service Includes
                              </h3>
                              <div className="grid grid-cols-2 gap-1.5">
                                {service.inclusions.map((inc, idx) => (
                                  <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                                    <Plus className="text-green-600 flex-shrink-0 mt-0.5" size={12} />
                                    <span>{inc}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                              <div>
                                <div className="flex items-baseline gap-2 mb-0.5">
                                  <span className="text-xs text-gray-400 line-through">₹{service.originalPrice}</span>
                                  <span className="text-2xl font-bold">₹{service.price}</span>
                                </div>
                                <span className="text-xs text-green-600 font-semibold">
                                  Save ₹{service.originalPrice - service.price}
                                </span>
                              </div>
                              <button
                                onClick={() => handleAddToCart(service)}
                                className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 transition-colors"
                              >
                                <ShoppingCart size={16} />
                                ADD
                              </button>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </main>

            <section className="bg-gray-900 text-white py-12 border-t-4 border-red-600 mt-12">
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  {[
                    { value: "3M+", label: "Cars Serviced" },
                    { value: "25L+", label: "Happy Customers" },
                    { value: "4.9★", label: "Rating" },
                    { value: "1000+", label: "Centers" }
                  ].map((stat, idx) => (
                    <div key={idx}>
                      <div className="text-4xl font-bold mb-1 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}
      </div>

      <Footer />
    </>
  );
};

export default CarServices;
