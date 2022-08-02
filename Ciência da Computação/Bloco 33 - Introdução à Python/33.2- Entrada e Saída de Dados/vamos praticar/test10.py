import csv

with open("test10.csv") as file:
    reader = csv.DictReader(file)
    for row in reader:
        print(row)
