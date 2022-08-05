// import React from "react"
// import { AppContext } from "../AppProvider"
// const SearchForm = () => {
//   const { setSearchTerm } = useGlobalContext()
//   const searchValue = React.useRef("")
//   React.useEffect(() => {
//     searchValue.current.focus()
//   })
//   const searchCocktail = () => {
//     setSearchTerm(searchValue.current.value)
//   }
//   const handleSubmit = (e) => {
//     e.preventDefault()
//   }
//   return (
//     <section className="section search">
//       <form action="" className="search-form" onSubmit={handleSubmit}>
//         <div className="form-control"></div>
//         <label htmlFor="name"> search your favorite cocktail</label>
//         <input
//           type="text"
//           id="name"
//           ref={searchValue}
//           onChange={searchCocktail}
//         ></input>
//       </form>
//       <h2>search form components</h2>
//     </section>
//   )
// }

// export default SearchForm
