// 命令式
var makes = [];
for (i = 0; i < cars.length; i++) {
    makes.push(cars[i].make);
}


// 声明式
var makes = cars.map(function (car) { return car.make; });

// 命令式
var authenticate = function (form) {
    var user = toUser(form);
    return logIn(user);
};

// 声明式
var authenticate = compose(logIn, toUser);