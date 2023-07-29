import React, { useState, useEffect } from 'react';

const eBlob = (videoUrl) => {
  const [videoObjectURL, setVideoObjectURL] = useState('');

  useEffect(() => {
    let isMounted = true;

    const loadVideo = async () => {
      try {
        // Verificar si ya se cargó la URL de objeto para evitar volver a cargarla.
        if (videoObjectURL) {
          return;
        }

        // Obtener el video como Blob desde la URL proporcionada.
        const response = await fetch(videoUrl);
        const videoBlob = await response.blob();

        // Convertir el Blob en una URL de objeto para el video.
        const objectURL = URL.createObjectURL(videoBlob);

        if (isMounted) {
          setVideoObjectURL(objectURL);
        }
      } catch (error) {
        console.error('Error loading video:', error);
      }
    };

    loadVideo();

    // Limpieza: Revocar la URL de objeto cuando el componente se desmonta.
    return () => {
      isMounted = false;
      if (videoObjectURL) {
        URL.revokeObjectURL(videoObjectURL);
        setVideoObjectURL(null)
      }
    };
  }, [videoObjectURL, videoUrl]); // Dependencias actualizadas.

  return videoObjectURL;
};

export default eBlob;
