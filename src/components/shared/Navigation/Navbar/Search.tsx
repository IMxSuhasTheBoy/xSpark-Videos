"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { MdOutlineSearch } from "react-icons/md";
// import queryString from "query-string";

const Search = () => {
  const [text, setText] = useState("");

  // const router = useRouter();

  // const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   const query = {
  //     searchQuery: text,
  //   };

  //   const url = queryString.stringifyUrl(
  //     {
  //       url: "/search",
  //       query,
  //     },
  //     {
  //       skipNull: true,
  //     }
  //   );

  //   router.push(url);
  // };

  return (
    <form
      className="flex flex-row border-y-[1px] border-slate-300 dark:border-red-950 active:border-slate-700 rounded-l-full overflow-hidden w-2/5"
      // onSubmit={handleSearch}
    >
      <button
        type="submit"
        className="px-3 dark:bg-red-950 bg-slate-200 border-none"
      >
        <MdOutlineSearch className="h-6 w-6" />
      </button>
      <input
        type="text"
        placeholder="Search"
        className="w-full px-4 py-2 dark:bg-slate-900 focus:outline-none"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
    </form>
  );
};

export default Search;
