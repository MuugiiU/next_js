// import React, { useState } from "react";
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

// const Pagination = ({
//   pages = [1],
//   cur = 1,
//   nextPage,
//   prevPage,
//   setCur,
// }: any) => {
//   return (
//     <div className="flex rounded-lg font-semibold">
//       <button
//         onClick={prevPage}
//         className="h-12 border-2 border-r-0 border-pink-300
//                 px-4 rounded-l-lg hover:bg-pink-400 text-white hover:text-white"
//       >
//         <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
//       </button>
//       {pages.map((pg: number) => (
//         <button
//           key={pg}
//           onClick={setCur}
//           className={`h-12 border-2 border-r-0 border-pink-300
//                 w-12 text-white  ${cur === pg && "bg-pink-400 text-white"}`}
//         >
//           {pg}
//         </button>
//       ))}
//       <button
//         onClick={nextPage}
//         className="h-12 border-2  border-pink-300
//                 px-4 rounded-r-lg hover:bg-blue-500 hover:text-white text-white"
//       >
//         <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
//       </button>
//     </div>
//   );
// };

// export default Pagination;
import * as React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationControlled() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange} />
    </Stack>
  );
}
