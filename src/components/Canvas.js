
import React, { useState, useRef, useEffect } from 'react'

const Canvas = props => {
  
    const canvasRef = useRef(null)
    const [mouse, setMouse] = useState({x: null, y: null, radius: 200 })

    useEffect(() => {

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 650;
    let frameCount = 0
    let animationFrameId
    let particleArray = [];
    let adjustX = 10;
    let adjustY = 10;

    context.fillStyle = 'white';
    context.font = '20px Verdana';
    context.fillText('Vitor Scolari', 10, 20);
    context.fillText('Full-Stack dev', 10, 20);
    const textCoordinates = context.getImageData(0, 0, 100, 100);

    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = 3;
            this.baseX = this.x;
            this.baseY = this.y;
            this.density = (Math.random() * 40) + 5;
        }

        draw() {
            context.fillStyle = 'white';
            context.beginPath();
            context.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            context.closePath();
            context.fill();
        }
        update() {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            let maxDistance = mouse.radius;
            let force = (maxDistance - distance) / maxDistance;
            let directionX =  forceDirectionX * force * this.density;
            let directionY =  forceDirectionY * force * this.density;
            
            if (distance < mouse.radius) {
                this.x -= directionX;
                this.y -= directionY;
            } else {
                if (this.x !== this.baseX) {
                    let dx = this.x - this.baseX;
                    this.x -= dx/10;
                }
                if (this.y !== this.baseY) {
                    let dy = this.y - this.baseY;
                    this.y -= dy/10;
                }
            }
        }
    }

    function connect() {
        let opacityValue = 1;
        for (let a = 0; a< particleArray.length; a++) {
            for (let b = a; b < particleArray.length; b++) {
                let dx = particleArray[a].x - particleArray[b].x;
                let dy = particleArray[a].y - particleArray[b].y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                opacityValue = 1 - (distance / 150);
                context.strokeStyle = 'rgba(255, 255, 255' + opacityValue + ')';
                if (distance < 150) {
                    context.lineWidth = 2;
                    context.beginPath();
                    context.moveTo(particleArray[a].x, particleArray[a].y);
                    context.lineTo(particleArray[b].x, particleArray[b].y);
                    context.stroke();
                }
            }
        }
    }


    function init() {
        particleArray = [];
        for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
            for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
                if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
                    let positionX = x + adjustX;
                    let positionY = y + adjustY;
                    particleArray.push(new Particle(positionX * 10, positionY * 10));
                }
            }
        }
    }
    init();

    const render = () => {
        frameCount++
        context.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particleArray.length; i++) {
            particleArray[i].draw();
        }
        connect()
        animationFrameId = window.requestAnimationFrame(render)
    }
    render()
        
    return () => {
        window.cancelAnimationFrame(animationFrameId)
    }
    }, [mouse.radius, mouse.x, mouse.y])
  
    return (
        <canvas 
        ref={canvasRef}
        onMouseMove={(event) => {
            setMouse({
                x: event.x,
                y: event.y,
                radius: 200
            })
        }}
        />
    )
}

export default Canvas