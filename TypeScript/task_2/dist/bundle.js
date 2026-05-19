/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
function isDirector(employee) {
    return employee instanceof Director;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    return employee.workTeacherTasks();
}
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQVlBO0lBQUE7SUFZQSxDQUFDO0lBWEMsK0JBQVksR0FBWjtRQUNFLE9BQU8sbUJBQW1CLENBQUM7SUFDN0IsQ0FBQztJQUVELGlDQUFjLEdBQWQ7UUFDRSxPQUFPLHdCQUF3QixDQUFDO0lBQ2xDLENBQUM7SUFFRCxvQ0FBaUIsR0FBakI7UUFDRSxPQUFPLDJCQUEyQixDQUFDO0lBQ3JDLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQztBQUVEO0lBQUE7SUFZQSxDQUFDO0lBWEMsOEJBQVksR0FBWjtRQUNFLE9BQU8sdUJBQXVCLENBQUM7SUFDakMsQ0FBQztJQUVELGdDQUFjLEdBQWQ7UUFDRSxPQUFPLHFCQUFxQixDQUFDO0lBQy9CLENBQUM7SUFFRCxrQ0FBZ0IsR0FBaEI7UUFDRSxPQUFPLGlCQUFpQixDQUFDO0lBQzNCLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQztBQUVELFNBQVMsY0FBYyxDQUFDLE1BQXVCO0lBQzdDLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE1BQU0sR0FBRyxHQUFHLEVBQUU7UUFDOUMsT0FBTyxJQUFJLE9BQU8sRUFBRSxDQUFDO0tBQ3RCO0lBRUQsT0FBTyxJQUFJLFFBQVEsRUFBRSxDQUFDO0FBQ3hCLENBQUM7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUVwQyxTQUFTLFVBQVUsQ0FBQyxRQUE0QjtJQUM1QyxPQUFPLFFBQVEsWUFBWSxRQUFRLENBQUM7QUFDeEMsQ0FBQztBQUVELFNBQVMsV0FBVyxDQUFDLFFBQTRCO0lBQzdDLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3RCLE9BQU8sUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7S0FDdkM7SUFFRCxPQUFPLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0FBQ3ZDLENBQUM7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIERpcmVjdG9ySW50ZXJmYWNlIHtcbiAgd29ya0Zyb21Ib21lKCk6IHN0cmluZztcbiAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nO1xuICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBUZWFjaGVySW50ZXJmYWNlIHtcbiAgd29ya0Zyb21Ib21lKCk6IHN0cmluZztcbiAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nO1xuICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZztcbn1cblxuY2xhc3MgRGlyZWN0b3IgaW1wbGVtZW50cyBEaXJlY3RvckludGVyZmFjZSB7XG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnV29ya2luZyBmcm9tIGhvbWUnO1xuICB9XG5cbiAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ0dldHRpbmcgYSBjb2ZmZWUgYnJlYWsnO1xuICB9XG5cbiAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ0dldHRpbmcgdG8gZGlyZWN0b3IgdGFza3MnO1xuICB9XG59XG5cbmNsYXNzIFRlYWNoZXIgaW1wbGVtZW50cyBUZWFjaGVySW50ZXJmYWNlIHtcbiAgd29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdDYW5ub3Qgd29yayBmcm9tIGhvbWUnO1xuICB9XG5cbiAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ0Nhbm5vdCBoYXZlIGEgYnJlYWsnO1xuICB9XG5cbiAgd29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmcge1xuICAgIHJldHVybiAnR2V0dGluZyB0byB3b3JrJztcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFbXBsb3llZShzYWxhcnk6IG51bWJlciB8IHN0cmluZyk6IERpcmVjdG9yIHwgVGVhY2hlciB7XG4gIGlmICh0eXBlb2Ygc2FsYXJ5ID09PSAnbnVtYmVyJyAmJiBzYWxhcnkgPCA1MDApIHtcbiAgICByZXR1cm4gbmV3IFRlYWNoZXIoKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgRGlyZWN0b3IoKTtcbn1cblxuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoMjAwKSk7XG5jb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZSgxMDAwKSk7XG5jb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZSgnJDUwMCcpKTtcblxuZnVuY3Rpb24gaXNEaXJlY3RvcihlbXBsb3llZTogRGlyZWN0b3IgfCBUZWFjaGVyKTogZW1wbG95ZWUgaXMgRGlyZWN0b3Ige1xuICAgIHJldHVybiBlbXBsb3llZSBpbnN0YW5jZW9mIERpcmVjdG9yO1xufVxuXG5mdW5jdGlvbiBleGVjdXRlV29yayhlbXBsb3llZTogRGlyZWN0b3IgfCBUZWFjaGVyKTogc3RyaW5nIHtcbiAgICBpZiAoaXNEaXJlY3RvcihlbXBsb3llZSkpIHtcbiAgICAgICAgcmV0dXJuIGVtcGxveWVlLndvcmtEaXJlY3RvclRhc2tzKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVtcGxveWVlLndvcmtUZWFjaGVyVGFza3MoKTtcbn1cblxuY29uc29sZS5sb2coZXhlY3V0ZVdvcmsoY3JlYXRlRW1wbG95ZWUoMjAwKSkpO1xuY29uc29sZS5sb2coZXhlY3V0ZVdvcmsoY3JlYXRlRW1wbG95ZWUoMTAwMCkpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==