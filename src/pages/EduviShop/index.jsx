import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Img, Text, SelectBox, Input, Heading, RatingBar } from "../../components";
import EduviShopEight from "../../components/EduviShopEight";
import EduviShopFive from "../../components/EduviShopFive";
import EduviShopFour from "../../components/EduviShopFour";
import EduviShopNine from "../../components/EduviShopNine";
import EduviShopOne from "../../components/EduviShopOne";
import EduviShopSeven from "../../components/EduviShopSeven";
import EduviShopSix from "../../components/EduviShopSix";
import EduviShopThree from "../../components/EduviShopThree";
import EduviShopTwo from "../../components/EduviShopTwo";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const dropDownOptions = [
  { label: "Sci-fi", value: "Sci-fi" },
  { label: "Fiction", value: "option2" },
  { label: "History", value: "option3" },
  { label:"Geography", value:"option4"},
];

export default function EduviShopPage() {
  const [searchBarValue6, setSearchBarValue6] = React.useState("");

  return (
    <>
      <Helmet>
        <title>EduVista</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-gray-100">
        <div className="flex flex-col items-center justify-start w-full gap-12">
          <Header className="flex justify-center items-center w-full md:h-auto p-[22px] sm:p-5 bg-gray-100" />
          <div className="flex flex-col items-start justify-start w-full gap-[5px] p-5 md:px-5 bg-red-50 max-w-7xl rounded-[20px]">
            <Text as="p" className="mt-[5px] ml-2.5 md:ml-0 !text-black-900_02 !font-medium cursor-auto select-none">
              Home | Shop
            </Text>
            <div className="flex flex-row md:flex-col justify-between items-center w-[99%] md:w-full ml-2.5 gap-[492px] md:gap-10 md:ml-0">
              <Heading size="3xl" as="h1" className="w-[30%] !font-semibold cursor-auto select-none">
                <>
                  EduVista Online
                  <br />
                  Book Shop
                </>
              </Heading>
              <Img
                src="images/img_kisspng_bookcas.png"
                height={{
                  "min": "210px",
                  "max": "210px"
                }}
                alt="kisspngbookcas"
                className="w-[31%] md:w-full md:h-[210px] object-cover"
              />
            </div>
          </div>
        </div>
        <span className="text-2xl text-slate-500 hover:text-red-500 cursor-auto"><b>Explore Our Wide collection of Novel, Fiction, Anime, Storybooks, Sci-fi and much more....</b></span>
        <div className="flex flex-row md:flex-col justify-start items-start w-full pl-20 pr-14 gap-10 md:gap-5 md:px-5">
          <div className="flex flex-col w-[31%] md:w-full gap-[39px]">
            <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-3.5">
              <Heading size="xl" as="h2" className="!text-black-900_02">
                Popular Books
              </Heading>
              <div className="flex flex-col w-full gap-[15px]">
                <div className="flex flex-row justify-start items-center w-full gap-[15px] p-[21px] sm:p-5 bg-white-A700 rounded-[10px]">
                  <Img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg"
                    alt="popular_books"
                    className="w-[21%] md:h-auto sm:w-full ml-[3px] object-cover rounded-[5px] max-w-xs transition duration-300 ease-in-out hover:scale-110"
                  />
                  <div className="flex flex-col items-start justify-start w-[73%] mr-[3px] gap-2.5">
                    <RatingBar
                      value={5}
                      isEditable={true}
                      color="#ffc107"
                      activeColor="#ffc107"
                      size={16}
                      className="flex justify-between"
                    />
                    <Heading as="h3" className="!text-black-900_02">
                      <>
                      <a href="https://en.wikipedia.org/wiki/The_Great_Gatsby">
                      The Great Gatsby, by
                        <br />
                        F. Scott Fitzgerald
                        </a>
                      </>
                    </Heading>
                    <Heading as="h4" className="!text-red-300_01">
                      $39.00
                    </Heading>
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center w-full gap-[15px] p-[21px] sm:p-5 bg-white-A700 rounded-[10px]">
                  <Img
                    src="http://t1.gstatic.com/images?q=tbn:ANd9GcTGAWngGaA7D6jlXLh9RpzY2T8nL3h2NrF4LU-aufdPdSKGG-u9"
                    alt="image"
                    className="w-[21%] md:h-auto sm:w-full ml-[3px] object-cover rounded-[5px] max-w-xs transition duration-300 ease-in-out hover:scale-110"
                  />
                  <div className="flex flex-col items-start justify-start w-[73%] mr-[3px] gap-2.5">
                    <RatingBar
                      value={5}
                      isEditable={true}
                      color="#ffc107"
                      activeColor="#ffc107"
                      size={16}
                      className="flex justify-between"
                    />
                    <Heading as="h5" className="!text-black-900_02">
                      <>
                      <a href="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings">
                      The Lord of the Rings, by
                        <br />
                        Margaret Atwood
                        </a>
                      </>
                    </Heading>
                    <Heading as="h6" className="!text-red-300_01">
                      $56.00
                    </Heading>
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center w-full gap-[15px] p-[21px] sm:p-5 bg-white-A700 rounded-[10px]">
                  <Img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7uz0DNYz9a05dFiBvgvNYJ4GmV6cbjxUWUSWJrMcxqyAOlp5v"
                    alt="image"
                    className="w-[21%] md:h-auto sm:w-full ml-[3px] object-cover rounded-[5px] max-w-xs transition duration-300 ease-in-out hover:scale-110"
                  />
                  <div className="flex flex-col items-start justify-start w-[73%] mr-[3px] gap-2.5">
                    <RatingBar
                      value={5}
                      isEditable={true}
                      color="#ffc107"
                      activeColor="#ffc107"
                      size={16}
                      className="flex justify-between"
                    />
                    <Heading as="h6" className="!text-black-900_02">
                      <>
                      <a href="https://en.wikipedia.org/wiki/Don_Quixote">
                      Don Quixote, by
                        <br />
                        Miguel de Cervantes
                        </a>
                      </>
                    </Heading>
                    <Heading as="h6" className="!text-red-300_01">
                      $25.00
                    </Heading>
                  </div>
                </div>
              </div>
              <Text size="lg" as="p" className="!text-red-300_01 font-mono">
                See More.........
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-4">
              <Heading size="xl" as="h3" className="!text-black-900_02">
                New Arrivals
              </Heading>
              <div className="flex flex-col w-full gap-[15px]">
                <div className="flex flex-row justify-start items-center w-full gap-[15px] p-[21px] sm:p-5 bg-white-A700 rounded-[10px]">
                  <Img
                    src="https://odyssey.in/cdn/shop/files/REDRIVER_800x.jpg?v=1707899679"
                    alt="new_arrivals"
                    className="w-[21%] md:h-auto sm:w-full ml-[3px] object-cover rounded-[5px] max-w-xs transition duration-300 ease-in-out hover:scale-110"
                  />
                  <div className="flex flex-col items-start justify-start w-[73%] mr-[3px] gap-2.5">
                    <RatingBar
                      value={5}
                      isEditable={true}
                      color="#ffc107"
                      activeColor="#ffc107"
                      size={16}
                      className="flex justify-between"
                    />
                    <Heading as="h6" className="!text-black-900_02">
                      <>
                        Red River, by
                        <br />
                        Somnath Batabyal
                      </>
                    </Heading>
                    <Heading as="h6" className="!text-red-300_01">
                      $19.00
                    </Heading>
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center w-full gap-[15px] p-[21px] sm:p-5 bg-white-A700 rounded-[10px]">
                  <Img
                    src="https://odyssey.in/cdn/shop/files/HOPE_800x.jpg?v=1707899153"
                    alt="image_one"
                    className="w-[21%] md:h-auto sm:w-full ml-[3px] object-cover rounded-[5px] max-w-xs transition duration-300 ease-in-out hover:scale-110"
                  />
                  <div className="flex flex-col items-start justify-start w-[73%] mr-[3px] gap-2.5">
                    <RatingBar
                      value={5}
                      isEditable={true}
                      color="#ffc107"
                      activeColor="#ffc107"
                      size={16}
                      className="flex justify-between"
                    />
                    <Heading as="h6" className="!text-black-900_02">
                      <>
                        Audacious Hope, by
                        <br />
                        Indrajit Roy
                      </>
                    </Heading>
                    <Heading as="h6" className="!text-red-300_01">
                      $51.00
                    </Heading>
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center w-full gap-[15px] p-[21px] sm:p-5 bg-white-A700 rounded-[10px]">
                  <Img
                    src="https://odyssey.in/cdn/shop/files/DEF_800x.jpg?v=1707727882"
                    alt="image_one"
                    className="w-[21%] md:h-auto sm:w-full ml-[3px] object-cover rounded-[5px] max-w-xs transition duration-300 ease-in-out hover:scale-110"
                  />
                  <div className="flex flex-col items-start justify-start w-[73%] mr-[3px] gap-2.5">
                    <RatingBar
                      value={5}
                      isEditable={true}
                      color="#ffc107"
                      activeColor="#ffc107"
                      size={16}
                      className="flex justify-between"
                    />
                    <Heading as="h6" className="!text-black-900_02">
                      <>
                       
                        Brandon Sanderson, by
                        <br />
                        Alexandre Dumas
                        
                      </>
                    </Heading>
                    <Heading as="h6" className="!text-red-300_01">
                      $39.00
                    </Heading>
                  </div>
                </div>
              </div>
              <Text size="lg" as="p" className="!text-red-300_01 cursor-pointer font-mono">
                See More
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[65%] md:w-full gap-10">
            <div className="flex flex-col items-center justify-start w-full gap-[30px]">
              <div className="flex flex-row md:flex-col justify-start w-full gap-6 md:gap-5">
                <Button color="white_A700" className="sm:px-5 font-medium min-w-[131px] rounded-[10px] hover:bg-yellow-400">
                  All Books
                </Button>
                <Button color="white_A700" className="sm:px-5 font-medium min-w-[212px] rounded-[10px]  hover:bg-yellow-400">
                  Kindergarten
                </Button>
                <Button color="white_A700" className="sm:px-5 font-medium min-w-[212px] rounded-[10px]  hover:bg-yellow-400">
                  High School
                </Button>
                <Button color="white_A700" className="sm:px-5 font-medium min-w-[212px] rounded-[10px]  hover:bg-yellow-400">
                  College
                </Button>
              </div>
              <div className="flex flex-row sm:flex-col justify-start w-full gap-[15px] sm:gap-5">
                <Input
                  color="white_A700"
                  size="md"
                  name="search"
                  placeholder="Search Class, Course, Book Name"
                  value={searchBarValue6}
                  onChange={(e) => setSearchBarValue6(e)}
                  suffix={
                    searchBarValue6?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue6("")} height={24} width={24} fillColor="#ffffffff" />
                    ) : (
                      <Img src="images/img_search.svg" alt="search" className="cursor-pointer" />
                    )
                  }
                  className="w-[67%] sm:w-full gap-[35px] !text-gray-700_99 rounded-tr-[10px] rounded-br-[10px] font-medium"
                />
                <SelectBox
                  shape="round"
                  indicator={<Img src="images/img_arrowdown_red_300_01.svg" alt="arrow_down" />}
                  name="sortbylatest"
                  placeholder="Sort by: Latest"
                  options={dropDownOptions}
                  className="w-[33%] sm:w-full gap-px font-medium"
                />
              </div>
              <div className="justify-center w-full gap-[15px] grid-cols-3 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
                <EduviShopOne className="flex flex-col items-center justify-start w-full gap-2" />
                <EduviShopTwo className="flex flex-col items-center justify-start w-full gap-2" />
                <EduviShopThree className="flex flex-col items-center justify-start w-full gap-2" />
                <EduviShopFour className="flex flex-col items-center justify-start w-full gap-2" />
                <EduviShopFive className="flex flex-col items-center justify-start w-full gap-2" />
                <EduviShopSix className="flex flex-col items-center justify-start w-full gap-2" />
                <EduviShopSeven className="flex flex-col items-center justify-start w-full gap-2" />
                <EduviShopEight className="flex flex-col items-center justify-start w-full gap-2" />
                <EduviShopNine className="flex flex-col items-center justify-start w-full gap-2" />
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-[35%] md:w-full">
              <Button color="white_A700" size="lg" shape="round" className="w-[15%] !rounded-md">
                <Img src="images/img_arrow_left.svg" />
              </Button>
              <Text as="p" className="!text-gray-900 !font-medium">
                Page
              </Text>
              <Button color="white_A700" size="sm" className="!text-gray-700_01 font-medium min-w-[42px] rounded-lg">
                5
              </Button>
              <Text as="p" className="!text-gray-900 !font-medium">
                of 80
              </Text>
              <Button size="lg" shape="round" className="w-[15%] !rounded-md">
                <Img src="images/img_arrow_right.svg" />
              </Button>
            </div>
          </div>
        </div>
        <Footer className="flex flex-col items-center justify-center w-full" />
      </div>
    </>
  );
}
