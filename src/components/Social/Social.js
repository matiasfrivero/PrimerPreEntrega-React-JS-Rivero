function Social(redes) {

  console.log(redes)

  return (
    <nav className="flex px-80 py-1 place-content-around">
        <a href="#">{redes.ig}</a>
        <a href="#">{redes.x}</a>
        <a href="#">{redes.fb}</a>
    </nav>
  )
}

export default Social;