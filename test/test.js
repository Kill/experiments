var expect = require('chai').expect;
var foo = "yolo";
var x = function(){
	return 'siski';
}

describe('Набор тестов №1 : ', function(){
	it('тест №1', function() {
		expect(foo).to.be.a('string');
	});
	it('тест №2', function() {
		expect(x()).equal('siski');
	});
	it('тест №3', function() {
		expect(x).to.be.an.instanceof(Function);
	});
});

describe('Набор тестов №2 : ', function(){
	it('тест №1', function() {
		expect(foo).to.be.a('string');
		expect('2').equal('3');
	});
	it('тест №2', function() {
		expect(x()).equal('siski');
	});
	it('тест №3', function() {
		expect(x).to.be.an.instanceof(Function);
	});
});