
import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

const pricingPlans = [
  {
    id: 1,
    name: "Basic",
    description: "Suitable for small hotels, guest houses & homestays",
    price: 15000,
    features: [
      "Hotel website on your hotel website",
      "Free website setup",
      "Photo gallery (up to 40 images)",
      "Contact & inquiry form",
      "Google Maps integration",
      "Rooms listing with categories",
      "Booking from website",
      "Free hosting for 1 year",
      "Admin Dashboard",
      "Basic SEO setup",
    ],
  },
  {
    id: 2,
    name: "Standard",
    description: "Suitable for boutique hotels and resorts",
    price: 25000,
    features: [
      "Everything in Basic",
      "Custom domain (.com/.np) for 1 year",
      "Room showcase & details",
      "Online booking request form",
      "Advanced SEO setup",
      "Gallery images (up to 150 images)",
      "Income and expense tracking",
      "Multiple Themes Option",
      "Early access to new features",
      "24 hrs support",
    ],
  },
  {
    id: 3,
    name: "Premium",
    description: "Suitable for hotels, resorts & luxury properties",
    price: 35000,
    features: [
      "Everything in Standard",
      "Hosted on own domain",
      "Custom Design",
      "Unlimited room listings",
      "Special offers & promotions section",
      "Blogs/News management",
      "Premium design customization",
      "Priority support",
    ],
  },
];

const PricingCard = () => {
  // Standard card is active by default
  const activePlanId = 2;

  return (
    <section className="px-6 py-12 lg:px-15">
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
        {pricingPlans.map((plan) => {
          const isActive = plan.id === activePlanId;

          return (
            <Card
              key={plan.id}
              className={`flex h-full flex-col rounded-2xl border-none shadow-sm ${
                isActive ? "bg-[#057BFF]" : "bg-white"
              }`}
            >
              {/* Header */}
              <CardHeader className="pb-2">
                <CardTitle
                  className={`text-3xl font-semibold ${
                    isActive ? "text-white" : "text-[#057BFF]"
                  }`}
                >
                  {plan.name}
                </CardTitle>

                <CardDescription
                  className={`text-sm leading-5 ${
                    isActive ? "text-white" : "text-black"
                  }`}
                >
                  {plan.description}
                </CardDescription>
              </CardHeader>

              {/* Content */}
              <CardContent className="flex-1">
                {/* Price */}
                <div className="flex items-end">
                  <span
                    className={`text-2xl font-bold lg:text-3xl ${
                      isActive ? "text-white" : "text-[#057BFF]"
                    }`}
                  >
                    Rs. {plan.price.toLocaleString()}
                  </span>

                  <span
                    className={`mb-1 ml-1 text-md ${
                      isActive ? "text-white" : "text-black"
                    }`}
                  >
                    /month
                  </span>
                </div>

                {/* Features */}
                <ul className="mt-4 space-y-2">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className={`flex items-start gap-2 text-md ${
                        isActive ? "text-white" : "text-black"
                      }`}
                    >
                      <Check
                        size={14}
                        className={`mt-1 shrink-0 ${
                          isActive ? "text-white" : "text-black"
                        }`}
                      />

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              {/* Footer */}
              <CardFooter>
                <Button
                  variant="outline"
                  className={`h-9 w-full cursor-pointer text-md font-normal ${
                    isActive
                      ? "border-white bg-white text-black hover:bg-gray-100"
                      : "border-[#057BFF] bg-[#057BFF] text-white hover:bg-[#057BFF]/90"
                  }`}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default PricingCard;

