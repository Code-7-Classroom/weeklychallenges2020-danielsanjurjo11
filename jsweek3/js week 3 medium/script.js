var sharePizza = cutPizzaSlices(8);

    function cutPizzaSlices(slices){
        return function sharePizza(people){
return ('Each person gets '+ (slices / people) + ' slices of pizza')
        }
    }

    console.log(sharePizza(2));
    console.log(sharePizza(4));

