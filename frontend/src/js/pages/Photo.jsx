import React, { useState, useEffect, useRef } from "react";
import * as faceapi from 'face-api.js';
import axios from 'axios';

function Photo() {
  const videoRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [capturedImages, setCapturedImages] = useState([]);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [buttonLabel, setButtonLabel] = useState('페이스 아이디 발급');
  const [isUploading, setIsUploading] = useState(false);
  const uuid = sessionStorage.getItem('uuid')

  const toggleCamera = () => {
    if (isCameraOn) {
      stopVideo();
      setIsCameraOn(false);
    } else {
      loadModelsAndStartVideo();
      setIsCameraOn(true);
    }
  };

  const handleReset = () => {
    setCapturedImages([]);
  };

  const uploadImagesToServer = async () => {
    setIsUploading(true);
    setButtonLabel('발급 완료');
  };

  const loadModelsAndStartVideo = async () => {
    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri('./public/models'),
      faceapi.nets.faceLandmark68Net.loadFromUri('./public/models'),
      faceapi.nets.faceRecognitionNet.loadFromUri('./public/models'),
      faceapi.nets.faceExpressionNet.loadFromUri('./public/models'),
      faceapi.nets.ssdMobilenetv1.loadFromUri('./public/models')
    ]);
    startVideo();
  };

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(stream => {
        videoRef.current.srcObject = stream;
      })
      .catch(err => {
        console.error("Failed to start video:", err);
      });
  };

  const stopVideo = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;

      const canvases = videoRef.current.parentElement.querySelectorAll('canvas');
      canvases.forEach(canvas => canvas.remove());
    }
  };

  useEffect(() => {
    if (videoRef.current && isCameraOn) {
      videoRef.current.addEventListener('loadedmetadata', () => {
        const videoWidth = 600;
        const videoHeight = videoRef.current.videoHeight * (videoWidth / videoRef.current.videoWidth);
        videoRef.current.width = videoWidth;
        videoRef.current.height = videoHeight;

        const displaySize = { width: videoWidth, height: videoHeight };

        const canvas = faceapi.createCanvasFromMedia(videoRef.current);
        canvas.width = videoWidth;
        canvas.style.position = 'absolute';
        canvas.style.zIndex = '2';
        videoRef.current.parentElement.append(canvas);

        faceapi.matchDimensions(canvas, displaySize);

        const intervalId = setInterval(async () => {
          const detections = await faceapi.detectAllFaces(videoRef.current).withFaceLandmarks().withFaceDescriptors();
          const resizedDetections = faceapi.resizeResults(detections, displaySize);
          canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

          if (resizedDetections && resizedDetections.length > 0) {
            const detection = resizedDetections[0];
            const box = detection.detection.box;
            const padding = 60;

            const paddedBox = {
              x: box.x - padding,
              y: box.y - padding,
              width: box.width + (padding * 2),
              height: box.height + (padding * 2)
            };

            const drawBox = new faceapi.draw.DrawBox(paddedBox, { label: 'Face' });
            drawBox.draw(canvas);

            const captureCanvas = document.createElement('canvas');
            captureCanvas.width = paddedBox.width;
            captureCanvas.height = paddedBox.height;
            captureCanvas.getContext('2d').drawImage(videoRef.current, paddedBox.x, paddedBox.y, paddedBox.width, paddedBox.height, 0, 0, paddedBox.width, paddedBox.height);
            const capturedImage = captureCanvas.toDataURL('image/png');

            setCapturedImages(prevImages => {
              const updatedImages = [...prevImages, capturedImage];
              if (updatedImages.length >= 50) {
                clearInterval(intervalId);
                stopVideo();
                setIsCameraOn(false);
              }
              return updatedImages;
            });
          }
        }, 100);
      });
    }

    return () => {
      stopVideo();
    };
  }, [isCameraOn]);


  const containerStyle = {
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',

    // overflow: 'hidden'
    display: 'flex',
    width : '600px',
    flexFlow : "column",
    position : 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  };

  const videoAndCanvasStyle = {
    // position: 'relative',
    zIndex: 1,
    backgroundColor: 'black'  // 이 부분 추가
  };

  const buttonStyle = {
    backgroundColor: '#2C64AF',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    // position: 'absolute',   
    // top: '70px',                // Position at the very top of its containing element
    // left: '37%',             // Position halfway across the container
    // transform: 'translateX(-50%)',  // This will center the button based on its width
    zIndex: 3
  };

  const resetButtonStyle = {
    position: 'absolute',
    top: '40px',
    right: '10px',
    zIndex: 3
  };

  const uploadButtonStyle = {
    backgroundColor: '#2C64AF',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    position: 'absolute',    // You can also use 'fixed' if you want the button to stay at the top center even when scrolling
    top: '70px',                // Position at the very top of its containing element
    left: '46%',             // Position halfway across the container
    transform: 'translateX(-50%)',  // This will center the button based on its width
    zIndex: 3

  }

  return (
    <div style={containerStyle}>
      <video ref={videoRef} autoPlay playsInline style={videoAndCanvasStyle}></video>
      <button onClick={toggleCamera} style={buttonStyle}>
        {isCameraOn ? '카메라 끄기' : '카메라 켜기'}
      </button>
      
      
    </div>
  );
}

export default Photo;
