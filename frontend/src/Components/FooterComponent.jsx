import { Footer } from "flowbite-react"
import { Link } from "react-router-dom"
import { BsFacebook, BsTwitter,BsInstagram, BsGithub} from "react-icons/bs";


function FooterComponent() {
  return (
   <>
   <Footer container className="border border-t-8 border-teal-500 flex flex-col">
      <div className="flex w-full justify-between flex-col sm:flex-row">
        <div>
        <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
        <span className="px-2 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Suri&rsquo;s</span>Blog
        </Link>
        </div>
        <div className="flex gap-4 mt-5 justify-between">
          <div>
            <h1>About</h1>
            <a href="">Test</a>
            <a href="">Test2</a>
          </div>
          <div>
            <h1>About</h1>
            <a href="">Test</a>
            <a href="">Test2</a>
          </div>
          <div>
            <h1>About</h1>
            <a href="">Test</a>
            <a href="">Test2</a>
          </div>
        </div>
      </div>
      <div className="w-full border-t-2">
          <div><span>&copy;</span> {new Date().getFullYear()} Surendra Ranwa</div>
          <div className="flex gap-5 mt-5">
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