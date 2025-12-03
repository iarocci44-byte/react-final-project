import React, { useEffect, useRef, useState } from 'react'
import camera from '../assets/camera-155383_640.png';

function Leftcamera() {
  const cameraRef = useRef(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cameraRef.current) {
        const rect = cameraRef.current.getBoundingClientRect();
        const cameraCenterX = rect.left + rect.width / 2;
        const cameraCenterY = rect.top + rect.height / 2;
        
        const deltaX = e.clientX - cameraCenterX;
        const deltaY = e.clientY - cameraCenterY;
        
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        setRotation(angle);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="leftcamera">
      <img 
        ref={cameraRef}
        src={camera} 
        alt="Camera"
        style={{ transform: `rotate(${rotation}deg)` }}
      />
    </div>
  )
}

export default Leftcamera