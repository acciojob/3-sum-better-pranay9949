function threeSum(arr, target) {
// write your code here
	let sum=0;
	for(let i=0;i<arr.length-2;i++){
		
		for(let j=i+1;j<length-1;j++){
			for(let k=i+2;k<length;k++){
				
			   sum=arr[i]+arr[j]+arr[k];
				let final=Math.abs(target-sum);
				if(sum>final){
					sum=final;
				}
				
			}
		}
	}
	return sum;
  
}

module.exports = threeSum;
