import Hero from "./app/components/Hero";
import MovieList from "./app/components/MovieList";
import Nav from "./app/components/Nav";



function App() {



  return (
   <div className=" bg-slate-900">
    <div className="max-w-5xl mx-auto">
      <Nav />
      <Hero/>
      <MovieList
      filter="sort_by=rating"
      title="Top Rated"
      carousel={true}

      />

      <MovieList
      title="Action" 
      filter="genres=action, movies "
      carousel={true}
      speed={1500}
      duration={1000}
      />
      <MovieList
      title="Drama" 
      filter="genre=crime"
      carousel={true}
       />
        <MovieList
       title="Adventure" 
       filter="genres=adventure, family, comedy "
       carousel={true}
        />

      <MovieList
      title="Thriller" 
      filter="genres =thriller, comedy " 
      />
      <MovieList
      title="Thriller" 
      filter="genre=sci-fi" 
      />

    </div>
    <div className="text-white flex justify-center text-center text-lg py-4">
      <span>Build With ❤️ by <a className="font-bold hover:underline" href="https://www.linkedin.com/in/amir-hamza-710556204">Amir Hamza </a></span>
    </div>
   
   </div>
  );
}

export default App;
