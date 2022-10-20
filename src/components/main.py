#2
# for i in range(1, 21):
# 	print(60/2*i)

#3
# h = 50
# for i in range(1, (6*30) + 1):
# 	h = h * (100 + (500/h)) / 100
# print(h)

#4
# p1 = int(input())
# n = int(input())
# r = 3
# p2 = p1 * (1 + (3*r) / 100)
# print(p2) 

#5
# print((10000-1000) / 1000)

#6
# n = int(input())
# for i in range(1, n + 1):
# 	if (n % i == 0) :
# 		print(i)

#7
# n = int(input())
# sum = 0;
# for i in range(1, n):
# 	if (n % i == 0) :
# 		sum += i
# if(sum == n):
# 	print("Yes")
# else:
# 	print("No")

#8
# print(10240)

#9
# ans = 0
# for i in range(3, 99 + 3, 3):
# 	ans += 2 / i
# print(ans)

#10
# sum = 0
# cnt = 0
# while True:
# 	try:
# 		x = int(input())
# 		sum += x
# 		cnt+=1
# 		if (sum >= 100):
# 			print(cnt)
# 	except: 
# 		break

#11
# h = 120
# ans = 0
# while(True):
# 	h *= 1.05
# 	ans += 1
# 	if (h >= 150):
# 		break
# print(ans)

#12
# for i in range(10, 100):
# 	x = int(i / 10)
# 	y = i % 10
# 	#print(x, y)
# 	if ((x*x + y*y) % 13 == 0):
# 		print(i)

#13
# ans=""
# for i in range(1, 10) :
# 	for j in range(i):
# 		ans += str(i)
# print(ans)

#14
# input_string = input("Students heights: ")
# list = input_string.split()
# #print(list)
# sum = 0
# for i in list:
# 	sum += int(i)
# print(sum / len(list))

#15
# x = 1000
# while True:
# 	print(x)
# 	x -= 1
