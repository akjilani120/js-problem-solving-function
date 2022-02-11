function add(table , chair, bed){
    let tableWood=3;
    let chairWood=10;
    let bedWood=60;
    const tableQuentity=tableWood*table;
    const chairQuentity=chairWood*chair;
    const bedQuentity= bedWood *bed;
    const total=tableQuentity+chairQuentity+ bedQuentity;
    return total;
}
console.log(add(4, 10, 2))