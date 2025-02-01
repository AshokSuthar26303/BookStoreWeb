import React from 'react'
import booksdata from "../Components/books.json"
import Cards from './Cards'
import { Link } from 'react-router-dom'
// import Cards from './Cards'
const Course = () => {
  return (
   <>
    <div className='max-w-screen-2xl  container  mx-auto md:px-20 px-4'>
        <div className='mt-28 text-center'>
            <h1 className='text-2xl md:text-4xl'>We're delighted to have you{" "} <span className='text-pink-500'>here! :)</span></h1>
            <p className='mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed animi repudiandae repellendus voluptatum sunt blanditiis quasi ut, hic, non ex veniam error, impedit enim tempore odit dolor aut minima?
            Illo, laboriosam eum pariatur eligendi totam hic voluptate adipisci consequatur, commodi iusto error libero quibusdam provident! Velit nisi totam ipsam, illo accusamus omnis. Et, corrupti. Necessitatibus assumenda optio veritatis ipsa!
            Quae doloribus non atque beatae, laudantium nemo placeat vitae id, laborum quidem iure nulla tenetur, cupiditate obcaecati ipsum quaerat enim? Temporibus asperiores, quam magni deleniti qui commodi maiores earum corporis?</p>
           
           {/* set a route for when user click on the back button */}

           <Link to="/">
            <button className='bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-700 duration-300 mt-6'>Back</button>
           </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {/* {booksdata.books && booksdata.books.length > 0 ? ( */}
          {  booksdata.books.map((item) => (
            <Cards key={item.id} item={item}/>
              // <Cards key={item.id} item={item} />
            ))
          }
          {/* // ) : (
          //   <p className="text-center text-gray-500">No books available.</p>
          // )} */}
        </div>
    </div>
   </>
  )
}

export default Course

// import React from 'react';
// import booksdata from "../Components/books.json";
// import Cards from './Cards';

// const Course = () => {
//   return (
//     <>
//       <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
//         <div className='mt-28 text-center'>
//           <h1 className='text-2xl md:text-4xl'>
//             We're delighted to have you{" "}
//             <span className='text-pink-500'>here! :)</span>
//           </h1>
//           <p className='mt-8'>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed animi...
//           </p>
//           <button className='bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-700 duration-300 mt-6'>
//             Back
//           </button>
//         </div>

//         {/* ✅ Correctly map over booksdata.books */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
//           {booksdata.books && booksdata.books.length > 0 ? (
//             booksdata.books.map((item) => (
//               <Cards key={item.id} item={item} />  
//             ))
//           ) : (
//             <p className="text-center text-gray-500">No books available.</p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Course;

