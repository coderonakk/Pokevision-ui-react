const Cardcontent = (props) => {
  return (
    <div>
        <div className="flex flex-col justify-between absolute top-0 left-0 h-full w-full p-10 bg-black/40">
        <div>
        <h2 className="bg-purple-900 text-white h-10 w-auto flex items-center justify-center rounded-full font-semibold text-lg">{props.name}</h2>

          <p className="text-lg mt-5 text-white">{props.p}</p>
        </div>


          <div>
            <button onClick={()=> window.open(props.link, "_blank")} className="bg-purple-900 text-white px-5 py-2 text-lg rounded-full cursor-pointer">Get images <i className="ri-link"></i></button>
          </div>
      </div>
    </div>
  )
}

export default Cardcontent