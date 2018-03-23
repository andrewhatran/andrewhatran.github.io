function test() {
    alert("Hello");
}

function selectPokemon() {
    document.getElementById("arena").classList.remove("on");
    const pokemon1 = document.getElementById("first").value;
    const pokemon2 = document.getElementById("second").value;
    loadPokemon(pokemon1, "front");
    loadPokemon(pokemon2, "back");
}

function loadPokemon(idx, type) {
    var xhr = new XMLHttpRequest();
    xhr.abort();
    xhr.open('GET', ("https://pokeapi.co/api/v2/pokemon/" + idx + "/"), true);
    xhr.send();
    xhr.onreadystatechange = processRequest;

    function processRequest() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            console.log(response);
            if(type=="front") {
                document.getElementById("front").src = response.sprites.front_default;
            } else {
                document.getElementById("back").src = response.sprites.back_default;
            }
            document.getElementById("arena").classList.add("on");
        }
    }
}
