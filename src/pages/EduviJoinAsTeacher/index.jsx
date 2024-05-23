import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

export default function EduviJoinAsTeacherPage() {
  const navigate = useNavigate();

  const handleApplynowclick = () => {
    navigate("/applyformentor");
  };

  return (
    <>
      <Helmet>
        <title>EduVista</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-gray-100">
        <div className="flex flex-col items-center justify-start w-full gap-12">
          <Header className="flex justify-center items-center w-full md:h-auto p-[22px] sm:p-5 bg-gray-100" />
          <div className="flex flex-col items-start justify-start w-full gap-[5px] p-5 md:px-5 bg-yellow-100 max-w-7xl rounded-[20px]">
            <Text as="p" className="mt-[5px] ml-2.5 md:ml-0 !text-black-900_02 !font-medium">
              Home | Become An Instructor
            </Text>
            <div className="flex flex-row md:flex-col justify-center items-center w-[99%] md:w-full ml-2.5 gap-[546px] md:gap-10 md:ml-0">
              <Heading size="2xl" as="h1" className="w-[31%] !font-semibold">
                <>
                  Join EduVista as
                  <br />a Mentor
                </>
              </Heading>
              <Img
                src="https://img.freepik.com/free-photo/close-up-team-leader-explaining-board_23-2148868450.jpg?size=626&ext=jpg&ga=GA1.1.1091453301.1715247754&semt=sph"
                alt="vector_five"
                className="h-[180px] w-100 ml-[-13px] mb-6"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10 md:px-5 max-w-7xl">
            <div className="flex flex-row justify-center">
              <Img
                src="https://img.freepik.com/free-photo/young-woman-holding-pen-clipboard_176474-95461.jpg?size=626&ext=jpg"
                alt="image_seven"
                className=" h-100 w-[100%] ml-5  md:h-auto sm:w-full object-cover"
              />
            </div>
            <div className="flex flex-col items-start justify-start w-[46%] md:w-full gap-[30px]">
              <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-2.5">
                <Heading size="xl" as="h2">
                  Apply As Instructor
                </Heading>
                <Text as="p" className="!leading-[30px]">
                  Teaching is a vital and admirable career. As such, it comes with quite a bit of responsibility, both
                  in practice and in preparation with many skills required to be a teacher. The following steps provide
                  a general breakdown of the requirements for teachers:
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-5">
                <div className="flex flex-row justify-start items-start w-full gap-[30px]">
                  <div className="flex flex-col items-center justify-start w-[100%] pt-1.5 gap-[13px]">
                    <Text as="p" className="!text-red-300_01 !font-medium">
                      Instructor Requirements
                    </Text>
                    <div className="h-px w-full bg-red-300_01 shadow-lg" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-2.5">
                  <div className="flex flex-row justify-start items-center w-full gap-2.5 py-[3px] sm:gap-2.5">
                    <div className="h-[10px] w-[10px] bg-red-300_01 rounded-[50%]" />
                    <Text as="p" className="mt-[3px] !text-gray-900">
                      An undergraduate degree
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-2.5 py-[3px] sm:gap-2.5">
                    <div className="h-[10px] w-[10px] bg-red-300_01 rounded-[50%]" />
                    <Text as="p" className="mt-[3px] !text-gray-900">
                      Participate in supervised teaching
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-2.5 py-[3px] sm:gap-2.5">
                    <div className="h-[10px] w-[10px] bg-red-300_01 rounded-[50%]" />
                    <Text as="p" className="mt-[3px] !text-gray-900">
                      State teaching license
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-2.5 py-[3px] sm:gap-2.5">
                    <div className="h-[10px] w-[10px] bg-red-300_01 rounded-[50%]" />
                    <Text as="p" className="mt-[3px] !text-gray-900">
                      Pursue graduate studies
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-5">
                <div className="flex flex-row justify-start items-start w-full gap-[30px]">
                  <div className="flex flex-col items-center justify-start w-[100%] pt-1.5 gap-[13px]">
                    <Text as="p" className="!text-red-300_01 !font-medium">
                      Advantages of becoming a EduVista Mentor
                    </Text>
                    <div className="h-px w-full bg-red-300_01 shadow-lg" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-2.5">
                  <div className="flex flex-row justify-start items-center w-full gap-2.5 py-[3px] sm:gap-2.5">
                    <div className="h-[10px] w-[10px] bg-red-300_01 rounded-[50%]" />
                    <Text as="p" className="mt-[3px] !text-gray-900">
                      Find Purpose
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-2.5 py-[3px] sm:gap-2.5">
                    <div className="h-[10px] w-[10px] bg-red-300_01 rounded-[50%]" />
                    <Text as="p" className="mt-[3px] !text-gray-900">
                      Great Connections, Beautiful Stories
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-2.5 py-[3px] sm:gap-2.5">
                    <div className="h-[10px] w-[10px] bg-red-300_01 rounded-[50%]" />
                    <Text as="p" className="mt-[3px] !text-gray-900">
                      Awesome Community
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-2.5 py-[3px] sm:gap-2.5">
                    <div className="h-[10px] w-[10px] bg-red-300_01 rounded-[50%]" />
                    <Text as="p" className="mt-[3px] !text-gray-900">
                      Earn Well
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row justify-center w-full md:px-5 max-w-7xl">
            <div className="flex flex-col items-center justify-start w-[83%] pt-[5px] gap-16">
              <Heading size="2xl" as="h2" className="!font-metropolis text-center">
                How to apply to join as instructor
              </Heading>
              <Button className="sm:px-5 font-medium min-w-[143px] rounded-[10px] sm:min-w-full" onClick={handleApplynowclick}>Apply Now</Button>
            </div>
          </div>
        </div>
        <Footer className="flex flex-col items-center justify-center w-full" />
      </div>
    </>
  );
}
