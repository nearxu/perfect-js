
C++ 接口是使用抽象类来实现的，抽象类与数据抽象互不混淆，数据抽象是一个把实现细节与相关的数据分离开的概念。

如果类中至少有一个函数被声明为纯虚函数，则这个类就是抽象类

##### 基类
class Shape 
{
    #####成员和类的默认访问修饰符是 private
    #####公有成员在程序中类的外部是可访问的。您可以不使用任何成员函数来设置和获取公有变量的值
public:
   ##### 提供接口框架的纯虚函数，实现动态联编，调用虚函数时必须使用派生类指针
   virtual int getArea() = 0;
   Line();   ##### 这是构造函数声明
    ~Line();  ##### 这是析构函数声明
    Line( const Line &obj);      ##### 拷贝构造函数
   void setWidth(int w)
   {
      width = w;
   }
   void setHeight(int h)
   {
      height = h;
   }
   ##### 成员函数可以定义在类定义内部
   double getVolume(void)
      {
         return length * breadth * height;
      }
   ##### 类的友元函数是定义在类外部，但有权访问类的所有私有（private）成员和保护（protected）成员。尽管友元函数的原型有在类的定义中出现过，但是友元函数并不是成员函数
    friend void printWidth( Box box );

   ######在同一个作用域内，可以声明几个功能类似的同名函数，但是这些同名函数的形式参数（指参数的个数、类型或者顺序）必须不同。您不能仅通过返回类型的不同来重载函数。
   void print(int i) {
      cout << "整数为: " << i << endl;
   }

   void print(double  f) {
      cout << "浮点数为: " << f << endl;
   }

   void print(char c[]) {
      cout << "字符串为: " << c << endl;
   }

   ##### 保护成员变量或函数与私有成员十分相似，但有一点不同，保护成员在派生类（即子类）中是可访问的
   protected:
      int width;
      int height;
   ##### 私有成员变量或函数在类的外部是不可访问的，甚至是不可查看的。只有类和友元函数可以访问私有成员
   private:
      int a;
      int b;
   
};

##### 内联函数inline：引入内联函数的目的是为了解决程序中函数调用的效率问题
inline int Max(int x, int y)
{
   return (x > y)? x : y;
}

##### 程序的主函数
int main( )
{

   cout << "Max (20,10): " << Max(20,10) << endl;
   cout << "Max (0,200): " << Max(0,200) << endl;
   cout << "Max (100,1010): " << Max(100,1010) << endl;
   return 0;
}

##### 友元函数 请注意：printWidth() 不是任何类的成员函数
void printWidth( Box box )
{
   /* 因为 printWidth() 是 Box 的友元，它可以直接访问该类的任何成员 */
   cout << "Width of box : " << box.width <<endl;
}

##### 成员函数
 ##### 在类的外部使用范围解析运算符 :: 定义该函数
double Box::getVolume(void)
{
    return length * breadth * height;
}

##### 每次创建类的新对象时执行
##### 构造函数的名称与类的名称是完全相同的，并且不会返回任何类型，也不会返回 void。构造函数可用于为某些成员变量设置初始值
##### 构造函数也可以带有参数。这样在创建对象时就会给对象赋初始值
##### 
#####析构函数的名称与类的名称是完全相同的，只是在前面加了个波浪号（~）作为前缀，它不会返回任何值，也不能带有任何参数。析构函数有助于在跳出程序（比如关闭文件、释放内存等）前释放资源。
Shape ::Shape(void)
Line::Line( double len)
{
    cout << 'this'
}
#####如果在类中没有定义拷贝构造函数，编译器会自行定义一个。如果类带有指针变量，并有动态内存分配，则它必须有一个拷贝构造函数。拷
classname (const classname &obj) {
   ##### 构造函数的主体
}

Line::Line(const Line &obj)
{
    cout << "调用拷贝构造函数并为指针 ptr 分配内存" << endl;
    ptr = new int;
    *ptr = *obj.ptr; ##### 拷贝值
}

Line::~Line(void)
{
    cout << "释放内存" << endl;
    delete ptr;
}



##### 派生类
派生类可以访问基类中所有的非私有成员。因此基类成员如果不想被派生类的成员函数访问，则应在基类中声明为 private

class Rectangle: public Shape
{
public:
   int  var = 20;   ##### 实际变量的声明
   int   *ip;    /* 一个整型的指针 */
   ip = & var; ##### 在指针变量中存储 var 的地址
   
   ##### 访问指针中地址的值
   cout << *ip << endl;
   ##### 引用很容易与指针混淆，它们之间有三个主要的不同：
      不存在空引用。引用必须连接到一块合法的内存
      一旦引用被初始化为一个对象，就不能被指向到另一个对象。指针可以在任何时候指向到另一个对象
      引用必须在创建时被初始化。指针可以在任何时间被初始化。

      // 声明简单的变量
         int    i;
         double d;
      
      // 声明引用变量
         int&    r = i;
         double& s = d;

   int getArea()
   { 
      return (width * height); 
   }
};

###### 多继承即一个子类可以有多个父类，它继承了多个父类的特性
class Triangle: public Shape
{
public:
   ###### 这意味着无论创建多少个类的对象，静态成员都只有一个副本,静态成员在类的所有对象中是共享的。如果不存在其他的初始化语句，在创建第一个对象时，所有的静态数据都会被初始化为零
   static int objectCount;
   Triangle()
   {
      //  每次创建对象时增加 1
      objectCount++;
   }
   int getArea()
   { 
      return (width * height)/2; 
   }
};

int Triangle::objectCount = 0;

int main(void)
{
   Triangle tri();
   Triangle tr2();
   cout<< Triangle::objectCount // 2
}




 