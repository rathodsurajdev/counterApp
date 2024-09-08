
    const inputValue = document.querySelector('#value');

    const negative=()=>{
        let value = parseInt(inputValue.innerText);
        value = value - 1 ;

          inputValue.innerText = value;

    }


    const positive=()=>{
        let value = parseInt(inputValue.innerText);
        value = value +1 ;

          inputValue.innerText = value;

    }