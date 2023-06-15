import Header from "@/src/components/Header";
import Selector from "@/src/components/Selector";
import React from "react";

export default function Dashboard() {
  return (
    <div className="bg-gray">
      <main className="container">
        <div className="py-4 grid grid-cols-4 gap-4">
          <div className="col-span-2">
            <p className="text-2xl font-bold leading-8 tracking-tight pb-4">Danh sách dự án</p>
            <button className="btn btn-info"><p className="font-bold">Thêm dự án</p></button>
          </div>
          <Selector />
        </div>
        <ul>
          <li className="py-4">
            <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
              <div className="space-y-3 xl:col-span-3">
                <div>
                  <h3 className="text-2xl font-bold leading-8 tracking-tight">
                    <a className="text-gray-900 dark:text-gray-100" href="#">
                      New features in v1
                    </a>
                  </h3>
                  <div className="flex flex-wrap">
                    <a
                      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      href="#"
                    >
                      next-js
                    </a>
                    <a
                      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      href="#"
                    >
                      tailwind
                    </a>
                    <a
                      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      href="#"
                    >
                      guide
                    </a>
                  </div>
                </div>
                <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                  An overview of the new features released in v1 - code block
                  copy, multiple authors, frontmatter layout and more
                </div>
              </div>
            </article>
          </li>
          <li className="py-4">
            <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
              <div className="space-y-3 xl:col-span-3">
                <div>
                  <h3 className="text-2xl font-bold leading-8 tracking-tight">
                    <a className="text-gray-900 dark:text-gray-100" href="#">
                      Introducing Multi-part Posts with Nested Routing
                    </a>
                  </h3>
                  <div className="flex flex-wrap">
                    <a
                      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      href="#"
                    >
                      multi-author
                    </a>
                    <a
                      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      href="#"
                    >
                      next-js
                    </a>
                    <a
                      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      href="#"
                    >
                      feature
                    </a>
                  </div>
                </div>
                <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                  The blog template supports posts in nested sub-folders. This
                  can be used to group posts of similar content e.g. a
                  multi-part course. This post is itself an example of a nested
                  route!
                </div>
              </div>
            </article>
          </li>
          <li className="py-4">
            <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
              <div className="space-y-3 xl:col-span-3">
                <div>
                  <h3 className="text-2xl font-bold leading-8 tracking-tight">
                    <a className="text-gray-900 dark:text-gray-100" href="#">
                      Introducing Tailwind Nextjs Starter Blog
                    </a>
                  </h3>
                  <div className="flex flex-wrap">
                    <a
                      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      href="#"
                    >
                      next-js
                    </a>
                    <a
                      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      href="#"
                    >
                      tailwind
                    </a>
                    <a
                      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      href="#"
                    >
                      guide
                    </a>
                  </div>
                </div>
                <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                  Looking for a performant, out of the box template, with all
                  the best in web technology to support your blogging needs?
                  Checkout the Tailwind Nextjs Starter Blog template.
                </div>
              </div>
            </article>
          </li>
          <li className="py-4">
            <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
              <div className="space-y-3 xl:col-span-3">
                <div>
                  <h3 className="text-2xl font-bold leading-8 tracking-tight">
                    <a className="text-gray-900 dark:text-gray-100" href="#">
                      Deriving the OLS Estimator
                    </a>
                  </h3>
                  <div className="flex flex-wrap">
                    <a
                      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      href="#"
                    >
                      next-js
                    </a>
                    <a
                      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      href="#"
                    >
                      math
                    </a>
                    <a
                      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      href="#"
                    >
                      ols
                    </a>
                  </div>
                </div>
                <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                  How to derive the OLS Estimator with matrix notation and a
                  tour of math typesetting using markdown with the help of
                  KaTeX.
                </div>
              </div>
            </article>
          </li>
          <li className="py-4">
            <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
              <div className="space-y-3 xl:col-span-3">
                <div>
                  <h3 className="text-2xl font-bold leading-8 tracking-tight">
                    <a className="text-gray-900 dark:text-gray-100" href="#">
                      Images in Next.js
                    </a>
                  </h3>
                  <div className="flex flex-wrap">
                    <a
                      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      href="#"
                    >
                      next-js
                    </a>
                    <a
                      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      href="#"
                    >
                      guide
                    </a>
                  </div>
                </div>
                <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                  In this article we introduce adding images in the tailwind
                  starter blog and the benefits and limitations of the
                  next/image component.
                </div>
              </div>
            </article>
          </li>
        </ul>
      </main>
    </div>
  );
}
