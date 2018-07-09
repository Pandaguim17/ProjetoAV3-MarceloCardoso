function trocaTela() {
	var selectBaus = document.getElementById('listaBau');

	for (i = 0; i < selectBaus.length; i++) {
		if (selectBaus.selectedIndex == 0) {
			document.getElementById('ligaImg').src = "https://raw.githubusercontent.com/martincarrera/clash-royale-api/master/public/images/leagues/challenger-i.png";
    	    document.getElementById('ligaLabel').innerHTML = "Desafiante I";
		} else if (selectBaus.selectedIndex == 1) {
			document.getElementById('ligaImg').src = "https://raw.githubusercontent.com/martincarrera/clash-royale-api/master/public/images/leagues/challenger-ii.png";
			document.getElementById('ligaLabel').innerHTML = "Desafiante II";
		} else if (selectBaus.selectedIndex == 2) {
			document.getElementById('ligaImg').src = "https://raw.githubusercontent.com/martincarrera/clash-royale-api/master/public/images/leagues/challenger-iii.png";
			document.getElementById('ligaLabel').innerHTML = "Desafiante III";
		} else if (selectBaus.selectedIndex == 3) {
			document.getElementById('ligaImg').src = "https://raw.githubusercontent.com/martincarrera/clash-royale-api/master/public/images/leagues/master-i.png";
			document.getElementById('ligaLabel').innerHTML = "Mestre I";
		} else if (selectBaus.selectedIndex == 4) {
			document.getElementById('ligaImg').src = "https://raw.githubusercontent.com/martincarrera/clash-royale-api/master/public/images/leagues/master-ii.png";
			document.getElementById('ligaLabel').innerHTML = "Mestre II";
		} else if (selectBaus.selectedIndex == 5) {
			document.getElementById('ligaImg').src = "https://raw.githubusercontent.com/martincarrera/clash-royale-api/master/public/images/leagues/master-iii.png";
			document.getElementById('ligaLabel').innerHTML = "Mestre III";
		} else if (selectBaus.selectedIndex == 6) {
			document.getElementById('ligaImg').src = "https://raw.githubusercontent.com/martincarrera/clash-royale-api/master/public/images/leagues/champion.png";
			document.getElementById('ligaLabel').innerHTML = "Campeão";
		} else if (selectBaus.selectedIndex == 7) {
			document.getElementById('ligaImg').src = "https://raw.githubusercontent.com/martincarrera/clash-royale-api/master/public/images/leagues/grand-champion.png";
			document.getElementById('ligaLabel').innerHTML = "Grande Campeão";
		} else if (selectBaus.selectedIndex == 8) {
			document.getElementById('ligaImg').src = "https://raw.githubusercontent.com/martincarrera/clash-royale-api/master/public/images/leagues/ultimate-champion.png";
			document.getElementById('ligaLabel').innerHTML = "Maior Campeão";
		}
    }

}
