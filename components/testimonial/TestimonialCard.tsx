import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
} from "../ui/card";
import { api } from "./api";
import { Testimonial } from "@/types/testimonial.type";

const TestimonialCard = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-15 py-12 ">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 lg:grid-cols-3 items-start">
        {api.map((testimonial: Testimonial) => (
          <Card
            key={testimonial.id}
            className="relative flex h-fit flex-col border-gray-200  bg-white rounded-xl border overflow-hidden"
          >
            <CardHeader className="pb-2 pt-5">
              <div className="relative h-16 w-16 overflow-hidden rounded-xl">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
            </CardHeader>

            <CardContent className="flex flex-col gap-4">
              <p className="text-sm leading-6 text-[#475569]">
                {testimonial.description}
              </p>

              <div className="flex flex-col">
                <h3 className=" font-bold text-black">
                  {testimonial.name}
                </h3>

                <span className="text-sm text-[#475569]">
                  {testimonial.position}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TestimonialCard;