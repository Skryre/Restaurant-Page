function loadHome () {
    const container = document.querySelector("#container")
    container.innerHTML = ``;
    container.innerHTML = `
        <div id="divhome">
            <div id="grey">
                <h2>
                    Come on down for some delicious cuisine!
                </h2>
                <h3>
                    Tasty and affordable
                </h3>
                <button>
                    Order now
                </button>
                <div class="homesubdiv">
                    <p>
                        1024 Oakwood Ave San Diego, CA 22434<br>
                        Mon-Thurs:8am-8pm<br>
                        Fri-Sun:8am-11pm<br>
                    </p>
                </div>
            </div>        
        </div>
    `;  
    console.log("home")
}

export default loadHome;