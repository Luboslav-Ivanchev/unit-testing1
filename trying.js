(function (object) {
    function calculator(a,operator,b) {

        let result=0;
        switch (operator){
            case '+':
                result+=a+b;
                break;
            case '-':
                result+=a-b;
                break;

            case '*':
                result+=a*b;
                break;

            case '/':
                result+=a/b;
                break;


        }
        return  result;
    }

    object.calculator=calculator

    return object;

})(window);