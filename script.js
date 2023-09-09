
function threeSum(arr, target) {
// write your code here
	let result=Number.MAX_SAFE_INTEGER;
	let final_sum;
	for(let i=0;i<arr.length-2;i++){
		
		for(let j=i+1;j<arr.length-1;j++){
			for(let k=i+2;k<arr.length;k++){
				
			   let sum=arr[i]+arr[j]+arr[k];
				let final=Math.abs(target-sum);
				if(result>final){
					result=final;
					final_sum=sum;
				
			}
		}
	}
	return final_sum;
  
}




module.exports = threeSum;
