//QuickSelect is a randomized algorithm for finding
//the k-th smallest (or largest) element in an unordered
 //list.It's similar to QuickSort but only recursively
 //operates on one side of the pivot.

 function quickSelect(arr : number[], k:number): number{
    if(arr.length === 1) return arr[0];


    const pivotIndex: number = Math.floor(Math.random() * arr.length);
    const pivot: number = arr[pivotIndex];
    const less: number[] = arr.filter((val, idx) => val < pivot && idx !== pivotIndex);
    const equal: number[] = arr.filter(val => val === pivot);
    const greater: number[] = arr.filter(val => val > pivot);


    if(k < less.length){
        return quickSelect(less, k);
    }else if(k < less.length + equal.length){
        return pivot;
    }else{
        return quickSelect(greater, k-less.length - equal.length);
    }
 }

 const arrayToselectFrom = [3,4,5,7,8,9,1,2];
 const kthSmallest = 3;
 console.log(`($kthSmallest-th smallest element:`, quickSelect(arrayToselectFrom, kthSmallest -1));
