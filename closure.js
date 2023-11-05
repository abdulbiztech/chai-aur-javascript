function outerFunction() {
    const outerVariable = "I'm from the outer function";
  
    function innerFunction() {
      console.log(outerVariable); // Inner function has access to outerVariable
    }
  
    return innerFunction;
  }
  const closure = outerFunction(); // Assigning innerFunction to closure
  closure();