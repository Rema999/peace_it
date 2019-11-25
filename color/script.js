
let sub = document.querySelectorAll('.sub');

sub.forEach( function(elem){
	elem.onclick = color;
})
function color (){
	let r1 = document.querySelector('.r1').value;
	let g1 = document.querySelector('.g1').value;
	let b1 = document.querySelector('.b1').value;
	let r2 = document.querySelector('.r2').value;
	let g2 = document.querySelector('.g2').value;
	let b2 = document.querySelector('.b2').value;

	let resultR = Math.round((+r1 + +r2) / 2);
	let resultG = Math.round((+b1 + +b2) / 2);
	let resultB = Math.round((+g1 + +g2) / 2);
	document.querySelector('.color').style.backgroundColor = 'rgb(' + resultR + ', ' + resultG + ' , ' + resultB + ')';
}



function RGB2HTML(red, green, blue)
{
    return '#' + red.toString(16) +
           green.toString(16) +
           blue.toString(16);
}

alert(RGB2HTML(150, 135, 200));

