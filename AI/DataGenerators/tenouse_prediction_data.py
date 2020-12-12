
import random
import csv

class TenouseData:
    def __init__(self):
        self.City = ['Pune', 'Mumbai', 'Bangalore', 'Hyderabad']
        self.Quarter = [1, 2, 3, 4]
        self.HouseStructure = ['Bungalow', 'Building', 'Row_House']
        self.HouseType = ['Furnished', 'Unfurnished']
        self.BHK = [1, 2, 3, 4]
        self.Price = [5000, 10000, 20000, 30000]
        self.Person = ['Student', 'Employee', 'Self_Employed', 'Tourist']
        self.Result = [0, 1]
        self.HousePriceDatasetGenerated = []
        self.TenousePremiumDatasetGenerated = []
        self.TenouseProfitDatasetGenerated = []
    
    # Generating the house price data
    def generate_house_price_data(self):
        with open('HousePrice_file.csv', mode='w') as HousePrice_file:
            HousePrice_writer = csv.writer(HousePrice_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
            HousePrice_writer.writerow(['City', 'Quarter', 'House Structure', 'House Type', 'BHK', 'Price'])
            for i in range(100):
                city_selected = random.choice(self.City)
                quarter_selected = random.choice(self.Quarter)
                housestruct_selected = random.choice(self.HouseStructure)
                housetype_selected = random.choice(self.HouseType)
                bhk_selected = random.choice(self.BHK)
                price_selected = random.choice(self.Price)
                final_selected = [city_selected, quarter_selected, housestruct_selected, housetype_selected, 
                                  bhk_selected, price_selected]
                HousePrice_writer.writerow(final_selected)
                self.HousePriceDatasetGenerated.append(final_selected)
    
    # Generating Tenouse Premium data
    def generate_tenouse_premium_data(self):
         with open('TenousePremium_file.csv', mode='w') as TenousePremium_file:
            TenousePremium_writer = csv.writer(TenousePremium_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
            TenousePremium_writer.writerow(['City', 'Quarter', 'Person', 'Bought'])
            for i in range(50):
                city_selected = random.choice(self.City)
                quarter_selected = random.choice(self.Quarter)
                person_selected = random.choice(self.Person)
                result_selected = random.choice(self.Result)
                final_selected = [city_selected, quarter_selected, person_selected, result_selected]
                TenousePremium_writer.writerow(final_selected)
                self.TenousePremiumDatasetGenerated.append(final_selected)
        
    # Generating Tenouse Profit Data
    def generate_tenouse_profit_data(self):
        with open('TenouseProfit_file.csv', mode='w') as TenouseProfit_file:
            TenouseProfit_writer = csv.writer(TenouseProfit_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
            TenouseProfit_writer.writerow(['City', 'Quarter', 'Profit'])
            for city in self.City:
                profit = 100
                for i in range(10):
                    city_selected = city
                    quarter_selected = random.choice(self.Quarter)
                    profit = profit * random.choice([2, 3, 5, 6])
                    final_selected = [city_selected, quarter_selected, profit]
                    TenouseProfit_writer.writerow(final_selected)
                    self.TenouseProfitDatasetGenerated.append(final_selected)
    
if __name__=='__main__':
    td = TenouseData()
    td.generate_house_price_data()
    td.generate_tenouse_premium_data()
    td.generate_tenouse_profit_data()

