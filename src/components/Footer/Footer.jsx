import { Link } from 'react-router-dom'
import { Twitter, Github, Linkedin,} from 'lucide-react'
import Logo from '../Logo'

function Footer() {
  return (
    <div>
      <section className="relative overflow-hidden py-10 bg-gray-400  border border-b-gray-500 border-t-gray-500 border-r-gray-500">
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="-m-6 flex flex-wrap">
            <div className="w-full p-6 md:w-1/2 lg:w-5/12">
              <div className="flex h-full flex-col justify-between">
              </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-2/12">
              <div className="h-full">
                <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                  Company
                </h3>
                <ul>
                  <li className="mb-4">
                    <Link
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                      to="/"
                    >
                      Features
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                      to="/"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                      to="/"
                    >
                      Affiliate Program
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                      to="/"
                    >
                      Press Kit
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-2/12">
              <div className="h-full">
                <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                  Support
                </h3>
                <ul>
                  <li className="mb-4">
                    <Link
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                      to="/"
                    >
                      Account
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                      to="/"
                    >
                      Help
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                      to="/"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                      to="/"
                    >
                      Customer Support
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-3/12">
              <div className="h-full">
                <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                  Legals
                </h3>
                <ul>
                  <li className="mb-4">
                    <Link
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                      to="/"
                    >
                      Terms &amp; Conditions
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                      to="/"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                      to="/"
                    >
                      Licensing
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-end space-x-4 py-6 pr-10">
      <div className="mr-[1100px]">
        <p className="text-sm text-gray-600">
          &copy; 2025 bizblogs. All rights reserved.
        </p>
      </div>
        <a href="https://github.com/mohitngi" target="_blank" rel="noopener noreferrer">
          <Github className="w-6 h-6" />
        </a>
        <a href="https://x.com/mohitngi" target="_blank" rel="noopener noreferrer">
          <Twitter className="w-6 h-6" />
        </a>
        <a href="https://www.linkedin.com/in/mohitngi/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-6 h-6" />
        </a>
      </div>
    </div>
  )
}

export default Footer
