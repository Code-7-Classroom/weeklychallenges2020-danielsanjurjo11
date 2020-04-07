function People(name,ssn) {
    People.prototype.getName = function (){
    return name;
};
People.prototype.getSSN = function(){
    return ssn;
};

}

p = new People('Josh' ,'3219178989' );
alert(p.getName());
alert(p.ssn);