// define the list

var colorList = ['#e86584',
    '#3c5979',
    '#018cb7',
    '#fae093'
];


function setup() {

    createCanvas(600, 800);
    frameRate(3);
    
}

function draw() {

    for (var a = 0; a < 600; a += 60) {
        for (var b = 10; b < 800; b += 30) {
            var index = floor(random() * colorList.length);
            var colorHex = colorList[index];
            fill(color(colorHex));
            noStroke();
            beginShape();
            vertex(a + 60, b - 10);
            vertex(a + 60, b + 20);
            vertex(a, b + 30);
             vertex(a, b);
            endShape(CLOSE);

        }
    }
}