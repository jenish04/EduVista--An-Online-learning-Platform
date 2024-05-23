import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
export default function applymentorpage() {
    return (
      <>
        <Helmet>
          <title>EduVista</title>
          <meta name="description" content="Web site created using create-react-app" />
        </Helmet>
        <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-gray-100">
          <div className="flex flex-col items-center justify-start w-full gap-12">
            <Header className="flex justify-center items-center w-full md:h-auto p-[22px] sm:p-5 bg-gray-100" />
            </div>
          </div>
              <Text as="p" className="mt-[5px] ml-2.5 md:ml-0 !text-black-900_02 !font-medium text-4xl text-center underline pt-6 pb-6">
                Application form for the EduVista instructor
                </Text>
          

          <form>
  <div class="space-y-12 m-10">
    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900">Profile</h2>
      <p class="mt-1 text-sm leading-6 text-gray-600">This information will be reviewed by the EduVista committee so please double check the details that you share.</p>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-4">
          <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
          <div class="mt-2">
            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md p-2">
              <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm ">Professional Email Address / </span>
              <input type="email" name="username" id="username" autocomplete="username" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="enter your email address"/>
            </div>
          </div>
        </div>

        <div class="col-span-full">
          <label for="about" class="block text-sm font-medium leading-6 text-gray-900">About</label>
          <div class="mt-2">
            <textarea id="about" name="about" rows="3" class="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
          </div>
          <p class="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
        </div>

        

        <div class="col-span-full">
          <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Upload your Resume</label>
          <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div class="text-center">
              <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
              </svg>
              <div class="mt-4 flex text-sm leading-6 text-gray-600">
                <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" class="sr-only"/>
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
      <p class="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 text-lg">
    <div class="sm:col-span-3">
        <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
        <div class="mt-2">
            <input type="text" name="first-name" id="first-name"  
                   class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                          placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base base:leading-6 
                          focus:py-2 focus:px-3 focus:w-100 transition-all duration-300"/>
        </div>
    </div>



    <div class="sm:col-span-3">
        <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
        <div class="mt-2">
            <input type="text" name="last-name" id="last-name"  
                   class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                          placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base base:leading-6 
                          focus:py-2 focus:px-3 focus:w-100 transition-all duration-300"/>
        </div>
    </div>

    <div class="sm:col-span-3">
        <label for="email-address" class="block text-sm font-medium leading-6 text-gray-900">Email Address</label>
        <div class="mt-2">
            <input type="text" name="email-address" id="email-address" autocomplete="given-name" 
                   class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                          placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base base:leading-6 
                          focus:py-2 focus:px-3 focus:w-100 transition-all duration-300"/>
        </div>
    </div>

        <div class="sm:col-span-3">
          <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
          <div class="mt-2">
            <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
              <option>United States</option>
              <option>Canada</option>
              <option>India</option>
              <option>Australia</option>
              <option>United Kingdom</option>
            </select>
          </div>
        </div>

        <div class="sm:col-span-3">
        <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Street Address</label>
        <div class="mt-2">
            <textarea name="street-address" id="street-address" autocomplete="given-name" 
                   class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                          placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base base:leading-6 
                          focus:py-2 focus:px-3 focus:w-100 transition-all duration-300"/>
        </div>
    </div>

    <div class="sm:col-span-3">
        <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
        <div class="mt-2">
            <input type="text" name="city" id="city" autocomplete="given-name" 
                   class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                          placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base base:leading-6 
                          focus:py-2 focus:px-3 focus:w-100 transition-all duration-300"/>
        </div>
    </div>

    <div class="sm:col-span-3">
        <label for="state" class="block text-sm font-medium leading-6 text-gray-900">State/Province</label>
        <div class="mt-2">
            <input type="text" name="state" id="state" autocomplete="given-name" 
                   class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                          placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base base:leading-6 
                          focus:py-2 focus:px-3 focus:w-100 transition-all duration-300"/>
        </div>
    </div>

    <div class="sm:col-span-3">
        <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">ZIP/Postal Code</label>
        <div class="mt-2">
            <input type="text" name="first-name" id="first-name" autocomplete="given-name" 
                   class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                          placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base base:leading-6 
                          focus:py-2 focus:px-3 focus:w-100 transition-all duration-300"/>
        </div>
    </div>
      </div>
    </div>

    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
      <p class="mt-1 text-sm leading-6 text-gray-600">We'll always let you know your application status via email, but you pick what else you want to hear about by checking the boxes below.</p>

      <div class="mt-10 space-y-10">
        <fieldset>
          <legend class="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
          <div class="mt-6 space-y-6">
            <div class="relative flex gap-x-3">
              <div class="flex h-6 items-center">
                <input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
              </div>
              <div class="text-sm leading-6">
                <label for="comments" class="font-medium text-gray-900">Social Media</label>
                <p class="text-gray-500">Get notified when someones posts a Story on a social media.</p>
              </div>
            </div>
            <div class="relative flex gap-x-3">
              <div class="flex h-6 items-center">
                <input id="candidates" name="candidates" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
              </div>
              <div class="text-sm leading-6">
                <label for="candidates" class="font-medium text-gray-900">Vacancy</label>
                <p class="text-gray-500">Get notified when a vacancy in EduVista is open</p>
              </div>
            </div>
            <div class="relative flex gap-x-3">
              <div class="flex h-6 items-center">
                <input id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
              </div>
              <div class="text-sm leading-6">
                <label for="offers" class="font-medium text-gray-900">Daily Updates</label>
                <p class="text-gray-500">Get notified regarding the EduVista's news and fun facts</p>
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend class="text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
          <p class="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
          <div class="mt-6 space-y-6">
            <div class="flex items-center gap-x-3">
              <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
              <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">Everything</label>
            </div>
            <div class="flex items-center gap-x-3">
              <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
              <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">Same as email</label>
            </div>
            <div class="flex items-center gap-x-3">
              <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
              <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">No push notifications</label>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  </div>

  <div class="mt-6 flex items-center justify-center gap-x-6">
    <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
    <button type="submit" class="rounded-md bg-indigo-300 px-7 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
  </div>
</form>

      </>
    );
  }