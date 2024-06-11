function randomizedQuickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    const pivotIndex: number = Math.floor(Math.random() * arr.length);
    const pivot: number = arr[pivotIndex];
    const less: number[] = arr.filter((val, idx) => val <= pivot && idx !== pivotIndex);
    const greater: number[] = arr.filter(val => val > pivot);

    return [...randomizedQuickSort(less), pivot, ...randomizedQuickSort(greater)];
}

// Example usage
const array = [3, 6, 8, 10, 1, 2, 3, 1];
console.log("Sorted Array:", randomizedQuickSort(array));
