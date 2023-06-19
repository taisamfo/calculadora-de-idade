function calcularIdade() {
    const birthYear = document.getElementById('birthYear').value;
    const birthMonth = document.getElementById('birthMonth').value;
    const birthDay = document.getElementById('birthDay').value;
    
    const today = new Date();
    const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
    
    const ageYear = today.getFullYear() - birthDate.getFullYear();
    const ageMonth = today.getMonth() - birthDate.getMonth();
    const ageDay = today.getDate() - birthDate.getDate();
    
    let age = ageYear;
    
    if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
      age--;
    }
    
    document.getElementById('resultado').textContent = `Sua idade é ${age} anos.`;
  }
  