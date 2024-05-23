import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button } from "../../components";
import EduviCoursesSubscribe from "../../components/EduviCoursesSubscribe";
import Header1 from "../../components/Header1";

export default function SinglementordetailsPage() {
  return (
    <>
      <Helmet>
        <title>Jenish_patel04's Application5</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-gray-100">
        <div className="flex flex-col items-center justify-start w-full gap-[60px]">
          <div className="flex flex-col items-center justify-start w-full gap-12">
            <Header1 className="flex flex-row justify-center items-center w-full md:h-auto p-[22px] sm:p-5 bg-gray-100" />
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-row justify-center w-full md:px-5 max-w-7xl">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row justify-start w-full">
                    <div className="flex flex-row justify-start w-full p-[29px] sm:p-5 bg-red-50 rounded-[20px]">
                      <Text as="p" className="mb-[92px] !text-black-900_02 !font-medium">
                        Home | Mentor | Kristin Watson
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row justify-start w-[32%] md:w-full mt-[-81px] ml-[30px] md:ml-0 sm:ml-5">
                    <div className="flex flex-row sm:flex-col justify-start items-center w-full gap-5 sm:gap-5">
                      <Img
                        src="data:image/jpeg;base64,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"
                        alt="bg_one"
                        className="w-[170px] md:h-auto mb-px object-cover rounded-[10px]"
                      />
                      <div className="flex flex-col items-start justify-start w-[53%] sm:w-full gap-0.5">
                        <Text size="lg" as="p" className="!text-gray-900">
                          Kritsin Watson
                        </Text>
                        <Text size="md" as="p">
                          Founder & Mentor
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-row md:flex-col justify-start items-start w-full gap-10 md:gap-5 md:px-5 max-w-7xl">
              <div className="flex flex-col items-center justify-start w-[66%] md:w-full gap-[29px]">
                <div className="flex flex-row md:flex-col justify-start w-full gap-6 md:gap-5">
                  <div className="flex flex-row md:flex-col justify-start w-[79%] md:w-full gap-[19px] md:gap-5">
                    <Button color="orange_200_01" className="sm:px-5 font-medium min-w-[205px] rounded-[10px]">
                      About
                    </Button>
                    <Button color="white_A700" className="sm:px-5 font-medium min-w-[205px] rounded-[10px]">
                      Courses
                    </Button>
                    <Button color="white_A700" className="sm:px-5 font-medium min-w-[205px] rounded-[10px]">
                      Reviews
                    </Button>
                  </div>
                  <Button className="sm:px-5 font-medium min-w-[160px] rounded-[10px]">Contact Now</Button>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-[29px]">
                  <div className="flex flex-col items-start justify-start w-full gap-2">
                    <Heading size="xl" as="h1">
                      About Kritsin
                    </Heading>
                    <Text as="p" className="!leading-[30px]">
                      <>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full gap-2">
                    <Heading size="xl" as="h2">
                      Certification
                    </Heading>
                    <Text as="p" className="!leading-[30px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                      maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-[32%] md:w-full gap-[19px] p-5 bg-white-A700 rounded-[10px]">
                <div className="flex flex-row justify-between items-center w-full mt-[9px]">
                  <Heading size="s" as="h3" className="!text-gray-700_01">
                    Total Course
                  </Heading>
                  <Heading size="lg" as="h4" className="!text-deep_orange-400 text-right">
                    30
                  </Heading>
                </div>
                <div className="flex flex-row justify-between w-full">
                  <div className="flex flex-row justify-start items-start gap-2">
                    <Heading size="s" as="h5" className="!text-gray-700_01">
                      Ratings
                    </Heading>
                    <Img src="images/img_vector_amber_500.svg" alt="vector_one" className="h-[16px] w-[16px] mt-0.5" />
                  </div>
                  <Heading size="s" as="h6" className="text-right">
                    4.9(153)
                  </Heading>
                </div>
                <div className="flex flex-row justify-between w-full">
                  <Heading size="s" as="h5" className="mt-px !text-gray-700_01">
                    Experiences
                  </Heading>
                  <Heading size="s" as="h5" className="text-right">
                    10 Years
                  </Heading>
                </div>
                <div className="flex flex-row justify-between w-full">
                  <Heading size="s" as="h5" className="mb-px !text-gray-700_01">
                    Graduated
                  </Heading>
                  <Heading size="s" as="h5" className="text-right">
                    Yes
                  </Heading>
                </div>
                <div className="flex flex-row justify-between w-full">
                  <Heading size="s" as="h5" className="!text-gray-700_01">
                    Language
                  </Heading>
                  <Heading size="s" as="h5" className="text-right">
                    English, French
                  </Heading>
                </div>
                <div className="flex flex-row justify-between items-center w-full mb-2.5">
                  <Heading size="s" as="h5" className="!text-gray-700_01">
                    Social
                  </Heading>
                  <div className="flex flex-row justify-between items-center w-auto gap-[15px]">
                    <Img
                      src="images/img_facebook_logo_1_gray_900.svg"
                      alt="facebooklogoone"
                      className="h-[22px] w-[22px]"
                    />
                    <Button color="deep_orange_400" size="xs" shape="circle" className="w-[36px]">
                      <Img src="images/img_instagram_icon.svg" />
                    </Button>
                    <Img src="images/img_twitter_logo_gray_900.svg" alt="twitterlogo_one" className="h-[17px]" />
                    <Img src="images/img_linkedin_icon_gray_900.svg" alt="linkedinicon" className="h-[18px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <EduviCoursesSubscribe className="flex flex-row justify-center w-full" />
        <footer className="flex justify-center items-center w-full px-14 py-20 md:p-5 bg-gray-100">
          <div className="flex flex-row md:flex-col justify-between items-center w-full mx-auto md:gap-10 max-w-7xl">
            <div className="flex flex-col items-center justify-start w-[15%] md:w-full pb-[3px] gap-[46px]">
              <div className="flex flex-col items-center justify-start w-[97%] md:w-full gap-[22px]">
                <Img src="images/img_logo.svg" alt="logo_three" className="h-[30px]" />
                <div className="flex flex-row justify-between items-center w-[85%] md:w-full">
                  <Img src="images/img_facebook_logo_1.svg" alt="facebooklogoone" className="h-[22px] w-[22px]" />
                  <Button color="deep_orange_400" size="xs" shape="circle" className="w-[36px]">
                    <Img src="images/img_instagram_icon.svg" />
                  </Button>
                  <Img src="images/img_twitter_logo.svg" alt="twitterlogo" className="h-[17px]" />
                  <Img src="images/img_linkedin_icon.svg" alt="linkedinicon" className="h-[18px]" />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                <Text as="p">©2021 EduVista</Text>
                <Text as="p">EduVista is a registered company based in Ahmedabad</Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[14%] md:w-full gap-[19px]">
              <Heading size="md" as="h5">
                Courses
              </Heading>
              <div className="flex flex-col items-start justify-start w-full gap-6 py-[5px]">
                <Text as="p">Classroom courses</Text>
                <Text as="p" className="!leading-[30px]">
                  Virtual classroom courses
                </Text>
                <Text as="p">E-learning courses</Text>
                <Text as="p">Video Courses</Text>
                <Text as="p">Offline Courses</Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[14%] md:w-full pt-0.5 gap-[17px]">
              <Heading size="md" as="h5">
                Community
              </Heading>
              <div className="flex flex-col items-start justify-center w-full gap-[27px] py-[3px]">
                <Text as="p" className="mt-0.5">
                  Learners
                </Text>
                <Text as="p">Partners</Text>
                <Text as="p">Developers</Text>
                <Text as="p">Transactions</Text>
                <Text as="p">Blog</Text>
                <Text as="p">Teaching Center</Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[14%] md:w-full gap-[19px]">
              <Heading size="md" as="h5">
                Quick links
              </Heading>
              <div className="flex flex-col items-start justify-center w-full gap-[27px] py-[3px]">
                <Text as="p" className="mt-0.5">
                  Home
                </Text>
                <Text as="p">Professional Education</Text>
                <Text as="p">Courses</Text>
                <Text as="p">Admissions</Text>
                <Text as="p">Testimonial</Text>
                <Text as="p">Programs</Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[14%] md:w-full gap-[19px]">
              <Heading size="md" as="h5">
                More
              </Heading>
              <div className="flex flex-col items-start justify-start w-full gap-[26px] py-1">
                <Text as="p">Press</Text>
                <Text as="p">Investors</Text>
                <Text as="p">Terms</Text>
                <a href="#">
                  <Text as="p">Privacy</Text>
                </a>
                <Text as="p">Help</Text>
                <Text as="p">Contact</Text>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
