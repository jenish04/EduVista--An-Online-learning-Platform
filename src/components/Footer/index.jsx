import React from "react";
import { Text, Heading, Img, Button, Input } from "./..";

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-row md:flex-col justify-center items-center w-full p-[50px] md:gap-10 md:p-5 bg-black-900_01 max-w-7xl rounded-[20px]">
          <div className="flex flex-col items-start justify-center w-[16%] md:w-full gap-[57px] my-[11px] md:my-0">
            <Img
              src="images/img_ellipse_169.png"
              alt="circleimage"
              className="h-[60px] w-[60px] md:h-auto rounded-[50%]"
            />
            <Img
              src="images/img_ellipse_170.png"
              alt="circleimage_one"
              className="h-[60px] w-[60px] md:h-auto ml-[127px] md:ml-5 rounded-[50%]"
            />
            <Img
              src="images/img_ellipse_171.png"
              alt="circleimage_two"
              className="h-[60px] w-[60px] md:h-auto ml-[30px] md:ml-0 sm:ml-5 rounded-[50%]"
            />
          </div>
          <div className="flex flex-col items-center justify-start w-[49%] md:w-full gap-10">
            <div className="flex flex-col items-center justify-start w-full pb-[3px] gap-[26px]">
              <Heading
                size="3xl"
                as="h1"
                className="!text-white-A700 !font-metropolis text-center leading-[55px]"
              >
                <>
                  Subscribe For Get Update
                  <br />
                  Every New Courses
                </>
              </Heading>
              <Text as="p" className="!text-white-A700_b2 text-center">
                20k+ students daily learn with EduVista. Subscribe for new
                courses.
              </Text>
            </div>
            <div className="flex flex-row sm:flex-col justify-center w-full sm:gap-5">
              <Input
                shape="round"
                name="email"
                placeholder="enter your email"
                className="w-[77%] md:w-full font-medium"
              />
              <Button
                size="3xl"
                className="sm:px-5 rounded-tr-[10px] rounded-br-[10px] font-medium min-w-[138px]"
              >
                Subscribe
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-end justify-start w-[16%] md:w-full gap-[57px]">
            <Img
              src="images/img_ellipse_166.png"
              alt="circleimage"
              className="h-[60px] w-[60px] md:h-auto mr-[30px] sm:mr-5 rounded-[50%]"
            />
            <Img
              src="images/img_ellipse_167.png"
              alt="circleimage"
              className="h-[60px] w-[60px] md:h-auto mr-[127px] md:mr-5 rounded-[50%]"
            />
            <Img
              src="images/img_ellipse_168.png"
              alt="circleimage"
              className="h-[60px] w-[60px] md:h-auto rounded-[50%]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center w-full mt-[46px] px-14 py-20 md:ml-0 md:p-5 bg-orange-200">
        <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10 max-w-7xl">
          <div className="flex flex-col items-center justify-start w-[15%] md:w-full pb-[3px] gap-[46px]">
            <div className="flex flex-col items-center justify-start w-[97%] md:w-full gap-[45px]">
              <Img
                src="images/img_logo.svg"
                alt="logo_three"
                className="h-[124px]"
              />
              <div className="flex flex-row justify-between items-center w-[85%] md:w-full">
              <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <Button
                  color="deep_blue_200"
                  size="xs"
                  shape="circle"
                  className="w-[36px] hover:bg-blue-200 pr-35"
                >
                  <Img
                    src="images/img_facebook_logo_1.svg"
                    alt="facebooklogoone"
                    className="h-[22px] w-[22px]"
                  />
                </Button>
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                <Button
                  color="deep__400"
                  size="xs"
                  shape="circle"
                  className="w-[36px] hover:bg-red-400"
                >
                  <Img src="images/img_instagram_icon.svg" />
                </Button>
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    color="deep_blue_300"
                    size="xs"
                    shape="circle"
                    className="relative w-[36px] hover:bg-cyan-400"
                  >
                    <Img
                      src="images/img_twitter_logo.svg"
                      alt="twitterlogo_one"
                      className="h-[17px]"
                    />
                  </Button>
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <Button
                  color="deep_blue_400"
                  size="xs"
                  shape="circle"
                  className="w-[36px] hover:bg-blue-500"
                >
                  <Img
                    src="images/img_linkedin_icon.svg"
                    alt="linkedinicon"
                    className="h-[18px]"
                  />
                </Button>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-3.5">
              <Text as="p" className="!text-gray-700_01">
                ©2024 EduVista
              </Text>
              <Text as="p" className="!text-gray-700_01">
              EduVista is a registered
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-[14%] md:w-full gap-[19px]">
            <Heading size="md" as="h5">
              <div className=" cursor-default">Courses</div>
            </Heading>
            <div className="flex flex-col items-start justify-start w-full gap-6 py-[5px]">
              <Text
                as="p"
                className="!text-gray-700_01 hover:underline cursor-pointer"
              >
                Classroom courses
              </Text>
              <Text
                as="p"
                className="!text-gray-700_01 !leading-[30px] hover:underline cursor-pointer"
              >
                Virtual classroom courses
              </Text>
              <Text
                as="p"
                className="!text-gray-700_01 hover:underline cursor-pointer"
              >
                E-learning courses
              </Text>
              <Text
                as="p"
                className="!text-gray-700_01 hover:underline cursor-pointer"
              >
                Video Courses
              </Text>
              <Text
                as="p"
                className="!text-gray-700_01 hover:underline cursor-pointer"
              >
                Offline Courses
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-[14%] md:w-full pt-0.5 gap-[17px]">
            <Heading size="md" as="h5">
              <div className=" cursor-default">Community</div>
            </Heading>
            <div className="flex flex-col items-start justify-center w-full gap-[27px] py-[3px]">
              <Text
                as="p"
                className="mt-0.5 !text-gray-700_01 hover:underline cursor-pointer"
              >
                Learners
              </Text>
              <Text
                as="p"
                className="!text-gray-700_01 hover:underline cursor-pointer"
              >
                Partners
              </Text>
              <Text
                as="p"
                className="!text-gray-700_01 hover:underline cursor-pointer"
              >
                Developers
              </Text>
              <Text
                as="p"
                className="!text-gray-700_01 hover:underline cursor-pointer"
              >
                Transactions
              </Text>
              <Text
                as="p"
                className="!text-gray-700_01 hover:underline cursor-pointer"
              >
                Blog
              </Text>
              <Text
                as="p"
                className="!text-gray-700_01 hover:underline cursor-pointer"
              >
                Teaching Center
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-[14%] md:w-full gap-[19px]">
            <Heading size="md" as="h5">
              <div className=" cursor-default">Quick links</div>
            </Heading>
            <div className="flex flex-col items-start justify-center w-full gap-[27px] py-[3px]">
              <Text
                as="p"
                className="mt-0.5 !text-gray-700_01  hover:underline cursor-pointer"
              >
                Home
              </Text>
              <Text
                as="p"
                className="!text-gray-700_01 hover:underline cursor-pointer"
              >
                Professional Education
              </Text>
              <Text
                as="p"
                className="!text-gray-700_01 hover:underline cursor-pointer"
              >
                Courses
              </Text>
              <Text
                as="p"
                className="!text-gray-700_01 hover:underline cursor-pointer"
              >
                Admissions
              </Text>
              <Text
                as="p"
                className="!text-gray-700_01 hover:underline cursor-pointer"
              >
                Testimonial
              </Text>
              <Text
                as="p"
                className="!text-gray-700_01 hover:underline cursor-pointer"
              >
                Programs
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-[14%] md:w-full gap-[19px]">
            <Heading size="md" as="h5">
              <div className=" cursor-default">More</div>
            </Heading>
            <div className="flex flex-col items-start justify-start w-full gap-[26px] py-1">
              <Text
                as="p"
                className="!text-gray-700_01 hover:underline cursor-pointer "
              >
                Press
              </Text>
              <Text
                as="p"
                className="!text-gray-700_01 hover:underline cursor-pointer"
              >
                Investors
              </Text>
              <Text
                as="p"
                className="!text-gray-700_01 hover:underline cursor-pointer"
              >
                Terms
              </Text>
              <Text
                as="p"
                className="!text-gray-700_01 hover:underline cursor-pointer"
              >
                Privacy
              </Text>
              <Text
                as="p"
                className="!text-gray-700_01 hover:underline cursor-pointer"
              >
                Help
              </Text>
              <Text
                as="p"
                className="!text-gray-700_01 hover:underline cursor-pointer"
              >
                Contact
              </Text>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
