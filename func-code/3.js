var xs = [1, 2, 3, 4, 5];

// 纯的
xs.slice(0, 3);
//=> [1,2,3]

xs.slice(0, 3);
//=> [1,2,3]

// 不纯的
xs.splice(0, 3);
//=> [1,2,3]

xs.splice(0, 3);
//=> [4,5]

// 不纯的
var minimum = 21;

var checkAge = function (age) {
    return age >= minimum;
};


// 纯的
var checkAge = function (age) {
    var minimum = 21;
    return age >= minimum;
};

// 不纯的
var signUp = function (attrs) {
    var user = saveUser(attrs);
    welcomeUser(user);
};

var saveUser = function (attrs) {
    var user = Db.save(attrs);
    ...
};

var welcomeUser = function (user) {
    Email(user, ...);
    ...
};

// 纯的
var signUp = function (Db, Email, attrs) {
    return function () {
        var user = saveUser(Db, attrs);
        welcomeUser(Email, user);
    };
};

var saveUser = function (Db, attrs) {
    ...
};

var welcomeUser = function (Email, user) {
    ...
};