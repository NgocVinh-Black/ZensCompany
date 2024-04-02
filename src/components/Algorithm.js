function miniMaxSum(arr) {
  // Sắp xếp mảng để tính toán dễ dàng hơn
  arr.sort((a, b) => a - b);

  // Tính tổng của tất cả các phần tử trong mảng
  const totalSum = arr.reduce((acc, num) => acc + num, 0);

  // Tính toán tổng tối thiểu bằng cách loại trừ phần tử lớn nhất
  const minSum = totalSum - arr[arr.length - 1];

  // Tính toán tổng tối đa bằng cách loại trừ phần tử nhỏ nhất
  const maxSum = totalSum - arr[0];

  // In ra kết quả
  console.log(minSum, maxSum);
}

// Ví dụ sử dụng:
const arr = [1, 2, 3, 4, 5];
miniMaxSum(arr);
