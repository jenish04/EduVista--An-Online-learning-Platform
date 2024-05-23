import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Slider, Heading } from "../../components";
import AllMentorsMaincard from "../../components/AllMentorsMaincard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
import EduviJoinAsTeacherPage from "pages/EduviJoinAsTeacher";

export default function AllmentorsPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>Jenish_patel04's Application5</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-gray-100">
        <div className="flex flex-col items-center justify-start w-full gap-12">
          <Header className="flex justify-center items-center w-full md:h-auto p-[22px] sm:p-5 bg-gray-100" />
          <div className="flex flex-col items-start justify-start w-full gap-[5px] p-5 md:px-5 bg-red-50 max-w-7xl rounded-[20px]">
            <Text
              as="p"
              className="mt-[5px] ml-2.5 md:ml-0 !text-black-900_02 !font-medium"
            >
              Home | Our Mentors
            </Text>
            <div className="flex flex-row md:flex-col justify-between items-center w-[99%] md:w-full ml-2.5 gap-[420px] md:gap-10 md:ml-0">
              <Heading size="2xl" as="h1" className="w-[31%] !font-semibold">
                <>
                  EduVista has the
                  <br />
                  qualified mentor
                </>
              </Heading>
              <div className="rounded-md overflow-hidden pr-5">
                <img
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSewxtxSsdkGWiEZhCo5pLkCxpBFpIiaz3P6XIkgJEXDutZYW-i"
                  alt="mentor img"
                  width={400}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <Tabs
            className="flex flex-col items-center justify-start w-[89%] gap-[51px]"
            selectedTabClassName="!text-black bg-yellow-300 rounded-[20px] px-4 py-2"
            selectedTabPanelClassName="relative tab-panel--selected"
          >
            <TabList className="flex flex-row md:flex-col justify-center w-full gap-20 p-3.5 md:gap-10">
              <Tab className="ml-[193px] md:ml-5 text-gray-900 text-base font-medium cursor-pointer">
                All Mentors
              </Tab>
              <Tab className="text-gray-900 text-base font-medium cursor-pointer">
                For Kindergarten
              </Tab>
              <Tab className="text-gray-900 text-base font-medium cursor-pointer">
                For high school
              </Tab>
              <Tab className="text-gray-900 text-base font-medium cursor-pointer">
                For college
              </Tab>
              <Tab className="mr-[193px] md:mr-5 text-gray-900 text-base font-medium cursor-pointer">
                For Technology
              </Tab>
            </TabList>
            <div className="flex flex-col items-center justify-start w-full gap-[42px]">
              {[...Array(5)].map((_, index) => (
                <TabPanel
                  key={`tab-panel${index}`}
                  className="items-center w-full absolute"
                >
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full gap-[42px]">
                      <div className="flex flex-row md:flex-col justify-start w-full gap-10 md:gap-5">
                        <AllMentorsMaincard className="flex flex-col items-center justify-start w-[23%] md:w-full gap-2.5" />
                        <AllMentorsMaincard
                          bgOne="images/img_bg_1.png"
                          kristinwatson="Brooklyn Simmons"
                          className="flex flex-col items-center justify-start w-[23%] md:w-full gap-2.5"
                        />
                        <AllMentorsMaincard
                          bgOne="images/img_bg_2.png"
                          kristinwatson="Robert Fox"
                          className="flex flex-col items-center justify-start w-[23%] md:w-full gap-2.5"
                        />
                        <AllMentorsMaincard
                          bgOne="images/img_bg_3.png"
                          kristinwatson="Wade Warren"
                          className="flex flex-col items-center justify-start w-[23%] md:w-full gap-2.5"
                        />
                      </div>
                      <div className="flex flex-row md:flex-col justify-start w-full gap-10 md:gap-5">
                        <AllMentorsMaincard
                          bgOne="images/img_bg_4.png"
                          kristinwatson="Bessie Cooper"
                          className="flex flex-col items-center justify-start w-[23%] md:w-full gap-2.5"
                        />
                        <AllMentorsMaincard
                          bgOne="images/img_bg_5.png"
                          kristinwatson="Ronald Richards"
                          className="flex flex-col items-center justify-start w-[23%] md:w-full gap-2.5"
                        />
                        <AllMentorsMaincard
                          bgOne="images/img_bg_6.png"
                          kristinwatson="Guy Hawkins"
                          className="flex flex-col items-center justify-start w-[23%] md:w-full gap-2.5"
                        />
                        <AllMentorsMaincard
                          bgOne="images/img_bg_7.png"
                          kristinwatson="Floyd Miles"
                          className="flex flex-col items-center justify-start w-[23%] md:w-full gap-2.5"
                        />
                      </div>
                    </div>
                  </div>
                </TabPanel>
              ))}
              <div className="flex flex-row justify-center w-full">
                <div className="flex flex-col items-center justify-start w-full gap-[51px]">
                  <Slider
                    autoPlay
                    autoPlayInterval={2000}
                    responsive={{
                      0: { items: 1 },
                      550: { items: 1 },
                      1050: { items: 1 },
                    }}
                    disableDotsControls
                    activeIndex={sliderState}
                    onSlideChanged={(e) => {
                      setSliderState(e?.item);
                    }}
                    ref={sliderRef}
                    className="w-full"
                    items={[...Array(3)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <div className="flex flex-row md:flex-col gap-10 mx-auto">
                          <AllMentorsMaincard
                            bgOne="images/img_bg_8.png"
                            kristinwatson="Theresa Webb"
                            className="flex flex-col items-center justify-start w-[23%] md:w-full gap-2.5"
                          />
                          <AllMentorsMaincard
                            bgOne="images/img_bg_9.png"
                            kristinwatson="Cody Fisher"
                            className="flex flex-col items-center justify-start w-[23%] md:w-full gap-2.5"
                          />

                          <AllMentorsMaincard
                            bgOne="images/img_bg_10.png"
                            kristinwatson="Courtney Henry"
                            className="flex flex-col items-center justify-start w-[23%] md:w-full gap-2.5"
                          />
                          <AllMentorsMaincard
                            bgOne="images/img_bg_11.png"
                            kristinwatson="Jerome Bell"
                            className="flex flex-col items-center justify-start w-[23%] md:w-full gap-2.5"
                          />
                        </div>
                      </React.Fragment>
                    ))}
                  />
                  <div className="flex flex-row justify-between w-[23%] md:w-full">
                    <Button
                      color="white_A700"
                      size="lg"
                      shape="round"
                      onClick={() => {
                        sliderRef?.current?.slidePrev();
                      }}
                      className="w-[44px] !rounded-md"
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/271/271220.png"
                        alt="Previous"
                      />
                    </Button>
                    <Button
                      size="lg"
                      shape="round"
                      onClick={() => {
                        sliderRef?.current?.slideNext();
                      }}
                      className="w-[44px] !rounded-md"
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
                        alt="Next"
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center w-[23%] md:w-full gap-[19px]">
              <Text
                as="p"
                className="ml-[61px] md:ml-5 !text-gray-900 !font-medium"
              >
                Page
              </Text>
              <Button
                color="white_A700"
                size="sm"
                className="!text-gray-700_01 font-medium min-w-[39px] rounded-lg"
              >
                1
              </Button>
              <Text
                as="p"
                className="mr-[61px] md:mr-5 !text-gray-900 !font-medium"
              >
                of 03
              </Text>
            </div>
          </Tabs>
        </div>
        <a
          href="/eduvijoinasteacher"
          class="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
        >
          <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-blue-300 group-hover:w-full ease"></span>
          <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-blue-300 group-hover:w-full ease"></span>
          <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-blue-400 group-hover:h-full ease"></span>
          <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-blue-400 group-hover:h-full ease"></span>
          <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-blue-400 opacity-0 group-hover:opacity-100"></span>
          <span class="relative transition-colors duration-300 delay-200 group-hover:text-black ease">
            Join as the Mentor at EduVista
          </span>
        </a>

        <Footer className="flex flex-col items-center justify-center w-full" />
      </div>
    </>
  );
}
