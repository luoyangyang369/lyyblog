(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{531:function(v,_,t){"use strict";t.r(_);var a=t(6),e=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("Java 集合类、接口、抽象类介绍\n")]),v._v(" "),t("h2",{attrs:{id:"类与对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类与对象"}},[v._v("#")]),v._v(" 类与对象")]),v._v(" "),t("h3",{attrs:{id:"构造函数的概念与特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构造函数的概念与特点"}},[v._v("#")]),v._v(" 构造函数的概念与特点")]),v._v(" "),t("p",[v._v("在类的对象创建时定义初始化的状态,和类名称相同的无返回值函数")]),v._v(" "),t("blockquote",[t("p",[v._v("特点:")])]),v._v(" "),t("ul",[t("li",[v._v("对象方法不能调用构造方法")]),v._v(" "),t("li",[v._v("构造函数的函数名要与类名-样:类名(形参类型形参){}")]),v._v(" "),t("li",[v._v("构造函数在实例化的时候就会被调用，实例化一次调用一 次")]),v._v(" "),t("li",[v._v("构造函数调用必须是构造函数中的第一个语句\n注意:在构造函数中可以调用本类的其他重载构造函数,不能使用构造函数名称来调用另一个构造函\n数,而是使用hi...)来调用")]),v._v(" "),t("li",[v._v("构造函数可以被重载, 但不能重写")]),v._v(" "),t("li",[v._v("构造函数用于初始化参数")]),v._v(" "),t("li",[v._v("构造函数没有返回值,因此也没有类型,作用只是对对象进行初始化")])]),v._v(" "),t("h3",{attrs:{id:"重载的概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重载的概念"}},[v._v("#")]),v._v(" 重载的概念")]),v._v(" "),t("p",[v._v("方法的重载( overload )是指一个类中可以定义多 个方法名相同,但参数不同的方法。调用时 ,会根据不同的参数自动匹配对应的方法。")]),v._v(" "),t("blockquote",[t("p",[v._v("重载规则:")])]),v._v(" "),t("ul",[t("li",[v._v("被重载的方法必须改变参数列表(参数个数或类型不- -样) ;")]),v._v(" "),t("li",[v._v("被重载的方法可以改变返回类型;")]),v._v(" "),t("li",[v._v("被重载的方法可以改变访问修饰符;")]),v._v(" "),t("li",[v._v("被重载的方法可以声明新的或更广的检查异常;")]),v._v(" "),t("li",[v._v("方法能够在同一个类中或者在一个子类中被重载;")]),v._v(" "),t("li",[v._v("无法以返回值类型作为重载函数的区分标准;")])]),v._v(" "),t("h2",{attrs:{id:"继承"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#继承"}},[v._v("#")]),v._v(" 继承")]),v._v(" "),t("h3",{attrs:{id:"继承的概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#继承的概念"}},[v._v("#")]),v._v(" 继承的概念")]),v._v(" "),t("ul",[t("li",[v._v("通过继承可以使得子类访问父类的非私有成员变量以及成员方法(但不能选择性地继承\n父类) ,可以增加新的数据或新的功能,还可以对父类中原有的方法进行覆盖重写;这\n样可以增强代码的复用性,提高了代码的可维护性")]),v._v(" "),t("li",[v._v("java中继承只能单父类继承")]),v._v(" "),t("li",[v._v("extends 表示继承")])]),v._v(" "),t("h3",{attrs:{id:"构造函数的继承与执行顺序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构造函数的继承与执行顺序"}},[v._v("#")]),v._v(" 构造函数的继承与执行顺序")]),v._v(" "),t("ul",[t("li",[v._v("如果一个类没有任何显式创建的构造器则该类默认会有一个无参构造器;如果显式创建了有参构\n造器则该类就不再有默认无参构造器")]),v._v(" "),t("li",[v._v("在Java继承中,构造器并不能被继承,而是被显式或隐式调用。")]),v._v(" "),t("li",[v._v("子类的构造方法中必须调用其基类的构造方法(显式或隐式)")])]),v._v(" "),t("p",[v._v("1、 若在子类构造方法中没有显式调用,系统在子类构造方法开始自动隐式调用父类的无参数构造方法\nsuper()。因此若此时父类中没有无参数构造器则会编译出错")]),v._v(" "),t("p",[v._v("2、 若是显式调用,则可以通过super(argument_ list) 来调用,且super调用必须在首行以保证子类对象从\n所有直接或间接父类中继承的实例变量都被正确地初始化( this关键字可以调用本类中的其他构造器,也必\n须在首句，因此this和super没法同时用)")]),v._v(" "),t("blockquote",[t("p",[v._v("父类静态代码块--\x3e子类静态代码块--\x3e 父类构造函数--\x3e子类构造函数")])]),v._v(" "),t("h3",{attrs:{id:"子类重写父类的方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#子类重写父类的方法"}},[v._v("#")]),v._v(" 子类重写父类的方法")]),v._v(" "),t("p",[v._v("有时父类提供的方法会出现在子类中不适用的情况,此时就可以通过重写父类的方法来解决问题")]),v._v(" "),t("blockquote",[t("blockquote",[t("p",[v._v("注意事项")])])]),v._v(" "),t("ul",[t("li",[v._v("父类中的方法在子类中必须可见,即子类继承了父类中的该方法(可以显式的使用super关键字\n来访问父类中的被重写的方法) , 如果父类中的方法为private类型的,那么子类虽能继承,但\n无法覆盖")]),v._v(" "),t("li",[v._v("子类和父类的方法必须是实例方法,如果父类是static方法而子类是实例方法,或者相反都会报，\n错。如果父类和子类都是static 方法,那么子类隐藏父类的方法,而不是重写父类方法")]),v._v(" "),t("li",[v._v("子类和父类的方法必须要具有相同的函数名称、参数列表,并且子类方法的返回值与父类相同或\n者是父类返回类型的子类型")]),v._v(" "),t("li",[v._v("子类方法的访问权限应该等于或大于父类方法的访问权限(可以具有相同的访问权限或者子类的\n访问权限大于父类)。访问权限由高到低: public、protected、 包访问权限、private。 如果子\n类方法的访问权限低于父类,则编译器会给出错误信息")]),v._v(" "),t("li",[v._v("子类方法不能比父类方法抛出更多的编译时异常(不是运行时异常) ,即子类方法抛出的编译时\n异常或者和父类相同或者是父类异常的子类。当然,子类也可以不抛出异常,或者抛出\nRuntimeException异常")])]),v._v(" "),t("h2",{attrs:{id:"组合和继承"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组合和继承"}},[v._v("#")]),v._v(" 组合和继承")]),v._v(" "),t("ul",[t("li",[v._v("“组合”（Composition）")])]),v._v(" "),t("p",[v._v("已经被多次使用。你仅需要把对象的引用（object references）放置在一个新的类里，这就使用了组合。")]),v._v(" "),t("ul",[t("li",[v._v("“继承”（Inheritance）\n采用现有类形式，又无需在编码时改动其代码")])])])}),[],!1,null,null,null);_.default=e.exports}}]);