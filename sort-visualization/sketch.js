let bars = [];
let amount = 108;
let length = 1200;
let speed = 8;
let thickness = 5;
let margin = thickness + 1;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255, 204, 0, 50);
	for (let x=0, y=10; x<amount;x++){
		let r = random(length)
		rect(10, y, r, thickness);
		bars.push(r)
		y += margin;
	}
	print(bars);
}


function draw() {
	clear()
	bars.forEach((b,i)=>{
		if (i !== amount){
			let temp = bars[i+1];
			if (b > temp){
				bars[i+1] = b;
				bars[i] = temp;
			}
		}
	});
	
	for (let x=0, y=10; x<amount;x++){
		rect(10, y, bars[x], thickness);
		y += margin;
	}
	
	print(bars);
	frameRate(speed);
}