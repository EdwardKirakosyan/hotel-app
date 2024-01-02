import "./style.css"

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <div>
      <div class="nav-bar">
        <div class="logo"></div>
        <h3 class="user-container">Welcome
          <span id="returning-user"></span>
          <span id="user"></span>
        </h3>
      </div>
      <div class="container">
        <div class="main-image"></div>
        <h5 id="reviews"></h5>
        <button>Get reviews</button>
        <div class="reviews"></div>        
        <div class="break"></div>       
        <h3>Other Properties recommended to you:</h3> 
        <div class="properties"></div>
      </div>
      <div class="footer"></div>
    </div>
`
