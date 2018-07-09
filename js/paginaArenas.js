function trocaTela() {
	var selectBaus = document.getElementById('listaBau');

	for (i = 0; i < selectBaus.length; i++) {
		if (selectBaus.selectedIndex == 0) {
			document.getElementById('arenaImg').src = "https://raw.githubusercontent.com/martincarrera/clash-royale-api/master/public/images/arenas/training-camp.png";
    	    document.getElementById('arenaLabel').innerHTML = "Campo de Treinamento";
    	    document.getElementById('arena').innerHTML = "Tutorial";
		} else if (selectBaus.selectedIndex == 1) {
			document.getElementById('arenaImg').src = "https://raw.githubusercontent.com/martincarrera/clash-royale-api/master/public/images/arenas/goblin-stadium.png";
			document.getElementById('arenaLabel').innerHTML = "Estádio Goblin";
			document.getElementById('arena').innerHTML = "0";
		} else if (selectBaus.selectedIndex == 2) {
			document.getElementById('arenaImg').src = "https://raw.githubusercontent.com/martincarrera/clash-royale-api/master/public/images/arenas/bone-pit.png";
			document.getElementById('arenaLabel').innerHTML = "Fosso dos Ossos";
			document.getElementById('arena').innerHTML = "400/350";
		} else if (selectBaus.selectedIndex == 3) {
			document.getElementById('arenaImg').src = "https://raw.githubusercontent.com/martincarrera/clash-royale-api/master/public/images/arenas/barbarian-bowl.png";
			document.getElementById('arenaLabel').innerHTML = "Torneio Bárbaro";
			document.getElementById('arena').innerHTML = "800/750";
		} else if (selectBaus.selectedIndex == 4) {
			document.getElementById('arenaImg').src = "https://raw.githubusercontent.com/martincarrera/clash-royale-api/master/public/images/arenas/pekka's-playhouse.png";
			document.getElementById('arenaLabel').innerHTML = "Parquinho da P.E.K.K.A";
			document.getElementById('arena').innerHTML = "1100/1050";
		} else if (selectBaus.selectedIndex == 5) {
			document.getElementById('arenaImg').src = "https://raw.githubusercontent.com/martincarrera/clash-royale-api/master/public/images/arenas/spell-valley.png";
			document.getElementById('arenaLabel').innerHTML = "Vale dos Feitiços";
			document.getElementById('arena').innerHTML = "1400/1350";
		} else if (selectBaus.selectedIndex == 6) {
			document.getElementById('arenaImg').src = "https://raw.githubusercontent.com/martincarrera/clash-royale-api/master/public/images/arenas/builder's-workshop.png";
			document.getElementById('arenaLabel').innerHTML = "Oficina do Construtor";
			document.getElementById('arena').innerHTML = "1700/1650";
		} else if (selectBaus.selectedIndex == 7) {
			document.getElementById('arenaImg').src = "https://raw.githubusercontent.com/martincarrera/clash-royale-api/master/public/images/arenas/royal-arena.png";
			document.getElementById('arenaLabel').innerHTML = "Arena Real";
			document.getElementById('arena').innerHTML = "2000/1950";
		} else if (selectBaus.selectedIndex == 8) {
			document.getElementById('arenaImg').src = "https://raw.githubusercontent.com/martincarrera/clash-royale-api/master/public/images/arenas/frozen-peak.png";
			document.getElementById('arenaLabel').innerHTML = "Pico Congelado";
			document.getElementById('arena').innerHTML = "2300/2250";
		} else if (selectBaus.selectedIndex == 9) {
			document.getElementById('arenaImg').src = "https://raw.githubusercontent.com/martincarrera/clash-royale-api/master/public/images/arenas/jungle-arena.png";
			document.getElementById('arenaLabel').innerHTML = "Arena da Selva";
			document.getElementById('arena').innerHTML = "2600/2550";
		} else if (selectBaus.selectedIndex == 10) {
			document.getElementById('arenaImg').src = "https://raw.githubusercontent.com/martincarrera/clash-royale-api/master/public/images/arenas/hog-mountain.png";
			document.getElementById('arenaLabel').innerHTML = "Montanha do Porco";
			document.getElementById('arena').innerHTML = "3000/2950";
		} else if (selectBaus.selectedIndex == 11) {
			document.getElementById('arenaImg').src = "https://raw.githubusercontent.com/martincarrera/clash-royale-api/master/public/images/arenas/electro-valley.png";
			document.getElementById('arenaLabel').innerHTML = "Eletrovale";
			document.getElementById('arena').innerHTML = "3400/3350";
		} else if (selectBaus.selectedIndex == 12) {
			document.getElementById('arenaImg').src = "https://raw.githubusercontent.com/martincarrera/clash-royale-api/master/public/images/arenas/legendary-arena.png";
			document.getElementById('arenaLabel').innerHTML = "Arena Lendária";
			document.getElementById('arena').innerHTML = "3800/3750";
		}
    }

}