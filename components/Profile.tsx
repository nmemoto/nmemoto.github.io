import { IoLogoGithub, IoLogoTwitter } from "react-icons/io5";

export const Profile = () => {
  return (
    <div className="bg-gray-50 w-full md:w-44 lg:w-52">
      <div className="shadow sm:rounded-lg p-2 lg:px-4">
        <div className="flex items-center md:flex-col py-2">
          <img
            className="w-20"
            src="https://avatars.githubusercontent.com/nmemoto"
          />
          <div className="text-left md:text-center ml-4 md:ml-0">
            <p className="text-lg font-semibold block">nmemoto</p>
            <p className="text-sm text-left block">
              I live in Sapporo,Japan. I'm a farther of two daughters.
            </p>
          </div>
        </div>
        <div className="flex justify-center space-x-5">
          <div className="rounded-full hover:bg-gray-200 p-2">
            <a
              href="https://twitter.com/nmemoto"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <IoLogoTwitter size="25" />
            </a>
          </div>
          <div className="rounded-full hover:bg-gray-200 p-2">
            <a
              href="https://github.com/nmemoto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub size="25" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
