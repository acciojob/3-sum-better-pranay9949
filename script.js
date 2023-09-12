
function threeSum(arr, target) {
// write your code here
	arr.sort((a, b) => a - b);

    let closestSum = Number.MAX_SAFE_INTEGER;
    let closestTriplet;

    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {
            const sum = arr[i] + arr[left] + arr[right];
            const diff = Math.abs(target - sum);

            if (diff < closestSum) {
                closestSum = diff;
                closestTriplet = sum;
            }

            if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return closestTriplet
}




module.exports = threeSum;
