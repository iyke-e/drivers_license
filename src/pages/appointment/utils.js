export const getTomorrowsDate = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
  
    const day = String(tomorrow.getDate()).padStart(2, '0');
    const month = String(tomorrow.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = tomorrow.getFullYear();
  
    return `${day}/${month}/${year}`;
  };
  