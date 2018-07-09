function trocaTela() {
	var selectBaus = document.getElementById('listaBau');

	for (i = 0; i < selectBaus.length; i++) {
		if (selectBaus.selectedIndex == 0) {
			document.getElementById('chestImg').src = "https://raw.githubusercontent.com/martincarrera/clash-royale-api/master/"+
    	    "public/images/chests/wooden-chest.png";
    	    document.getElementById('chestLabel').innerHTML = "Baú de Madeira/Grátis";
    	    document.getElementById('chestP1').innerHTML = "O baú grátis é o baú mais comum do Clash Royale,"+
    	    " todos têm acesso a ele diariamente, sua chance de sair lendária é muito baixa.";
    	    document.getElementById('chestP2').innerHTML = "4 em 4 horas/Imediata.";
		} else if (selectBaus.selectedIndex == 1) {
			document.getElementById('chestImg').src = "https://raw.githubusercontent.com/martincarrera/clash-royale-api/master/"+
			"public/images/chests/silver-chest.png";
			document.getElementById('chestLabel').innerHTML = "Baú de Prata";
			document.getElementById('chestP1').innerHTML = "Este baú é o mais comum, você receber depois de uma vitória em uma batalha, mas ele não é muito bom,"+
			" sua chance de sair lendária é muito baixa também.";
			document.getElementById('chestP2').innerHTML = "3 horas";
		} else if (selectBaus.selectedIndex == 2) {
			document.getElementById('chestImg').src = "https://raw.githubusercontent.com/martincarrera/clash-royale-api/master/"+
			"public/images/chests/golden-chest.png";
			document.getElementById('chestLabel').innerHTML = "Baú de Ouro";
			document.getElementById('chestP1').innerHTML = "Este baú é melhor que o baú de prata, assim como ele, também é muito comum depois de ganhar batalhas,"+
			" sua chance de conseguir lendária é baixa.";
			document.getElementById('chestP2').innerHTML = "8 horas";
		} else if (selectBaus.selectedIndex == 3) {
			document.getElementById('chestImg').src = "https://raw.githubusercontent.com/martincarrera/clash-royale-api/master/"+
			"public/images/chests/crown-chest.png";
			document.getElementById('chestLabel').innerHTML = "Baú da Coroa";
			document.getElementById('chestP1').innerHTML = "Este baú só pode ser aberto se você completar 10 coroas é um baú muito bom,"+
			" a chance de vir lendária é moderada, só pode abrir 1 baú destes por dia.";
			document.getElementById('chestP2').innerHTML = "Imediata";
		} else if (selectBaus.selectedIndex == 4) {
			document.getElementById('chestImg').src = "https://raw.githubusercontent.com/martincarrera/clash-royale-api/master/"+
			"public/images/chests/giant-chest.png";
			document.getElementById('chestLabel').innerHTML = "Baú de Gigante";
			document.getElementById('chestP1').innerHTML = "O baú gigante trás muitas cartas, é ideal para quem tá querendo carta comum e/ou rara é um baú raro no Clash Royale."+
			" Este baú pode ser comprado na loja com gemas.";
			document.getElementById('chestP2').innerHTML = "12 horas";
		} else if (selectBaus.selectedIndex == 5) {
			document.getElementById('chestImg').src = "https://raw.githubusercontent.com/martincarrera/clash-royale-api/master/"+
			"public/images/chests/magical-chest.png";
			document.getElementById('chestLabel').innerHTML = "Baú de Mágico";
			document.getElementById('chestP1').innerHTML = "Este baú, assim como o baú gigante, também é um dos baús raros do Clash Royale,"+
			" pode ser comprado na loja com gemas. Na minha opinião entre baú gigante, mágico e super mágico, o mágico é o pior,"+
			" apesar da chance de sair lendária seja maior que a do baú gigante.";
			document.getElementById('chestP2').innerHTML = "12 horas";
		} else if (selectBaus.selectedIndex == 6) {
			document.getElementById('chestImg').src = "https://raw.githubusercontent.com/martincarrera/clash-royale-api/master/"+
			"public/images/chests/super-magical-chest.png";
			document.getElementById('chestLabel').innerHTML = "Baú de Super Mágico";
			document.getElementById('chestP1').innerHTML = "Este baú é muito raro, ele é ideal para quem quer um pouco de tudo,"+
			" desde ouro a todas as raridades de cartas, a sua chance de vir lendária é elevada, pode ser comprado na loja através de gemas.";
			document.getElementById('chestP2').innerHTML = "1 dia";
		} else if (selectBaus.selectedIndex == 7) {
			document.getElementById('chestImg').src = "https://raw.githubusercontent.com/martincarrera/clash-royale-api/master/"+
			"public/images/chests/epic-chest.png";
			document.getElementById('chestLabel').innerHTML = "Baú Épico";
			document.getElementById('chestP1').innerHTML = "O baú épico é o baú que só sai cartas épicas,"+
			" logo é ideal para quem quer cartas épicas, pode ser comprado na loja com ouro, aparecendo apenas raramente.";
			document.getElementById('chestP2').innerHTML = "12 horas";
		} else if (selectBaus.selectedIndex == 8) {
			document.getElementById('chestImg').src = "https://raw.githubusercontent.com/martincarrera/clash-royale-api/master/"+
			"public/images/chests/legendary-chest.png";
			document.getElementById('chestLabel').innerHTML = "Baú de Lendário";
			document.getElementById('chestP1').innerHTML = "Este é o baú mais esperado por todos, nele só vem uma carta e essa carta é uma LENDÁRIA,"+
			" pode vir qualquer carta lendária, independentemente da sua arena, pode ser comprado na loja por 500 gemas, aparecendo raramente na loja.";
			document.getElementById('chestP2').innerHTML = "1 dia";
		}
	}

}
