function App() {
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="text-center">
        <h1 className="myfont text-9xl ">MyFood</h1>
        <h1 className="myfont text-5xl animate-pulse">Proximamente</h1>
      </div>

      <div className="mx-auto flex flex-col justify-around w-screen my-4">
        <div className="mx-auto flex justify-around w-32 my-4">
          <a href="https://www.instagram.com/oficialmyfood"><i class="fa-brands fa-instagram text-4xl icons-colors"></i></a>
          <a href="https://www.tiktok.com/@oficialmyfood" ><i class="fa-brands fa-tiktok text-4xl icons-colors"></i></a>
        </div>
      </div >
      
      
    </div >
  );
}

export default App;
