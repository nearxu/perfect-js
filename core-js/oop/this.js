var person = {
    name: '张三',
    describe: function () {
        return '姓名：' + this.name;
    }
};

person.describe()
//   this.name是在describe方法中调用，
//   而describe方法所在的当前对象是person，
//   因此this指向person，this.name就是person.name。
