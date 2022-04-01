#include <iostream>
#include <eigen3/Eigen/Dense>

using namespace Eigen;
using namespace std;
int main()
{
	//Vector3d v(1, 0, 0);
	//Vector3d w(0, 1, 0);
	Eigen::Vector3d v;
	v(0) = 0;
	v(1) = 3;
	v(2) = 1;
	cout << "Here is the vector v:\n" << v << endl;
	Eigen::Vector3d w;
	w(0) = 1;
	w(1) = 2;
	w(2) = -1;
	cout << "Here is the vector w:\n" << w << endl;
	cout << "Dot product: " << v.dot(w) << endl;
	cout << "Cross product:\n" << v.cross(w) << endl;//向量v叉乘向量W为（-5，1，-3）
	cout << "Cross product:\n" << w.cross(v) << endl; //向量w叉乘向量v为（5，-1，3）
}
