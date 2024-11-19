import { Footer } from "flowbite-react"
import { Link } from "react-router-dom"
import { BsFacebook, BsTwitter,BsInstagram, BsGithub} from "react-icons/bs";


function FooterComponent() {
  return (
   <>
   <Footer container className="border border-t-8 border-teal-500 flex flex-col">
      <div className="flex w-full justify-between flex-col sm:flex-row">
        <div className="text-2xl">
        <Link to="/" className="self-center whitespace-nowrap text-xl sm:text-2xl font-semibold dark:text-white">
        <span className="px-2 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Suri&rsquo;s</span>Blog
        </Link>
        </div>
        <div className="flex mt-5 justify-between gap-10">
          <div>
            <h1 className="text-2xl font-bold flex flex-row">About</h1>
            <div className="flex flex-col gap-4 text-xl mt-3 mb-4 font-semibold">
            <a href="">Test 1</a>
            <a href="">Test 2</a>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold flex flex-row">About</h1>
            <div className="flex flex-col gap-4 text-xl mt-3 mb-4 font-semibold">
            <a href="">Test 1</a>
            <a href="">Test 2</a>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold flex flex-row">About</h1>
            <div className="flex flex-col gap-4 text-xl mt-3 mb-4 font-semibold">
            <a href="">Test 1</a>
            <a href="">Test 2</a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-t-2 sm:flex sm:justify-between sm:mx-10">
          <div className="text-xl my-4 font-semibold"><span>&copy;</span> {new Date().getFullYear()} Surendra Ranwa</div>
          <div className="flex gap-5 mt-5 text-3xl">
            <a><BsFacebook /></a>
            <a><BsGithub /></a>
            <a><BsInstagram /></a>
            <a><BsTwitter /></a>
          </div>
        </div>
   </Footer>
   </>
  )
}

export default FooterComponent