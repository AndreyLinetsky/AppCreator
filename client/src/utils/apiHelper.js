export const blobToDataURL = (blob) => (
    new Promise((resolve) => {
      const reader = new FileReader();      
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    })
  );