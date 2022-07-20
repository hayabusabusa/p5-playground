import p5 from "p5";

const sketch = (p: p5) => {
    p.setup = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        p.createCanvas(width, height);
        p.circle(width / 2, height / 2, 50);
    };

    p.draw = () => {
        // p.clear(0, 0, 0, 0);
        p.circle(p.mouseX, p.mouseY, p.random(100));
    };
};

new p5(sketch);