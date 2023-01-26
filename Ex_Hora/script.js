const load = () => {
	const msg = document.getElementById('msg');
	const img = document.querySelector('#imagem');
	const data = new Date();

	// função para formatar os valores quando entre 0 e 9, adiciona um 0 na frente para não quebrar o design
	const formatDateValues = (value) => {
		return value > 10
			? value
			: `0${value}`;
	}

	const hora = data.getHours();
	const horaFormatado = formatDateValues(hora)

	const minutos = data.getMinutes();
	const minutosFormatado = formatDateValues(minutos)

	const segundos = data.getSeconds();
	const segundosFormatado = formatDateValues(segundos)
	
	// agrupa hora:minutos:segundos
	msg.innerHTML = `Agora são ${horaFormatado}:${minutosFormatado}:${segundosFormatado}`;

	const isMorning = hora >= 0 && hora < 12; // checa se é dia
	const isAfternoon = hora >= 12 && hora <= 18; // checa se é tarde
	const isEvening = !isMorning && !isAfternoon; // checa se é noite

	let newSource = img.src;
	
	if (isMorning) {
		newSource = 'Fotos/Manha.jpg';		
		document.body.style.background = 'white'
	} else if (isAfternoon) {
		newSource = 'Fotos/Tarde.jpg'
		document.body.style.background = 'grey' 
	} else if (isEvening) {
		newSource = 'Fotos/Noite.jpg'
		document.body.style.background = 'black'
	}

	// checa se a imagem atual é igual, se for igual, para a execução da função (nao troca a imagem novamente, pois ela ja esta la)
	if (img.src.includes(newSource) || img.src === newSource) return

	img.src = newSource // troca a imagem atual pela nova
	img.setAttribute('inserted_at', new Date().getTime()) // adiciona o atributo inseted_at na imagem, pra sabermos quando a imagem foi adicionada
}

setInterval(() => load(), 1000) // executa a função load a cada 1 segundo ( 1000 milesegundos )



    // () => hora()
    // if(hora >=0 && hora <18) {
    //     img.src='Fotos/Noite.jpg'
    //     document.body.style.background = '#FFFFFF'
    // }

 