class Person {}

class Runner {
	running() {}
}

//JS只能继承一个父类，单继承
// class Student extends Person, Runner {
//这样直接报错
// }


//利用函数，内部继承处理再返回
function mixinRunner(BaseClass) {
	class NewClass extends BaseClass {
		running() {
			console.log("running");
		}
	}

	return NewClass;
}

class Student extends Person {}

const NewStudent = mixinRunner(Student);
const ns = new NewStudent();
ns.running();
