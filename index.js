const chai=require('chai').assert

const check=require('./js')

describe('elements of array',function () {

    it('the first element is ',function () {
        let first=check([234,34,23,5,2,5,1,56])
        chai.equal(first[0],1);
    })

     it('last element of array',function () {
        let second=check([2,3,43,2,4,2,53,2,324]);
        chai.isNumber(second[check.length-1],);
     });
});