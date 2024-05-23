import React from "react";
import { Button, Text, Heading, Img } from "./..";

export default function EduviCoursesOne({
  standardone = "Standard One",
  standard1isa = "Standard 1 is a foundation Standard that reflects 7 important concepts...",
  classDetails = "Class Details",
  ...props
}) {
  if (
    typeof standardone !== "string" ||
    typeof standard1isa !== "string" ||
    typeof classDetails !== "string"
  ) {
    throw new Error(
      "Invalid prop type. Expected strings for standardone, standard1isa, and classDetails."
    );
  }

  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-center w-full gap-[25px] p-[15px] bg-white-A700 rounded-[15px]">
        <div className="flex flex-col items-center justify-start w-full mt-[15px] gap-[19px] md:px-5 max-w-[260px]">
          <Img
            src="images/img_group.svg"
            alt="image"
            className="h-[50px] w-[50px]"
          />
          <div className="flex flex-col items-center justify-start w-full gap-[9px]">
            <Heading size="lg" as="h1" className="text-center">
              {standardone}
            </Heading>
            <Text
              as="p"
              className="!text-gray-700_01 text-center !leading-[30px]"
            >
              {standard1isa}
            </Text>
          </div>
        </div>

        <a
          href="#_"
          class="relative rounded px-5 py-2.5 overflow-hidden group bg-orange-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
        >
          <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span class="relative"> {classDetails}</span>
        </a>
      </div>
    </div>
  );
}
